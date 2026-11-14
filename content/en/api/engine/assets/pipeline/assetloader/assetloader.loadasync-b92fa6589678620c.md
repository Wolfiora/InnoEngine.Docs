---
uid: api.b92fa6589678620c1ec7812fbc518b07cbd5d45df4415aae96453156c5db5427
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(System.Guid,System.Type,System.Threading.CancellationToken)"
source: xml
reviewed: d867c27641291f00b4f01dcf20c97e4a45dfa633e6311fb8f0564c1193e772b8
title: "AssetLoader.LoadAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Asynchronously loads a canonical asset by persistent identity.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

## Returns

The canonical asset, or `null` when unavailable or incompatible.
