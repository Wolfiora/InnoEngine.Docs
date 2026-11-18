---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d4f146d78cb9c0c6fae44790ce9cf432352ca1b92915dce25cc081d820f6be1a
symbol: engine:Inno.Scene:M:Inno.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: PrefabAsset.CreateImported
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: f53ec9aed91e3e3ccbf239cac1bd0f1d8578736b9f74056e02591a52e39ad9ca
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
