---
uid: api.9102d24f6a81f5de146164f64bce1af925c313b856e6394dda87c7f83ac375dc
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: eefe583c4c93da3ccf2ea53ae7b640d0817f0b6cbc0a3b4cbd1260dcfecd42d2
title: "AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical asset by persistent identity and keeps it resident until release.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Non-empty persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.
