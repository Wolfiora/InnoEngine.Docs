---
uid: api.0f30080c21d087b9906354b864602423f9476a5f2306be6529b9530b43cade57
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeProduct(System.String,System.String)"
source: xml
reviewed: 0fecb09afd619599d52aca026991b1a026e2c041a1ce3ed8c3f1bb2b1406af00
title: "ResolveNativeProduct"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Resolves a platform-contributed product closure without selecting backends inside the invoking host.

**Parameter `targetId`:** The explicit registered product target.

**Parameter `productId`:** The product whose ordinary native build is requested.

**Returns:** The borrowed immutable plan declared by the target's composition.

**Exception `T:System.NotSupportedException`:** The target or its ordinary native product build is not registered.

**Exception `T:System.ArgumentException`:** A target or product identity is empty.
