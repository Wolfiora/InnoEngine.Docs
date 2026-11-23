---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.77d933dc3af849f91b8cc6ea5b25e34880f6b240de4024eb1d6cb389cbcd210e
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: ff1598d6ec01e051bbde0ad2f699e7f2f07fd07d4ed04da07f1fc27ed493bbea
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `persistentID`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
