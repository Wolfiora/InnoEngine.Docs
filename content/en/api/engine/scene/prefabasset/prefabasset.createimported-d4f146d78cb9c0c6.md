---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d4f146d78cb9c0c6fae44790ce9cf432352ca1b92915dce25cc081d820f6be1a
symbol: engine:Inno.Scene:M:Inno.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: PrefabAsset.CreateImported
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 412a17b95477446a7ffea94cde8b0a4808e7fac63b8909b5694bc5e5c973374b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `payload`:** The complete serialized runtime object subtree.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the subtree.

## Returns

A prefab asset ready for an asset import writer to commit.
