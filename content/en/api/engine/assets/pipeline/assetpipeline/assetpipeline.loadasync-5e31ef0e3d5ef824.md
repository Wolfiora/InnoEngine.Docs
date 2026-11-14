---
uid: api.5e31ef0e3d5ef824e7830a40467240013d4fdb6229c90fe267ce265558a11f4b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.LoadAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: 82be6ba3de3ad578a39b21521fd39896fc975d4c7d5321406c923f12dc428b64
title: "AssetPipeline.LoadAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Asynchronously loads a canonical asset by persistent identity.

## Type parameters

**Type parameter `TAsset`:** The required asset type.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

## Returns

The canonical asset instance.
