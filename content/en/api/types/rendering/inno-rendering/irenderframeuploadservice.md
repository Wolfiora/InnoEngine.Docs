---
title: "IRenderFrameUploadService"
description: "Reference for IRenderFrameUploadService in Inno.Rendering."
uid: api.inno.rendering.f6fdd4b380de8071
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `IRenderFrameUploadService`

This reference describes `IRenderFrameUploadService` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`UploadBuffer`](#api-cb9fa03c812d0334) | Method |

## Type declaration

<a id="api-f6fdd4b380de8071"></a>
<!-- api: T:Inno.Rendering.IRenderFrameUploadService 228d21c92971d8e881a66390bc838e9ab04b2491600de74371afbade4e4ca22d -->

```csharp
public interface Inno.Rendering.IRenderFrameUploadService
```

Streams immutable CPU data into reusable GPU pages for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/IRenderFrameUploadService.cs#L10).

## `UploadBuffer`

<a id="api-cb9fa03c812d0334"></a>
<!-- api: M:Inno.Rendering.IRenderFrameUploadService.UploadBuffer(Inno.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String) 7c0efbb9d048783adc0482ca0498b755cbb5eaf82bba28a0d39cd96056725364 -->

```csharp
Inno.Rendering.RenderBufferSlice Inno.Rendering.IRenderFrameUploadService.UploadBuffer(Inno.Rendering.RenderBufferUploadDescriptor descriptor, System.ReadOnlyMemory<byte> data, string name)
```

Uploads complete elements and returns a slice valid only during the current frame.

**Parameter `descriptor`:** Element interpretation and permitted GPU uses.

**Parameter `data`:** Tightly packed complete element bytes.

**Parameter `name`:** Diagnostic name used when a backing page is allocated.

**Returns:** A current-frame slice covering the uploaded elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/IRenderFrameUploadService.cs#L27).
