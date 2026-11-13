---
uid: api.e042bb3d1f917bcf4cc2f8180997a1dc8ea8cbde1f5505ac571af40586bfa100
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildHostDescriptor.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostServices)"
source: xml
reviewed: bd2dcb01fa27013d19ded1e8879e3f175219b19d41c4d504fa5cf0cc42c07bf9
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures host facts supplied by a product or command composition boundary.

**Parameter `system`:** The execution operating system identity.

**Parameter `architecture`:** The execution processor architecture.

**Parameter `services`:** Explicit host execution services, or null for direct physical execution.

**Exception `T:System.ArgumentException`:** A host fact is unassigned.
