---
uid: api.0ebd2f59cbd7fa030e3e24632b11d88e2f0b6c815124fbce9ef3ee77f505bdc4
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.IsDirty(Inno.Scene.GameScene)"
source: xml
reviewed: 7be9082d04fa085971852eeb7501bf76416ddf85220f3b8d4d1a48f660370f36
title: "IEditorSceneWorkspace.IsDirty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Gets whether an Edit scene contains unsaved serialized changes.

## Parameters

**Parameter `scene`:** The scene to inspect.

## Returns

`true` when an Edit scene differs from its saved baseline; runtime copies always return `false` because they cannot be persisted.
