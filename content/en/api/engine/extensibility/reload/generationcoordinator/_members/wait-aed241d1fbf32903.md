---
uid: api.aed241d1fbf329033ff169f9a656872c9b0718d678fd3d7924ea4c9c29ad5bc3
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Wait(System.Threading.CancellationToken)"
source: xml
reviewed: 6d17142b47b849597c86e952a8633a9826e13aa7c545086a5e23af57ff1d34d1
title: "Wait"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Waits for all retirements while preserving pending monitors on cancellation or failure.

**Parameter `cancellationToken`:** Cancellation for the wait, not permission to resume generation changes.

**Exception `T:System.OperationCanceledException`:** The caller canceled before retirement completed.
