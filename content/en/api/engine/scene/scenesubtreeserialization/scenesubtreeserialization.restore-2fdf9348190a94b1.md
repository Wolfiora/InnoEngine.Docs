---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2fdf9348190a94b16c69074898321e0f07010fef41a93fd45a4f2e67f8040c12
symbol: engine:Inno.Scene:M:Inno.Scene.SceneSubtreeSerialization.Restore(Inno.Scene.GameScene,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver,Inno.Scene.Components.Transform,System.Int32)
title: SceneSubtreeSerialization.Restore
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 0fb9b13e81140f033ac665102422e3cc9b3f754ef5a85cc8df3627cae9c4038d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The loaded destination scene.

**Parameter `data`:** Bytes created by `M:Inno.Scene.SceneSubtreeSerialization.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `parent`:** The optional external parent restored after the subtree is created.

**Parameter `siblingIndex`:** The requested sibling index under `parent` or at the scene root.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The asset-reference resolver used to restore referenced asset identities.

## Returns

The restored subtree root.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is unavailable or an identity conflicts.
