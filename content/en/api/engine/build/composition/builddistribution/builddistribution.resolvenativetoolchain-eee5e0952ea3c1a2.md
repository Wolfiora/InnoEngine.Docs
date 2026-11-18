---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.eee5e0952ea3c1a29357e59b5ac212eb34141a5f122cc3da178288a939ba8902
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(System.String)
title: BuildDistribution.ResolveNativeToolchain
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 2e4fdab2eb904ce8c7d47f0716db8b3a8d3a083de610e35f07a8fb6caf9a3fb4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetId`:** The requested native target identity, independently selected from the execution host.

## Returns

The borrowed provider; resolving it freezes tools before component work begins.

## Exceptions

**Exception `T:System.NotSupportedException`:** No native toolchain contribution is registered for the target.
