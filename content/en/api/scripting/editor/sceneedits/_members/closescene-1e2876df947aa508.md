---
uid: api.1e2876df947aa508e7f037d8e1f615e324d89218ee1d9b8067e8a7d1b8e7999e
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.CloseScene(InnoEngine.Scene.GameScene,System.String)"
source: xml
reviewed: 62eec0f92cd39d3e45ad9b33acb79c96d8d6626fc204ae3cf90d0b5651589291
title: "CloseScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Closes one loaded scene without deleting its source asset and records a reversible document change.

**Parameter `scene`:** The loaded scene to close.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the scene was closed and recorded.
