---
uid: api.c9727254603c49276cefa5d6a1a2e9ccd42247b8eacb3235b5a47f79ac08aa34
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.DeleteGameObject(Inno.Scene.GameObject,System.String)"
source: xml
reviewed: 86a9e2fbc6c1f8ca6d95e56b3ed55733d8e5d97630beb913240c20b657606592
title: "DeleteGameObject"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Deletes a GameObject subtree and records only that subtree plus incoming serialized references.

**Parameter `gameObject`:** The live subtree root to delete.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the subtree was deleted and recorded.
