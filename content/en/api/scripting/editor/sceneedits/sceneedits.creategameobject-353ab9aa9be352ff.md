---
uid: api.353ab9aa9be352fff1251af56949c4a570533f47b83356d0a105e879d8cdf4d2
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.CreateGameObject(InnoEngine.Scene.GameScene,InnoEngine.Scene.Transform,System.String)"
source: xml
reviewed: acd4d5eabb56072c65bb2415f973de80e2eb630e001d7dd2fa050b793c3f752d
title: "SceneEdits.CreateGameObject"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Creates a GameObject, optionally parents it, and records only the new subtree state.

## Parameters

**Parameter `scene`:** The loaded scene that will own the object.

**Parameter `parent`:** The optional parent transform.

**Parameter `historyName`:** The user-facing history entry name.

## Returns

The newly created GameObject.
