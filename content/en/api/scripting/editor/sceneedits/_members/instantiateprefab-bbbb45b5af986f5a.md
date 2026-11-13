---
uid: api.bbbb45b5af986f5a9430402698013487716d4591a84f833d206fc38dd6498808
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.InstantiatePrefab(InnoEngine.Scene.PrefabAsset,InnoEngine.Scene.GameScene,InnoEngine.Scene.Transform,System.String)"
source: xml
reviewed: 6d6d9dfca6e309eaf74dedc1ac1c50f752cb26be1cdea2c6892a4658a8628fa1
title: "InstantiatePrefab"
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
