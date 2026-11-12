---
title: "RenderBufferUploadDescriptor"
description: "Reference for RenderBufferUploadDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.a6c18cb2240c5fa7
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBufferUploadDescriptor`

This reference describes `RenderBufferUploadDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d5737a21532417d8) | Method |
| [`elementStride`](#api-a77ea30e4d286a16) | Property |
| [`indexFormat`](#api-29879bf3da87cc58) | Property |
| [`usage`](#api-71ebb24dcda39792) | Property |
| [`vertexLayout`](#api-86b6855d2b7bb348) | Property |

## Type declaration

<a id="api-a6c18cb2240c5fa7"></a>
<!-- api: T:InnoEngine.Rendering.RenderBufferUploadDescriptor 79b67be0a5677e200e8eed8ad1a571611203a560d7117f2991caa3c44a745967 -->

```csharp
public sealed class InnoEngine.Rendering.RenderBufferUploadDescriptor
```

Describes one CPU-to-GPU buffer upload that remains valid for the current frame only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L8).

## `#ctor`

<a id="api-d5737a21532417d8"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferUploadDescriptor.#ctor(System.Int32,InnoEngine.Rendering.RenderBufferUsage,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.RenderIndexFormat) f8581dde1e8ead02e66b60f66d53376eaad482bc7e96d479de27ab834af4daf1 -->

```csharp
public InnoEngine.Rendering.RenderBufferUploadDescriptor.RenderBufferUploadDescriptor(int elementStride, InnoEngine.Rendering.RenderBufferUsage usage, InnoEngine.Rendering.RenderVertexLayout? vertexLayout = null, InnoEngine.Rendering.RenderIndexFormat indexFormat = InnoEngine.Rendering.RenderIndexFormat.UInt32)
```

Creates a frame upload descriptor.

**Parameter `elementStride`:** Element size in bytes.

**Parameter `usage`:** Vertex, index, storage, or compatible combined usage.

**Parameter `vertexLayout`:** Required layout when vertex usage is present.

**Parameter `indexFormat`:** Index representation when index usage is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L25).

## `elementStride`

<a id="api-a77ea30e4d286a16"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferUploadDescriptor.elementStride 2560d8337709298ff7c406ec2680d7b53b8c50fc5c51a9954d4e08c3643ad6c5 -->

```csharp
public int InnoEngine.Rendering.RenderBufferUploadDescriptor.elementStride { get; }
```

Gets the element size in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L63).

## `indexFormat`

<a id="api-29879bf3da87cc58"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferUploadDescriptor.indexFormat f25a6c941cb8c1a0fbd15fdd92334a0542fe9e74154a389658439d5d2bc5e496 -->

```csharp
public InnoEngine.Rendering.RenderIndexFormat InnoEngine.Rendering.RenderBufferUploadDescriptor.indexFormat { get; }
```

Gets the index representation when index usage is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L78).

## `usage`

<a id="api-71ebb24dcda39792"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferUploadDescriptor.usage 0448b2af4fcaed6a632629f7ad3db4a7ee500b1e28df4084cf8a4a536b247f02 -->

```csharp
public InnoEngine.Rendering.RenderBufferUsage InnoEngine.Rendering.RenderBufferUploadDescriptor.usage { get; }
```

Gets permitted GPU uses.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L68).

## `vertexLayout`

<a id="api-86b6855d2b7bb348"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferUploadDescriptor.vertexLayout 6b6ba68c05aecb1b0441c4a1b4321c6af3a50f42df8d44d8cdd2238d54c8d50f -->

```csharp
public InnoEngine.Rendering.RenderVertexLayout? InnoEngine.Rendering.RenderBufferUploadDescriptor.vertexLayout { get; }
```

Gets the vertex layout when vertex usage is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L73).
