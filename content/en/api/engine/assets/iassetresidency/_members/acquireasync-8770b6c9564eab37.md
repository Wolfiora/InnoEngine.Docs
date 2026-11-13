---
uid: api.8770b6c9564eab37c99e34ae903816032942ce117f01a5bad6524324cae14bb3
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireAsync\u0060\u00601(Inno.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: 72e77fdf772570465bcd2706f92b3c25011d5e39fb5102d8870554c5b995348d
title: "AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical asset by logical path and keeps it resident until the lease is released.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.
