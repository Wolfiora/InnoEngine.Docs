---
title: "SerializedRenderExtensionState"
description: "Reference for SerializedRenderExtensionState in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.e751fdca5945ad0c
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `SerializedRenderExtensionState`

This reference describes `SerializedRenderExtensionState` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2e9d6551cd9ed4e6) | Method |
| [`#ctor`](#api-5f831736668ea49d) | Method |
| [`#ctor`](#api-63f5d891da1ea4ac) | Method |
| [`dependencies`](#api-d3aa812f0df88eeb) | Property |
| [`propertyData`](#api-7bee490a51f992f2) | Property |
| [`stableTypeId`](#api-1dff7c35e9b058cc) | Property |

## Type declaration

<a id="api-e751fdca5945ad0c"></a>
<!-- api: T:Inno.Rendering.Assets.SerializedRenderExtensionState 625a2f727beb2a663258a37cce22cd2abb9dc5921b4ee0baa8db5a86263d5186 -->

```csharp
public struct Inno.Rendering.Assets.SerializedRenderExtensionState
```

Stores reload-safe configuration for one pipeline or feature extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L16).

## `#ctor`

<a id="api-2e9d6551cd9ed4e6"></a>
<!-- api: M:Inno.Rendering.Assets.SerializedRenderExtensionState.#ctor 3b4f7376c42ef2ef681cfef99bb4ca18676ef15c4dcf36508ae981f080fc2553 -->

```csharp
public Inno.Rendering.Assets.SerializedRenderExtensionState.SerializedRenderExtensionState()
```

Creates empty extension state for deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L21).

## `#ctor`

<a id="api-5f831736668ea49d"></a>
<!-- api: M:Inno.Rendering.Assets.SerializedRenderExtensionState.#ctor(Inno.Assets.AssetPropertySnapshot) 74e4983c2024fc8bb8828e7e9b051d8cdfa8d15fb033e056841853aeee3492e5 -->

```csharp
public Inno.Rendering.Assets.SerializedRenderExtensionState.SerializedRenderExtensionState(Inno.Assets.AssetPropertySnapshot properties)
```

Copies an owner-captured property snapshot, preserving its automatic resource dependency declarations.

**Parameter `properties`:** Complete neutral properties produced by the asset authoring services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L51).

## `#ctor`

<a id="api-63f5d891da1ea4ac"></a>
<!-- api: M:Inno.Rendering.Assets.SerializedRenderExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte}) 5e6603cbbf7b8f073f1d01919d4735cbeebefef0f4aa47fcce6dfb500beb2d64 -->

```csharp
public Inno.Rendering.Assets.SerializedRenderExtensionState.SerializedRenderExtensionState(System.Guid stableTypeId, System.ReadOnlySpan<byte> propertyData)
```

Creates immutable extension state from stable identity and property bytes.

**Parameter `stableTypeId`:** Stable type identity, or empty when the extension has no typed settings.

**Parameter `propertyData`:** Neutral native property bytes produced by asset serialization. Use the snapshot constructor when settings reference assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L36).

## `dependencies`

<a id="api-d3aa812f0df88eeb"></a>
<!-- api: P:Inno.Rendering.Assets.SerializedRenderExtensionState.dependencies 29b314436ffb96d72acc4e52aab3482e2fba37b3f7f15cb7b814cf4c7bf306d8 -->

```csharp
public Inno.Assets.AssetDependency[] Inno.Rendering.Assets.SerializedRenderExtensionState.dependencies { get; set; }
```

Gets or sets asset dependencies captured with the neutral property payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L75).

## `propertyData`

<a id="api-7bee490a51f992f2"></a>
<!-- api: P:Inno.Rendering.Assets.SerializedRenderExtensionState.propertyData d0bcf5bcc9baaddf471beeaff11e973b51523b1ce781b6fb9c128fbc30639fa1 -->

```csharp
public byte[] Inno.Rendering.Assets.SerializedRenderExtensionState.propertyData { get; set; }
```

Gets or sets neutral serialized property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L69).

## `stableTypeId`

<a id="api-1dff7c35e9b058cc"></a>
<!-- api: P:Inno.Rendering.Assets.SerializedRenderExtensionState.stableTypeId cefe15c31e1a696d2048dbd2b30a57abf14ef3b2d47517397ef506deb3713be3 -->

```csharp
public System.Guid Inno.Rendering.Assets.SerializedRenderExtensionState.stableTypeId { get; set; }
```

Gets or sets the stable settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L63).
