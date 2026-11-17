---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.768595872fa74b4883a0f5a01e846d087badca2759dbde29112615ea62282ebb
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.Resolve(Inno.Extensibility.Types.TypeRef)
title: TypeCatalog.Resolve
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 94fabc0e39a08f406b0e46833c6f299a2147af23e10113f041ae2ec0c7d986dd
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
