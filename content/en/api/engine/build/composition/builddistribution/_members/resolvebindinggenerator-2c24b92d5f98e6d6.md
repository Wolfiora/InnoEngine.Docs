---
uid: api.2c24b92d5f98e6d6581d39efa28b8fa09e48892305b40b93dd75ccbfb7e1046a
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveBindingGenerator(System.String)"
source: xml
reviewed: d37e21d88ae1097771ea9006b46a33531bebb8ea554918ea77224d3f69f8dd14
title: "ResolveBindingGenerator"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Resolves the generator explicitly registered by a target integration.

**Parameter `targetId`:** The requested native target.

**Returns:** The borrowed target generator.

**Exception `T:System.NotSupportedException`:** The target contributes no binding generator.
