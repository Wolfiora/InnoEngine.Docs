---
uid: api.79151d57ed32ad41df798bd937c66cbe22b4adc799a4d852cb2c8e84807a8722
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.CreateGameObject(Inno.Scene.GameScene,Inno.Scene.Components.Transform,System.String)"
source: xml
reviewed: ac5e3dadd4fe6ecc5790eefa3b11365f1f8a03f8bcf57c65a149e153ceef536c
title: "CreateGameObject"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Creates a GameObject, optionally parents it, and records only the new subtree state.

**Parameter `scene`:** The loaded scene that will own the object.

**Parameter `parent`:** The optional parent transform.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The newly created GameObject.
