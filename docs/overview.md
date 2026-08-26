---
title: Overview
---

# Overview

The reference implementation is an open-source, pre-assembled implementation of the Direct specifications — the standards behind Direct Secure Messaging, a secure, email-like way for healthcare organizations to exchange health information — available for both .NET and Java. A subproject called BareMetal packages everything you need to stand up a Health Information Service Provider (HISP) from scratch, using only the reference implementation's prebuilt components.

The reference implementation is a fully working model, but it's still just a model. Think of it like a reference board in embedded hardware or robotics: a cookie-cutter design with a standard set of modules, inputs, and outputs. It isn't meant to be the final product. Instead, you tweak it, extend it with custom modules, or trim it down until it becomes a customized board that fits your solution.

The same is true for Direct. The reference implementation ships with a standard deployment model and a set of software components — the Security and Trust Agent, the Gateway, a certificate store, and a simple web or command-line configuration tool. However, it doesn't meet the requirements of an industry-class production system: high availability, failover, scalability, and disaster recovery. It also supports only two "edge protocols" — XDR and POP/SMTP — the protocols a HISP uses to connect with the applications and systems around it, as opposed to the protocol HISPs use to exchange messages directly with one another. Other edge clients and workflows may need additional protocols, such as REST or SOAP, along with custom authentication and authorization modules.

The reference implementation also doesn't meet the policy requirements set by various governance agencies. For example, its private certificate store doesn't meet auditing requirements for access to private keys, and its audit subsystem doesn't write events to a storage mechanism with proper access controls. These areas are intentionally left as minimal placeholder implementations — a practice known as "stubbing out" — so you can plug in your own, compliant implementations of the reference interfaces and modules. Becoming a fully compliant HISP — meeting industry best practices, certificate policies, and required operational procedures — takes additional investment in infrastructure and software development.

Ready to stand up an instance or explore the individual components? Head over to [Getting Started](/getting-started).
