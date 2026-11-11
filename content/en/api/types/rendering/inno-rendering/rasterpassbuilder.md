---
title: "RasterPassBuilder"
description: "Reference for RasterPassBuilder in Inno.Rendering."
uid: api.inno.rendering.c3be753d5be5c0ce
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RasterPassBuilder`

This reference describes `RasterPassBuilder` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Rendering.RenderPassBuilder`.

## Members

| Member | Kind |
| --- | --- |
| [`ClearPresentationTarget`](#api-a37fdc3f794957f1) | Method |
| [`SetViewTransform`](#api-3db74e4561a6c9b4) | Method |
| [`UseColorAttachment`](#api-582212eb2d875aef) | Method |
| [`UseDepthAttachment`](#api-5510208ebc968b0b) | Method |
| [`UseSurface`](#api-8b3252fb4f9fa558) | Method |

## Type declaration

<a id="api-c3be753d5be5c0ce"></a>
<!-- api: T:Inno.Rendering.RasterPassBuilder 2d58e912d27927cf0f2339d41e641c9c3e468cb0aa43d0552825c591197bd4a8 -->

```csharp
public sealed class Inno.Rendering.RasterPassBuilder : Inno.Rendering.RenderPassBuilder
```

Declares raster attachments and resource access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L9).

## `ClearPresentationTarget`

<a id="api-a37fdc3f794957f1"></a>
<!-- api: M:Inno.Rendering.RasterPassBuilder.ClearPresentationTarget(Inno.Rendering.RenderClearColor) 24f4c5dc0ebe9002d078310251a90476887da2b611970979e3c43f61e97db3e1 -->

```csharp
public Inno.Rendering.RasterPassBuilder Inno.Rendering.RasterPassBuilder.ClearPresentationTarget(Inno.Rendering.RenderClearColor clearColor)
```

Clears the primary backbuffer or detached presentation surface before this pass.

**Parameter `clearColor`:** Linear color written before draw commands.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L71).

## `SetViewTransform`

<a id="api-3db74e4561a6c9b4"></a>
<!-- api: M:Inno.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single}) 37b1c7bacf3f99b1d3930cec8c574c9ce7c895c9495d52636873f47c86bfa15b -->

```csharp
public Inno.Rendering.RasterPassBuilder Inno.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan<float> viewMatrix, System.ReadOnlySpan<float> projectionMatrix)
```

Sets backend-ready column-major transform matrices for this raster view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L29).

## `UseColorAttachment`

<a id="api-582212eb2d875aef"></a>
<!-- api: M:Inno.Rendering.RasterPassBuilder.UseColorAttachment(Inno.Rendering.RenderTextureHandle,System.Int32,Inno.Rendering.RenderLoadAction,Inno.Rendering.RenderStoreAction,Inno.Rendering.RenderClearColor,System.Int32,System.Int32) 7bc112e05b47f7a1440903b2caed16c53d5a1c0d13c4416b87c6fb21b0f5ba25 -->

```csharp
public Inno.Rendering.RasterPassBuilder Inno.Rendering.RasterPassBuilder.UseColorAttachment(Inno.Rendering.RenderTextureHandle texture, int slot, Inno.Rendering.RenderLoadAction loadAction, Inno.Rendering.RenderStoreAction storeAction = Inno.Rendering.RenderStoreAction.Store, Inno.Rendering.RenderClearColor clearColor = default(Inno.Rendering.RenderClearColor), int mipLevel = 0, int arrayLayer = 0)
```

Attaches a color texture.

**Parameter `texture`:** Color attachment texture.

**Parameter `slot`:** Zero-based color attachment slot.

**Parameter `loadAction`:** Initial content behavior.

**Parameter `storeAction`:** Final content behavior.

**Parameter `clearColor`:** Linear clear value used for `Inno.Rendering.RenderLoadAction.Clear`.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L106).

## `UseDepthAttachment`

<a id="api-5510208ebc968b0b"></a>
<!-- api: M:Inno.Rendering.RasterPassBuilder.UseDepthAttachment(Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderLoadAction,Inno.Rendering.RenderStoreAction,System.Single,System.Byte,System.Int32,System.Int32) fef9eeb3ed601dca8a523d3e354a1eee046b9e6570f9be17e979e9e5c4d98077 -->

```csharp
public Inno.Rendering.RasterPassBuilder Inno.Rendering.RasterPassBuilder.UseDepthAttachment(Inno.Rendering.RenderTextureHandle texture, Inno.Rendering.RenderLoadAction loadAction, Inno.Rendering.RenderStoreAction storeAction = Inno.Rendering.RenderStoreAction.Store, float clearDepth = 1, byte clearStencil = 0, int mipLevel = 0, int arrayLayer = 0)
```

Attaches a depth or depth-stencil texture.

**Parameter `texture`:** Depth attachment texture.

**Parameter `loadAction`:** Initial content behavior.

**Parameter `storeAction`:** Final content behavior.

**Parameter `clearDepth`:** Depth clear value.

**Parameter `clearStencil`:** Stencil clear value.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L159).

## `UseSurface`

<a id="api-8b3252fb4f9fa558"></a>
<!-- api: M:Inno.Rendering.RasterPassBuilder.UseSurface(Inno.Rendering.RenderSurfaceHandle) d6f71cb8c862405313c955d1449607ca2270ad349f789169c2afc5d4cc122654 -->

```csharp
public Inno.Rendering.RasterPassBuilder Inno.Rendering.RasterPassBuilder.UseSurface(Inno.Rendering.RenderSurfaceHandle surface)
```

Directs this pass to a persistent presentation surface instead of the primary backbuffer.

**Parameter `surface`:** Surface owned by the active graphics-device generation.

**Returns:** This builder for fluent declarations.

**Throws `System.ArgumentException`:** Thrown when `surface` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L50).
