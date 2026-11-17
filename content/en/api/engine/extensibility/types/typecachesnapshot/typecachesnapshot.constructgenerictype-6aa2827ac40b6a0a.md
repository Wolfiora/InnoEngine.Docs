---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6aa2827ac40b6a0af50305ac3a2d5c374626e83536eb445533addea6993698d9
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})
title: TypeCacheSnapshot.ConstructGenericType
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: af8b2c051b3b5f3ec5e02c0e2ee95d9d497a2c6e7c17be2424df7f3a421b9d7f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** A registered generic declaration.

**Parameter `arguments`:** Ordered closed type arguments.

## Returns

The resolved closed type, or null when generic constraints reject the arguments.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The declaration does not belong to this generation.

**Exception `T:System.NotSupportedException`:** This deployment has not linked the requested construction.
