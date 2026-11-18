---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b92fa6589678620c1ec7812fbc518b07cbd5d45df4415aae96453156c5db5427
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(System.Guid,System.Type,System.Threading.CancellationToken)
title: AssetLoader.LoadAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 8158c673122de09a235524b6a5e590872c686683046041c2da7284d1f7040ad7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

## Returns

The canonical asset, or `null` when unavailable or incompatible.
