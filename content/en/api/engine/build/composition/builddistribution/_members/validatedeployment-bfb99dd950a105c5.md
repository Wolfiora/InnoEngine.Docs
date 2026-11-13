---
uid: api.bfb99dd950a105c526a85cab2bc8f33a55aca240800fe1a3de320e2e975259c8
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget,Inno.Build.Managed.ManagedDeploymentId)"
source: xml
reviewed: 91091b6d9406f17f7e7c9595f09a8a170a2bee54fbfa2fdeb34c432c7a805941
title: "ValidateDeployment"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Rejects unsupported target and deployment pairs before any staging or publication begins.

**Parameter `target`:** A target composed by this distribution.

**Parameter `deployment`:** The explicit deployment selected for publication.

**Exception `T:System.InvalidOperationException`:** The platform is absent or the deployment lacks its runtime capability.
