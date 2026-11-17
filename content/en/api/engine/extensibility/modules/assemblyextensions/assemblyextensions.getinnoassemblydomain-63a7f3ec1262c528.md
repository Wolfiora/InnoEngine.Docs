---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.63a7f3ec1262c5288a60cfa59a8afd64915b2b31e6f066b9324ad33c645011c1
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyDomain(System.Reflection.Assembly)
title: AssemblyExtensions.GetInnoAssemblyDomain
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 19315322c62d2a19017b1cb15d8eb4899e936a4b7e03b1fb08265c19c79d1248
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
