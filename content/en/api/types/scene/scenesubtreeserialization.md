---
title: "SceneSubtreeSerialization"
description: "Reference for SceneSubtreeSerialization in Inno.Scene."
uid: api.inno.scene.1ef1655b6606e367
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneSubtreeSerialization`

This reference describes `SceneSubtreeSerialization` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-dd7cfc15a74b70ec) | Method |
| [`Restore`](#api-323e1a06ec154151) | Method |

## Type declaration

<a id="api-1ef1655b6606e367"></a>
<!-- api: T:Inno.Scene.SceneSubtreeSerialization fc4776832c3e3e5ae9613fabcc204f564d9f1fad775f45ba744eb5c567da514a -->

```csharp
public static class Inno.Scene.SceneSubtreeSerialization
```

Captures and restores one GameObject subtree with its persistent object and component identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneSubtreeSerialization.cs#L14).

## `Capture`

<a id="api-dd7cfc15a74b70ec"></a>
<!-- api: M:Inno.Scene.SceneSubtreeSerialization.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 6a2004cc7916d08047186d700d8ff7469496c744dad0cc77030ee9a03f49289e -->

```csharp
public static byte[] Inno.Scene.SceneSubtreeSerialization.Capture(Inno.Scene.GameObject root, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures one live GameObject and all descendants without serializing unrelated scene objects.

**Parameter `root`:** The live subtree root.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The asset-reference resolver used to encode referenced asset identities.

**Returns:** Neutral bytes containing the subtree structure, components, properties, and identity references.

**Throws `System.ArgumentNullException`:** Thrown when `root` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the root is destroyed or detached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneSubtreeSerialization.cs#L37).

## `Restore`

<a id="api-323e1a06ec154151"></a>
<!-- api: M:Inno.Scene.SceneSubtreeSerialization.Restore(Inno.Scene.GameScene,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver,Inno.Scene.Components.Transform,System.Int32) 8ff52a3667036c49a1a3fc9d197f0ec981aa6a36e6afbd6503ad9e18c5b05361 -->

```csharp
public static Inno.Scene.GameObject Inno.Scene.SceneSubtreeSerialization.Restore(Inno.Scene.GameScene scene, System.ReadOnlySpan<byte> data, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets, Inno.Scene.Components.Transform? parent, int siblingIndex)
```

Restores a previously captured subtree into a loaded scene with its original persistent identities.

**Parameter `scene`:** The loaded destination scene.

**Parameter `data`:** Bytes created by `Inno.Scene.SceneSubtreeSerialization.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `parent`:** The optional external parent restored after the subtree is created.

**Parameter `siblingIndex`:** The requested sibling index under `parent` or at the scene root.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The asset-reference resolver used to restore referenced asset identities.

**Returns:** The restored subtree root.

**Throws `System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the scene is unavailable or an identity conflicts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneSubtreeSerialization.cs#L81).
