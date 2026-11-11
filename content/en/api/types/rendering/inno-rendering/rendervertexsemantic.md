---
title: "RenderVertexSemantic"
description: "Reference for RenderVertexSemantic in Inno.Rendering."
uid: api.inno.rendering.1fd69a21bfc743da
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderVertexSemantic`

This reference describes `RenderVertexSemantic` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Bitangent`](#api-876416d1b10eaa47) | Field |
| [`BlendIndices`](#api-1ae1f8a76d34e4ac) | Field |
| [`BlendWeights`](#api-b97060253cf342a4) | Field |
| [`Color0`](#api-7f8f8cad6c7f5387) | Field |
| [`Color1`](#api-9406a0d11455edf4) | Field |
| [`Color2`](#api-bca9db15b022dd5a) | Field |
| [`Color3`](#api-a9ab53ac59d92f9e) | Field |
| [`Normal`](#api-5cd25b29246979ca) | Field |
| [`Position`](#api-a637ddda121f5d78) | Field |
| [`Tangent`](#api-bba8af8fd294b59f) | Field |
| [`TextureCoordinate0`](#api-71dfda01dd462e96) | Field |
| [`TextureCoordinate1`](#api-9afcf32ee0c101fc) | Field |
| [`TextureCoordinate2`](#api-2d250a09d796ea47) | Field |
| [`TextureCoordinate3`](#api-3d8eed54c0924adc) | Field |
| [`TextureCoordinate4`](#api-fa0fdbd2c9f6e735) | Field |
| [`TextureCoordinate5`](#api-b405ac70d1115208) | Field |
| [`TextureCoordinate6`](#api-cb12cf31dac06cda) | Field |
| [`TextureCoordinate7`](#api-0f3379d80366f833) | Field |

## Type declaration

<a id="api-1fd69a21bfc743da"></a>
<!-- api: T:Inno.Rendering.RenderVertexSemantic 97a1820b04b770d6e2ad2cac24eb377d3f38a942133d72525f19d9c068f31dc6 -->

```csharp
public enum Inno.Rendering.RenderVertexSemantic : int
```

Identifies one backend-neutral vertex attribute semantic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L10).

## `Bitangent`

<a id="api-876416d1b10eaa47"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Bitangent 3d0b0db44c96ef79f6168f6004454c2dbe06a5c201ebdad5068856e4ab8a1ff6 -->

```csharp
Inno.Rendering.RenderVertexSemantic.Bitangent = 3
```

Object-space bitangent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L27).

## `BlendIndices`

<a id="api-1ae1f8a76d34e4ac"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.BlendIndices 5a4880e7dd1649470c897a85b79913dc2c523e75c720e0cb6fcbf9ead1b8c025 -->

```csharp
Inno.Rendering.RenderVertexSemantic.BlendIndices = 16
```

Skinning indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L79).

## `BlendWeights`

<a id="api-b97060253cf342a4"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.BlendWeights 8aa9605fc2541427de9ce58ea396d60cc5045b2564ddacddd2f5f2b6dfe93b2a -->

```csharp
Inno.Rendering.RenderVertexSemantic.BlendWeights = 17
```

Skinning weights.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L83).

## `Color0`

<a id="api-7f8f8cad6c7f5387"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Color0 35abf342056a0a6232343c27b55457e725e9eed3c2e8f0fdbfac4306cc9efa14 -->

```csharp
Inno.Rendering.RenderVertexSemantic.Color0 = 4
```

Primary vertex color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L31).

## `Color1`

<a id="api-9406a0d11455edf4"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Color1 fe4036a5bb848afd2b712ae843afdbcf232248780a6de9c8262da6abdd20a210 -->

```csharp
Inno.Rendering.RenderVertexSemantic.Color1 = 5
```

Secondary vertex color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L35).

## `Color2`

<a id="api-bca9db15b022dd5a"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Color2 861d5af1d92d9fad0c64d0a28048b6f409e02362aafd737bc5a86c5385c4b15d -->

```csharp
Inno.Rendering.RenderVertexSemantic.Color2 = 6
```

Third vertex color channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L39).

## `Color3`

<a id="api-a9ab53ac59d92f9e"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Color3 1a860b7e0eb069ad16dd08c483231aa0ef9838b34706351286d783a2529243c7 -->

```csharp
Inno.Rendering.RenderVertexSemantic.Color3 = 7
```

Fourth vertex color channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L43).

## `Normal`

<a id="api-5cd25b29246979ca"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Normal c1413184cca1b7cb37cbf60a0e0894dbdcda5c44ff38722653c358a0e3d1f4ed -->

```csharp
Inno.Rendering.RenderVertexSemantic.Normal = 1
```

Object-space normal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L19).

## `Position`

<a id="api-a637ddda121f5d78"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Position 678199a97401d72120423e3c4f9202113d08d84cb2cb5cfbdef9df346195731c -->

```csharp
Inno.Rendering.RenderVertexSemantic.Position = 0
```

Object-space position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L15).

## `Tangent`

<a id="api-bba8af8fd294b59f"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.Tangent dfa87d3be2ea8d041e2475f93c34924a5bb6de9ef15b176904dc552753665cd2 -->

```csharp
Inno.Rendering.RenderVertexSemantic.Tangent = 2
```

Object-space tangent and handedness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L23).

## `TextureCoordinate0`

<a id="api-71dfda01dd462e96"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate0 16956dfbe89b791db7b7bc8bd0d7fa4b954d1ce3b2e4aef8b146b6130c41089d -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate0 = 8
```

Primary texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L47).

## `TextureCoordinate1`

<a id="api-9afcf32ee0c101fc"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate1 6d84691c6bcc14a52924e1f75343a35face22565865fa9ad7cbbdcc278f1a70b -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate1 = 9
```

Secondary texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L51).

## `TextureCoordinate2`

<a id="api-2d250a09d796ea47"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate2 a4bf5b8bedfb442df28b87fefb0fe64e5c7d45a91394bb636604c6dfcb8641db -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate2 = 10
```

Third texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L55).

## `TextureCoordinate3`

<a id="api-3d8eed54c0924adc"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate3 63bb9235a31c3043135468231f3a9f16138c53d8e60f879a6e8d0acf886e3ecb -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate3 = 11
```

Fourth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L59).

## `TextureCoordinate4`

<a id="api-fa0fdbd2c9f6e735"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate4 37593dfffba7935deff678b279c2e26f269cab00a44d554e11c45a79b118f178 -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate4 = 12
```

Fifth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L63).

## `TextureCoordinate5`

<a id="api-b405ac70d1115208"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate5 8196d44034cf990c54d6670dcce6e54afeee2bfcdf8987c8a7ac4ebe92e4b21c -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate5 = 13
```

Sixth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L67).

## `TextureCoordinate6`

<a id="api-cb12cf31dac06cda"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate6 bc1b46221385c7043cfc8adccb34658a53f966ba2bb5dc6d813686dfd2825bb0 -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate6 = 14
```

Seventh texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L71).

## `TextureCoordinate7`

<a id="api-0f3379d80366f833"></a>
<!-- api: F:Inno.Rendering.RenderVertexSemantic.TextureCoordinate7 cf9c810caa9fbd87442498ae73bc682b3a0baa05ff6afea1f7b08492a5c227eb -->

```csharp
Inno.Rendering.RenderVertexSemantic.TextureCoordinate7 = 15
```

Eighth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L75).
