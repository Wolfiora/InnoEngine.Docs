---
title: "RenderBufferUploadDescriptor"
description: "Reference for RenderBufferUploadDescriptor in Inno.Rendering."
uid: api.inno.rendering.bdc70d16796bfeef
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBufferUploadDescriptor`

This reference describes `RenderBufferUploadDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-354702231d3dd685) | Method |
| [`elementStride`](#api-e86394f72f8eff42) | Property |
| [`indexFormat`](#api-0c64b4a54a586df5) | Property |
| [`usage`](#api-099c52ee13ec9d7b) | Property |
| [`vertexLayout`](#api-ca335b635d83a5ac) | Property |

## Type declaration

<a id="api-bdc70d16796bfeef"></a>
<!-- api: T:Inno.Rendering.RenderBufferUploadDescriptor e1f804f2b6f71dabea15e2409b8fd03edfadd80d0ebcea3a0ba02b30e20914de -->

```csharp
public sealed class Inno.Rendering.RenderBufferUploadDescriptor
```

Describes one CPU-to-GPU buffer upload that remains valid for the current frame only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L8).

## `#ctor`

<a id="api-354702231d3dd685"></a>
<!-- api: M:Inno.Rendering.RenderBufferUploadDescriptor.#ctor(System.Int32,Inno.Rendering.RenderBufferUsage,Inno.Rendering.RenderVertexLayout,Inno.Rendering.RenderIndexFormat) f625fd4b705ea0d180205296bb3205c945aacb395b55312286e73d29cd671053 -->

```csharp
public Inno.Rendering.RenderBufferUploadDescriptor.RenderBufferUploadDescriptor(int elementStride, Inno.Rendering.RenderBufferUsage usage, Inno.Rendering.RenderVertexLayout? vertexLayout = null, Inno.Rendering.RenderIndexFormat indexFormat = Inno.Rendering.RenderIndexFormat.UInt32)
```

Creates a frame upload descriptor.

**Parameter `elementStride`:** Element size in bytes.

**Parameter `usage`:** Vertex, index, storage, or compatible combined usage.

**Parameter `vertexLayout`:** Required layout when vertex usage is present.

**Parameter `indexFormat`:** Index representation when index usage is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L25).

## `elementStride`

<a id="api-e86394f72f8eff42"></a>
<!-- api: P:Inno.Rendering.RenderBufferUploadDescriptor.elementStride 735df1c95c1f72bc776af8467c168e308e8e07979d90cfdee4117bf73899e790 -->

```csharp
public int Inno.Rendering.RenderBufferUploadDescriptor.elementStride { get; }
```

Gets the element size in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L63).

## `indexFormat`

<a id="api-0c64b4a54a586df5"></a>
<!-- api: P:Inno.Rendering.RenderBufferUploadDescriptor.indexFormat 7d9a938731179525fa2ff6f9573629b55df2def5e58a7307f0b2e1b1ae3b6a95 -->

```csharp
public Inno.Rendering.RenderIndexFormat Inno.Rendering.RenderBufferUploadDescriptor.indexFormat { get; }
```

Gets the index representation when index usage is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L78).

## `usage`

<a id="api-099c52ee13ec9d7b"></a>
<!-- api: P:Inno.Rendering.RenderBufferUploadDescriptor.usage e4f270933a7c1bd9e15a8a93a4ad45962a6c28037984a4274f66e1a62c48eb4f -->

```csharp
public Inno.Rendering.RenderBufferUsage Inno.Rendering.RenderBufferUploadDescriptor.usage { get; }
```

Gets permitted GPU uses.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L68).

## `vertexLayout`

<a id="api-ca335b635d83a5ac"></a>
<!-- api: P:Inno.Rendering.RenderBufferUploadDescriptor.vertexLayout 66ce3a744001194e2695b20092165dfdf212c50c4cf2757d6aaf763ffabc2ad3 -->

```csharp
public Inno.Rendering.RenderVertexLayout? Inno.Rendering.RenderBufferUploadDescriptor.vertexLayout { get; }
```

Gets the vertex layout when vertex usage is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L73).
