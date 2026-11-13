---
uid: api.517a29509fa77a524524b6ef6386f6fd489bd2ffccf3dba74224742931e4f4f7
symbol: "engine:Inno.Scene:M:Inno.Scene.PrefabAsset.Instantiate(Inno.Scene.GameScene,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver,Inno.Scene.Components.Transform)"
source: xml
reviewed: ec8ff22c5bd14a05369ef6d8197c24ff11e45c2b452e8161775d8abdcc5dd46f
title: "Instantiate"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Instantiates this prefab into a scene using newly generated object identities.

**Parameter `scene`:** Target scene.

**Parameter `serialization`:** The serialization registry that owns the active prefab converter generation.

**Parameter `assets`:** The runtime asset generation used to resolve persistent references in the prefab graph.

**Parameter `parent`:** Optional target parent.

**Returns:** The instantiated root game object.
