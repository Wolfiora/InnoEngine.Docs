---
uid: api.5f0a7d7db8fe61fde50f9ad6075d87223d6a8b6256e755b2e1aa6ce4d11c8770
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SaveToDirectory(InnoEngine.Scene.GameScene,System.String)"
source: xml
reviewed: 1e5514b6898491ef60478fd5fbafa15d4a8279c10582a7e9d88c3df64545a9dc
title: "SaveToDirectory"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Saves a scene into the requested asset directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.
