---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a1315b7da2248c6b6c9d5bdba8c02802e3b16cdd725958e77e0b857ce5c49a18
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: AssetPipeline.AcquireAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 614b52f3aa8e482e0e5ef1e214c233f1768ccbd811a345001a46a12ba2c8d9f0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `persistentID`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease whose strong reference participates in the existing reachability sweep.
