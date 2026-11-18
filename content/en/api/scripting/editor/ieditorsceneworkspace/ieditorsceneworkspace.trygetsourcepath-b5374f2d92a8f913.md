---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b5374f2d92a8f913ff47a1e4434692af077ce4cb9276cb7f072ae61af9481cbd
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.TryGetSourcePath(InnoEngine.Scene.GameScene,System.String@)
title: IEditorSceneWorkspace.TryGetSourcePath
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: da5a339aeddf93b6403770bf72184ca4417018126e93d00a4401f449c5135ad6
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
