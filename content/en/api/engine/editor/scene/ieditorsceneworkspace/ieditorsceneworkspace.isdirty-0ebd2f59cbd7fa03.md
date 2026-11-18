---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0ebd2f59cbd7fa030e3e24632b11d88e2f0b6c815124fbce9ef3ee77f505bdc4
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.IsDirty(Inno.Scene.GameScene)
title: IEditorSceneWorkspace.IsDirty
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: aa3b21a967f05a53a04b6963fb574320044ca8c062821abe64c70aaef6c0bca7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene to inspect.

## Returns

`true` when an Edit scene differs from its saved baseline; runtime copies always return `false` because they cannot be persisted.
