---
title: "MaterialValue"
description: "Reference for MaterialValue in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.a7f37e131650cfc2
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialValue`

This reference describes `MaterialValue` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`FromColor`](#api-bcf2bdfbfe8127f9) | Method |
| [`FromFloat`](#api-f5b23f538aad06b5) | Method |
| [`FromMatrix`](#api-348583343a5da683) | Method |
| [`FromTexture`](#api-3d8fd451c60e93dd) | Method |
| [`FromVector`](#api-e23f0e3e1516b96d) | Method |
| [`kind`](#api-1efb9f78391414dc) | Property |
| [`matrix`](#api-776514040a79c862) | Property |
| [`sampler`](#api-fdbac1a87799dcb8) | Property |
| [`texture`](#api-5c056eefabac7727) | Property |
| [`vector`](#api-51e9a0dc7f90d91c) | Property |

## Type declaration

<a id="api-a7f37e131650cfc2"></a>
<!-- api: T:InnoEngine.Rendering.MaterialValue c70a8fa6501216082eb966dfd48b5f6222c027edee6bf72cf82658e13cde632e -->

```csharp
public struct InnoEngine.Rendering.MaterialValue
```

Stores one native-serializable material value without a GPU binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L44).

## `FromColor`

<a id="api-bcf2bdfbfe8127f9"></a>
<!-- api: M:InnoEngine.Rendering.MaterialValue.FromColor(InnoEngine.Mathematics.Color) 7c1a29c5827c0d55902683d1bf0b4eccb40d1d1ecfa78bf34c827161dee5182c -->

```csharp
public static InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.MaterialValue.FromColor(InnoEngine.Mathematics.Color value)
```

Creates a linear color material value.

**Parameter `value`:** Color value.

**Returns:** A color material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L117).

## `FromFloat`

<a id="api-f5b23f538aad06b5"></a>
<!-- api: M:InnoEngine.Rendering.MaterialValue.FromFloat(System.Single) 566b4557692c31b1f2d836c9475f2f6f4fb2e7c07765a3d3df0c00fceb789962 -->

```csharp
public static InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.MaterialValue.FromFloat(float value)
```

Creates a scalar material value.

**Parameter `value`:** Scalar value.

**Returns:** A scalar material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L94).

## `FromMatrix`

<a id="api-348583343a5da683"></a>
<!-- api: M:InnoEngine.Rendering.MaterialValue.FromMatrix(InnoEngine.Mathematics.Matrix) 98bac96a15332a6bf8185e849095b3a38bf3282a65c78f0b2a9cb5dc33ec4951 -->

```csharp
public static InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.MaterialValue.FromMatrix(InnoEngine.Mathematics.Matrix value)
```

Creates a matrix material value.

**Parameter `value`:** Four-by-four matrix value.

**Returns:** A matrix material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L129).

## `FromTexture`

<a id="api-3d8fd451c60e93dd"></a>
<!-- api: M:InnoEngine.Rendering.MaterialValue.FromTexture(InnoEngine.Rendering.TextureAsset,System.Nullable{InnoEngine.Rendering.RenderSamplerState}) 1074a8550f7c2b68c54818c29886f6fd8785b38f82c020eaa7127578eef9fe07 -->

```csharp
public static InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.MaterialValue.FromTexture(InnoEngine.Rendering.TextureAsset value, InnoEngine.Rendering.RenderSamplerState? sampler = null)
```

Creates a texture material value.

**Parameter `value`:** Texture asset reference.

**Parameter `sampler`:** Optional sampler state; linear clamp is used when omitted.

**Returns:** A texture material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L143).

## `FromVector`

<a id="api-e23f0e3e1516b96d"></a>
<!-- api: M:InnoEngine.Rendering.MaterialValue.FromVector(InnoEngine.Mathematics.Vector4) 38111eb970d8db20ecdcd7eebe2f65accd89f8ae78f1df5d0ba5b8be5aebb946 -->

```csharp
public static InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.MaterialValue.FromVector(InnoEngine.Mathematics.Vector4 value)
```

Creates a vector material value.

**Parameter `value`:** Vector value.

**Returns:** A vector material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L106).

## `kind`

<a id="api-1efb9f78391414dc"></a>
<!-- api: P:InnoEngine.Rendering.MaterialValue.kind 13f4295f7eac11bac60aeed908f456384dd8f9d8707a6b64e0355b6c992654ec -->

```csharp
public InnoEngine.Rendering.MaterialValueKind InnoEngine.Rendering.MaterialValue.kind { get; set; }
```

Gets or sets the stored value kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L63).

## `matrix`

<a id="api-776514040a79c862"></a>
<!-- api: P:InnoEngine.Rendering.MaterialValue.matrix 5d5170f636ec7d0b808026a788ea649e0415b5560ad0656cd67e863f9cb3ff02 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Rendering.MaterialValue.matrix { get; set; }
```

Gets or sets the matrix value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L73).

## `sampler`

<a id="api-fdbac1a87799dcb8"></a>
<!-- api: P:InnoEngine.Rendering.MaterialValue.sampler 35f1a6438a31b0ff51dfca6ac151ea4bf13e3da719512afbe2d788fd401b2797 -->

```csharp
public InnoEngine.Rendering.RenderSamplerState InnoEngine.Rendering.MaterialValue.sampler { get; set; }
```

Gets or sets the sampler used when this value stores a texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L83).

## `texture`

<a id="api-5c056eefabac7727"></a>
<!-- api: P:InnoEngine.Rendering.MaterialValue.texture cb47a7a3362d7fbabc63b71c11526e3dfad0cba622f2f48fdcc0d3d4274a6456 -->

```csharp
public InnoEngine.Rendering.TextureAsset? InnoEngine.Rendering.MaterialValue.texture { get; set; }
```

Gets or sets the texture reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L78).

## `vector`

<a id="api-51e9a0dc7f90d91c"></a>
<!-- api: P:InnoEngine.Rendering.MaterialValue.vector e9d2949d8f2dda9e8d2cf53dab3e95f3c3a937a066904dcefa0c31e1c8efe6c6 -->

```csharp
public InnoEngine.Mathematics.Vector4 InnoEngine.Rendering.MaterialValue.vector { get; set; }
```

Gets or sets scalar, vector, or color components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L68).
