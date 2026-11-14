---
uid: api.e7bfd5d7d578c662e6d0e467ee18f3db9a41f997939cc257446ad664b6dffe33
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryLoad\u0060\u00601(Inno.Assets.AssetPath,\u0060\u00600@)"
source: xml
reviewed: 5d9b467e34574f437c816089c4f80b11807000c2292b035b27277e5ca1f78414
title: "AssetDatabase.TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset at one catalog path.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the deployed catalog contains a compatible asset; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
