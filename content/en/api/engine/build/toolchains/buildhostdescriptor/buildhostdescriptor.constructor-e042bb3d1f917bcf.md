---
uid: api.e042bb3d1f917bcf4cc2f8180997a1dc8ea8cbde1f5505ac571af40586bfa100
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildHostDescriptor.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostServices)"
source: xml
reviewed: e54dc1cf0995d3e67551844bd28a143408cb24f17620bcfbcdc2dbfb693df82e
title: "BuildHostDescriptor.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures host facts supplied by a product or command composition boundary.

## Parameters

**Parameter `system`:** The execution operating system identity.

**Parameter `architecture`:** The execution processor architecture.

**Parameter `services`:** Explicit host execution services, or null for direct physical execution.

## Exceptions

**Exception `T:System.ArgumentException`:** A host fact is unassigned.
