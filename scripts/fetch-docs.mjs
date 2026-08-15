#!/usr/bin/env node
// Pulls each component repo's own `docs/` folder into docs/<slug>/ here, so the
// VitePress build sees one merged content tree even though the Markdown itself
// lives and is reviewed inside each component's own repo. Run before `docs:dev`
// and `docs:build` (wired up as predocs:dev / predocs:build in package.json).
//
// scripts/components.local.json (gitignored) may override a component's `repo`
// with a local filesystem path for development before it's pushed to GitHub —
// `git clone` accepts local paths directly. An override may be a bare string
// (just swap the source) or { repo, branch } to also test an unmerged branch.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, cpSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))
const docsDir = join(rootDir, 'docs')

const components = JSON.parse(readFileSync(join(rootDir, 'scripts/components.json'), 'utf8'))

const localOverridesPath = join(rootDir, 'scripts/components.local.json')
const localOverrides = existsSync(localOverridesPath)
  ? JSON.parse(readFileSync(localOverridesPath, 'utf8'))
  : {}

for (const component of components) {
  const { slug } = component
  const override = localOverrides[slug]
  const source = (typeof override === 'string' ? override : override?.repo) ?? component.repo
  const branch = (typeof override === 'object' ? override?.branch : undefined) ?? component.branch
  const dest = join(docsDir, slug)
  const scratch = mkdtempSync(join(tmpdir(), `docs-fetch-${slug}-`))

  console.log(`[fetch-docs] ${slug}: cloning ${source} (${branch})`)
  execFileSync('git', ['clone', '--depth', '1', '--branch', branch, source, scratch], {
    stdio: 'inherit',
  })

  const sourceDocsDir = join(scratch, 'docs')
  if (!existsSync(sourceDocsDir)) {
    throw new Error(`[fetch-docs] ${slug}: no docs/ folder found in ${source}@${branch}`)
  }

  rmSync(dest, { recursive: true, force: true })
  cpSync(sourceDocsDir, dest, { recursive: true })
  rmSync(scratch, { recursive: true, force: true })

  console.log(`[fetch-docs] ${slug}: synced into docs/${slug}/`)
}
