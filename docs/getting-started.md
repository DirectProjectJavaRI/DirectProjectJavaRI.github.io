---
title: Getting Started
---

# Getting Started

If you want to stand up an instance of the reference implementation right away, the fastest path is the Java platform's [BareMetal Assembly Project](/docs/direct-project-stock/). It provides instructions for installing the components and services using configuration presets, so you can deploy quickly without configuring everything by hand.

To build all components and services from source instead of using a prebuilt package, follow the [build instructions in the direct-ri-build repository](https://github.com/DirectProjectJavaRI/direct-ri-build).

## Understanding the Modular Components

The reference implementation follows a modular design, so its components can be reused, replaced, or extended independently rather than treated as one monolithic system. If you'd rather understand how the pieces fit together before diving in, start with the module list below:

### Java Components

* [Security And Trust Agent](/docs/agent/) — resolves certificates and enforces trust between Direct-compliant systems
* [Gateway](/docs/gateway/) — bridges Direct messages between edge protocols (such as SMTP/POP or XDR) and the systems that send and receive them
* [Message Monitoring](/docs/direct-msg-monitor/) — tracks message delivery and correlates delivery and failure notifications for auditing and troubleshooting
* [Policy Enablement](/docs/direct-policy/) — a policy engine that works alongside the Security And Trust Agent to enforce security and trust policies
* [DNS Services](/docs/dns/) — manages the DNS records used to discover certificates and endpoints for Direct exchange
* [BareMetal Assembly Project](/docs/direct-project-stock/) — packages the components above into a deployable stack, using configuration presets for common deployment scenarios
