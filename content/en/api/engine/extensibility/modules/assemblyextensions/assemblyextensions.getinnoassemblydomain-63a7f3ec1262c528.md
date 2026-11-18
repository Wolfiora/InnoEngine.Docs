---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.63a7f3ec1262c5288a60cfa59a8afd64915b2b31e6f066b9324ad33c645011c1
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyDomain(System.Reflection.Assembly)
title: AssemblyExtensions.GetInnoAssemblyDomain
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
sourceFingerprint: 0266ce72434ba5d634b878e0312a6a6be61f417af6431bd54dfae1279e744a57
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assembly`:** The assembly whose metadata should be inspected.

## Returns

The declared assembly domain.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assembly` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the metadata is absent or invalid.
