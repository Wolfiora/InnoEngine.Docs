---
uid: api.f1a07936de483e4b2d87e801a8a96550ae8acdda5995c6dfcdfa1445f2bf4188
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SavePrefab(InnoEngine.Scene.GameObject,System.String)"
source: xml
reviewed: 44ac1f1532fbacc1980cdc84d5b0b5b5c9aaf6e50caa21b3d242a84857175996
title: "IEditorSceneWorkspace.SavePrefab"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Captures a game object subtree as a prefab in the requested directory.

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.
