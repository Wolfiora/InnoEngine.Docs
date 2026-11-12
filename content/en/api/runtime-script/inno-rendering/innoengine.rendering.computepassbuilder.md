---
title: "ComputePassBuilder"
description: "Reference for ComputePassBuilder in Inno.Rendering."
uid: api.inno.rendering.runtime-script.2aae2ebf25fc89bc
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ComputePassBuilder`

This reference describes `ComputePassBuilder` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Rendering.RenderPassBuilder`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e9cb9b36f6593a08) | Method |
| [`ReadStorageBuffer`](#api-f70b7722a83d83a9) | Method |
| [`ReadStorageTexture`](#api-40a23e89229f170b) | Method |
| [`ReadWriteStorageBuffer`](#api-4350b7f2e8af008e) | Method |
| [`ReadWriteStorageTexture`](#api-06ca57d59c2d921d) | Method |
| [`SetViewTransform`](#api-151e5bd37a21c0fc) | Method |
| [`WriteStorageBuffer`](#api-d0490e7d4ee45258) | Method |
| [`WriteStorageTexture`](#api-88a5ed55e158226e) | Method |

## Type declaration

<a id="api-2aae2ebf25fc89bc"></a>
<!-- api: T:InnoEngine.Rendering.ComputePassBuilder 6b1d1bbf97ac8a355812fe8e883e5364f950dcb5be809226bb32a5b57391a8f6 -->

```csharp
public sealed class InnoEngine.Rendering.ComputePassBuilder : InnoEngine.Rendering.RenderPassBuilder
```

Declares compute resource reads and unordered writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L9).

## `#ctor`

<a id="api-e9cb9b36f6593a08"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.#ctor c9962d4e69b858bf13346e90e6934cb328147f9e2e4fe549b397d2d1bbf06947 -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder.ComputePassBuilder()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L9).

## `ReadStorageBuffer`

<a id="api-f70b7722a83d83a9"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.ReadStorageBuffer(InnoEngine.Rendering.RenderBufferHandle) 4f131bf3869c1e2d312ee52413b6c7a088f6bbb757dd4bf12115dc183ba56734 -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.ReadStorageBuffer(InnoEngine.Rendering.RenderBufferHandle buffer)
```

Declares an unordered buffer read.

**Parameter `buffer`:** Storage buffer read by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L104).

## `ReadStorageTexture`

<a id="api-40a23e89229f170b"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.ReadStorageTexture(InnoEngine.Rendering.RenderTextureHandle) 3a696681f03255d28d2e87c3e103ed95c5e8fc7d26e1957ead95e7538a96963a -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.ReadStorageTexture(InnoEngine.Rendering.RenderTextureHandle texture)
```

Declares an unordered texture read.

**Parameter `texture`:** Storage texture read by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L47).

## `ReadWriteStorageBuffer`

<a id="api-4350b7f2e8af008e"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.ReadWriteStorageBuffer(InnoEngine.Rendering.RenderBufferHandle) 6ad3cd6a566604ab2031d26f70f4c970865401ebe775858066cfd2fbe847067b -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.ReadWriteStorageBuffer(InnoEngine.Rendering.RenderBufferHandle buffer)
```

Declares an unordered buffer read and write.

**Parameter `buffer`:** Storage buffer read and written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L142).

## `ReadWriteStorageTexture`

<a id="api-06ca57d59c2d921d"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.ReadWriteStorageTexture(InnoEngine.Rendering.RenderTextureHandle) cdcd5d472a9440c419bc15e9e18053cf08e4f365ab78b287f7a857041911d676 -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.ReadWriteStorageTexture(InnoEngine.Rendering.RenderTextureHandle texture)
```

Declares an unordered texture read and write.

**Parameter `texture`:** Storage texture read and written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L85).

## `SetViewTransform`

<a id="api-151e5bd37a21c0fc"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single}) 0f3d62282d8dc2161cb5691945316be127dc539042c10645ed8dbcc718794729 -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan<float> viewMatrix, System.ReadOnlySpan<float> projectionMatrix)
```

Sets backend-ready column-major transform matrices exposed to this compute view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L29).

## `WriteStorageBuffer`

<a id="api-d0490e7d4ee45258"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.WriteStorageBuffer(InnoEngine.Rendering.RenderBufferHandle) 89c46b704f403382785ea5a5649ef0f121f7d00f628ca96bd65bf85d92795434 -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.WriteStorageBuffer(InnoEngine.Rendering.RenderBufferHandle buffer)
```

Declares an unordered buffer write.

**Parameter `buffer`:** Storage buffer written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L123).

## `WriteStorageTexture`

<a id="api-88a5ed55e158226e"></a>
<!-- api: M:InnoEngine.Rendering.ComputePassBuilder.WriteStorageTexture(InnoEngine.Rendering.RenderTextureHandle) d1b3ec181bfee7ad4aff89e1510184538f8ec282f8d216e4df9cf5ad1226148c -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.ComputePassBuilder.WriteStorageTexture(InnoEngine.Rendering.RenderTextureHandle texture)
```

Declares an unordered texture write.

**Parameter `texture`:** Storage texture written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L66).
