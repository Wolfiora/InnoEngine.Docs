---
uid: api.abb564ce6171b62c44491b0cd45e6c1e3a8b41e0ac145ebacb4e898bb601e84b
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.TryGetSourcePath(Inno.Scene.GameScene,System.String@)"
source: xml
reviewed: 72c74f0a11e32bc38d6746eca5afe2bae97ea1c5210b9c2ab6f8b3c43a02c736
title: "TryGetSourcePath"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Tries to get the current source-relative asset path of a saved scene.

**Parameter `scene`:** The scene whose path is requested.

**Parameter `relativePath`:** The assigned source-relative path, including a temporarily unavailable source.

**Returns:** `true` when a source remains assigned; availability is diagnosed separately.
