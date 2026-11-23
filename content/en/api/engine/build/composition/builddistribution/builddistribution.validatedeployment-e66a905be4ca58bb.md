---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e66a905be4ca58bbc582b093d5506e9d751ada97ce8d2e58063795b16664d74e
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget,Inno.Build.Managed.ManagedDeploymentID)
title: BuildDistribution.ValidateDeployment
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 54953e2bd93a64a9402013b11869062092979aa112798b13ec780dc02896fc2d
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
