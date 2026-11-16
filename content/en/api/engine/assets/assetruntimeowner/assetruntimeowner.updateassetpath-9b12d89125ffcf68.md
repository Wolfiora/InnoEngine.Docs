---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9b12d89125ffcf6823a20f92b316dfd9e2cc52cc29b1e52cdc7fe0a1a6957cf9
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.UpdateAssetPath(Inno.Assets.AssetObject,Inno.Assets.AssetPath)
title: AssetRuntimeOwner.UpdateAssetPath
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 50547e71810b6a8b697e5bc0eea79de6bbfeaf0428d8080fcd5ebb429c04773f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `asset`:** The owned canonical instance.

**Parameter `assetPath`:** The new mount-qualified location.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
