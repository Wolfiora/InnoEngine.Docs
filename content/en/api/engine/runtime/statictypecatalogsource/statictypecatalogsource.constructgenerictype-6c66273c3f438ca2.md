---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c66273c3f438ca2d48c84b56f0fe39fbbc6925717321c67fc575066150f9e85
symbol: engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})
title: StaticTypeCatalogSource.ConstructGenericType
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 0bf4502cc698f4ac96750da1a3ec598fb1c0bcd6c6a9fbbf94c7f6d53845ccab
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** A generic declaration owned by the candidate generation.

**Parameter `arguments`:** The complete ordered set of closed type arguments.

## Returns

The closed type, or null when its generic constraints reject these arguments.

## Exceptions

**Exception `T:System.NotSupportedException`:** A static deployment did not link the requested construction.

**Exception `T:System.ArgumentException`:** The declaration is not generic, or the argument count or closedness is invalid.
