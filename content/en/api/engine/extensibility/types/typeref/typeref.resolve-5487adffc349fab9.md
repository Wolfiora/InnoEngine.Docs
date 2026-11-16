---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5487adffc349fab9ccc1685f911dee2394dc47cd48f9d250d970c89e6e2d8a0e
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCatalog)
title: TypeRef.Resolve
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 614584aab5112b0ebc06d13580efa31ca6ac6725bc9ba462e92107a7b036d570
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `catalog`:** The catalog that owns the required type generation.

## Returns

The active CLR type represented by this reference.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the reference is empty, the type cache is unavailable, or the logical type is not loaded.

**Exception `T:System.ArgumentNullException`:** Thrown when `catalog` is null.
