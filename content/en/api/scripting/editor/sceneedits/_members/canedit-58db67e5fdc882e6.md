---
uid: api.58db67e5fdc882e656ae7d6ec8504cd67b63443f152381f82eb035c5b53ab602
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.GameScene)"
source: xml
reviewed: 5527f9b7985759371e9cedad84278faba33b35c64025f46b7442d4eabc6a17df
title: "CanEdit"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Gets whether the scene is editable in the current Edit or isolated Play world.

**Parameter `scene`:** The loaded scene to inspect.

**Returns:** `true` when scene commands may change this scene. Play changes use a temporary history branch and are discarded when the Play session ends.
