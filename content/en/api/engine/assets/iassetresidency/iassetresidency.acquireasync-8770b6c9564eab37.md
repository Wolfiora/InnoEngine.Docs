---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8770b6c9564eab37c99e34ae903816032942ce117f01a5bad6524324cae14bb3
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken)
title: IAssetResidency.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: be3a06952aacdf9fc204cfa9f7fab69deb47c88e0c0a4b2e8c53f9ffdff3c29b
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

A lease that owns residency for the canonical asset.
