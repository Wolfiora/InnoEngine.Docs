---
uid: api.47c3b787fe46d77c9f23757e89fcf75556e44ea5cde7b01ca1a14d953e8cc366
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.IsDirty(InnoEngine.Scene.GameScene)"
source: xml
reviewed: 783c9b8fcd9531243e99d56e06162220584b1cf1fa6a4d977cff178e7ff4a699
title: "IsDirty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Gets whether an Edit scene contains unsaved serialized changes.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` when an Edit scene differs from its saved baseline; runtime copies always return `false` because they cannot be persisted.
