---
title: Getting Started
---

# Getting Started

If you want to stand up an instance of the reference implementation right away, the fastest path is the [BareMetal Assembly Project](/docs/direct-project-stock/) for the Java platform. It bundles the reference implementation's components into a ready-to-deploy stack, so you don't need to build or wire the pieces together yourself.

To build all components, including the BareMetal assembly, from source instead of using a prebuilt package, follow the instructions [here](https://github.com/DirectProjectJavaRI/direct-ri-build).

## Understanding the Modular Components

If you'd rather understand how the reference implementation's components fit together before diving in, start with the module list below. The reference implementation follows a modular design for easy reuse and extensibility, with components available in both .Net and Java.

### Java Components

* [Commons Library](http://api.directproject.info/direct-common/6.0/)
* [Security And Trust Agent](/docs/agent/)
* [Gateway](/docs/gateway/)
* [Message Monitoring](/docs/direct-msg-monitor/)
* [Policy Enablement](/docs/direct-policy/)
* [DNS Services](/docs/dns/)
* [BareMetal Assembly Project](/docs/direct-project-stock/)
