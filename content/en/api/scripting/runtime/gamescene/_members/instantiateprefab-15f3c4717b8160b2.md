---
uid: api.15f3c4717b8160b24202da9470e0ff1654964513b3de7ae3ab0e4f1ba8653f16
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameScene.InstantiatePrefab(InnoEngine.Scene.PrefabAsset,InnoEngine.Scene.Transform)"
source: xml
reviewed: 1a953bc31867ec291aad528ba8b37d10b917e83600aac5aba265e8cd9b3fc0d5
title: "InstantiatePrefab"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Creates a connected instance of an imported prefab in this loaded scene.

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

**Returns:** The newly instantiated prefab root.

**Exception `T:System.ArgumentNullException`:** The prefab is null.

**Exception `T:System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.
