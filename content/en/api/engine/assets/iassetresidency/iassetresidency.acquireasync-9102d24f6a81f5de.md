---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9102d24f6a81f5de146164f64bce1af925c313b856e6394dda87c7f83ac375dc
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: IAssetResidency.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 83124e4c22d2a692105a08c98970dcd2ebb25e8a96ae9dbb201ee4a28b680e57

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `persistentId`:** Non-empty persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
