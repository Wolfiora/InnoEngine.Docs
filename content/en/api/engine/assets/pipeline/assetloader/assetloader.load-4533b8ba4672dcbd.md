---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4533b8ba4672dcbd195612b16d017dfbe98ea82c8d8572b34cf541bb6996e24c
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Load(Inno.Assets.AssetPath,System.Type)
title: AssetLoader.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: fbe1fb5a68197993c7699564079cf30c34b56815c40546c4589b4de5e11cdf5e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

## Returns

The canonical asset, including retained last-good content after a diagnosed import failure, or `null` when unavailable or incompatible.

## Remarks

Writable source content is verified independently of timestamps. Temporarily blocked source verification follows the existing failed-import protocol; it does not certify cached content as current.
