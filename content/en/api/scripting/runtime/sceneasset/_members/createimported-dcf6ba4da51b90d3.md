---
uid: api.dcf6ba4da51b90d3180e54d0052953bb131feb9344a174b9b471e11a3d152da0
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency})"
source: xml
reviewed: 8dbd01f57d391ff6b9435194cea3b58cf604ecf601d332c6f766d4c4fa837ec8
title: "CreateImported"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Creates an imported scene asset from validated runtime content produced by the scene asset pipeline.

**Parameter `payload`:** The complete serialized runtime scene graph.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the scene graph.

**Returns:** A scene asset ready for an asset import writer to commit.
