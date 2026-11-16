---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.92e9253555c638dc9a0d61a70c31d9ece848a3efb35956015062e5af3a2efe2a
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetLookup.Load``1(Inno.Assets.AssetPath)
title: IAssetLookup.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 93db5009c68515ba1eb38803676682a3c827975bce8888601971b0435d39943a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

## Returns

The canonical compatible asset owned by this lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the asset does not exist or has an incompatible concrete type.
