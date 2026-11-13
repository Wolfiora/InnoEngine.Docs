---
uid: api.d4f146d78cb9c0c6fae44790ce9cf432352ca1b92915dce25cc081d820f6be1a
symbol: "engine:Inno.Scene:M:Inno.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})"
source: xml
reviewed: eb22da09d99f0e4307093a77acdc3e1dbf8d9f32e755feb252817443aa2184b4
title: "CreateImported"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an imported prefab asset from validated runtime content produced by the prefab asset pipeline.

**Parameter `payload`:** The complete serialized runtime object subtree.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the subtree.

**Returns:** A prefab asset ready for an asset import writer to commit.
