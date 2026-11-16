---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.47c3b787fe46d77c9f23757e89fcf75556e44ea5cde7b01ca1a14d953e8cc366
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.IsDirty(InnoEngine.Scene.GameScene)
title: IEditorSceneWorkspace.IsDirty
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: f886c340a3351800272720e006e183832e495d640b0d7135bc02a7ab40544029
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
