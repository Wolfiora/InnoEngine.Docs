---
uid: api.f9ba1d1a987940665c785f0fff4607c21d7f2269543695dfb4b11bb1c1d1e8b0
symbol: "engine:Inno.Build.WindowsX64:M:Inno.Build.WindowsX64.WindowsX64PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)"
source: xml
reviewed: f52fedaf19ed9398e73b10ac8d21402ca2f0549a790306de4da174bb5879d4e9
title: "CreatePlanAsync"
kind: api
owners: [Inno.Build.WindowsX64]
apiSurface: source-clr
---

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.
