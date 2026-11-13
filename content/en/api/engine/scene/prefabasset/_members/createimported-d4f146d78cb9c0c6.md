---
uid: api.d4f146d78cb9c0c6fae44790ce9cf432352ca1b92915dce25cc081d820f6be1a
symbol: "engine:Inno.Scene:M:Inno.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})"
source: xml
reviewed: ebc4cdeebd05f43fe18ce19df41303444c1a5de1e5c97f919c476a78d1709f69
title: "CreateImported"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an imported prefab asset from validated runtime content produced by the prefab asset pipeline.

**Parameter `payload`:** The complete serialized runtime object subtree.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the subtree.

**Returns:** A prefab asset ready for an asset import writer to commit.
