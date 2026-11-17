---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0bff49a2936c31e6a8d62e79cce1728d9362194cd97fd13b48bd5f74bcd20f51
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.TryLoad``1(System.Guid,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: a6e24253b307a43b1452e512fd48e3b456c31022b6eb2154e7e7e1099c23b9bd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the current lookup contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
