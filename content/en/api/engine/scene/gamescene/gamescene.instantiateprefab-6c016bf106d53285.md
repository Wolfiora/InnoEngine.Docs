---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c016bf106d5328507f625b3bad3381f6aeb032fd479855175414cb975f55037
symbol: engine:Inno.Scene:M:Inno.Scene.GameScene.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.Components.Transform)
title: GameScene.InstantiatePrefab
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 8fb29c5e9f609517dcb82340114ca7e6f995038e9912d2c7d18c32be917bd58f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

## Returns

The newly instantiated prefab root.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The prefab is null.

**Exception `T:System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.
