---
uid: api.eee5e0952ea3c1a29357e59b5ac212eb34141a5f122cc3da178288a939ba8902
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(System.String)"
source: xml
reviewed: 8946bdf8dbbf60e0617ef2b783d4dba43d35bccd272b6caefe36f63d514f6745
title: "ResolveNativeToolchain"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Resolves the SDK integration bound to an explicitly registered publication target.

**Parameter `targetId`:** The requested native target identity, independently selected from the execution host.

**Returns:** The borrowed provider; resolving it freezes tools before component work begins.

**Exception `T:System.NotSupportedException`:** No native toolchain contribution is registered for the target.
