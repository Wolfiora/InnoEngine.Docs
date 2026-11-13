---
uid: api.a85b74b9d2ecd8053d6107e6b794f92cdee6a1182dec03c0be160f8d3fd384d2
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.CanEdit(Inno.Scene.GameScene)"
source: xml
reviewed: 905923fa3c00da125e65d2565494dd4c921e86284344b4bd2dca1ee88b3df5ac
title: "CanEdit"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Gets whether a loaded scene may be changed in the current Edit or isolated Play world.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` for a writable Project scene or transient scene in the presented world. Changes made during Play remain in the runtime copy and are discarded on stop.
