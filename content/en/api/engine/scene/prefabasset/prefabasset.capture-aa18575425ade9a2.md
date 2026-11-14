---
uid: api.aa18575425ade9a222ddac1dd7832125d7d6a6175d81c7db61d2045d2a76c010
symbol: "engine:Inno.Scene:M:Inno.Scene.PrefabAsset.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 120b6c6eb87663f70a5f633875ef1f2beab9e841776440b30f4ff6e741b8c818
title: "PrefabAsset.Capture"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures a game object subtree into a new unsaved prefab asset.

**Parameter `root`:** Prefab source root.

**Parameter `serialization`:** The serialization registry that owns the active prefab converter generation.

**Parameter `assets`:** The runtime asset generation used to resolve persistent references in the prefab graph.

**Returns:** A prefab asset ready to save.
