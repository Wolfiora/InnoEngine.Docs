---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bfb99dd950a105c526a85cab2bc8f33a55aca240800fe1a3de320e2e975259c8
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget,Inno.Build.Managed.ManagedDeploymentId)
title: BuildDistribution.ValidateDeployment
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 90d92c930cbecbaffa82cb47d934e1f7a81162b7d5715ee02e73f005dd75ffea
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** A target composed by this distribution.

**Parameter `deployment`:** The explicit deployment selected for publication.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The platform is absent or the deployment lacks its runtime capability.
