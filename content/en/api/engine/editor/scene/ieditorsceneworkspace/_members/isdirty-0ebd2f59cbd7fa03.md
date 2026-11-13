---
uid: api.0ebd2f59cbd7fa030e3e24632b11d88e2f0b6c815124fbce9ef3ee77f505bdc4
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.IsDirty(Inno.Scene.GameScene)"
source: xml
reviewed: 936ec0fe3e03f691c47ece82216cb03097e462c6e2b23233761073469940f74c
title: "IsDirty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Gets whether an Edit scene contains unsaved serialized changes.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` when an Edit scene differs from its saved baseline; runtime copies always return `false` because they cannot be persisted.
