---
uid: api.8ac0b91e05694be2095db35227598f3f040fc6a5c0d3b0d10b9a51d8bc3a0d61
symbol: "engine:Inno.Build.MacOSArm64:M:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)"
source: xml
reviewed: 129e61230316f115351f18ebe651d0c0a477fdcc0d6dca383db44c3bfe51ad20
title: "CreatePlanAsync"
kind: api
owners: [Inno.Build.MacOSArm64]
apiSurface: source-clr
---

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.
