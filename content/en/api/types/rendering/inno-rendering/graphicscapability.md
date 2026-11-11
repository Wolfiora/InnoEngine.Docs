---
title: "GraphicsCapability"
description: "Reference for GraphicsCapability in Inno.Rendering."
uid: api.inno.rendering.7cc0f9f5feada87f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsCapability`

This reference describes `GraphicsCapability` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlphaToCoverage`](#api-bdf0759fea407ca0) | Field |
| [`BufferCopy`](#api-1dce87f84068714c) | Field |
| [`Compute`](#api-462b321acef07800) | Field |
| [`ConcurrentEncoders`](#api-bc9a17530eece0a5) | Field |
| [`FragmentDepth`](#api-8d7c3678bc72aa6b) | Field |
| [`IndependentBlend`](#api-a9a3f6b67f39a2a7) | Field |
| [`Index32`](#api-f5d72a3c0990d77c) | Field |
| [`Indirect`](#api-a5daecaadb5ccf5e) | Field |
| [`Instancing`](#api-e67c173731b8a61c) | Field |
| [`None`](#api-634c8b3b8091d1c2) | Field |
| [`ProceduralDraw`](#api-55ad586b0832520a) | Field |
| [`StorageBuffer`](#api-b699dbf10e66b06d) | Field |
| [`StorageTexture`](#api-40107dc445606a44) | Field |
| [`SwapChain`](#api-2cccbfda3e3ff68d) | Field |
| [`Texture2DArray`](#api-88af4a3d122a7a6d) | Field |
| [`Texture3D`](#api-d35e27f38462ae2d) | Field |
| [`TextureBlit`](#api-22b651b4f31ee86c) | Field |
| [`TextureCubeArray`](#api-2cc4ed82cb44c0aa) | Field |
| [`TextureReadback`](#api-3487b8ef1175ea5f) | Field |
| [`VertexAttributeHalf`](#api-62b4912a919cd00c) | Field |
| [`VertexAttributeUInt10`](#api-7b855238b4ad1267) | Field |

## Type declaration

<a id="api-7cc0f9f5feada87f"></a>
<!-- api: T:Inno.Rendering.GraphicsCapability 2d2ed1786ca2c921d83fd9cce23d76a92c65c96621b1c6071d92fa2e194245a9 -->

```csharp
public enum Inno.Rendering.GraphicsCapability : int
```

Declares backend-neutral optional graphics functionality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L131).

## `AlphaToCoverage`

<a id="api-bdf0759fea407ca0"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.AlphaToCoverage a4e1ccccb1ca05f42c6f33be30f605624e5aa23dfce1ff8fb8d9d814c3ade712 -->

```csharp
Inno.Rendering.GraphicsCapability.AlphaToCoverage = 128
```

Alpha-to-coverage rasterization is supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L168).

## `BufferCopy`

<a id="api-1dce87f84068714c"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.BufferCopy c30fd61849bc1162663f8bcb68007c879b28437b610bf0f686765c36a6ff1aed -->

```csharp
Inno.Rendering.GraphicsCapability.BufferCopy = 64
```

General GPU buffer copy operations are supported directly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L164).

## `Compute`

<a id="api-462b321acef07800"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.Compute 44eb0b72ca2b157ff590f60b45e8de96498bfda545b6cb4e0260506283010a84 -->

```csharp
Inno.Rendering.GraphicsCapability.Compute = 1
```

Compute shader dispatch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L140).

## `ConcurrentEncoders`

<a id="api-bc9a17530eece0a5"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.ConcurrentEncoders 073ca14d8d12d983dfa7a6768698ee3d171205e48fb5b3ade115cbcbfaddd414 -->

```csharp
Inno.Rendering.GraphicsCapability.ConcurrentEncoders = 16
```

Multiple command encoders may record concurrently.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L156).

## `FragmentDepth`

<a id="api-8d7c3678bc72aa6b"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.FragmentDepth 1cefa584d0b7a111d15b624ab991a6043fd8c26e7305391fdfd6d708db69a3b2 -->

```csharp
Inno.Rendering.GraphicsCapability.FragmentDepth = 131072
```

Fragment shaders may write depth explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L208).

## `IndependentBlend`

<a id="api-a9a3f6b67f39a2a7"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.IndependentBlend a56eec87f615f7559ac330893886dd542f293d78c21646e98118df2e9b6ea0d4 -->

```csharp
Inno.Rendering.GraphicsCapability.IndependentBlend = 8
```

Independent blend state per color attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L152).

## `Index32`

<a id="api-f5d72a3c0990d77c"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.Index32 2d935d9fb5380d40d2a4c5ae96957b1756954a2799cedb86d37d4036d85bcc4f -->

```csharp
Inno.Rendering.GraphicsCapability.Index32 = 256
```

Unsigned 32-bit index buffers are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L172).

## `Indirect`

<a id="api-a5daecaadb5ccf5e"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.Indirect fb39896c338da33863377c24f89fa80f8f40d8e3d2fe68feb6762a6e490fba15 -->

```csharp
Inno.Rendering.GraphicsCapability.Indirect = 4
```

Indirect draw and dispatch commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L148).

## `Instancing`

<a id="api-e67c173731b8a61c"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.Instancing 5bfdb11a2d6527089cd88a65ebbd7b5a3bcead6d195b55c5ba8d4c868db352b9 -->

```csharp
Inno.Rendering.GraphicsCapability.Instancing = 512
```

Instanced draw input is supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L176).

## `None`

<a id="api-634c8b3b8091d1c2"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.None 4a3d3576d455223b5e07d453bdf348f7bc09b9841ee5f2c32c3cd539703973d8 -->

```csharp
Inno.Rendering.GraphicsCapability.None = 0
```

No optional feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L136).

## `ProceduralDraw`

<a id="api-55ad586b0832520a"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.ProceduralDraw 629cef499de85915e8d5aa4a6365d21a9c1e58ec6dfdf1f4e2991095dd671c8b -->

```csharp
Inno.Rendering.GraphicsCapability.ProceduralDraw = 65536
```

Procedural draws using shader vertex identifiers are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L204).

## `StorageBuffer`

<a id="api-b699dbf10e66b06d"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.StorageBuffer 24dd963e054613a4b0a758ee58cfc82704edc1dce12281c727e797a62b320496 -->

```csharp
Inno.Rendering.GraphicsCapability.StorageBuffer = 2
```

Shader-readable and writable storage buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L144).

## `StorageTexture`

<a id="api-40107dc445606a44"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.StorageTexture 7d009e3e166d4677050a3766bc9f8cf37256bfe0fe7c1057e3d12f7d19374843 -->

```csharp
Inno.Rendering.GraphicsCapability.StorageTexture = 262144
```

Shader-readable and writable storage textures are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L212).

## `SwapChain`

<a id="api-2cccbfda3e3ff68d"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.SwapChain 6970137a804199db34c46c938a1814b78361fcd1356547ff43fc8e1f18baecd1 -->

```csharp
Inno.Rendering.GraphicsCapability.SwapChain = 1024
```

Additional native presentation surfaces are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L180).

## `Texture2DArray`

<a id="api-88af4a3d122a7a6d"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.Texture2DArray 4d601e2b3a263861658c5226c9af0e7599907b4bf62752317c7a4cdb1641af87 -->

```csharp
Inno.Rendering.GraphicsCapability.Texture2DArray = 2048
```

Two-dimensional texture arrays are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L184).

## `Texture3D`

<a id="api-d35e27f38462ae2d"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.Texture3D 16a3387d8aaf90d52d3240fc369043411a008ab672f6b4f961048ba9e72f8db9 -->

```csharp
Inno.Rendering.GraphicsCapability.Texture3D = 4096
```

Three-dimensional textures are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L188).

## `TextureBlit`

<a id="api-22b651b4f31ee86c"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.TextureBlit 6d7bd63a154d4fb106187efce825ba267877a367984cc1d1c62218f5b8b9b2b2 -->

```csharp
Inno.Rendering.GraphicsCapability.TextureBlit = 32
```

Texture copy operations are supported directly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L160).

## `TextureCubeArray`

<a id="api-2cc4ed82cb44c0aa"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.TextureCubeArray 2ec7e698186e53b615ae6026360bf03999ccb607e67b8b113dc49cd978c01bd0 -->

```csharp
Inno.Rendering.GraphicsCapability.TextureCubeArray = 8192
```

Cubemap texture arrays are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L192).

## `TextureReadback`

<a id="api-3487b8ef1175ea5f"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.TextureReadback 238a945909de0ed8d4de25e51ff1399e1c25076b181d85d67cd40b60cbeea00c -->

```csharp
Inno.Rendering.GraphicsCapability.TextureReadback = 524288
```

Asynchronous texture transfer from GPU memory to CPU-visible bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L216).

## `VertexAttributeHalf`

<a id="api-62b4912a919cd00c"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.VertexAttributeHalf cc4033229841dc34214b567ec48ebbb04f77880422d4717f9a118d9d5419e979 -->

```csharp
Inno.Rendering.GraphicsCapability.VertexAttributeHalf = 16384
```

Half-precision vertex attributes are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L196).

## `VertexAttributeUInt10`

<a id="api-7b855238b4ad1267"></a>
<!-- api: F:Inno.Rendering.GraphicsCapability.VertexAttributeUInt10 49f8a4fa5440666d389ce65e9546d801c416ffcae28130124f53e4dba71de8d7 -->

```csharp
Inno.Rendering.GraphicsCapability.VertexAttributeUInt10 = 32768
```

Packed 10:10:10:2 vertex attributes are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L200).
