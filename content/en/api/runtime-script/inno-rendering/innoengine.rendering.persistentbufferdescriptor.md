---
title: "PersistentBufferDescriptor"
description: "Reference for PersistentBufferDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.2d9cee94bb5abcd7
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `PersistentBufferDescriptor`

This reference describes `PersistentBufferDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b4af9742dfab4f0f) | Method |
| [`buffer`](#api-fcea05aba5df7d72) | Property |
| [`indexFormat`](#api-8c61ec239eafc2ea) | Property |
| [`vertexLayout`](#api-45fdf0a611b697a4) | Property |

## Type declaration

<a id="api-2d9cee94bb5abcd7"></a>
<!-- api: T:InnoEngine.Rendering.PersistentBufferDescriptor 89eb71ec829cc81bcc502b080641935ff93270ade044a1ae87d6a9f7925d9161 -->

```csharp
public sealed class InnoEngine.Rendering.PersistentBufferDescriptor
```

Describes a persistent buffer and any vertex/index interpretation required at creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L10).

## `#ctor`

<a id="api-b4af9742dfab4f0f"></a>
<!-- api: M:InnoEngine.Rendering.PersistentBufferDescriptor.#ctor(InnoEngine.Rendering.RenderBufferDescriptor,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.RenderIndexFormat) b95b22d1fb1925a34b05882a1575172d0793ac56ed135181d3e410ddea04d732 -->

```csharp
public InnoEngine.Rendering.PersistentBufferDescriptor.PersistentBufferDescriptor(InnoEngine.Rendering.RenderBufferDescriptor buffer, InnoEngine.Rendering.RenderVertexLayout? vertexLayout = null, InnoEngine.Rendering.RenderIndexFormat indexFormat = InnoEngine.Rendering.RenderIndexFormat.UInt32)
```

Creates a persistent buffer descriptor.

**Parameter `buffer`:** Capacity and usage.

**Parameter `vertexLayout`:** Required interleaved layout for vertex buffers.

**Parameter `indexFormat`:** Index representation for index buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L24).

## `buffer`

<a id="api-fcea05aba5df7d72"></a>
<!-- api: P:InnoEngine.Rendering.PersistentBufferDescriptor.buffer 7cbf771f7f82c8daa194d74ad14fdd0b6570bba7db8b82331f7f188c6b854dd2 -->

```csharp
public InnoEngine.Rendering.RenderBufferDescriptor InnoEngine.Rendering.PersistentBufferDescriptor.buffer { get; }
```

Gets buffer capacity and usage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L66).

## `indexFormat`

<a id="api-8c61ec239eafc2ea"></a>
<!-- api: P:InnoEngine.Rendering.PersistentBufferDescriptor.indexFormat 621b41ad1b60d25a14fd4c1fe116f165ef8c50637c9f7ea556bdb5f375776fb1 -->

```csharp
public InnoEngine.Rendering.RenderIndexFormat InnoEngine.Rendering.PersistentBufferDescriptor.indexFormat { get; }
```

Gets the index representation when this is an index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L76).

## `vertexLayout`

<a id="api-45fdf0a611b697a4"></a>
<!-- api: P:InnoEngine.Rendering.PersistentBufferDescriptor.vertexLayout ed270b21bccf024f85fe5967299278b32849076139c3066982182c9fa850d02e -->

```csharp
public InnoEngine.Rendering.RenderVertexLayout? InnoEngine.Rendering.PersistentBufferDescriptor.vertexLayout { get; }
```

Gets the vertex layout when this is a vertex buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/PersistentBufferDescriptor.cs#L71).
