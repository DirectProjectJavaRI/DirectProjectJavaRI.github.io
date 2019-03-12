---
title: The DirectProject
---

<p align="center">
  <img src="/assets/logo.png">
</p>

## Overview
The reference implementation is an open source and pre-assembled implementation of the Direct specifications. An implementation exists in both the .Net and Java languages and can be downloaded freely from a handful of websites. A subproject of Direct, called Bare Metal, contains a set of instructions on procuring the reference implementation and standing up a reference HISP from scratch using only the reference implementation assemblies.

The reference implementation is a fully working model with all sorts of bells and whistles, but it's just a model. If you’ve ever delved into the world of embedded hardware or robotics, the starting point is usually a reference board. The board is a cookie cutter model with several modules, inputs, outputs, and maybe an operating system or programmable circuits. However, the reference board is not intended to be the final design that ultimately goes into your finished solution. It is tweaked and extended with custom modules, or some modules may be removed. The end product is a customized board that meets the specific needs of your solution.

The same is true for Direct. The reference implementation comes with a standard deployment model and software components such as the security and trust agent, the messaging gateway, a certificate store and a simple web or command line tool for configuration. However, the model does not meet the requirements of an industry-class production system, such as high availability, failover, scalability and disaster recovery. The only edge protocol supported is XD and POP/SMTP, and although this may work well for email clients, innovative edge clients and workflows may need other protocols such as REST, SOAP, and custom authentication and authorization modules.

Finally, the reference implementation does not meet the policy requirements emerging from the various governance agencies. For example, the private certificate store in the reference implementation does not meet auditing requirements for access to private keys. Another example, the auditing subsystem does not write audit events to a storage mechanism with proper access controls. The reference implementation is stubbed to meet these requirements and supports plugging in custom instances of reference implementation interfaces and/or modules. For a HISP to become fully compliant with industry best practices, certificate policies and required operational procedures, investment in infrastructure and some software development is necessary.

## Where To Start
If you want to jump right in with both feet and stand up an instance of the reference implementation, the obvious choice is to go to the BareMetal installation page for the Java platform.

If you want to understand the details of the reference implementation componenst and they how fit together, refer to the list of modules in the section below.

If you would like build all components including the BareMetal assembly from source code vs using a prebuilt BareMetal assembly, use the instuctions [here](https://github.com/DirectProjectJavaRI/direct-ri-build)

## Modular Components
The reference implementation adopts a modular design for easy asset reuse and extensibility. Components are available in both .Net and Java.

### Java Components
* [Commons Library](http://api.directproject.info/direct-common/6.0/)
* [Security And Trust Agent](https://directprojectjavari.github.io/agent/)
* Gateway
* [Message Monitoring](https://directprojectjavari.github.io/direct-msg-monitor/)
* [Policy Enablement](https://directprojectjavari.github.io/direct-policy/)
* [DNS Services](https://directprojectjavari.github.io/dns/)
* BareMetal Assembly Project
* BareMetal GUI Based Installer
