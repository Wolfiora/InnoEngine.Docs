---
title: "MaterialValue"
description: "Reference for MaterialValue in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.15e9a92bb41ac1fb
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialValue`

This reference describes `MaterialValue` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`FromColor`](#api-6789188502c51c72) | Method |
| [`FromFloat`](#api-a104027959c41d28) | Method |
| [`FromMatrix`](#api-b1234c6a14712ac8) | Method |
| [`FromTexture`](#api-bf098e804495ba33) | Method |
| [`FromVector`](#api-ec642b788e646066) | Method |
| [`kind`](#api-bb96833d7a076ffc) | Property |
| [`matrix`](#api-f7cfb27bab7f464b) | Property |
| [`sampler`](#api-13815c0ff39de1ba) | Property |
| [`texture`](#api-c745d26ac231e324) | Property |
| [`vector`](#api-24cfbf59993d130c) | Property |

## Type declaration

<a id="api-15e9a92bb41ac1fb"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialValue c69810440e1e318b1fb29b855f4460d69dc2154b752edb6a423013ffef1301eb -->

```csharp
public struct Inno.Rendering.Assets.MaterialValue
```

Stores one native-serializable material value without a GPU binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L44).

## `FromColor`

<a id="api-6789188502c51c72"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialValue.FromColor(Inno.Core.Mathematics.Color) 537f43efbe628c3f0e3022e4ad057c5f1e3b27003fb81fee6738bda5db437894 -->

```csharp
public static Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.MaterialValue.FromColor(Inno.Core.Mathematics.Color value)
```

Creates a linear color material value.

**Parameter `value`:** Color value.

**Returns:** A color material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L117).

## `FromFloat`

<a id="api-a104027959c41d28"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialValue.FromFloat(System.Single) 0fde86519eed77753db46b20ba061459a278d0ea35e071d3a2a100eefd3406f1 -->

```csharp
public static Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.MaterialValue.FromFloat(float value)
```

Creates a scalar material value.

**Parameter `value`:** Scalar value.

**Returns:** A scalar material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L94).

## `FromMatrix`

<a id="api-b1234c6a14712ac8"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialValue.FromMatrix(Inno.Core.Mathematics.Matrix) 6770d75cd8162becefb6f2b1fc0fd2be16dbcb6dcc1980c9a4589e12453c23e2 -->

```csharp
public static Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.MaterialValue.FromMatrix(Inno.Core.Mathematics.Matrix value)
```

Creates a matrix material value.

**Parameter `value`:** Four-by-four matrix value.

**Returns:** A matrix material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L129).

## `FromTexture`

<a id="api-bf098e804495ba33"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialValue.FromTexture(Inno.Rendering.Assets.TextureAsset,System.Nullable{Inno.Rendering.RenderSamplerState}) 3bb67e0eeb0027be4ba51c393552115f4a4fd1f54a4d7c0b8517770379baef81 -->

```csharp
public static Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.MaterialValue.FromTexture(Inno.Rendering.Assets.TextureAsset value, Inno.Rendering.RenderSamplerState? sampler = null)
```

Creates a texture material value.

**Parameter `value`:** Texture asset reference.

**Parameter `sampler`:** Optional sampler state; linear clamp is used when omitted.

**Returns:** A texture material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L143).

## `FromVector`

<a id="api-ec642b788e646066"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialValue.FromVector(Inno.Core.Mathematics.Vector4) 6c88cb85728522632419e87dcbe2da2c9803ae6d2bc92ae0a9982834a953ad6c -->

```csharp
public static Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.MaterialValue.FromVector(Inno.Core.Mathematics.Vector4 value)
```

Creates a vector material value.

**Parameter `value`:** Vector value.

**Returns:** A vector material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L106).

## `kind`

<a id="api-bb96833d7a076ffc"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialValue.kind 1d70c42ff56374b89ad6a457592fb26dfece1ef19efdb8dbda840796875394ec -->

```csharp
public Inno.Rendering.Assets.MaterialValueKind Inno.Rendering.Assets.MaterialValue.kind { get; set; }
```

Gets or sets the stored value kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L63).

## `matrix`

<a id="api-f7cfb27bab7f464b"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialValue.matrix ce58736277a5062708c5f9d2a542309d7e5d7fcfcb88b87cb977f60bd2323bf9 -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Rendering.Assets.MaterialValue.matrix { get; set; }
```

Gets or sets the matrix value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L73).

## `sampler`

<a id="api-13815c0ff39de1ba"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialValue.sampler e2f8b41a0b1ff5dfa0e7981e02d4a7c16e38e0f3ab738270700941722293a9e5 -->

```csharp
public Inno.Rendering.RenderSamplerState Inno.Rendering.Assets.MaterialValue.sampler { get; set; }
```

Gets or sets the sampler used when this value stores a texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L83).

## `texture`

<a id="api-c745d26ac231e324"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialValue.texture 8bd6453e78f42abc3a3d4dc09e6085d6e3b0be34243752cb9fe46db7d2e63aa0 -->

```csharp
public Inno.Rendering.Assets.TextureAsset? Inno.Rendering.Assets.MaterialValue.texture { get; set; }
```

Gets or sets the texture reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L78).

## `vector`

<a id="api-24cfbf59993d130c"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialValue.vector 6f920de5f303d9996411eca470cc1072f65d4b909fe9f50ff5c41b5c6abd2822 -->

```csharp
public Inno.Core.Mathematics.Vector4 Inno.Rendering.Assets.MaterialValue.vector { get; set; }
```

Gets or sets scalar, vector, or color components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L68).
