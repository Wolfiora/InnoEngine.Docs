---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1315b7da2248c6b6c9d5bdba8c02802e3b16cdd725958e77e0b857ce5c49a18
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: AssetPipeline.AcquireAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 0f107d26d49bceeae0ca20cf557d33fa622e01d518aa85a5e4a44d68fe2c65dc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease whose strong reference participates in the existing reachability sweep.
