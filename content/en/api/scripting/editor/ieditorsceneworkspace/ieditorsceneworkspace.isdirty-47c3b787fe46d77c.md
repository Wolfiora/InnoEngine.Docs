---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.47c3b787fe46d77c9f23757e89fcf75556e44ea5cde7b01ca1a14d953e8cc366
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.IsDirty(InnoEngine.Scene.GameScene)
title: IEditorSceneWorkspace.IsDirty
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: 103400fac1e16efab79790f69cceffed7f4746c9c6809c5b59979045ec24b05b
apiScope: Editor
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
