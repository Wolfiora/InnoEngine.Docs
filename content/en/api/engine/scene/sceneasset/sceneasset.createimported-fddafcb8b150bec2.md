---
uid: api.fddafcb8b150bec23ff6e0f11c5763d8ab81c864862a069b59e78c1b93f9ff2a
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})"
source: xml
reviewed: 959ac6e6da24b97bfd44a191ca0f0c48ff14eb9a6024f8a990cbd31e6356ca16
title: "SceneAsset.CreateImported"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an imported scene asset from validated runtime content produced by the scene asset pipeline.

**Parameter `payload`:** The complete serialized runtime scene graph.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the scene graph.

**Returns:** A scene asset ready for an asset import writer to commit.
