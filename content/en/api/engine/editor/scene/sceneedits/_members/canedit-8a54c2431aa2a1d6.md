---
uid: api.8a54c2431aa2a1d670cbec988cd45055f36de417a07ba62b33cef41c5197e168
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.GameScene)"
source: xml
reviewed: a69fea754528043ab75cadd600d0452aaead7dd2ea484d268685fa9fd80380f7
title: "CanEdit"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Gets whether the scene is editable in the current Edit or isolated Play world.

**Parameter `scene`:** The loaded scene to inspect.

**Returns:** `true` when scene commands may change this scene. Play changes use a temporary history branch and are discarded when the Play session ends.
