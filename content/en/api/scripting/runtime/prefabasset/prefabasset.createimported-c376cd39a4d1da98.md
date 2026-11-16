---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c376cd39a4d1da980995359358e27efdee9aa365015205ceb4dd285d92f39454
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency})
title: PrefabAsset.CreateImported
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: 2de262eb206de752f2dfe0d19f879a05ae248e10b1e2a69e2b27ede6d7eee1ec
apiScope: Runtime
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
