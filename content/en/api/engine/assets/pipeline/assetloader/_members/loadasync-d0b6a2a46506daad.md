---
uid: api.d0b6a2a46506daad4ef89eef8336b1e150c83362ffa1967585e6cd88696aa2ba
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(Inno.Assets.AssetPath,System.Type,System.Threading.CancellationToken)"
source: xml
reviewed: 8a5fc86e4db647bcba8db669e7053648df8f85821693279bda400074a603efda
title: "LoadAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Asynchronously loads a canonical asset by isolated source path.

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

**Returns:** The canonical asset, or `null` when unavailable or incompatible.
