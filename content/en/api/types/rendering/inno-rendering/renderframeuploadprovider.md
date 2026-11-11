---
title: "RenderFrameUploadProvider"
description: "Reference for RenderFrameUploadProvider in Inno.Rendering."
uid: api.inno.rendering.1ab289b3c7e3cba7
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderFrameUploadProvider`

This reference describes `RenderFrameUploadProvider` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ee5e792fae52483d) | Method |
| [`CreateBufferSlice`](#api-089be4f77ff37626) | Method |

## Type declaration

<a id="api-1ab289b3c7e3cba7"></a>
<!-- api: T:Inno.Rendering.RenderFrameUploadProvider 3955691de93596bdd2b5097313f202d7fc7533902312cba1665f842b38b76c70 -->

```csharp
public abstract class Inno.Rendering.RenderFrameUploadProvider
```

Provides protected slice construction for replaceable frame-upload service implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L127).

## `#ctor`

<a id="api-ee5e792fae52483d"></a>
<!-- api: M:Inno.Rendering.RenderFrameUploadProvider.#ctor d8dcd81080c47cec67b4b16eea16aea4e580bc9d17285c940ce6a5b7526bd22d -->

```csharp
protected Inno.Rendering.RenderFrameUploadProvider.RenderFrameUploadProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L127).

## `CreateBufferSlice`

<a id="api-089be4f77ff37626"></a>
<!-- api: M:Inno.Rendering.RenderFrameUploadProvider.CreateBufferSlice(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32,Inno.Rendering.RenderBufferUsage,System.UInt64) a0525bdf667c3546896a867dd348a7e9fa224e2a5da0ddc64f5d7b7592e6fb2e -->

```csharp
protected static Inno.Rendering.RenderBufferSlice Inno.Rendering.RenderFrameUploadProvider.CreateBufferSlice(Inno.Rendering.PersistentBufferHandle buffer, int firstElement, int elementCount, Inno.Rendering.RenderBufferUsage usage, ulong frameIndex)
```

Creates a frame-scoped slice over a provider-owned persistent upload buffer.

**Parameter `buffer`:** The persistent upload page backing the slice.

**Parameter `firstElement`:** The zero-based first uploaded element.

**Parameter `elementCount`:** The positive number of uploaded elements.

**Parameter `usage`:** The GPU uses supported by the uploaded range.

**Parameter `frameIndex`:** The render frame during which the slice remains valid.

**Returns:** An opaque frame-scoped buffer slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L150).
