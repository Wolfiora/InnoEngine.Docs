---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.98b80c6e4f99f0f67df9ba121cf6a3eeaa1ef05183c40ae6052346b1f3aa329e
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyScope(System.Reflection.Assembly)
title: AssemblyExtensions.GetInnoAssemblyScope
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
sourceFingerprint: 4a1e3cc03ce08fcc65f8789254c3bb98734851f7c4f4681b4ca6503f035c2b3b
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
