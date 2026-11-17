---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.98b80c6e4f99f0f67df9ba121cf6a3eeaa1ef05183c40ae6052346b1f3aa329e
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyScope(System.Reflection.Assembly)
title: AssemblyExtensions.GetInnoAssemblyScope
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 150cde5d9583107f851db11074db262b16e69e1a0298ba365bacba588637c075
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assembly`:** The assembly whose metadata should be inspected.

## Returns

The declared assembly scope.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assembly` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the metadata is absent or invalid.
