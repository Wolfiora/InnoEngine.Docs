---
uid: api.e612911bd0b4ba7bfdbee2f97ac9b52a467e74626acaa3e3d49f9647ca3f934f
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)"
source: xml
reviewed: e87e3cb459496e1444a554a79663374c0813383ece9c419531357a5518e7460a
title: "FilePlayerSupportPackPreparation.CreatePlanAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Resolves tools and validates required source inputs before any staging exists.

**Parameter `context`:** The read-only source checkout and explicitly selected managed host.

**Parameter `cancellationToken`:** Cancels discovery before publication is permitted.

**Returns:** A frozen plan borrowing this preparation definition, or a propagated preflight failure.
