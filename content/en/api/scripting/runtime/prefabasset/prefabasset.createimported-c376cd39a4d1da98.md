---
uid: api.c376cd39a4d1da980995359358e27efdee9aa365015205ceb4dd285d92f39454
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency})"
source: xml
reviewed: 32a13a2e4aad6ee0db91ada0311efa07ccbd754c25a931e982c8e398c3899c2d
title: "PrefabAsset.CreateImported"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Creates an imported prefab asset from validated runtime content produced by the prefab asset pipeline.

**Parameter `payload`:** The complete serialized runtime object subtree.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the subtree.

**Returns:** A prefab asset ready for an asset import writer to commit.
