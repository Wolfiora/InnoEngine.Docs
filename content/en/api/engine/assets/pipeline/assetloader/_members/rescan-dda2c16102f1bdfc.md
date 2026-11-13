---
uid: api.dda2c16102f1bdfcf550f1413dfc594df49dd426724372be409c4f81896bce68
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Rescan(System.Threading.CancellationToken)"
source: xml
reviewed: 0b2830e3c6bbaaf0f5a8ac3759c6f8fb8497d6d338f2b15a8bbe631da8fae011
title: "Rescan"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reconciles source files, metadata, artifacts and the in-memory catalog.

**Parameter `cancellationToken`:** Cancellation for reconciliation and importer work; unpublished candidates can be discarded after it drains.

**Exception `T:System.OperationCanceledException`:** Reconciliation or an importer observes cancellation.
