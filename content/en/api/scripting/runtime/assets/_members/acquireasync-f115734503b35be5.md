---
uid: api.f115734503b35be5f2e11c1e6897443aa1a8dae341e0153a622c49f3a2b56863
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireAsync\u0060\u00601(InnoEngine.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: 3b68831c5a9383d1cf7367219fb92170b74c6868c239d1986eb469012a3f10cc
title: "AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Acquires a canonical asset and explicitly retains it until the returned lease is disposed.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.
