---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0f30080c21d087b9906354b864602423f9476a5f2306be6529b9530b43cade57
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeProduct(System.String,System.String)
title: BuildDistribution.ResolveNativeProduct
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 5e090c6054468cc08fab77ec99d8c99d231b8444425e29347db7299add6390e6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetId`:** The explicit registered product target.

**Parameter `productId`:** The product whose ordinary native build is requested.

## Returns

The borrowed immutable plan declared by the target's composition.

## Exceptions

**Exception `T:System.NotSupportedException`:** The target or its ordinary native product build is not registered.

**Exception `T:System.ArgumentException`:** A target or product identity is empty.
