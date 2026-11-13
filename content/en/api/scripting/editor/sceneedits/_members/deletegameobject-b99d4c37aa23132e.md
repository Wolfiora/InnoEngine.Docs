---
uid: api.b99d4c37aa23132e126c64205552e0fb6a076675a18b22151467e4cb0914c3f1
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.DeleteGameObject(InnoEngine.Scene.GameObject,System.String)"
source: xml
reviewed: da11cfcc80fe80e8ed41f4574903ff3923cf32b04ef90cebdacfdc998812c440
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
