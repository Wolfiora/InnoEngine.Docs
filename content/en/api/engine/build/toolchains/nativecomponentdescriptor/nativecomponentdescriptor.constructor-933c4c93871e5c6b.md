---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.933c4c93871e5c6b5a28ccfa5925ecc8c4c01d1d28c4107d2127d3d2a0c46095
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeComponentDescriptor.#ctor(System.String,System.String,System.String,Inno.Build.Toolchains.NativeStaticBuildDefinition,System.String)
title: NativeComponentDescriptor.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: ff3ea44dc798404106834f0fdb526d98a6dacdf7d40a9420916ea5698a7499bd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The portable component artifact identity.

**Parameter `nativeProject`:** The checkout-relative native project file.

**Parameter `toolchainProject`:** The checkout-relative build implementation project file.

**Parameter `staticBuild`:** The backend-owned static recipe, or null when this component has none.

**Parameter `bindingDefinition`:** The portable binding definition, or null when the component generates no bindings.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity or path is empty, absolute, or escapes its checkout.
