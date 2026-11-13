---
uid: api.47c3b787fe46d77c9f23757e89fcf75556e44ea5cde7b01ca1a14d953e8cc366
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.IsDirty(InnoEngine.Scene.GameScene)"
source: xml
reviewed: e30ac79b143a6b2a6e2533bed2f66ed6f306ed3c78899cd470f0bef718c19dd9
title: "IEditorSceneWorkspace.IsDirty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Gets whether an Edit scene contains unsaved serialized changes.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` when an Edit scene differs from its saved baseline; runtime copies always return `false` because they cannot be persisted.
