---
uid: api.dc08ed6bda67917f016377b79de847a6bbc29bcf362e03d4536d42cb4a175463
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad\u0060\u00601(Inno.Assets.AssetPath,\u0060\u00600@)"
source: xml
reviewed: 119955dca9a24144d96a1b858ab6e770764e6d0a831bcc607baed50aba7c3bfd
title: "IAssetLookup.TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset at a logical catalog path.

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the lookup contains a compatible asset; otherwise, `false`.
