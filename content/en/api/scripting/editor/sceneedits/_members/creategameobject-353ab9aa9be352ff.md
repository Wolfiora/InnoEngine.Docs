---
uid: api.353ab9aa9be352fff1251af56949c4a570533f47b83356d0a105e879d8cdf4d2
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.CreateGameObject(InnoEngine.Scene.GameScene,InnoEngine.Scene.Transform,System.String)"
source: xml
reviewed: 1ba6c53bf984d1c4157d6c01b9bf5897dc7945b6f5e86d634147b2084f53b093
title: "CreateGameObject"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Creates a GameObject, optionally parents it, and records only the new subtree state.

**Parameter `scene`:** The loaded scene that will own the object.

**Parameter `parent`:** The optional parent transform.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The newly created GameObject.
