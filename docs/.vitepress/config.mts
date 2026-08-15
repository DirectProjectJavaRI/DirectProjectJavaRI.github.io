import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DirectProject Java Reference Implementation',
  description: 'Documentation for the DirectProject Java Reference Implementation',
  base: '/',
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,

    nav: [{ text: 'Overview', link: '/overview' }],

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
      },
      {
        text: 'Gateway',
        link: '/gateway/',
        collapsed: true,
        items: [
          {
            text: 'Development Guide',
            link: '/gateway/dev-guide',
            collapsed: true,
            items: [
              { text: 'Protocol Bridge Architecture', link: '/gateway/bridge-arch' },
              { text: 'Writing A Protocol Bridge', link: '/gateway/write-a-bridge' }
            ]
          },
          {
            text: 'Deployment Guide',
            link: '/gateway/dep-guide',
            collapsed: true,
            items: [
              { text: 'SMTP Agent WebService Configuration', link: '/gateway/smtp-web-configuration' },
              { text: 'Fined Grained Tuning', link: '/gateway/tuning' },
              {
                text: 'SMTP Protocol Implementation Deployment',
                link: '/gateway/smtp-deployments',
                collapsed: true,
                items: [
                  { text: 'Apache James Deployment', link: '/gateway/apache-james' },
                  { text: 'SpringBoot Deployement', link: '/gateway/spring-boot' },
                  { text: 'DNS Failure Generation Config', link: '/gateway/dsn-config' }
                ]
              },
              { text: 'PKCS11 Configuration', link: '/gateway/pkcs11-configuration' }
            ]
          }
        ]
      },
      {
        text: 'Message Monitoring',
        link: '/direct-msg-monitor/',
        collapsed: true,
        items: [
          { text: 'Monitoring Overview', link: '/direct-msg-monitor/overview' },
          {
            text: 'Developers Guide',
            link: '/direct-msg-monitor/dev-guide',
            collapsed: true,
            items: [
              { text: 'Message Monitor Architecture', link: '/direct-msg-monitor/mon-arch' },
              { text: 'Correlation Component', link: '/direct-msg-monitor/mon-correlator' },
              { text: 'Aggregator Component', link: '/direct-msg-monitor/aggregator' },
              { text: 'Completion and Timeout Condition Components', link: '/direct-msg-monitor/comp-and-timeout' },
              { text: 'Message Failure Generation', link: '/direct-msg-monitor/failure-gen' },
              { text: 'Notification Duplication Checking', link: '/direct-msg-monitor/dup-checking' },
              { text: 'Extending and Writing Custom Components', link: '/direct-msg-monitor/custom-components' }
            ]
          },
          {
            text: 'Deployment Guide',
            link: '/direct-msg-monitor/dep-guide',
            collapsed: true,
            items: [
              { text: 'Deployment and Configuration', link: '/direct-msg-monitor/dep-and-config' },
              { text: 'Deployment Considerations', link: '/direct-msg-monitor/dep-considerations' }
            ]
          }
        ]
      },
      {
        text: 'Policy Enablement',
        link: '/direct-policy/',
        collapsed: true,
        items: [
          {
            text: 'Architecture Guide',
            link: '/direct-policy/arch-guide',
            collapsed: true,
            items: [
              { text: 'Policy Engine Architecture', link: '/direct-policy/eng-arch' },
              { text: 'Security and Trust (STA) Integration and Configuration', link: '/direct-policy/sta-int' }
            ]
          },
          {
            text: 'Tools',
            link: '/direct-policy/tools',
            collapsed: true,
            items: [
              { text: 'Simple Text Lexicon Version I', link: '/direct-policy/stext-lexicon' },
              { text: 'Policy Builder', link: '/direct-policy/pol-builder' },
              { text: 'Example Policies', link: '/direct-policy/examples' }
            ]
          }
        ]
      },
      {
        text: 'DNS Services',
        link: '/dns/',
        collapsed: true,
        items: [
          { text: 'DNS Service Deployment', link: '/dns/dep-guide' },
          { text: 'DNS Record Configuration', link: '/dns/dns-rec-config' },
          { text: 'Integration With GoDaddy', link: '/dns/godaddy' }
        ]
      },
      {
        text: 'BareMetal Assembly Project',
        link: '/direct-project-stock/',
        collapsed: true,
        items: [
          {
            text: 'Deployment Guide',
            link: '/direct-project-stock/dep-guide',
            collapsed: true,
            items: [
              {
                text: 'HISP Only Deployment (no source)',
                link: '/direct-project-stock/dep-hisp-only',
                collapsed: true,
                items: [
                  { text: 'Legacy HISP Deployment Model', link: '/direct-project-stock/legacy-deployment' },
                  { text: 'Cloud Native HISP Deployment Model', link: '/direct-project-stock/cloud-native-deployment' }
                ]
              }
            ]
          },
          {
            text: 'Deployment Options',
            link: '/direct-project-stock/imp-options',
            collapsed: true,
            items: [
              { text: 'Configuration and Message Monitor Storage', link: '/direct-project-stock/config-store' },
              { text: 'Single Use Certificates', link: '/direct-project-stock/single-use-certs' },
              { text: 'Enhanced Private Key Security', link: '/direct-project-stock/enhanced-key-security' }
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
