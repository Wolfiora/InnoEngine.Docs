---
title: "ShaderPropertyType"
description: "Reference for ShaderPropertyType in Inno.Rendering."
uid: api.inno.rendering.a66d4cb8c6064530
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderPropertyType`

This reference describes `ShaderPropertyType` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Buffer`](#api-068b4509fa1c4575) | Field |
| [`Color`](#api-39138ca907cd0787) | Field |
| [`Float`](#api-8a12d7318d2b53fe) | Field |
| [`Matrix4x4`](#api-adab3375934b939f) | Field |
| [`Texture2D`](#api-b9246ee6669e0a7d) | Field |
| [`Texture2DArray`](#api-8ca10832a16447e8) | Field |
| [`Texture3D`](#api-c471d52a3a6c6014) | Field |
| [`TextureCube`](#api-07b750961685c77e) | Field |
| [`Vector2`](#api-f2e2d93d2442f6c0) | Field |
| [`Vector3`](#api-dfaebeecad7db4ff) | Field |
| [`Vector4`](#api-2fdf07dff1847803) | Field |

## Type declaration

<a id="api-a66d4cb8c6064530"></a>
<!-- api: T:Inno.Rendering.ShaderPropertyType c56af6fb845c8a78c0e38f0584c5e0db45a64c644a843a8be93cabc0c837330a -->

```csharp
public enum Inno.Rendering.ShaderPropertyType : int
```

Identifies an artist-facing shader property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L14).

## `Buffer`

<a id="api-068b4509fa1c4575"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Buffer 8f5d772cba6c31a9df246d35b63512b9642c30e2e9a893a8e8d1014095bbf049 -->

```csharp
Inno.Rendering.ShaderPropertyType.Buffer = 10
```

Read-only or read-write buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L59).

## `Color`

<a id="api-39138ca907cd0787"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Color 373a3f02387e3cd2ab4113d04e98d29d733b551f2ed6b61b695251a57ddb813e -->

```csharp
Inno.Rendering.ShaderPropertyType.Color = 4
```

Linear RGBA color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L35).

## `Float`

<a id="api-8a12d7318d2b53fe"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Float c8d686022047d11b810288553241c7098711e8aa9d02a980890843eb2ef274d6 -->

```csharp
Inno.Rendering.ShaderPropertyType.Float = 0
```

Scalar floating-point value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L19).

## `Matrix4x4`

<a id="api-adab3375934b939f"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Matrix4x4 e7ddbe0c44aff80920bb58390e1a001dec4a60dd48c7252940503bddb600edce -->

```csharp
Inno.Rendering.ShaderPropertyType.Matrix4x4 = 5
```

Four-by-four matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L39).

## `Texture2D`

<a id="api-b9246ee6669e0a7d"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Texture2D 2a694231fd40cf901214be58ba7ffb93e9a4f7551b2a7bd7a3031755b4c4e883 -->

```csharp
Inno.Rendering.ShaderPropertyType.Texture2D = 6
```

Two-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L43).

## `Texture2DArray`

<a id="api-8ca10832a16447e8"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Texture2DArray c88cc2e912c10bb57cd573c4c18e919341883fef5e709e85165a91f599584184 -->

```csharp
Inno.Rendering.ShaderPropertyType.Texture2DArray = 7
```

Layered two-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L47).

## `Texture3D`

<a id="api-c471d52a3a6c6014"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Texture3D ad337600e2be3a2f513477f2cd1ff8403e3b9b0f765c85f02e206f343f55dd9f -->

```csharp
Inno.Rendering.ShaderPropertyType.Texture3D = 8
```

Three-dimensional volume texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L51).

## `TextureCube`

<a id="api-07b750961685c77e"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.TextureCube cd613c3a00167706b5560ec1603b75cfe3ab219f0e87b8c2de784b8f045691bb -->

```csharp
Inno.Rendering.ShaderPropertyType.TextureCube = 9
```

Cube texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L55).

## `Vector2`

<a id="api-f2e2d93d2442f6c0"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Vector2 7bcae18f9818f4985dc7cb83c998806c6e092ebf8446652364455237eb532b50 -->

```csharp
Inno.Rendering.ShaderPropertyType.Vector2 = 1
```

Two-component floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L23).

## `Vector3`

<a id="api-dfaebeecad7db4ff"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Vector3 8e744adc3a21c08de71e8a5b69cea862b867d8db5cca3ae8158ead365aa956ed -->

```csharp
Inno.Rendering.ShaderPropertyType.Vector3 = 2
```

Three-component floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L27).

## `Vector4`

<a id="api-2fdf07dff1847803"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyType.Vector4 5bd7bb6fc045f9f895c2533221d5b21438c0093a013a70f9f4f84e958202f840 -->

```csharp
Inno.Rendering.ShaderPropertyType.Vector4 = 3
```

Four-component floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyType.cs#L31).
