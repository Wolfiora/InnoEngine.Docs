---
uid: api.6c016bf106d5328507f625b3bad3381f6aeb032fd479855175414cb975f55037
symbol: "engine:Inno.Scene:M:Inno.Scene.GameScene.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.Components.Transform)"
source: xml
reviewed: b6c88434a86b6af3a9ce4518609901f7451cdf7cbcc389b804c47d7a5eb331d9
title: "InstantiatePrefab"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a connected instance of an imported prefab in this loaded scene.

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

**Returns:** The newly instantiated prefab root.

**Exception `T:System.ArgumentNullException`:** The prefab is null.

**Exception `T:System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.
