---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c66273c3f438ca2d48c84b56f0fe39fbbc6925717321c67fc575066150f9e85
symbol: engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})
title: StaticTypeCatalogSource.ConstructGenericType
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: be68b3dd76436068c24db963a992e37a7957d93793863126fae0c0e469f64d42
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
