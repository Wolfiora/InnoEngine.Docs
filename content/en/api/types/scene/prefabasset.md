---
title: "PrefabAsset"
description: "Reference for PrefabAsset in Inno.Scene."
uid: api.inno.scene.9067f0c76d5f6edf
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `PrefabAsset`

This reference describes `PrefabAsset` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a4ceba7c4c17b0ce) | Method |
| [`Capture`](#api-ba353f304edfc74a) | Method |
| [`CaptureContent`](#api-b4a972456ed39304) | Method |
| [`CreateImported`](#api-8425adea680bcfc4) | Method |
| [`Instantiate`](#api-d538b166cabd1172) | Method |

## Type declaration

<a id="api-9067f0c76d5f6edf"></a>
<!-- api: T:Inno.Scene.PrefabAsset 079a825a95380e627749f700ae1ae1d69ac1c80f808e6dc62529961dfb96c918 -->

```csharp
public sealed class Inno.Scene.PrefabAsset : Inno.Assets.AssetObject
```

Stores a persistent game object subtree that can be instantiated repeatedly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L18).

## `#ctor`

<a id="api-a4ceba7c4c17b0ce"></a>
<!-- api: M:Inno.Scene.PrefabAsset.#ctor 5b6efb532fb87c435dc7740080e2d8dfd9aa49fd5cbd6f8f04802b5653e30336 -->

```csharp
public Inno.Scene.PrefabAsset.PrefabAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L18).

## `Capture`

<a id="api-ba353f304edfc74a"></a>
<!-- api: M:Inno.Scene.PrefabAsset.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 07f79aff26fcbf4b98f6bb964fbaec11ae8c6fad2313906e4caad5ff7cb3c421 -->

```csharp
public static Inno.Scene.PrefabAsset Inno.Scene.PrefabAsset.Capture(Inno.Scene.GameObject root, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures a game object subtree into a new unsaved prefab asset.

**Parameter `root`:** Prefab source root.

**Parameter `serialization`:** The serialization registry that owns the active prefab converter generation.

**Parameter `assets`:** The runtime asset generation used to resolve persistent references in the prefab graph.

**Returns:** A prefab asset ready to save.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L40).

## `CaptureContent`

<a id="api-b4a972456ed39304"></a>
<!-- api: M:Inno.Scene.PrefabAsset.CaptureContent 03e7af32eb575f3f607c5db72efe003dfbe0882f0fa831b5b7c397e470defd41 -->

```csharp
public Inno.Scene.EngineAssetContent Inno.Scene.PrefabAsset.CaptureContent()
```

Captures the immutable runtime payload and dependency descriptors required by the prefab asset pipeline.

**Returns:** A detached authoring-content snapshot owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L133).

## `CreateImported`

<a id="api-8425adea680bcfc4"></a>
<!-- api: M:Inno.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency}) ca54a653d71e8b675361f5e504f2578516a710931bde3d3d97df0d75d668a19b -->

```csharp
public static Inno.Scene.PrefabAsset Inno.Scene.PrefabAsset.CreateImported(System.ReadOnlySpan<byte> payload, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> dependencies)
```

Creates an imported prefab asset from validated runtime content produced by the prefab asset pipeline.

**Parameter `payload`:** The complete serialized runtime object subtree.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the subtree.

**Returns:** A prefab asset ready for an asset import writer to commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L112).

## `Instantiate`

<a id="api-d538b166cabd1172"></a>
<!-- api: M:Inno.Scene.PrefabAsset.Instantiate(Inno.Scene.GameScene,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver,Inno.Scene.Components.Transform) 6e2dc16d91e39214fe49e2ad40873908aad282d3e7c31db6b618686935a8c858 -->

```csharp
public Inno.Scene.GameObject Inno.Scene.PrefabAsset.Instantiate(Inno.Scene.GameScene scene, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets, Inno.Scene.Components.Transform? parent = null)
```

Instantiates this prefab into a scene using newly generated object identities.

**Parameter `scene`:** Target scene.

**Parameter `serialization`:** The serialization registry that owns the active prefab converter generation.

**Parameter `assets`:** The runtime asset generation used to resolve persistent references in the prefab graph.

**Parameter `parent`:** Optional target parent.

**Returns:** The instantiated root game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/PrefabAsset.cs#L77).
