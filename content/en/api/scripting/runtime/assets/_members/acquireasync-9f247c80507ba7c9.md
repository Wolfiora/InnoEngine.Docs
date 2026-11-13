---
uid: api.9f247c80507ba7c9bb07053507dccd6940ad19c02d30d2c38a894e6374a7ffbc
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: 22b5371cf6c164c41d361d004fbf4a30abb4316890e922c81d3c33d5d121e7cc
title: "AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Acquires a canonical asset by persistent identity and explicitly retains it.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.
