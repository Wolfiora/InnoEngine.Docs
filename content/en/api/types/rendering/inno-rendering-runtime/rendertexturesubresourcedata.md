---
title: "RenderTextureSubresourceData"
description: "Reference for RenderTextureSubresourceData in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.5f9e766b3ea3638f
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderTextureSubresourceData`

This reference describes `RenderTextureSubresourceData` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55bdeb7924fb0c8a) | Method |
| [`arrayLayer`](#api-9aff4a038c9fa885) | Property |
| [`data`](#api-20cce4789c7c4d52) | Property |
| [`mipLevel`](#api-884e970c7630b973) | Property |

## Type declaration

<a id="api-5f9e766b3ea3638f"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderTextureSubresourceData d4a71d2a84854ceca0d98e60a59c6baec2fcceb869d36a37c11520ea1616fab2 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderTextureSubresourceData
```

Stores one complete texture mip and addressable layer, slice, or cubemap-face upload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L16).

## `#ctor`

<a id="api-55bdeb7924fb0c8a"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTextureSubresourceData.#ctor(System.Int32,System.Int32,System.ReadOnlySpan{System.Byte}) 6da43f3890c68ee98eaf8df10a409e35f9d0a6a4dede6c64ce9c14908678e4d3 -->

```csharp
public Inno.Rendering.Runtime.RenderTextureSubresourceData.RenderTextureSubresourceData(int mipLevel, int arrayLayer, System.ReadOnlySpan<byte> data)
```

Creates one immutable texture subresource upload.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `arrayLayer`:** Zero-based 2D array layer, 3D Z slice, or flattened cubemap face using cube-layer * 6 + face.

**Parameter `data`:** Tightly packed complete subresource bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L32).

## `arrayLayer`

<a id="api-9aff4a038c9fa885"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderTextureSubresourceData.arrayLayer 7f49c72fae3d94a2c82dbf0688dd066caa942b17bb19589e09094bcca3966427 -->

```csharp
public int Inno.Rendering.Runtime.RenderTextureSubresourceData.arrayLayer { get; }
```

Gets the zero-based array layer, volume slice, or flattened cubemap face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L54).

## `data`

<a id="api-20cce4789c7c4d52"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderTextureSubresourceData.data 8d721f74e4c84e9264719d06ddacb68d7062d225c49041f3d8dc6f09df1078b1 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.Runtime.RenderTextureSubresourceData.data { get; }
```

Gets immutable tightly packed bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L59).

## `mipLevel`

<a id="api-884e970c7630b973"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderTextureSubresourceData.mipLevel 358a37f7b92839e1bf06bc3d70129c9a2edd3997ccc3e5009b6caa1effef70b0 -->

```csharp
public int Inno.Rendering.Runtime.RenderTextureSubresourceData.mipLevel { get; }
```

Gets the zero-based mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L49).
