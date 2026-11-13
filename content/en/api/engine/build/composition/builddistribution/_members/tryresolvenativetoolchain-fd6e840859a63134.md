---
uid: api.fd6e840859a631340278ffdc468f6d92a24707b945a2cb486451aa181cc7492e
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.TryResolveNativeToolchain(System.String,Inno.Build.Toolchains.INativeToolchainProvider@)"
source: xml
reviewed: 95167cb27b7715f04df2f8e3dc1a4a5f91b580825fab481ab15e50cf180c1042
title: "TryResolveNativeToolchain"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Checks whether this distribution contributes an SDK for an explicitly requested binding target. A standalone binding definition may describe a target without registering a product publisher.

**Parameter `targetId`:** The exact target identity; no host-derived target is substituted.

**Parameter `provider`:** The borrowed SDK provider when registered, or null when the distribution has no such contribution.

**Returns:** True when the target has an explicit SDK contribution; false does not imply SDK-free configuration.

**Exception `T:System.ArgumentException`:** The target identity is empty.
