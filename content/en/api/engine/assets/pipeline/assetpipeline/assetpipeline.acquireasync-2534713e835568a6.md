---
uid: api.2534713e835568a608e5974e042284bbfb365b5f515a5a9ca1da9720354e8b24
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync\u0060\u00601(Inno.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: 1f7698646ebc7a6491074813b9d595b8573e7aadda5fc3a1a4ca5fa3dce44327
title: "AssetPipeline.AcquireAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Asynchronously acquires a canonical authoring asset by path for an explicit managed lifetime.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease whose strong reference participates in the existing reachability sweep.
