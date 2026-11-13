---
uid: api.6c0ca79d280064da61ccd81da2f4ec7db8b121e28bf64e53a2a0a00d6e2d6000
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync\u0060\u00601(Inno.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: 72dd81a79d6a5be1f498124e0e505ef4667d1c478ee97a2a82e5f16bfa341f42
title: "AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical asset and explicitly retains it until the returned lease is disposed.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.
