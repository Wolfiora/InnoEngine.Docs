---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.77d933dc3af849f91b8cc6ea5b25e34880f6b240de4024eb1d6cb389cbcd210e
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 198bd805d9eed47d145c10476a905dfe8c69232d7c188b7c0eeda6d53186e335
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

A lease that owns residency for the canonical asset.
