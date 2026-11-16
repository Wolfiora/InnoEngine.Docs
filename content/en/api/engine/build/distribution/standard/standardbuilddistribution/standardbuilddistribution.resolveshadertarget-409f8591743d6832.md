---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.409f8591743d6832d9ad6dadb5d7c17630587c089116ed94c4c7658e115f2dc2
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildDistribution.ResolveShaderTarget(Inno.Build.BuildTargetId)
title: StandardBuildDistribution.ResolveShaderTarget
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
reviewed: 877bd649bb843bb6e03fdb7e10007fd5f556538cff478c1442bd5e64d8ce9311
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
