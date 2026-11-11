---
title: "RenderTextureDescriptor"
description: "Reference for RenderTextureDescriptor in Inno.Rendering."
uid: api.inno.rendering.b8b557bb2592ecbd
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureDescriptor`

This reference describes `RenderTextureDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderTextureDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc6529fee4750aa7) | Method |
| [`Equals`](#api-3fcbc1657706f4ed) | Method |
| [`Equals`](#api-d2f1e059087ce2ef) | Method |
| [`GetHashCode`](#api-f49f14a4ac57e518) | Method |
| [`GetSubresourceLayerCount`](#api-5011c3bfe6ce5717) | Method |
| [`arrayLayers`](#api-ca54cbaba374a7d9) | Property |
| [`depth`](#api-b530799f87f34804) | Property |
| [`dimension`](#api-9a5d68e9baf692b0) | Property |
| [`format`](#api-95286bba1dd9d19a) | Property |
| [`height`](#api-cf46d1ae3a92aa05) | Property |
| [`mipCount`](#api-c9bd8676a6ad544a) | Property |
| [`sampleCount`](#api-d269b932f961fb24) | Property |
| [`usage`](#api-9bedd16d60303544) | Property |
| [`width`](#api-b2ba9a04178d58e5) | Property |

## Type declaration

<a id="api-b8b557bb2592ecbd"></a>
<!-- api: T:Inno.Rendering.RenderTextureDescriptor e6af959fc6ebc3a66e8d7e6ca8111b00ca6ddb1d8cdf2de19c09950957425e02 -->

```csharp
public sealed class Inno.Rendering.RenderTextureDescriptor : System.IEquatable<Inno.Rendering.RenderTextureDescriptor>
```

Describes a render-graph texture independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L150).

## `#ctor`

<a id="api-dc6529fee4750aa7"></a>
<!-- api: M:Inno.Rendering.RenderTextureDescriptor.#ctor(System.Int32,System.Int32,Inno.Rendering.RenderTextureFormat,Inno.Rendering.RenderTextureUsage,System.Int32,System.Int32,System.Int32,Inno.Rendering.RenderTextureDimension,System.Int32) ecb203a29ee1c4a2296d501f628ebe3884066cef111671fc9ac36cfd1636bdb5 -->

```csharp
public Inno.Rendering.RenderTextureDescriptor.RenderTextureDescriptor(int width, int height, Inno.Rendering.RenderTextureFormat format, Inno.Rendering.RenderTextureUsage usage, int mipCount = 1, int arrayLayers = 1, int sampleCount = 1, Inno.Rendering.RenderTextureDimension dimension = Inno.Rendering.RenderTextureDimension.Texture2D, int depth = 1)
```

Creates a texture descriptor.

**Parameter `width`:** Texture width in pixels.

**Parameter `height`:** Texture height in pixels.

**Parameter `format`:** Storage format.

**Parameter `usage`:** Permitted operations.

**Parameter `mipCount`:** Number of mip levels.

**Parameter `arrayLayers`:** Number of array layers.

**Parameter `sampleCount`:** Raster sample count.

**Parameter `dimension`:** Texture dimensional shape.

**Parameter `depth`:** Base mip depth for a three-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L182).

## `Equals`

<a id="api-3fcbc1657706f4ed"></a>
<!-- api: M:Inno.Rendering.RenderTextureDescriptor.Equals(Inno.Rendering.RenderTextureDescriptor) 09adb7a4ede0ae3a8b610909d2d3faa0bab180219ca630bea35549523c9a586e -->

```csharp
public bool Inno.Rendering.RenderTextureDescriptor.Equals(Inno.Rendering.RenderTextureDescriptor? other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L316).

## `Equals`

<a id="api-d2f1e059087ce2ef"></a>
<!-- api: M:Inno.Rendering.RenderTextureDescriptor.Equals(System.Object) 94ed50e7b45fac3d612c4781eb450d6edeca75a794b071538b06ae5f1a8f401d -->

```csharp
public override bool Inno.Rendering.RenderTextureDescriptor.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L337).

## `GetHashCode`

<a id="api-f49f14a4ac57e518"></a>
<!-- api: M:Inno.Rendering.RenderTextureDescriptor.GetHashCode 8b3041a4a51749fab438d4063fb1083807cdb04f45e2d38148462ef2c16c9b74 -->

```csharp
public override int Inno.Rendering.RenderTextureDescriptor.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L345).

## `GetSubresourceLayerCount`

<a id="api-5011c3bfe6ce5717"></a>
<!-- api: M:Inno.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(System.Int32) da0bb89de8632a2ae4d71bf24b4b9144803eb1afa80fc65a4dde05a7c6394b45 -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(int mipLevel)
```

Gets the number of independently addressable layers or slices at one mip level.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** The array-layer count for 2D textures, six faces per cubemap layer, or the mip depth for 3D textures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L294).

## `arrayLayers`

<a id="api-ca54cbaba374a7d9"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.arrayLayers c89e1da6667273900996da5b3435449475321ae28a9423de0612ea6d1e85349e -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.arrayLayers { get; }
```

Gets the number of array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L268).

## `depth`

<a id="api-b530799f87f34804"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.depth 4103b44e0b9d6135b755fca682783cdf45abc9dc1e372ca48a72f040797e3ebf -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.depth { get; }
```

Gets the base mip depth for a three-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L283).

## `dimension`

<a id="api-9a5d68e9baf692b0"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.dimension def2cef57167aec37065ed9a1ebeddc5f9c04cdb4a0f5cccae3a8fa5a88077a3 -->

```csharp
public Inno.Rendering.RenderTextureDimension Inno.Rendering.RenderTextureDescriptor.dimension { get; }
```

Gets the dimensional texture shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L278).

## `format`

<a id="api-95286bba1dd9d19a"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.format 31599836eca3258a6c976245099702e0f257edcf2bd62eb3b6c427fc9c25ef64 -->

```csharp
public Inno.Rendering.RenderTextureFormat Inno.Rendering.RenderTextureDescriptor.format { get; }
```

Gets the storage format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L253).

## `height`

<a id="api-cf46d1ae3a92aa05"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.height 19baf01d180bda7cff94c996776ee65645a78ab00e3fa26148beb4ed7e63f796 -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.height { get; }
```

Gets the texture height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L248).

## `mipCount`

<a id="api-c9bd8676a6ad544a"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.mipCount b14c55f3a69688aaab9720506b5f888fbd2c802771f079fe0e82299aab592a15 -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.mipCount { get; }
```

Gets the number of mip levels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L263).

## `sampleCount`

<a id="api-d269b932f961fb24"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.sampleCount caaf4137933117b9e7190f6cb00c1d1e74f1d661192f4a822a1ddf5112be48d4 -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.sampleCount { get; }
```

Gets the raster sample count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L273).

## `usage`

<a id="api-9bedd16d60303544"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.usage 0b4efb47a53f4e89ad83d15dd3f0b39eff543e6f252f86c57aafc1eeaa77c697 -->

```csharp
public Inno.Rendering.RenderTextureUsage Inno.Rendering.RenderTextureDescriptor.usage { get; }
```

Gets permitted operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L258).

## `width`

<a id="api-b2ba9a04178d58e5"></a>
<!-- api: P:Inno.Rendering.RenderTextureDescriptor.width 8522637584e8f700500175d0db60561c47113c1dc45fa9f0b9ace13a85ab8ada -->

```csharp
public int Inno.Rendering.RenderTextureDescriptor.width { get; }
```

Gets the texture width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L243).
