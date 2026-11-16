---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3d788f8e092d1dd05ef6e820659bd7bb5471efbb3e0f71400777116d81ddb36c
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.Load``1(System.Guid)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 5956e14e8f3e8e0c82e6a42d64bf801182a9d4e2586c7718c18ccadecbe0883d
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

## Returns

The canonical compatible asset owned by the current lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.
