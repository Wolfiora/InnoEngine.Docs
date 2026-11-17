---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0373bade7a83bb180fa14532bb6d89879324c8a288708781779a9c598822dc9b
symbol: engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateAssetLease``1(``0,System.Action)
title: AssetResidencyProvider.CreateAssetLease
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 6929233c6893732fe3917fd9a9ca0369e68a7e3d9c5c8a8f1c78d19c8d9871dc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Concrete canonical asset type.

## Parameters

**Parameter `asset`:** Canonical asset retained by the lease.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

## Returns

A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.
