---
title: "GraphicsCapability"
description: "Reference for GraphicsCapability in Inno.Rendering."
uid: api.inno.rendering.runtime-script.abb9894500e5e732
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `GraphicsCapability`

This reference describes `GraphicsCapability` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlphaToCoverage`](#api-02fe0c6872ad839f) | Field |
| [`BufferCopy`](#api-af9a8681ba0cdeee) | Field |
| [`Compute`](#api-13364009301f61a3) | Field |
| [`ConcurrentEncoders`](#api-94cb5eeb86bb1ecf) | Field |
| [`FragmentDepth`](#api-4b7c75e3846c1a07) | Field |
| [`IndependentBlend`](#api-5a91913a5f6cfb58) | Field |
| [`Index32`](#api-3419c10bf05f821a) | Field |
| [`Indirect`](#api-be4f6f0a6c354fbb) | Field |
| [`Instancing`](#api-7397b3d7e0241a9d) | Field |
| [`None`](#api-d616d90541e51606) | Field |
| [`ProceduralDraw`](#api-727b5427b524e0fe) | Field |
| [`StorageBuffer`](#api-54aed400b3dd305d) | Field |
| [`StorageTexture`](#api-6c0b16729c080e6d) | Field |
| [`SwapChain`](#api-381fdc54ad21dddd) | Field |
| [`Texture2DArray`](#api-f1cafa27ae87b5e3) | Field |
| [`Texture3D`](#api-fbf1c6ca65583157) | Field |
| [`TextureBlit`](#api-bada162e78c7970b) | Field |
| [`TextureCubeArray`](#api-05c3add350694bbe) | Field |
| [`TextureReadback`](#api-c99763a5a4d8c801) | Field |
| [`VertexAttributeHalf`](#api-ecf3d6328ca92b25) | Field |
| [`VertexAttributeUInt10`](#api-af003341b3b12640) | Field |

## Type declaration

<a id="api-abb9894500e5e732"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsCapability c23755a9a6b238f56f00e7cb457a0b642dc8dd16ee554c0d6c14c65f75ce8cb5 -->

```csharp
public enum InnoEngine.Rendering.GraphicsCapability : int
```

Declares backend-neutral optional graphics functionality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L131).

## `AlphaToCoverage`

<a id="api-02fe0c6872ad839f"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.AlphaToCoverage 02db2ae35de2b63ae2606e4811b56c72c2433fdcbe05b3355e77e3468dcf7296 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.AlphaToCoverage = 128
```

Alpha-to-coverage rasterization is supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L168).

## `BufferCopy`

<a id="api-af9a8681ba0cdeee"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.BufferCopy 59794ead19233022a355fed54ce468334fafe742c089235d1d7bd1c69c121672 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.BufferCopy = 64
```

General GPU buffer copy operations are supported directly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L164).

## `Compute`

<a id="api-13364009301f61a3"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.Compute c6f090debcd0005182e9def0ef492aa43c192618a90862d866460b521b33903d -->

```csharp
InnoEngine.Rendering.GraphicsCapability.Compute = 1
```

Compute shader dispatch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L140).

## `ConcurrentEncoders`

<a id="api-94cb5eeb86bb1ecf"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.ConcurrentEncoders 9cf2b9fdfc04ec8c80bbf2a5c88a52b0af061f79a21de00d0ec5953ba9a16663 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.ConcurrentEncoders = 16
```

Multiple command encoders may record concurrently.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L156).

## `FragmentDepth`

<a id="api-4b7c75e3846c1a07"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.FragmentDepth 92138c7ae680c629076dd627ad02af42240b04aff0ccc26b15538718e0b6664c -->

```csharp
InnoEngine.Rendering.GraphicsCapability.FragmentDepth = 131072
```

Fragment shaders may write depth explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L208).

## `IndependentBlend`

