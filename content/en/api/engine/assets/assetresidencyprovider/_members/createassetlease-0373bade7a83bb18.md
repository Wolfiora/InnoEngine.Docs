---
uid: api.0373bade7a83bb180fa14532bb6d89879324c8a288708781779a9c598822dc9b
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateAssetLease\u0060\u00601(\u0060\u00600,System.Action)"
source: xml
reviewed: 13f1baa6a88e1430e6a4d519eedaebf8204571876a85454a18435a7499ca195d
title: "CreateAssetLease"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates one strongly typed asset residency lease.

**Type parameter `TAsset`:** Concrete canonical asset type.

**Parameter `asset`:** Canonical asset retained by the lease.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

**Returns:** A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.
