---
title: "SceneAsset"
description: "Reference for SceneAsset in Inno.Scene."
uid: api.inno.scene.d54e073383184f99
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneAsset`

This reference describes `SceneAsset` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-50b51975bb09cb32) | Method |
| [`Capture`](#api-bd7aeaa008d28ece) | Method |
| [`CaptureContent`](#api-c9c7b8524108519a) | Method |
| [`CaptureFrom`](#api-c9bf58dce18cb7bb) | Method |
| [`CreateImported`](#api-bfb4472720a2a572) | Method |
| [`Instantiate`](#api-27e293e7e7946bfe) | Method |
| [`OnRuntimePayloadChanged`](#api-b738c62df17c4038) | Method |

## Type declaration

<a id="api-d54e073383184f99"></a>
<!-- api: T:Inno.Scene.SceneAsset 170534b9917f208628f1e6822fcd15e58c510bc78eaf622ca31ab45dab46722f -->

```csharp
public sealed class Inno.Scene.SceneAsset : Inno.Assets.AssetObject
```

Stores imported scene source that can create independent runtime scenes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L16).

## `#ctor`

<a id="api-50b51975bb09cb32"></a>
<!-- api: M:Inno.Scene.SceneAsset.#ctor 2175aaff445f1b6bbae27647b289a0493f66e1cbd202b00aebefbc923cfb7bc5 -->

```csharp
public Inno.Scene.SceneAsset.SceneAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L16).

## `Capture`

<a id="api-bd7aeaa008d28ece"></a>
<!-- api: M:Inno.Scene.SceneAsset.Capture(Inno.Scene.GameScene,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) ede958e7d78907acb8742028852ec36439ebad0adc4b43946bab79fa0e430836 -->

```csharp
public static Inno.Scene.SceneAsset Inno.Scene.SceneAsset.Capture(Inno.Scene.GameScene scene, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures a runtime scene into a new unsaved scene asset.

**Parameter `scene`:** Scene to capture.

**Parameter `serialization`:** The serialization registry that owns the active scene converter generation.

**Parameter `assets`:** The asset database generation used to resolve references while collecting dependencies.

**Returns:** A detached scene asset that an authoring asset database can save.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L38).

## `CaptureContent`

<a id="api-c9c7b8524108519a"></a>
<!-- api: M:Inno.Scene.SceneAsset.CaptureContent f515cb78877d6dcd3d86993174dace9bd35067a5f4f2a8b59f64673a77f60b82 -->

```csharp
public Inno.Scene.EngineAssetContent Inno.Scene.SceneAsset.CaptureContent()
```

Captures the immutable runtime payload and dependency descriptors required by the scene asset pipeline.

**Returns:** A detached authoring-content snapshot owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L136).

## `CaptureFrom`

<a id="api-c9bf58dce18cb7bb"></a>
<!-- api: M:Inno.Scene.SceneAsset.CaptureFrom(Inno.Scene.GameScene,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) f47b5b324bf0e2d155b75e1cdd2546a75d7c1d9154bf494be96bcc44971ffb47 -->

```csharp
public void Inno.Scene.SceneAsset.CaptureFrom(Inno.Scene.GameScene scene, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Replaces the pending source content with a fresh capture while preserving this asset identity.

**Parameter `scene`:** Scene to capture.

**Parameter `serialization`:** The serialization registry that owns the active scene converter generation.

**Parameter `assets`:** The asset database generation used to resolve references while collecting dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L61).

## `CreateImported`

<a id="api-bfb4472720a2a572"></a>
<!-- api: M:Inno.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency}) e566667cf76ba44939d0d61e5eff8af554d4af7b1fb1f478e5ee4c843011de82 -->

```csharp
public static Inno.Scene.SceneAsset Inno.Scene.SceneAsset.CreateImported(System.ReadOnlySpan<byte> payload, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> dependencies)
```

Creates an imported scene asset from validated runtime content produced by the scene asset pipeline.

**Parameter `payload`:** The complete serialized runtime scene graph.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the scene graph.

**Returns:** A scene asset ready for an asset import writer to commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L115).

## `Instantiate`

<a id="api-27e293e7e7946bfe"></a>
<!-- api: M:Inno.Scene.SceneAsset.Instantiate(Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) b9aa2fba1d0813a35fd51db1f4caf012ede58147b761271807125dc8f8b9f3b8 -->

```csharp
public Inno.Scene.GameScene Inno.Scene.SceneAsset.Instantiate(Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Creates an unloaded runtime scene and acquires its hard asset dependencies.

**Returns:** A newly allocated scene.

**Parameter `serialization`:** The serialization registry that owns the active scene converter generation.

**Parameter `assets`:** The runtime asset generation used to resolve persistent references in the scene graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L88).

## `OnRuntimePayloadChanged`

<a id="api-b738c62df17c4038"></a>
<!-- api: M:Inno.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) 2fb50caf3b02084008da12c8d35ae6a82ff9e484f13850a1c5bb2bf6d9f38edf -->

```csharp
protected override void Inno.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L156).
