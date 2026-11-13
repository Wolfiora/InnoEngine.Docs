---
uid: api.9f247c80507ba7c9bb07053507dccd6940ad19c02d30d2c38a894e6374a7ffbc
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: 8da281beeeebda2000ba8d721f8e28fe4a934f35ffbcb28aeffc332d21d0d483
title: "Assets.AcquireAsync"
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
