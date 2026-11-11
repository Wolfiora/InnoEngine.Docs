---
title: "ShaderAsset"
description: "Reference for ShaderAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.947ec34dc7046ca2
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderAsset`

This reference describes `ShaderAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f1cc2e75146b206) | Method |
| [`SetDefinition`](#api-3418127470838549) | Method |
| [`definition`](#api-e3f4bc1d9451fed5) | Property |

## Type declaration

<a id="api-947ec34dc7046ca2"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderAsset 7909071a31523d4959ae0bfe3a2acc478829f94196c973e9c21a202f15739fb0 -->

```csharp
public class Inno.Rendering.Assets.ShaderAsset : Inno.Assets.AssetObject
```

Represents the runtime contract imported from a shader graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L17).

## `#ctor`

<a id="api-3f1cc2e75146b206"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderAsset.#ctor d3593c14577336882eca81ab961b8963e3d0f6489d1fd222ef655614c1f5af56 -->

```csharp
public Inno.Rendering.Assets.ShaderAsset.ShaderAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L17).

## `SetDefinition`

<a id="api-3418127470838549"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderAsset.SetDefinition(Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) da584f42d2246ac4f86cb7b559f3ccd8a56be49c21ff6116c7a1e4cd87ca0669 -->

```csharp
public void Inno.Rendering.Assets.ShaderAsset.SetDefinition(Inno.Rendering.Assets.ShaderDefinition value, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Commits a validated definition through the native serialization channel.

**Parameter `value`:** Complete definition visible to materials and target compilation.

**Parameter `serialization`:** The serialization registry that owns the active shader converter generation.

**Parameter `context`:** The complete owner reference context used for material texture defaults.

**Throws `System.ArgumentException`:** A declaration collection is null. The previous committed definition remains unchanged.

**Throws `System.InvalidOperationException`:** Serialization cannot encode the candidate. No part of the candidate is published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L49).

## `definition`

<a id="api-e3f4bc1d9451fed5"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderAsset.definition 694d98a42abded188d3da7445d0904136b3e538234752994e183be1449978ab9 -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition? Inno.Rendering.Assets.ShaderAsset.definition { get; }
```

Gets a detached editable copy of the committed backend-neutral definition, or null before import.
Nested declaration arrays are copied; referenced assets remain identity-owned resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L28).
