---
uid: api.d829f0f0d1adba665fa355e40c40f5312149e0ae90407c6b4088f9a85c10b430
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneAsset.Instantiate(Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 16c4050e3ca3a608007a2c4ddf08384ada8b98f611646e9e9e37720d5bd4298b
title: "SceneAsset.Instantiate"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates an unloaded runtime scene and acquires its hard asset dependencies.

**Returns:** A newly allocated scene.

**Parameter `serialization`:** The serialization registry that owns the active scene converter generation.

**Parameter `assets`:** The runtime asset generation used to resolve persistent references in the scene graph.
