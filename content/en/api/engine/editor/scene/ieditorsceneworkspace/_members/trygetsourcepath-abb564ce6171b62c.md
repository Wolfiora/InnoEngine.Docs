---
uid: api.abb564ce6171b62c44491b0cd45e6c1e3a8b41e0ac145ebacb4e898bb601e84b
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.TryGetSourcePath(Inno.Scene.GameScene,System.String@)"
source: xml
reviewed: 3a840f12f62ae65b67183bb8280b78972fac3d7d3b227b78d63489a21a157edf
title: "TryGetSourcePath"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Tries to get the current source-relative asset path of a saved scene.

**Parameter `scene`:** The scene whose path is requested.

**Parameter `relativePath`:** The assigned source-relative path, including a temporarily unavailable source.

**Returns:** `true` when a source remains assigned; availability is diagnosed separately.
