---
uid: api.8770b6c9564eab37c99e34ae903816032942ce117f01a5bad6524324cae14bb3
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireAsync\u0060\u00601(Inno.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: c35b0966a66f995c233cfb7eeaefd9c2c814e916cc202919927a283dcbf185ee
title: "IAssetResidency.AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical asset by logical path and keeps it resident until the lease is released.

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
