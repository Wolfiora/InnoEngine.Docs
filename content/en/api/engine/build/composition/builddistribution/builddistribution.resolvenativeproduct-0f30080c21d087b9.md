---
uid: api.0f30080c21d087b9906354b864602423f9476a5f2306be6529b9530b43cade57
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeProduct(System.String,System.String)"
source: xml
reviewed: d0b22ec7e7ce2a783288090386a20c9229e300732b9a7a55b2cbd4e6c04a111c
title: "BuildDistribution.ResolveNativeProduct"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Resolves a platform-contributed product closure without selecting backends inside the invoking host.

## Parameters

**Parameter `targetId`:** The explicit registered product target.

**Parameter `productId`:** The product whose ordinary native build is requested.

## Returns

The borrowed immutable plan declared by the target's composition.

## Exceptions

**Exception `T:System.NotSupportedException`:** The target or its ordinary native product build is not registered.

**Exception `T:System.ArgumentException`:** A target or product identity is empty.
