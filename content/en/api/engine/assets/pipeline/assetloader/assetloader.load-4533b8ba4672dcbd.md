---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4533b8ba4672dcbd195612b16d017dfbe98ea82c8d8572b34cf541bb6996e24c
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Load(Inno.Assets.AssetPath,System.Type)
title: AssetLoader.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: c404cb828f0a2f43863fab379e883466450421760b4a70ec86b546df38ffa04b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path.

**Parameter `requestedAssetType`:** The required assignable asset type.

## Returns

The canonical asset, including retained last-good content after a diagnosed import failure, or `null` when unavailable or incompatible.

## Remarks

Writable source content is verified independently of timestamps. Temporarily blocked source verification follows the existing failed-import protocol; it does not certify cached content as current.
