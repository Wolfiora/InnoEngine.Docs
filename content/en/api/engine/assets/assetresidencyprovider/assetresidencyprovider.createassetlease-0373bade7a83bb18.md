---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0373bade7a83bb180fa14532bb6d89879324c8a288708781779a9c598822dc9b
symbol: engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateAssetLease``1(``0,System.Action)
title: AssetResidencyProvider.CreateAssetLease
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 35fd3b6b82aee5395ebac8eb0a2b64bc9c7cfaac3273e3761bf99496c7aa29ea

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates one strongly typed asset residency lease.

## Type parameters

**Type parameter `TAsset`:** Concrete canonical asset type.

## Parameters

**Parameter `asset`:** Canonical asset retained by the lease.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

## Returns

A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.
