---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.eee5e0952ea3c1a29357e59b5ac212eb34141a5f122cc3da178288a939ba8902
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(System.String)
title: BuildDistribution.ResolveNativeToolchain
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 9168fe8397421cf42bfdf5a6c093bcb498da8a68b677fa27b6b9d987faa3cb50
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetID`:** The requested native target identity, independently selected from the execution host.

## Returns

The borrowed provider; resolving it freezes tools before component work begins.

## Exceptions

**Exception `T:System.NotSupportedException`:** No native toolchain contribution is registered for the target.
