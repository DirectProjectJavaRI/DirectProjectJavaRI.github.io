# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The org's root [VitePress](https://vitepress.dev) GitHub Pages site for the DirectProject Java Reference Implementation, published at `https://directprojectjavari.github.io/`. Because the repo name matches the org name exactly (`DirectProjectJavaRI/DirectProjectJavaRI.github.io`), it's the special GitHub "user/org site" — it serves at the domain root, not a `/reponame/` subpath, so `base: '/'` in the VitePress config.

This is a **hub-and-spoke aggregator**, not a self-contained docs repo. The actual Markdown content for each component (agent, gateway, etc.) lives and is reviewed in that component's *own* GitHub repo, on a dedicated `gh-pages` branch — not here, and not on those repos' `master`/`main` branches. This repo only holds the landing page (`docs/index.md`, `docs/overview.md`), the VitePress config/theme, and a build-time script that pulls each component's docs in and merges them into one site. There is no application code here.

## Commands

```bash
npm install        # one-time setup
npm run docs:dev      # local dev server with hot reload — http://localhost:5173/
npm run docs:build    # production build to docs/.vitepress/dist (same as CI)
npm run docs:preview  # serve the built dist/ output locally
```

`docs:dev` and `docs:build` both have a `pre` script (`predocs:dev` / `predocs:build`) that runs `node scripts/fetch-docs.mjs` first — component content is never committed here, so it has to be fetched before every dev session and every build. There is no lint or test suite; `npm run docs:build` is the validation step (fails on broken Markdown/config and on dead internal links).

### Testing against an unpushed component branch

`scripts/fetch-docs.mjs` normally clones each component from its real GitHub URL/branch (per `scripts/components.json`). To preview changes on a component branch that hasn't been pushed yet, create `scripts/components.local.json` (gitignored) overriding one or more entries:

```json
{ "agent": { "repo": "/absolute/path/to/local/clone", "branch": "some-branch" } }
```

`git clone` accepts local filesystem paths directly, so this works without a network round-trip.

## Architecture

- `docs/index.md` — hero landing page (hand-built lookalike of VitePress's `layout: home`, since a real `home` layout page doesn't show the sidebar).
- `docs/overview.md` — the actual "what is this project" content, linked from the hero.
- `docs/.vitepress/config.mts` — title, `base: '/'`, nav, and the **hand-maintained sidebar** covering every page across all six components. There is no way to auto-generate this from the component repos' content, so **adding a page in a component repo also requires a sidebar entry here, in a separate PR to this repo.**
- `docs/.vitepress/theme/` — thin extension of the default VitePress theme; `custom.css` carries the site's blue/teal palette (`#155799` / `#159957`, taken from the old `jekyll-theme-cayman` header gradient this site replaced) and the hand-built home-hero CSS.
- `scripts/components.json` — the list of components: `{ slug, repo, branch }`. `branch` is that component's `gh-pages` branch, not `master`.
- `scripts/fetch-docs.mjs` — for each entry, shallow-clones `repo@branch` and copies its `docs/` folder into `docs/<slug>/` here (deleting any stale copy first). Runs identically in CI and locally.
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages via Actions on push to `master`, on `repository_dispatch` (event type `docs-updated`, fired by a component repo when its docs change — see below), or manually via `workflow_dispatch`.

### The `/docs/<slug>/` URL prefix

Component sections are mounted at `/docs/agent/`, `/docs/gateway/`, etc. — **not** at the more obvious `/agent/`, `/gateway/`. This is a deliberate workaround, done via the `rewrites` block in `config.mts` (physical files still live at `docs/<slug>/` on disk; only the output route is remapped): every component repo (agent, gateway, direct-msg-monitor, direct-policy, dns, direct-project-stock) has **its own independent GitHub Pages site** already registered at `directprojectjavari.github.io/<reponame>/`, left over from before this repo existed. That registration can't be removed for this org — neither `DELETE /repos/{owner}/{repo}/pages` nor the Settings UI's "Unpublish site" button actually frees the path — so it permanently shadows anything this site tries to serve at the bare `/<reponame>/` path, regardless of what gets built here. If a new component is ever added, mount it under `/docs/<new-slug>/` for the same reason, unless the shadowing repo's Pages site is somehow retired first.

### Cross-repo doc update flow

1. Someone edits `docs/*.md` on a component repo's `gh-pages` branch and merges.
2. That repo's `.github/workflows/notify-docs-hub.yml` (in each of the six component repos, not here) fires a `repository_dispatch` to this repo, authenticated via a `DOCS_DISPATCH_TOKEN` secret set in that component repo (a classic PAT with `repo` scope — cross-repo `repository_dispatch` can't use the default `GITHUB_TOKEN`).
3. This repo's `deploy.yml` catches the dispatch, re-runs `fetch-docs.mjs` (pulling the fresh content), rebuilds, and redeploys.

Adding a **new** component to the hub means: give that repo a `docs/` folder on a dedicated branch (convention: reuse/repurpose its `gh-pages` branch), add its own `notify-docs-hub.yml` + `DOCS_DISPATCH_TOKEN` secret, then in this repo add an entry to `scripts/components.json`, a `rewrites` pair and sidebar section in `config.mts` (using the `/docs/<slug>/` prefix), and a `.gitignore` line for `docs/<slug>/`.

### Content gotchas inherited from the Jekyll → VitePress migration

Each component's docs were converted from a flat, un-frontmattered Jekyll site to VitePress-flavored Markdown. VitePress's Markdown pipeline runs through Vue's template compiler, which is much stricter than Jekyll was about a few patterns that show up in this content — worth checking for if migrating another component or seeing a mysterious "Element is missing end tag" build failure:

- A bare `<placeholder>`-style token in prose or a table cell (not inside a code fence) is parsed as an unclosed HTML tag. Wrap it in a code span: `` `<placeholder>` ``.
- Two inline code spans butted directly against each other with no whitespace between (e.g. `` `<a>`\`<b>` ``) confuses the parser even though each span alone is fine. Merge into one span instead.
- `http://` immediately followed by a backtick (e.g. `` http://`<server>` ``) triggers markdown-it's linkify *before* the code span is parsed, with the same failure mode. Put the whole URL inside one code span.
- Bare `http://localhost...` URLs (not in a code span) get auto-linked and then flagged as dead links by VitePress's build-time link checker, since `localhost` isn't externally resolvable. Wrap in a code span.
- Image filenames must be lowercase extensions (`.png`, not `.PNG`) — Vite's default asset handling doesn't recognize uppercase ones and fails the build.
