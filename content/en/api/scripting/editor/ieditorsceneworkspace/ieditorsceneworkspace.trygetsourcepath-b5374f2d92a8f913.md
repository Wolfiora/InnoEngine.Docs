---
uid: api.b5374f2d92a8f913ff47a1e4434692af077ce4cb9276cb7f072ae61af9481cbd
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.TryGetSourcePath(InnoEngine.Scene.GameScene,System.String@)"
source: xml
reviewed: 6a423e4a1defea446baa7a60705b7847b8186680dab90129abd93cd3e1ba1a7e
title: "IEditorSceneWorkspace.TryGetSourcePath"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Tries to get the current source-relative asset path of a saved scene.

## Parameters

**Parameter `scene`:** The scene whose path is requested.

**Parameter `relativePath`:** The assigned source-relative path, including a temporarily unavailable source.

## Returns

`true` when a source remains assigned; availability is diagnosed separately.
