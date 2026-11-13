---
uid: api.adf8b7d840efd8b507cf2118cafb9f6e45fd84122ae450ea9d45fe3936948253
symbol: "engine:Inno.Scene:M:Inno.Scene.EngineAssetContent.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency})"
source: xml
reviewed: d7348c55ae22c309579a09f3b29a3f8c0b3b569a1dcb34c55a132aa97f866f30
title: "Constructor"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a detached engine asset content snapshot.

**Parameter `payload`:** The complete serialized runtime graph.

**Parameter `dependencies`:** The direct persistent asset dependencies of the graph.

**Exception `T:System.ArgumentException`:** Thrown when `payload` is empty.
