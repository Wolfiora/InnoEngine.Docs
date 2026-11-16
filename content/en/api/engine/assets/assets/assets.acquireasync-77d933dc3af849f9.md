---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.77d933dc3af849f91b8cc6ea5b25e34880f6b240de4024eb1d6cb389cbcd210e
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: d0083ee2be2e518a22ee361ccf66d9e218f56c8729e00d89814846d6f0e3e99c
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
