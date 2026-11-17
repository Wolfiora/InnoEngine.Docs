---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5374f2d92a8f913ff47a1e4434692af077ce4cb9276cb7f072ae61af9481cbd
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.TryGetSourcePath(InnoEngine.Scene.GameScene,System.String@)
title: IEditorSceneWorkspace.TryGetSourcePath
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 243987ac3d096f79aed5577b9e9cf1235d946ebdb9e853553ab965b21508c7ad
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene whose path is requested.

**Parameter `relativePath`:** The assigned source-relative path, including a temporarily unavailable source.

## Returns

`true` when a source remains assigned; availability is diagnosed separately.
