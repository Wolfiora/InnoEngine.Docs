---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.95dbd2b48abf74d710975b93b6cdcdbe0c23245649fcd05e7a8ae0b6dd68cc5b
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildDistribution.ResolveShaderTarget(Inno.Build.BuildTargetID)
title: StandardBuildDistribution.ResolveShaderTarget
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
sourceFingerprint: 9096295681baa3ce9339b95a2bccf233f9e8842552e4f5b6f7bb4f39cded526d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The artifact's actual publication target.

## Returns

The borrowed immutable configuration; unavailable targets fail before native preparation.

## Exceptions

**Exception `T:System.NotSupportedException`:** The distribution has no shader configuration for this target.
