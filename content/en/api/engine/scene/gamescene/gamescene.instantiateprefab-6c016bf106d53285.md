---
uid: api.6c016bf106d5328507f625b3bad3381f6aeb032fd479855175414cb975f55037
symbol: "engine:Inno.Scene:M:Inno.Scene.GameScene.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.Components.Transform)"
source: xml
reviewed: 94e42426c41c6f470e5b5baf1dc505896de9bd3c846b7c786981a1e9353e53dd
title: "GameScene.InstantiatePrefab"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a connected instance of an imported prefab in this loaded scene.

## Parameters

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

## Returns

The newly instantiated prefab root.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The prefab is null.

**Exception `T:System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.
