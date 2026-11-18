---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6c016bf106d5328507f625b3bad3381f6aeb032fd479855175414cb975f55037
symbol: engine:Inno.Scene:M:Inno.Scene.GameScene.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.Components.Transform)
title: GameScene.InstantiatePrefab
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: bb9a62fba8cd4432064ce8d23a18b38caddd72c178b0addb1130564f5b54b4c9
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
