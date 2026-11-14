---
uid: api.0373bade7a83bb180fa14532bb6d89879324c8a288708781779a9c598822dc9b
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateAssetLease\u0060\u00601(\u0060\u00600,System.Action)"
source: xml
reviewed: 35fd3b6b82aee5395ebac8eb0a2b64bc9c7cfaac3273e3761bf99496c7aa29ea
title: "AssetResidencyProvider.CreateAssetLease"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates one strongly typed asset residency lease.

## Type parameters

**Type parameter `TAsset`:** Concrete canonical asset type.

## Parameters

**Parameter `asset`:** Canonical asset retained by the lease.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

## Returns

A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.
