---
title: "RenderTextureReadbackResult"
description: "Reference for RenderTextureReadbackResult in Inno.Rendering."
uid: api.inno.rendering.cb9fa6a3bb0cec71
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureReadbackResult`

This reference describes `RenderTextureReadbackResult` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bf2a69f9b37b23f3) | Method |
| [`data`](#api-84af3f2deb9a3035) | Property |
| [`descriptor`](#api-9b8162315c088587) | Property |
| [`mipLevel`](#api-587b3975f39df6a0) | Property |
| [`rowPitch`](#api-0049feb76eb62dd0) | Property |

## Type declaration

<a id="api-cb9fa6a3bb0cec71"></a>
<!-- api: T:Inno.Rendering.RenderTextureReadbackResult 28d8f2436a30a1c28857e655dbfa6924d4f1430f6b0c5d36822135c7c0466192 -->

```csharp
public sealed class Inno.Rendering.RenderTextureReadbackResult
```

Contains immutable bytes copied from one complete texture mip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L30).

## `#ctor`

<a id="api-bf2a69f9b37b23f3"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackResult.#ctor(Inno.Rendering.RenderTextureDescriptor,System.Int32,System.Int32,System.ReadOnlySpan{System.Byte}) 175065169a15ade9f82c65f9bb66cb7954f84c6ef430c6f1e6599a88c2d95019 -->

```csharp
public Inno.Rendering.RenderTextureReadbackResult.RenderTextureReadbackResult(Inno.Rendering.RenderTextureDescriptor descriptor, int mipLevel, int rowPitch, System.ReadOnlySpan<byte> data)
```

Creates one immutable texture readback result.

**Parameter `descriptor`:** Source texture descriptor.

**Parameter `mipLevel`:** Source mip level.

**Parameter `rowPitch`:** Number of bytes between adjacent texel rows.

**Parameter `data`:** Complete tightly packed mip bytes for every addressable layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L49).

## `data`

<a id="api-84af3f2deb9a3035"></a>
<!-- api: P:Inno.Rendering.RenderTextureReadbackResult.data cb1068acc5b02c36db5a24b1d80f31fe70df5d07fbd080cf6abd06cfabba23ca -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.RenderTextureReadbackResult.data { get; }
```

Gets complete tightly packed mip bytes for every addressable layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L86).

## `descriptor`

<a id="api-9b8162315c088587"></a>
<!-- api: P:Inno.Rendering.RenderTextureReadbackResult.descriptor e7160eef0cc9057af7d91e1f7780e6496b1e19c691217a585f887d2a936928fc -->

```csharp
public Inno.Rendering.RenderTextureDescriptor Inno.Rendering.RenderTextureReadbackResult.descriptor { get; }
```

Gets the source texture descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L71).

## `mipLevel`

<a id="api-587b3975f39df6a0"></a>
<!-- api: P:Inno.Rendering.RenderTextureReadbackResult.mipLevel 65dcbda1ba4b9efb940cba64593373026c6b7457edf850505a9aa0be96511bb0 -->

```csharp
public int Inno.Rendering.RenderTextureReadbackResult.mipLevel { get; }
```

Gets the source mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L76).

## `rowPitch`

<a id="api-0049feb76eb62dd0"></a>
<!-- api: P:Inno.Rendering.RenderTextureReadbackResult.rowPitch d99f28e6bbcab2b99fb60bac153f30414a390284305114fe20b7043ba28dccfb -->

```csharp
public int Inno.Rendering.RenderTextureReadbackResult.rowPitch { get; }
```

Gets the byte distance between adjacent rows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L81).
