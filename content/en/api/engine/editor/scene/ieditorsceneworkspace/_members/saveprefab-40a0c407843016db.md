---
uid: api.40a0c407843016db1d3162ea07e4a6b8e7437bb6c70fea1a2d19fe68b37bb00c
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SavePrefab(Inno.Scene.GameObject,System.String)"
source: xml
reviewed: e4db116fa0cd03d7a075e5b1c83fe0940ffbc1af5c86b4ead18188ae3acf8bf0
title: "SavePrefab"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Captures a game object subtree as a prefab in the requested directory.

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.
