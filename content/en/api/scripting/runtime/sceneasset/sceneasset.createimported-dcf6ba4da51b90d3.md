---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dcf6ba4da51b90d3180e54d0052953bb131feb9344a174b9b471e11a3d152da0
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency})
title: SceneAsset.CreateImported
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
sourceFingerprint: 2ca87a1633ecd02cc6677e4c303f0a3b4bc068f6b8170dfebd9672fdc407f03d
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `payload`:** The complete serialized runtime scene graph.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the scene graph.

## Returns

A scene asset ready for an asset import writer to commit.
