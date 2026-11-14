---
uid: api.77d933dc3af849f91b8cc6ea5b25e34880f6b240de4024eb1d6cb389cbcd210e
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: d0083ee2be2e518a22ee361ccf66d9e218f56c8729e00d89814846d6f0e3e99c
title: "Assets.AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical asset by persistent identity and explicitly retains it.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.
