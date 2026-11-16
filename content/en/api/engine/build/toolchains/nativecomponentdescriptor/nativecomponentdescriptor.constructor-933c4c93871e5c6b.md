---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.933c4c93871e5c6b5a28ccfa5925ecc8c4c01d1d28c4107d2127d3d2a0c46095
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeComponentDescriptor.#ctor(System.String,System.String,System.String,Inno.Build.Toolchains.NativeStaticBuildDefinition,System.String)
title: NativeComponentDescriptor.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 0fc67763cb2f842fd901ecd0d4f297c0af526c3d514c73bc1ea94848fe6d4d40
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
