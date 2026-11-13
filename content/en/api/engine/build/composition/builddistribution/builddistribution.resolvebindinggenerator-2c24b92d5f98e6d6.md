---
uid: api.2c24b92d5f98e6d6581d39efa28b8fa09e48892305b40b93dd75ccbfb7e1046a
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveBindingGenerator(System.String)"
source: xml
reviewed: bd0fc2fa477339410d4dc7f46f961b6a5649351075611d00cb52a9ba94f2f609
title: "BuildDistribution.ResolveBindingGenerator"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Resolves the generator explicitly registered by a target integration.

**Parameter `targetId`:** The requested native target.

**Returns:** The borrowed target generator.

**Exception `T:System.NotSupportedException`:** The target contributes no binding generator.
