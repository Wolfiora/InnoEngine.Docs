---
title: "SceneAsset"
description: "Reference for SceneAsset in Inno.Scene."
uid: api.inno.scene.runtime-script.94a016244fd7368c
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `SceneAsset`

This reference describes `SceneAsset` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-03ad6ffa0f4d150b) | Method |
| [`CreateImported`](#api-b98e1f78f717dfc0) | Method |
| [`OnRuntimePayloadChanged`](#api-af4cd0bde72a3105) | Method |

## Type declaration

<a id="api-94a016244fd7368c"></a>
<!-- api: T:InnoEngine.Scene.SceneAsset 375e77abc3e13c7c3cc7d46ea8c1435b990930660101df0543beeadb1dfa6c68 -->

```csharp
public sealed class InnoEngine.Scene.SceneAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Stores imported scene source that can create independent runtime scenes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L16).

## `#ctor`

<a id="api-03ad6ffa0f4d150b"></a>
<!-- api: M:InnoEngine.Scene.SceneAsset.#ctor 9a68f01cd506cb72ceaf905a2a4e37a93aba855e8f5e02b5864303cd572e8a1a -->

```csharp
public InnoEngine.Scene.SceneAsset.SceneAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L16).

## `CreateImported`

<a id="api-b98e1f78f717dfc0"></a>
<!-- api: M:InnoEngine.Scene.SceneAsset.CreateImported(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency}) 141bba1ebd3c949656f2d0d30f3a238de67801c212191b9ec64aecdc3496ab7f -->

```csharp
public static InnoEngine.Scene.SceneAsset InnoEngine.Scene.SceneAsset.CreateImported(System.ReadOnlySpan<byte> payload, System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetDependency> dependencies)
```

Creates an imported scene asset from validated runtime content produced by the scene asset pipeline.

**Parameter `payload`:** The complete serialized runtime scene graph.

**Parameter `dependencies`:** The direct persistent asset dependencies captured with the scene graph.

**Returns:** A scene asset ready for an asset import writer to commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L115).

## `OnRuntimePayloadChanged`

<a id="api-af4cd0bde72a3105"></a>
<!-- api: M:InnoEngine.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) e02d899131a595d8efa3c28649884764766bdb33466f916b3678784e0c20f8a5 -->

```csharp
protected override void InnoEngine.Scene.SceneAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Rebuilds runtime-derived state after the serialized asset payload changes.

**Parameter `previousPayload`:** The previous payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `currentPayload`:** The current payload consumed by on runtime payload changed; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Assets/SceneAsset.cs#L156).
