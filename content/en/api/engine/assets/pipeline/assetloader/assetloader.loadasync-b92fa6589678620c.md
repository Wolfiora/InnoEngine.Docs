---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b92fa6589678620c1ec7812fbc518b07cbd5d45df4415aae96453156c5db5427
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.LoadAsync(System.Guid,System.Type,System.Threading.CancellationToken)
title: AssetLoader.LoadAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: b7a95cad3af48cbede218aa69b6224594881889023aa1cdb45b2a8ee66c17165
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The persistent asset identity.

**Parameter `requestedAssetType`:** The required assignable asset type.

**Parameter `cancellationToken`:** Cancellation for the current caller's wait.

## Returns

The canonical asset, or `null` when unavailable or incompatible.
