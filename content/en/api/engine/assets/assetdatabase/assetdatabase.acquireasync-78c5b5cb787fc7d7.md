---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.78c5b5cb787fc7d792b58683c4b3f0167d82b371f09d8b7d60a3c0e1d7506931
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: AssetDatabase.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 8d74100d1031365a11341ee49b6959057c3ee4c31d38517f814bb9d71e4726fe
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required runtime asset contract.

## Parameters

**Parameter `persistentId`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation observed during preparation and before owner-thread materialization.

## Returns

A lease completed after verified preparation and owner-thread publication.
