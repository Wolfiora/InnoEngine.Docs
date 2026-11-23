---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9102d24f6a81f5de146164f64bce1af925c313b856e6394dda87c7f83ac375dc
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: IAssetResidency.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 7ee190e993cbe2ab0fad48963337cbf8cd9c86f3d6b5710157483fefa53d70bc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `persistentID`:** Non-empty persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
