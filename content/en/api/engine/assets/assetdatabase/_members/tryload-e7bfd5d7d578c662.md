---
uid: api.e7bfd5d7d578c662e6d0e467ee18f3db9a41f997939cc257446ad664b6dffe33
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryLoad\u0060\u00601(Inno.Assets.AssetPath,\u0060\u00600@)"
source: xml
reviewed: 5a0e2a1198d9d1a653c1d91e8343cb64f78bafa653d177f95d4d652ea233118f
title: "TryLoad"
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
