---
uid: api.67e7c0afa9edb11cc5924cbdb0cc40113d44e135a3d7268d6233bcb69df7a99a
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.GameScene,Inno.Scene.Components.Transform,System.String)"
source: xml
reviewed: 4951f26cc4ca41dfa015d309e8a7371b9dfbfa7e0991aac462ada0749287616b
title: "InstantiatePrefab"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Instantiates a prefab into a loaded scene and records the created subtree as one reversible edit.

**Parameter `prefab`:** The imported prefab asset to instantiate.

**Parameter `scene`:** The loaded scene that will own the instance.

**Parameter `parent`:** The optional parent transform for the instantiated root.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The instantiated prefab root.
