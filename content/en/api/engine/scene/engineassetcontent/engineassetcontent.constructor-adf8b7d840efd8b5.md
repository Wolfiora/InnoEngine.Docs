---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.adf8b7d840efd8b507cf2118cafb9f6e45fd84122ae450ea9d45fe3936948253
symbol: engine:Inno.Scene:M:Inno.Scene.EngineAssetContent.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: EngineAssetContent.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: d7c7fae823334eaa2a87c9f5b55e0814ec2628f1ada8513494a0db02194f2f99
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
