---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.768595872fa74b4883a0f5a01e846d087badca2759dbde29112615ea62282ebb
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.Resolve(Inno.Extensibility.Types.TypeRef)
title: TypeCatalog.Resolve
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: bb62291d1d4909dc4f67dd55020e70deeea12b96915306058733caa26f9d93cd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `typeRef`:** The stable type reference to resolve.

## Returns

The CLR type owned by the active generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the reference is empty or unavailable in the active generation.
