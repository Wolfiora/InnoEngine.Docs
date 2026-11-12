---
title: "RasterPassBuilder"
description: "Reference for RasterPassBuilder in Inno.Rendering."
uid: api.inno.rendering.runtime-script.3707c21e89b4fe7b
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RasterPassBuilder`

This reference describes `RasterPassBuilder` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Rendering.RenderPassBuilder`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9bf489e7ce226e69) | Method |
| [`ClearPresentationTarget`](#api-0f207a5dda80461b) | Method |
| [`SetViewTransform`](#api-807180ff9f651657) | Method |
| [`UseColorAttachment`](#api-c1d47a578f6955b5) | Method |
| [`UseDepthAttachment`](#api-348f800bf968455f) | Method |
| [`UseSurface`](#api-7812c46ed5c1912a) | Method |

## Type declaration

<a id="api-3707c21e89b4fe7b"></a>
<!-- api: T:InnoEngine.Rendering.RasterPassBuilder d43a27e5e3caa77118261f2526283e579d355bf5e8c0b1ec100e9eceb8f664a4 -->

```csharp
public sealed class InnoEngine.Rendering.RasterPassBuilder : InnoEngine.Rendering.RenderPassBuilder
```

Declares raster attachments and resource access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L9).

## `#ctor`

<a id="api-9bf489e7ce226e69"></a>
<!-- api: M:InnoEngine.Rendering.RasterPassBuilder.#ctor f83aa660d669d14f982f7322ad7e8c6541261d8b36b0daecf7e9b450cffff772 -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder.RasterPassBuilder()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L9).

## `ClearPresentationTarget`

<a id="api-0f207a5dda80461b"></a>
<!-- api: M:InnoEngine.Rendering.RasterPassBuilder.ClearPresentationTarget(InnoEngine.Rendering.RenderClearColor) 95d4a81039edc7589ab63a58d4947aee8c3c4193a57750514ec987e970242e06 -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder InnoEngine.Rendering.RasterPassBuilder.ClearPresentationTarget(InnoEngine.Rendering.RenderClearColor clearColor)
```

Clears the primary backbuffer or detached presentation surface before this pass.

**Parameter `clearColor`:** Linear color written before draw commands.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L71).

## `SetViewTransform`

<a id="api-807180ff9f651657"></a>
<!-- api: M:InnoEngine.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single}) 4bbc8fe96217a324e9ea6b2b0539932a5cd93883e96c0ae9493720b10cef4db5 -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder InnoEngine.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan<float> viewMatrix, System.ReadOnlySpan<float> projectionMatrix)
```

Sets backend-ready column-major transform matrices for this raster view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L29).

## `UseColorAttachment`

<a id="api-c1d47a578f6955b5"></a>
<!-- api: M:InnoEngine.Rendering.RasterPassBuilder.UseColorAttachment(InnoEngine.Rendering.RenderTextureHandle,System.Int32,InnoEngine.Rendering.RenderLoadAction,InnoEngine.Rendering.RenderStoreAction,InnoEngine.Rendering.RenderClearColor,System.Int32,System.Int32) 367d9995aa0b524ca81dbc31f0943e70db77e83178052ad424274431a525f86f -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder InnoEngine.Rendering.RasterPassBuilder.UseColorAttachment(InnoEngine.Rendering.RenderTextureHandle texture, int slot, InnoEngine.Rendering.RenderLoadAction loadAction, InnoEngine.Rendering.RenderStoreAction storeAction = InnoEngine.Rendering.RenderStoreAction.Store, InnoEngine.Rendering.RenderClearColor clearColor = default(InnoEngine.Rendering.RenderClearColor), int mipLevel = 0, int arrayLayer = 0)
```

Attaches a color texture.

**Parameter `texture`:** Color attachment texture.

**Parameter `slot`:** Zero-based color attachment slot.

**Parameter `loadAction`:** Initial content behavior.

**Parameter `storeAction`:** Final content behavior.

**Parameter `clearColor`:** Linear clear value used for `InnoEngine.Rendering.RenderLoadAction.Clear`.

**Parameter `mipLevel`:** Attached mip level.

**Parameter `arrayLayer`:** Attached texture-array layer.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L106).

## `UseDepthAttachment`

<a id="api-348f800bf968455f"></a>
<!-- api: M:InnoEngine.Rendering.RasterPassBuilder.UseDepthAttachment(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderLoadAction,InnoEngine.Rendering.RenderStoreAction,System.Single,System.Byte,System.Int32,System.Int32) c477747d116f11fdbac4a9ca064dbe6cd0c4305095f9a3337e00b41ec4b6465c -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder InnoEngine.Rendering.RasterPassBuilder.UseDepthAttachment(InnoEngine.Rendering.RenderTextureHandle texture, InnoEngine.Rendering.RenderLoadAction loadAction, InnoEngine.Rendering.RenderStoreAction storeAction = InnoEngine.Rendering.RenderStoreAction.Store, float clearDepth = 1, byte clearStencil = 0, int mipLevel = 0, int arrayLayer = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L159).

## `UseSurface`

<a id="api-7812c46ed5c1912a"></a>
<!-- api: M:InnoEngine.Rendering.RasterPassBuilder.UseSurface(InnoEngine.Rendering.RenderSurfaceHandle) 1b29ea178d287df70af01367bf4e90015b9d5c3fe87927603d892425b87cf791 -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder InnoEngine.Rendering.RasterPassBuilder.UseSurface(InnoEngine.Rendering.RenderSurfaceHandle surface)
```

Directs this pass to a persistent presentation surface instead of the primary backbuffer.

**Parameter `surface`:** Surface owned by the active graphics-device generation.

**Returns:** This builder for fluent declarations.

**Throws `System.ArgumentException`:** Thrown when `surface` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RasterPassBuilder.cs#L50).