<a id="api-5a91913a5f6cfb58"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.IndependentBlend 9a91c68cd646621e078af51112e11ddd8ad28304191e5265d6a0f8d0b11f9a90 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.IndependentBlend = 8
```

Independent blend state per color attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L152).

## `Index32`

<a id="api-3419c10bf05f821a"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.Index32 62eab972b3a6660059e1a3d6b7be2c32517f67e7e2f3b2ffe896fc8dc9aa499a -->

```csharp
InnoEngine.Rendering.GraphicsCapability.Index32 = 256
```

Unsigned 32-bit index buffers are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L172).

## `Indirect`

<a id="api-be4f6f0a6c354fbb"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.Indirect a383ef87ae6cf22a66e07fd27fd4b1d70c4560557cf28d68f0c3892c1491b0cd -->

```csharp
InnoEngine.Rendering.GraphicsCapability.Indirect = 4
```

Indirect draw and dispatch commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L148).

## `Instancing`

<a id="api-7397b3d7e0241a9d"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.Instancing b3a920bbf907da26456e084cfb9ed7aa6794ed29fdfb37996349fea2e3e504e3 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.Instancing = 512
```

Instanced draw input is supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L176).

## `None`

<a id="api-d616d90541e51606"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.None e8e178cee95d5c5ac88041fe09fbe4c39675f9a6f152876aefc1d4e17c002e77 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.None = 0
```

No optional feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L136).

## `ProceduralDraw`

<a id="api-727b5427b524e0fe"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.ProceduralDraw f5a5de613bd111ed0df3edd3bdf7ed3431d107b36348f4763ceb86cf29e14090 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.ProceduralDraw = 65536
```

Procedural draws using shader vertex identifiers are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L204).

## `StorageBuffer`

<a id="api-54aed400b3dd305d"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.StorageBuffer a069b1bf699f8d51e3d940c88c2ed66b868487c3611761178f25fb940a425047 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.StorageBuffer = 2
```

Shader-readable and writable storage buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L144).

## `StorageTexture`

<a id="api-6c0b16729c080e6d"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.StorageTexture e43de58c71cfccdf1ce8da0666929c635350a8d386658b54ecf1c41215d6bbe6 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.StorageTexture = 262144
```

Shader-readable and writable storage textures are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L212).

## `SwapChain`

<a id="api-381fdc54ad21dddd"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.SwapChain fcf963304b1b36b48b4a9ac84d6598dee42df203404e91d62db7819dd21b1579 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.SwapChain = 1024
```

Additional native presentation surfaces are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L180).

## `Texture2DArray`

<a id="api-f1cafa27ae87b5e3"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.Texture2DArray c6d97dbc951cd8b46c4fed140a5cb6b8469b83d666fd9d1a61bc14515c91fc3d -->

```csharp
InnoEngine.Rendering.GraphicsCapability.Texture2DArray = 2048
```

Two-dimensional texture arrays are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L184).

## `Texture3D`

<a id="api-fbf1c6ca65583157"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.Texture3D ae90dd8f06754a14e742a62bf42b6f5c6a3e3b81460c9ca4afdd0190e1c0f1e7 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.Texture3D = 4096
```

Three-dimensional textures are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L188).

## `TextureBlit`

<a id="api-bada162e78c7970b"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.TextureBlit 56593b6c139d62b5ad30c1dcc05b9b572a526ee355ec62ba509bf95eb3dffc11 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.TextureBlit = 32
```

Texture copy operations are supported directly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L160).

## `TextureCubeArray`

<a id="api-05c3add350694bbe"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.TextureCubeArray 181632e8dfc548294d7bcad1b1d3e8390cb5844538c91860ee3bf1d0c1140a99 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.TextureCubeArray = 8192
```

Cubemap texture arrays are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L192).

## `TextureReadback`

<a id="api-c99763a5a4d8c801"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.TextureReadback f08cb76d4de71ddb4502dd7c820a108f30155ac12d14b82d945c039c84d28a43 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.TextureReadback = 524288
```

Asynchronous texture transfer from GPU memory to CPU-visible bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L216).

## `VertexAttributeHalf`

<a id="api-ecf3d6328ca92b25"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.VertexAttributeHalf de39092db6abe872540f0fd4fd90acd3e2e8d2610fae244a0d31655804a14dd4 -->

```csharp
InnoEngine.Rendering.GraphicsCapability.VertexAttributeHalf = 16384
```

Half-precision vertex attributes are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L196).

## `VertexAttributeUInt10`

<a id="api-af003341b3b12640"></a>
<!-- api: F:InnoEngine.Rendering.GraphicsCapability.VertexAttributeUInt10 4ffe2e41d112697eeb7d849f1811de0d364455f662205ccb9c797ddea564727f -->

```csharp
InnoEngine.Rendering.GraphicsCapability.VertexAttributeUInt10 = 32768
```

Packed 10:10:10:2 vertex attributes are supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L200).
