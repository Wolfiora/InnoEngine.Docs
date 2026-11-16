---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.adf8b7d840efd8b507cf2118cafb9f6e45fd84122ae450ea9d45fe3936948253
symbol: engine:Inno.Scene:M:Inno.Scene.EngineAssetContent.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: EngineAssetContent.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 3b03e37fbd90708b56eab5a464fc31c6f6cec6619a348387d7b4ae18bc4f4d84
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `payload`:** The complete serialized runtime graph.

**Parameter `dependencies`:** The direct persistent asset dependencies of the graph.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `payload` is empty.
