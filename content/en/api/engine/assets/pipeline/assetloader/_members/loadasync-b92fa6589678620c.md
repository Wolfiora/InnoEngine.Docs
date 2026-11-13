---
uid: api.b92fa6589678620c1ec7812fbc518b07cbd5d45df4415aae96453156c5db5427
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(System.Guid,System.Type,System.Threading.CancellationToken)"
source: xml
reviewed: f03ba8b927c2de797dde6729c5ce2b3b7e79cf2040164e5b956c3460a5b6e47d
title: "LoadAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Asynchronously loads a canonical asset by persistent identity.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

**Returns:** The canonical asset, or `null` when unavailable or incompatible.
