---
uid: api.6ba025b33fe6e814203dc23438358264f8dcc04c4f56eb7f8e23d25fae67eef1
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.IAssetSourceSnapshot.Load\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: 64b4dd3ede355d99fa89500da142aaf493d79ecf17b7b9e88ec5fba848f1b65d
title: "IAssetSourceSnapshot.Load"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Loads an authoring asset without publishing a candidate catalog.

## Type parameters

**Type parameter `TAsset`:** The required authoring asset type.

## Parameters

**Parameter `path`:** The isolated source path.

## Returns

The resolved authoring asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No compatible asset can be loaded from this view.
