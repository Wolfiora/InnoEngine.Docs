---
uid: api.58db67e5fdc882e656ae7d6ec8504cd67b63443f152381f82eb035c5b53ab602
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.GameScene)"
source: xml
reviewed: 9c4bb3779e0ff25ddc480b71c3b709588077418588d60690cb6f49c20c4289c1
title: "SceneEdits.CanEdit"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Gets whether the scene is editable in the current Edit or isolated Play world.

**Parameter `scene`:** The loaded scene to inspect.

**Returns:** `true` when scene commands may change this scene. Play changes use a temporary history branch and are discarded when the Play session ends.
