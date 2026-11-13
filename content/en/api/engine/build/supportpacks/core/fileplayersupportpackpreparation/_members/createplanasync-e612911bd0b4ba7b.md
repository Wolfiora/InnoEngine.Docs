---
uid: api.e612911bd0b4ba7bfdbee2f97ac9b52a467e74626acaa3e3d49f9647ca3f934f
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)"
source: xml
reviewed: c5201989f6c5bafdf430ab2d7127b54838ff43aef126bf15acab620d91801594
title: "CreatePlanAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Resolves tools and validates required source inputs before any staging exists.

**Parameter `context`:** The read-only source checkout and explicitly selected managed host.

**Parameter `cancellationToken`:** Cancels discovery before publication is permitted.

**Returns:** A frozen plan borrowing this preparation definition, or a propagated preflight failure.
