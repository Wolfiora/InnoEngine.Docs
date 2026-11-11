---
title: "ComputePassBuilder"
description: "Reference for ComputePassBuilder in Inno.Rendering."
uid: api.inno.rendering.44012bebb6347363
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ComputePassBuilder`

This reference describes `ComputePassBuilder` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Rendering.RenderPassBuilder`.

## Members

| Member | Kind |
| --- | --- |
| [`ReadStorageBuffer`](#api-d7c413aabbe6347c) | Method |
| [`ReadStorageTexture`](#api-bea17fc6dcd6c581) | Method |
| [`ReadWriteStorageBuffer`](#api-246c183bd656e139) | Method |
| [`ReadWriteStorageTexture`](#api-1c864a3bc37279cd) | Method |
| [`SetViewTransform`](#api-11d9f8d226f7f79c) | Method |
| [`WriteStorageBuffer`](#api-68567816c461c19a) | Method |
| [`WriteStorageTexture`](#api-21b0f5884e65091e) | Method |

## Type declaration

<a id="api-44012bebb6347363"></a>
<!-- api: T:Inno.Rendering.ComputePassBuilder 4d83360a565805834f00378cf9df9544689116a39c095a86b2dc675bdc48487c -->

```csharp
public sealed class Inno.Rendering.ComputePassBuilder : Inno.Rendering.RenderPassBuilder
```

Declares compute resource reads and unordered writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L9).

## `ReadStorageBuffer`

<a id="api-d7c413aabbe6347c"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.ReadStorageBuffer(Inno.Rendering.RenderBufferHandle) 102fd833058a1dc5e77a80d377022b5b73b1b22323e9dab13d931083cd480b96 -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.ReadStorageBuffer(Inno.Rendering.RenderBufferHandle buffer)
```

Declares an unordered buffer read.

**Parameter `buffer`:** Storage buffer read by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L104).

## `ReadStorageTexture`

<a id="api-bea17fc6dcd6c581"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.ReadStorageTexture(Inno.Rendering.RenderTextureHandle) b612bfd3af4b0af27a40731851830a55aa75089b4f2cd3d8b83e214ec4a976a9 -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.ReadStorageTexture(Inno.Rendering.RenderTextureHandle texture)
```

Declares an unordered texture read.

**Parameter `texture`:** Storage texture read by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L47).

## `ReadWriteStorageBuffer`

<a id="api-246c183bd656e139"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.ReadWriteStorageBuffer(Inno.Rendering.RenderBufferHandle) 829e414ef177288dbeff385ea8c1c37a78cc17e3763675b891789ffa46f399fc -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.ReadWriteStorageBuffer(Inno.Rendering.RenderBufferHandle buffer)
```

Declares an unordered buffer read and write.

**Parameter `buffer`:** Storage buffer read and written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L142).

## `ReadWriteStorageTexture`

<a id="api-1c864a3bc37279cd"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.ReadWriteStorageTexture(Inno.Rendering.RenderTextureHandle) fe296cd0b2d23576542a9e2268cd43f500ad8815382bb5234a8eded94b28878e -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.ReadWriteStorageTexture(Inno.Rendering.RenderTextureHandle texture)
```

Declares an unordered texture read and write.

**Parameter `texture`:** Storage texture read and written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L85).

## `SetViewTransform`

<a id="api-11d9f8d226f7f79c"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single}) 0750b925fa016d28e88207aa76e0dd25ec7b4e4dc1c36dd7a7613ec8c0a1d3c2 -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan<float> viewMatrix, System.ReadOnlySpan<float> projectionMatrix)
```

Sets backend-ready column-major transform matrices exposed to this compute view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L29).

## `WriteStorageBuffer`

<a id="api-68567816c461c19a"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.WriteStorageBuffer(Inno.Rendering.RenderBufferHandle) 0abb222231066a4b70b30fd7ca4ba471558a77b67135cacd1d0d4621cdc20028 -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.WriteStorageBuffer(Inno.Rendering.RenderBufferHandle buffer)
```

Declares an unordered buffer write.

**Parameter `buffer`:** Storage buffer written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L123).

## `WriteStorageTexture`

<a id="api-21b0f5884e65091e"></a>
<!-- api: M:Inno.Rendering.ComputePassBuilder.WriteStorageTexture(Inno.Rendering.RenderTextureHandle) bb3cb81e49fe4fa595f3c3766ef04560dedc94a9865f8e8df9d999d0a5eb2eec -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.ComputePassBuilder.WriteStorageTexture(Inno.Rendering.RenderTextureHandle texture)
```

Declares an unordered texture write.

**Parameter `texture`:** Storage texture written by compute work.

**Returns:** This builder for fluent declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/ComputePassBuilder.cs#L66).
