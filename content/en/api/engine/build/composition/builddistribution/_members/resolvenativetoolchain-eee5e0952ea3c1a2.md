---
uid: api.eee5e0952ea3c1a29357e59b5ac212eb34141a5f122cc3da178288a939ba8902
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(System.String)"
source: xml
reviewed: 5a1990038774dea0a0542bb9b1d070f024832c824c44acd35c71874e8c0c32a6
title: "ResolveNativeToolchain"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Resolves the SDK integration bound to an explicitly registered publication target.

**Parameter `targetId`:** The requested native target identity, independently selected from the execution host.

**Returns:** The borrowed provider; resolving it freezes tools before component work begins.

**Exception `T:System.NotSupportedException`:** No native toolchain contribution is registered for the target.
