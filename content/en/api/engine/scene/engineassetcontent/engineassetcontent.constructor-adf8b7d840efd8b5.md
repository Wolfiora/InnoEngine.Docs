---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.adf8b7d840efd8b507cf2118cafb9f6e45fd84122ae450ea9d45fe3936948253
symbol: engine:Inno.Scene:M:Inno.Scene.EngineAssetContent.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})
title: EngineAssetContent.Constructor
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: fca2dc69b4d2a059c8563f258bf25a96ac8847ec7e2ebd86c3ddeacb87b05247
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
