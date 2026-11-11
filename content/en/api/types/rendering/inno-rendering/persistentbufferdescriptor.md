---
title: "PersistentBufferDescriptor"
description: "Reference for PersistentBufferDescriptor in Inno.Rendering."
uid: api.inno.rendering.1ab85b8e47159916
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `PersistentBufferDescriptor`

This reference describes `PersistentBufferDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eebe3e73ca2d42db) | Method |
| [`buffer`](#api-ff128b7742111c05) | Property |
| [`indexFormat`](#api-ea564714d5d883f8) | Property |
| [`vertexLayout`](#api-faab664b5432cbe1) | Property |

## Type declaration

<a id="api-1ab85b8e47159916"></a>
<!-- api: T:Inno.Rendering.PersistentBufferDescriptor 089bb24feeca1f98c5cd2099c348b1d2fea65637184affcb14c7da7873d66ab9 -->

```csharp
public sealed class Inno.Rendering.PersistentBufferDescriptor
```

Describes a persistent buffer and any vertex/index interpretation required at creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L10).

## `#ctor`

<a id="api-eebe3e73ca2d42db"></a>
<!-- api: M:Inno.Rendering.PersistentBufferDescriptor.#ctor(Inno.Rendering.RenderBufferDescriptor,Inno.Rendering.RenderVertexLayout,Inno.Rendering.RenderIndexFormat) cb58ec5d1856d9a69be3bf7ea4f485bccaa10c80f7ec93d0177214f1c95da565 -->

```csharp
public Inno.Rendering.PersistentBufferDescriptor.PersistentBufferDescriptor(Inno.Rendering.RenderBufferDescriptor buffer, Inno.Rendering.RenderVertexLayout? vertexLayout = null, Inno.Rendering.RenderIndexFormat indexFormat = Inno.Rendering.RenderIndexFormat.UInt32)
```

Creates a persistent buffer descriptor.

**Parameter `buffer`:** Capacity and usage.

**Parameter `vertexLayout`:** Required interleaved layout for vertex buffers.

**Parameter `indexFormat`:** Index representation for index buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L24).

## `buffer`

<a id="api-ff128b7742111c05"></a>
<!-- api: P:Inno.Rendering.PersistentBufferDescriptor.buffer 5f350d860950780a28d3d28da4580eb2b807021bf99ae4257ed535c05d12c852 -->

```csharp
public Inno.Rendering.RenderBufferDescriptor Inno.Rendering.PersistentBufferDescriptor.buffer { get; }
```

Gets buffer capacity and usage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L66).

## `indexFormat`

<a id="api-ea564714d5d883f8"></a>
<!-- api: P:Inno.Rendering.PersistentBufferDescriptor.indexFormat a858001599dd763504771e324d7ad9ba00917c3a209111a505d9fbf00042a4d2 -->

```csharp
public Inno.Rendering.RenderIndexFormat Inno.Rendering.PersistentBufferDescriptor.indexFormat { get; }
```

Gets the index representation when this is an index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L76).

## `vertexLayout`

<a id="api-faab664b5432cbe1"></a>
<!-- api: P:Inno.Rendering.PersistentBufferDescriptor.vertexLayout f43ece25c1d89f801fd9055115a7e673956874e74d738581285fd7c33aea4603 -->

```csharp
public Inno.Rendering.RenderVertexLayout? Inno.Rendering.PersistentBufferDescriptor.vertexLayout { get; }
```

Gets the vertex layout when this is a vertex buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L71).
