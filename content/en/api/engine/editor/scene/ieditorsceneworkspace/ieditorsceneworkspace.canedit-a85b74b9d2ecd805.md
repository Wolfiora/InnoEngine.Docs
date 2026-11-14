---
uid: api.a85b74b9d2ecd8053d6107e6b794f92cdee6a1182dec03c0be160f8d3fd384d2
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.CanEdit(Inno.Scene.GameScene)"
source: xml
reviewed: c99b859cb6f1b72ca0f36dc3c43c730c577c30dd7c063f3c8f345de5e3884a17
title: "IEditorSceneWorkspace.CanEdit"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Gets whether a loaded scene may be changed in the current Edit or isolated Play world.

## Parameters

**Parameter `scene`:** The scene to inspect.

## Returns

`true` for a writable Project scene or transient scene in the presented world. Changes made during Play remain in the runtime copy and are discarded on stop.
