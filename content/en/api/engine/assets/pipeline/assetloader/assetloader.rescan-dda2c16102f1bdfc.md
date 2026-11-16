---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dda2c16102f1bdfcf550f1413dfc594df49dd426724372be409c4f81896bce68
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Rescan(System.Threading.CancellationToken)
title: AssetLoader.Rescan
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 5e0b37a4752a4a0df712756b176fe6ea426d01e9fc5d19b1cc53da174a047a32
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancellation for reconciliation and importer work; unpublished candidates can be discarded after it drains.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Reconciliation or an importer observes cancellation.
