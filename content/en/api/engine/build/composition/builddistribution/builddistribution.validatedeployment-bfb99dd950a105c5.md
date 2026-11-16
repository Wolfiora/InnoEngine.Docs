---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bfb99dd950a105c526a85cab2bc8f33a55aca240800fe1a3de320e2e975259c8
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget,Inno.Build.Managed.ManagedDeploymentId)
title: BuildDistribution.ValidateDeployment
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: 8e0d9619d5fc01b45f4c1cda96edd774e32873ca6c0adc6e743cc7bd26e64ed3
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
