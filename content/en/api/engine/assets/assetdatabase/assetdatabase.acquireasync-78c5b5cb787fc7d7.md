---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.78c5b5cb787fc7d792b58683c4b3f0167d82b371f09d8b7d60a3c0e1d7506931
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: AssetDatabase.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 3968e722193101af3369deaecfd72b0d48866741454eae8eb8a0b8573f676952
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required runtime asset contract.

## Parameters

**Parameter `persistentID`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation observed during preparation and before owner-thread materialization.

## Returns

A lease completed after verified preparation and owner-thread publication.
