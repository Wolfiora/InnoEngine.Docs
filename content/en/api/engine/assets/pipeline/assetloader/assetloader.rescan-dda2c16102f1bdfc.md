---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dda2c16102f1bdfcf550f1413dfc594df49dd426724372be409c4f81896bce68
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Rescan(System.Threading.CancellationToken)
title: AssetLoader.Rescan
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 42cab9185411ff6eac1da15e22f80b67484e6bbf2d8340c9f14990c605318e56
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
