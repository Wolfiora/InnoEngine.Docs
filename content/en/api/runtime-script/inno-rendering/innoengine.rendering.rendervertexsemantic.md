---
title: "RenderVertexSemantic"
description: "Reference for RenderVertexSemantic in Inno.Rendering."
uid: api.inno.rendering.runtime-script.76da55013c565231
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderVertexSemantic`

This reference describes `RenderVertexSemantic` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Bitangent`](#api-07496479d3d1bafa) | Field |
| [`BlendIndices`](#api-bccc0fb6e49791c4) | Field |
| [`BlendWeights`](#api-127dc5400c34b640) | Field |
| [`Color0`](#api-2a8addce0f5c50f8) | Field |
| [`Color1`](#api-12f334051dcea893) | Field |
| [`Color2`](#api-c3679c7781c4d59c) | Field |
| [`Color3`](#api-7470dc6d883caca5) | Field |
| [`Normal`](#api-71b95689903258f3) | Field |
| [`Position`](#api-b414a67bddce134a) | Field |
| [`Tangent`](#api-0462ffa462511ab0) | Field |
| [`TextureCoordinate0`](#api-76ee05bff17573b1) | Field |
| [`TextureCoordinate1`](#api-3a18db2184a0e24f) | Field |
| [`TextureCoordinate2`](#api-5a9589556d272d0c) | Field |
| [`TextureCoordinate3`](#api-feb8bb086adeec9a) | Field |
| [`TextureCoordinate4`](#api-ac4998817707222f) | Field |
| [`TextureCoordinate5`](#api-ab85e3d3c85a51ef) | Field |
| [`TextureCoordinate6`](#api-61beb4171505e38c) | Field |
| [`TextureCoordinate7`](#api-4bfa577d090940ad) | Field |

## Type declaration

<a id="api-76da55013c565231"></a>
<!-- api: T:InnoEngine.Rendering.RenderVertexSemantic 46f5e1f8ab3dd99fa7d7485ddb6eadae1a7afa064ac422e1a138e4154ae9ebf2 -->

```csharp
public enum InnoEngine.Rendering.RenderVertexSemantic : int
```

Identifies one backend-neutral vertex attribute semantic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L10).

## `Bitangent`

<a id="api-07496479d3d1bafa"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Bitangent 16cb6bc6654fd7f19adb77c35f7286aaa8118659731e0c20076942045b810abe -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Bitangent = 3
```

Object-space bitangent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L27).

## `BlendIndices`

<a id="api-bccc0fb6e49791c4"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.BlendIndices 7bd2d58cebe8987541eca4608f371cec4338cbf316151abb61a3a8f51fb013d8 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.BlendIndices = 16
```

Skinning indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L79).

## `BlendWeights`

<a id="api-127dc5400c34b640"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.BlendWeights 457e91a4f1a0e6f1c8b88c5ad3cccf5f5dbfa28a1c9cd8594b4a36d187c58efd -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.BlendWeights = 17
```

Skinning weights.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L83).

## `Color0`

<a id="api-2a8addce0f5c50f8"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Color0 31252de6cfb9f4dbb166d52c0010cf1b866008cbd0ef9d28bc5e796f452bc339 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Color0 = 4
```

Primary vertex color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L31).

## `Color1`

<a id="api-12f334051dcea893"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Color1 0f91e3b4dcb01c184224f6b33af8723af65542394d31fc6138bca855a63258dd -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Color1 = 5
```

Secondary vertex color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L35).

## `Color2`

<a id="api-c3679c7781c4d59c"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Color2 56c4c2e56c28e66fa5c03e6a9fe70bff6f8f130342f470c0f37d65a8c8871361 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Color2 = 6
```

Third vertex color channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L39).

## `Color3`

<a id="api-7470dc6d883caca5"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Color3 0140e0ec5d2927c6c70367b07a0fe79a359a878ed669424f30aad35e3dcca625 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Color3 = 7
```

Fourth vertex color channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L43).

## `Normal`

<a id="api-71b95689903258f3"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Normal 5d97c102031eda8ca7be2c7ce0820d1ec9fa687c2c896acc271f9a9f868e40d0 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Normal = 1
```

Object-space normal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L19).

## `Position`

<a id="api-b414a67bddce134a"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Position 618a78a053a5b326369ff35b7039446eb08daf6eb9145eab74c5c9954ca3a40b -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Position = 0
```

Object-space position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L15).

## `Tangent`

<a id="api-0462ffa462511ab0"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.Tangent b30cafc627ed07fee32da696ff625d3fa0bab945231c7997368a2c81652d8ccb -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.Tangent = 2
```

Object-space tangent and handedness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L23).

## `TextureCoordinate0`

<a id="api-76ee05bff17573b1"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate0 ded00d7daf6518e0d20301e5a85bee2b51bd540df4a7679dd368ec830db17ca3 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate0 = 8
```

Primary texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L47).

## `TextureCoordinate1`

<a id="api-3a18db2184a0e24f"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate1 8b8f7dd0b006da24ab8d7e534260d2597244f5f57ce45b8e8bae5cf31a0d62a5 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate1 = 9
```

Secondary texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L51).

## `TextureCoordinate2`

<a id="api-5a9589556d272d0c"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate2 df0fabf82dc2143fa0d4b09e6c9bd0e7e3aaaad0eaab2612d3a7b08be631e156 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate2 = 10
```

Third texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L55).

## `TextureCoordinate3`

<a id="api-feb8bb086adeec9a"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate3 29f5b945bb0149b7fec543ce568ef58e16e184834c1aea6441901c2c27cc1aa6 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate3 = 11
```

Fourth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L59).

## `TextureCoordinate4`

<a id="api-ac4998817707222f"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate4 078080574d7b47f62abe496fbaea7c4449c6aa5ac24b1020682ab0fee1f66ed1 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate4 = 12
```

Fifth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L63).

## `TextureCoordinate5`

<a id="api-ab85e3d3c85a51ef"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate5 1fc6cabe5ad64e440a57421932bed13de36d1f0dc687f47702907715d54b124f -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate5 = 13
```

Sixth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L67).

## `TextureCoordinate6`

<a id="api-61beb4171505e38c"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate6 c2c04fb5609f2fb4bbe43f3089f2d2213fe40e666e5a1b581639498e26e0eaa7 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate6 = 14
```

Seventh texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L71).

## `TextureCoordinate7`

<a id="api-4bfa577d090940ad"></a>
<!-- api: F:InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate7 4b5e05a9b066933394a47450e78020439387c276b5f1d352eadee49c2112b708 -->

```csharp
InnoEngine.Rendering.RenderVertexSemantic.TextureCoordinate7 = 15
```

Eighth texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L75).
