import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DirectProject Java Reference Implementation',
  description: 'Documentation for the DirectProject Java Reference Implementation',
  base: '/',
  cleanUrls: true,

  // Each component repo's own GitHub Pages site (e.g. directprojectjavari.github.io/agent/)
  // can't be fully disabled via this org's GitHub settings, so it permanently shadows that
  // exact path at the root domain. Mount component docs under /docs/<slug>/ instead to avoid
  // the collision — fetch-docs.mjs still writes them to docs/<slug>/ on disk, this just remaps
  // the output route.
  rewrites: {
    'agent/:page': 'docs/agent/:page',
    'gateway/:page': 'docs/gateway/:page',
    'direct-msg-monitor/:page': 'docs/direct-msg-monitor/:page',
    'direct-policy/:page': 'docs/direct-policy/:page',
    'dns/:page': 'docs/dns/:page',
    'direct-project-stock/:page': 'docs/direct-project-stock/:page'
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,

    nav: [
      { text: 'Overview', link: '/overview' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    // Hand-maintained: adding a page in a component repo's docs/ folder also
    // requires a sidebar entry here in the hub repo — the two live in
    // different repos, so this coupling can't be enforced automatically.
    sidebar: [
      { text: 'Overview', link: '/overview' },
      { text: 'Getting Started', link: '/getting-started' },
      {
        text: 'BareMetal Assembly Project',
        link: '/docs/direct-project-stock/',
        collapsed: true,
        items: [
          {
            text: 'Deployment Guide',
            link: '/docs/direct-project-stock/dep-guide',
            collapsed: true,
            items: [
              {
                text: 'HISP Only Deployment (no source)',
                link: '/docs/direct-project-stock/dep-hisp-only',
                collapsed: true,
                items: [
                  { text: 'Legacy HISP Deployment Model', link: '/docs/direct-project-stock/legacy-deployment' },
                  {
                    text: 'Cloud Native HISP Deployment Model',
                    link: '/docs/direct-project-stock/cloud-native-deployment',
                    collapsed: true,
                    items: [
                      { text: 'Machine Deployment (Fat Jars)', link: '/docs/direct-project-stock/cloud-native-machine-deployment' },
                      {
                        text: 'Kubernetes Deployment',
                        link: '/docs/direct-project-stock/cloud-native-kubernetes-deployment',
                        collapsed: true,
                        items: [
                          { text: 'Production: RabbitMQ', link: '/docs/direct-project-stock/cloud-native-kubernetes-rabbitmq' },
                          { text: 'Production: Secrets Management', link: '/docs/direct-project-stock/cloud-native-kubernetes-secrets' },
                          { text: 'Production: Database', link: '/docs/direct-project-stock/cloud-native-kubernetes-database' },
                          { text: 'Production: Ingress', link: '/docs/direct-project-stock/cloud-native-kubernetes-ingress' }
                        ]
                      },
                      { text: 'Modify Service Default Configuration', link: '/docs/direct-project-stock/service-configuration' },
                      { text: 'Configuration Manager Tool', link: '/docs/direct-project-stock/configuration-manager' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Deployment Options',
            link: '/docs/direct-project-stock/imp-options',
            collapsed: true,
            items: [
              { text: 'Configuration and Message Monitor Storage', link: '/docs/direct-project-stock/config-store' },
              { text: 'Single Use Certificates', link: '/docs/direct-project-stock/single-use-certs' },
              { text: 'Enhanced Private Key Security', link: '/docs/direct-project-stock/enhanced-key-security' }
            ]
          }
        ]
      },
      {
        text: 'Security And Trust Agent',
        link: '/docs/agent/',
        collapsed: true,
        items: [
          {
            text: 'Development Guide',
            link: '/docs/agent/dev-guide',
            collapsed: true,
            items: [
              { text: 'Agent Architecture', link: '/docs/agent/agent-architecture' },
              { text: 'NHINDAgent Component', link: '/docs/agent/nhind-agent' },
              { text: 'Cryptographer Component', link: '/docs/agent/cryptographer' },
              { text: 'Certificate Resolvers', link: '/docs/agent/cert-resolver' },
              { text: 'Trust', link: '/docs/agent/trust' },
              { text: 'Mail Library', link: '/docs/agent/mail-lib' }
            ]
          },
          {
            text: 'Tools',
            link: '/docs/agent/tools',
            collapsed: true,
            items: [
              { text: 'Certificate Generation', link: '/docs/agent/cert-gen' },
              { text: 'DNS Certificate Dumper', link: '/docs/agent/dns-dumper' },
              { text: 'LDAP Certificate Dumper', link: '/docs/agent/ldap-dumper' }
            ]
          }
        ]
      },
      {
        text: 'Gateway',
        link: '/docs/gateway/',
        collapsed: true,
        items: [
          {
            text: 'Development Guide',
            link: '/docs/gateway/dev-guide',
            collapsed: true,
            items: [
              { text: 'Protocol Bridge Architecture', link: '/docs/gateway/bridge-arch' },
              { text: 'Writing A Protocol Bridge', link: '/docs/gateway/write-a-bridge' }
            ]
          },
          {
            text: 'Deployment Guide',
            link: '/docs/gateway/dep-guide',
            collapsed: true,
            items: [
              { text: 'SMTP Agent WebService Configuration', link: '/docs/gateway/smtp-web-configuration' },
              { text: 'Fined Grained Tuning', link: '/docs/gateway/tuning' },
              {
                text: 'SMTP Protocol Implementation Deployment',
                link: '/docs/gateway/smtp-deployments',
                collapsed: true,
                items: [
                  { text: 'Apache James Deployment', link: '/docs/gateway/apache-james' },
                  { text: 'SpringBoot Deployement', link: '/docs/gateway/spring-boot' },
                  { text: 'DNS Failure Generation Config', link: '/docs/gateway/dsn-config' }
                ]
              },
              { text: 'PKCS11 Configuration', link: '/docs/gateway/pkcs11-configuration' }
            ]
          }
        ]
      },
      {
        text: 'Message Monitoring',
        link: '/docs/direct-msg-monitor/',
        collapsed: true,
        items: [
          { text: 'Monitoring Overview', link: '/docs/direct-msg-monitor/overview' },
          {
            text: 'Developers Guide',
            link: '/docs/direct-msg-monitor/dev-guide',
            collapsed: true,
            items: [
              { text: 'Message Monitor Architecture', link: '/docs/direct-msg-monitor/mon-arch' },
              { text: 'Correlation Component', link: '/docs/direct-msg-monitor/mon-correlator' },
              { text: 'Aggregator Component', link: '/docs/direct-msg-monitor/aggregator' },
              { text: 'Completion and Timeout Condition Components', link: '/docs/direct-msg-monitor/comp-and-timeout' },
              { text: 'Message Failure Generation', link: '/docs/direct-msg-monitor/failure-gen' },
              { text: 'Notification Duplication Checking', link: '/docs/direct-msg-monitor/dup-checking' },
              { text: 'Extending and Writing Custom Components', link: '/docs/direct-msg-monitor/custom-components' }
            ]
          },
          {
            text: 'Deployment Guide',
            link: '/docs/direct-msg-monitor/dep-guide',
            collapsed: true,
            items: [
              { text: 'Deployment and Configuration', link: '/docs/direct-msg-monitor/dep-and-config' },
              { text: 'Deployment Considerations', link: '/docs/direct-msg-monitor/dep-considerations' }
            ]
          }
        ]
      },
      {
        text: 'Policy Enablement',
        link: '/docs/direct-policy/',
        collapsed: true,
        items: [
          {
            text: 'Architecture Guide',
            link: '/docs/direct-policy/arch-guide',
            collapsed: true,
            items: [
              { text: 'Policy Engine Architecture', link: '/docs/direct-policy/eng-arch' },
              { text: 'Security and Trust (STA) Integration and Configuration', link: '/docs/direct-policy/sta-int' }
            ]
          },
          {
            text: 'Tools',
            link: '/docs/direct-policy/tools',
            collapsed: true,
            items: [
              { text: 'Simple Text Lexicon Version I', link: '/docs/direct-policy/stext-lexicon' },
              { text: 'Policy Builder', link: '/docs/direct-policy/pol-builder' },
              { text: 'Example Policies', link: '/docs/direct-policy/examples' }
            ]
          }
        ]
      },
      {
        text: 'DNS Services',
        link: '/docs/dns/',
        collapsed: true,
        items: [
          { text: 'DNS Service Deployment', link: '/docs/dns/dep-guide' },
          { text: 'DNS Record Configuration', link: '/docs/dns/dns-rec-config' },
          { text: 'Integration With GoDaddy', link: '/docs/dns/godaddy' }
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
