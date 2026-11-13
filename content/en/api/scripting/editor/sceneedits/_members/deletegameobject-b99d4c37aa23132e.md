---
uid: api.b99d4c37aa23132e126c64205552e0fb6a076675a18b22151467e4cb0914c3f1
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.DeleteGameObject(InnoEngine.Scene.GameObject,System.String)"
source: xml
reviewed: 5b5a4475121dc8a63f5d7ebac32f664701221724492525ca1d8be6911de3b186
title: "DeleteGameObject"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Deletes a GameObject subtree and records only that subtree plus incoming serialized references.

**Parameter `gameObject`:** The live subtree root to delete.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the subtree was deleted and recorded.
