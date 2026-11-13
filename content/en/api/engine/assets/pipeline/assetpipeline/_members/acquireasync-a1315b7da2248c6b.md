---
uid: api.a1315b7da2248c6b6c9d5bdba8c02802e3b16cdd725958e77e0b857ce5c49a18
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: fdd838982896d649333d59fb395081f267e64464de5776cc2e80383e7750c59b
title: "AcquireAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Asynchronously acquires a canonical authoring asset by persistent identity.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease whose strong reference participates in the existing reachability sweep.
