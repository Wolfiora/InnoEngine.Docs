---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.eee5e0952ea3c1a29357e59b5ac212eb34141a5f122cc3da178288a939ba8902
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(System.String)
title: BuildDistribution.ResolveNativeToolchain
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 6074962ca6409c3aaf840c6ca818490c668a123ece6c6027214989e9d7ea93b8
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
