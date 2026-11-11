---
title: "RenderResourceMap"
description: "Reference for RenderResourceMap in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.afd6cfc2a37a17a5
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderResourceMap`

This reference describes `RenderResourceMap` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c58c6afb0d7ab1be) | Method |
| [`PublishBuffer`](#api-1f4b4f9a11e30596) | Method |
| [`PublishTexture`](#api-faee89979b68a877) | Method |
| [`TryGetBuffer`](#api-0c5fe7cafe738102) | Method |
| [`TryGetTexture`](#api-222aa1a37dfcb47f) | Method |

## Type declaration

<a id="api-afd6cfc2a37a17a5"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderResourceMap 3c37210b5e83fedbfbe92450c4f4d61704292783e7d92a40abf6116a6220b58b -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderResourceMap
```

Stores open semantic graph resources for one pipeline request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L15).

## `#ctor`

<a id="api-c58c6afb0d7ab1be"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceMap.#ctor 594127611b698866f53e1f4d0921fd76da10893331e140d13e15834dcf6123d0 -->

```csharp
public Inno.Rendering.Runtime.RenderResourceMap.RenderResourceMap()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L15).

## `PublishBuffer`

<a id="api-1f4b4f9a11e30596"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceMap.PublishBuffer(Inno.Rendering.RenderResourceId,Inno.Rendering.RenderBufferHandle) a02eced3af3f73a316cbc6da2327bc6f2c8272134742fbe90e9c6b525d3696ee -->

```csharp
public void Inno.Rendering.Runtime.RenderResourceMap.PublishBuffer(Inno.Rendering.RenderResourceId id, Inno.Rendering.RenderBufferHandle buffer)
```

Publishes a buffer under a pipeline-defined semantic identifier.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `buffer`:** Valid current-graph buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L49).

## `PublishTexture`

<a id="api-faee89979b68a877"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceMap.PublishTexture(Inno.Rendering.RenderResourceId,Inno.Rendering.RenderTextureHandle) 63376f0d9334728f80ed68f4c7100ed49d1572467d514cc54de75a2d055ed713 -->

```csharp
public void Inno.Rendering.Runtime.RenderResourceMap.PublishTexture(Inno.Rendering.RenderResourceId id, Inno.Rendering.RenderTextureHandle texture)
```

Publishes a texture under a pipeline-defined semantic identifier.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `texture`:** Valid current-graph texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L29).

## `TryGetBuffer`

<a id="api-0c5fe7cafe738102"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceMap.TryGetBuffer(Inno.Rendering.RenderResourceId,Inno.Rendering.RenderBufferHandle@) 21f7439aedd144b0c13b83b33b7f1e12925aa370f30516bc4b77fff6fc4f2456 -->

```csharp
public bool Inno.Rendering.Runtime.RenderResourceMap.TryGetBuffer(Inno.Rendering.RenderResourceId id, out Inno.Rendering.RenderBufferHandle buffer)
```

Tries to get a published buffer.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `buffer`:** Receives the current-graph buffer.

**Returns:** `true` when the buffer has been published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L89).

## `TryGetTexture`

<a id="api-222aa1a37dfcb47f"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceMap.TryGetTexture(Inno.Rendering.RenderResourceId,Inno.Rendering.RenderTextureHandle@) 7edb20ef312b93b23d671007919f0bf079ce1ba20cc34ca8a1d00a44f1b9c681 -->

```csharp
public bool Inno.Rendering.Runtime.RenderResourceMap.TryGetTexture(Inno.Rendering.RenderResourceId id, out Inno.Rendering.RenderTextureHandle texture)
```

Tries to get a published texture.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `texture`:** Receives the current-graph texture.

**Returns:** `true` when the texture has been published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L72).
