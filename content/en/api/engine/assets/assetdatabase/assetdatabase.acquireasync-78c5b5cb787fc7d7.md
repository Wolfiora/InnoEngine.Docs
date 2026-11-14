---
uid: api.78c5b5cb787fc7d792b58683c4b3f0167d82b371f09d8b7d60a3c0e1d7506931
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.AcquireAsync\u0060\u00601(System.Guid,System.Threading.CancellationToken)"
source: xml
reviewed: 682eb69269fdeb3924e1cc1c2210888a704e5d8aaed322437f8f63ac6da71176
title: "AssetDatabase.AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical runtime asset by persistent identity for an explicit residency lifetime.

## Type parameters

**Type parameter `TAsset`:** Required runtime asset contract.

## Parameters

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation observed during preparation and before owner-thread materialization.

## Returns

A lease completed after verified preparation and owner-thread publication.
