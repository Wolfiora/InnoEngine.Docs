---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bfb99dd950a105c526a85cab2bc8f33a55aca240800fe1a3de320e2e975259c8
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget,Inno.Build.Managed.ManagedDeploymentId)
title: BuildDistribution.ValidateDeployment
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: f205761e34898ec321245146767460dd5a62d6f8b2aab8a9421dea1e643c1cbc
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
