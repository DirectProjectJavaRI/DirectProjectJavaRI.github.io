import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DirectProject Java Reference Implementation',
  description: 'Documentation for the DirectProject Java Reference Implementation',
  base: '/',
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,

    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Security And Trust Agent', link: '/agent/' }
    ],

    // Hand-maintained: adding a page in a component repo's docs/ folder also
    // requires a sidebar entry here in the hub repo — the two live in
    // different repos, so this coupling can't be enforced automatically.
    sidebar: [
      { text: 'Overview', link: '/overview' },
      {
        text: 'Security And Trust Agent',
        link: '/agent/',
        collapsed: true,
        items: [
          {
            text: 'Development Guide',
            link: '/agent/dev-guide',
            collapsed: true,
            items: [
              { text: 'Agent Architecture', link: '/agent/agent-architecture' },
              { text: 'NHINDAgent Component', link: '/agent/nhind-agent' },
              { text: 'Cryptographer Component', link: '/agent/cryptographer' },
              { text: 'Certificate Resolvers', link: '/agent/cert-resolver' },
              { text: 'Trust', link: '/agent/trust' },
              { text: 'Mail Library', link: '/agent/mail-lib' }
            ]
          },
          {
            text: 'Tools',
            link: '/agent/tools',
            collapsed: true,
            items: [
              { text: 'Certificate Generation', link: '/agent/cert-gen' },
              { text: 'DNS Certificate Dumper', link: '/agent/dns-dumper' },
              { text: 'LDAP Certificate Dumper', link: '/agent/ldap-dumper' }
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  }
})
