---
uid: api.bbbb45b5af986f5a9430402698013487716d4591a84f833d206fc38dd6498808
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.InstantiatePrefab(InnoEngine.Scene.PrefabAsset,InnoEngine.Scene.GameScene,InnoEngine.Scene.Transform,System.String)"
source: xml
reviewed: 0eda5e7e8e0421c58461804253bd40f914ba2b16063a2b1c809abbe9bc40f897
title: "SceneEdits.InstantiatePrefab"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Instantiates a prefab into a loaded scene and records the created subtree as one reversible edit.

**Parameter `prefab`:** The imported prefab asset to instantiate.

**Parameter `scene`:** The loaded scene that will own the instance.

**Parameter `parent`:** The optional parent transform for the instantiated root.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The instantiated prefab root.
