---
uid: api.dc08ed6bda67917f016377b79de847a6bbc29bcf362e03d4536d42cb4a175463
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad\u0060\u00601(Inno.Assets.AssetPath,\u0060\u00600@)"
source: xml
reviewed: 6ef9736d48cd1b4b20be4c5dd41b5374f6b73c895d8a9b77d70d7ebfc858b3a6
title: "TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset at a logical catalog path.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the lookup contains a compatible asset; otherwise, `false`.
