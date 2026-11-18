---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2534713e835568a608e5974e042284bbfb365b5f515a5a9ca1da9720354e8b24
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken)
title: AssetPipeline.AcquireAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: e5559274acef4798d59146e98202ef9286e4b596d3c360bc7f044151b2a30a00
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease whose strong reference participates in the existing reachability sweep.
