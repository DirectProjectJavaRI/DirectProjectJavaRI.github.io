---
title: Overview
---

# Overview

The reference implementation is an open source, pre-assembled implementation of the Direct specifications, available in both .Net and Java. A subproject called BareMetal provides everything needed to procure the reference implementation and stand up a HISP from scratch using only the reference implementation's assemblies.

The reference implementation is a fully working model, but it's still just a model. Think of it like a reference board in embedded hardware or robotics: a cookie-cutter design with a standard set of modules, inputs, and outputs. It isn't meant to be the final product — it's tweaked, extended with custom modules, or trimmed down until it becomes a customized board that fits your solution.

The same is true for Direct. The reference implementation ships with a standard deployment model and a set of software components — the security and trust agent, the messaging gateway, a certificate store, and a simple web or command-line configuration tool. It does not, however, meet the requirements of an industry-class production system: high availability, failover, scalability, and disaster recovery. It also supports only the XDR and POP/SMTP edge protocols; other edge clients and workflows may need additional protocols such as REST or SOAP, along with custom authentication and authorization modules.

Nor does the reference implementation meet the policy requirements set by various governance agencies. For example, its private certificate store doesn't meet auditing requirements for access to private keys, and its audit subsystem doesn't write events to a storage mechanism with proper access controls. These areas are intentionally stubbed out so you can plug in custom implementations of the reference interfaces and modules to meet them. Becoming a fully compliant HISP — meeting industry best practices, certificate policies, and required operational procedures — takes additional investment in infrastructure and software development.

Ready to stand up an instance or explore the individual components? Head over to [Getting Started](/getting-started).
