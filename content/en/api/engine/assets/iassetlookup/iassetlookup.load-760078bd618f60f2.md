---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.760078bd618f60f23d37f4477b36973f4c8123cec9b91370625f4f04de5563fb
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetLookup.Load``1(System.Guid)
title: IAssetLookup.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: b40eb60812d8ea99c6c9c54f746e15a7216546faac48446de41c3f645b8ac455
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

The canonical compatible asset owned by this lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the asset does not exist or has an incompatible concrete type.
