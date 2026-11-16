---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d0b6a2a46506daad4ef89eef8336b1e150c83362ffa1967585e6cd88696aa2ba
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(Inno.Assets.AssetPath,System.Type,System.Threading.CancellationToken)
title: AssetLoader.LoadAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: c0e47a6e5d7cb133e91d3be04652916e21fe4df70560469ccc664770e5aa910f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

## Returns

The canonical asset, or `null` when unavailable or incompatible.
