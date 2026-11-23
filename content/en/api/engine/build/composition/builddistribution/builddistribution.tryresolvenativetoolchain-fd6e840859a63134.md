---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd6e840859a631340278ffdc468f6d92a24707b945a2cb486451aa181cc7492e
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.TryResolveNativeToolchain(System.String,Inno.Build.Toolchains.INativeToolchainProvider@)
title: BuildDistribution.TryResolveNativeToolchain
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 3d7985576168b3a72af1828d316bbfed3967f0fc990a9d324482430c28a23b13
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetID`:** The exact target identity; no host-derived target is substituted.

**Parameter `provider`:** The borrowed SDK provider when registered, or null when the distribution has no such contribution.

## Returns

True when the target has an explicit SDK contribution; false does not imply SDK-free configuration.

## Exceptions

**Exception `T:System.ArgumentException`:** The target identity is empty.
