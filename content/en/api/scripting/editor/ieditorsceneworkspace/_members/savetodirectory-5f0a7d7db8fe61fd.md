---
uid: api.5f0a7d7db8fe61fde50f9ad6075d87223d6a8b6256e755b2e1aa6ce4d11c8770
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SaveToDirectory(InnoEngine.Scene.GameScene,System.String)"
source: xml
reviewed: ddce59cb8118ae3aa4031557cbc6a983662940fd49ea6935a2d311db0eb86d2f
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
