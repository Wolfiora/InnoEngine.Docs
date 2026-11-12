---
title: "RenderResourceMap"
description: "Reference for RenderResourceMap in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.88979b13f8819305
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderResourceMap`

This reference describes `RenderResourceMap` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cf7c43ed2010320c) | Method |
| [`PublishBuffer`](#api-fe6f9d9db114e7c7) | Method |
| [`PublishTexture`](#api-2d87b94baa39c046) | Method |
| [`TryGetBuffer`](#api-d4eada1a7d18ebc6) | Method |
| [`TryGetTexture`](#api-1719d21dd194dcf1) | Method |

## Type declaration

<a id="api-88979b13f8819305"></a>
<!-- api: T:InnoEngine.Rendering.RenderResourceMap 1808ea4427d239047831f1d5b4814ce533da84f28e26005dfade225907679998 -->

```csharp
public sealed class InnoEngine.Rendering.RenderResourceMap
```

Stores open semantic graph resources for one pipeline request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L15).

## `#ctor`

<a id="api-cf7c43ed2010320c"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceMap.#ctor 901683afc72770fbfd63613d76c16e1a8096a5ee8863c5b33c73b80b5309d00a -->

```csharp
public InnoEngine.Rendering.RenderResourceMap.RenderResourceMap()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L15).

## `PublishBuffer`

<a id="api-fe6f9d9db114e7c7"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceMap.PublishBuffer(InnoEngine.Rendering.RenderResourceId,InnoEngine.Rendering.RenderBufferHandle) 20e4a4dbf05927ba219393833f97a15eabf90e6d652817d8b09121f5ded32d88 -->

```csharp
public void InnoEngine.Rendering.RenderResourceMap.PublishBuffer(InnoEngine.Rendering.RenderResourceId id, InnoEngine.Rendering.RenderBufferHandle buffer)
```

Publishes a buffer under a pipeline-defined semantic identifier.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `buffer`:** Valid current-graph buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L49).

## `PublishTexture`

<a id="api-2d87b94baa39c046"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceMap.PublishTexture(InnoEngine.Rendering.RenderResourceId,InnoEngine.Rendering.RenderTextureHandle) eb8a52362f5b1d2d3d52e4e9d34a32ec42157302356d469370073db5542b5e97 -->

```csharp
public void InnoEngine.Rendering.RenderResourceMap.PublishTexture(InnoEngine.Rendering.RenderResourceId id, InnoEngine.Rendering.RenderTextureHandle texture)
```

Publishes a texture under a pipeline-defined semantic identifier.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `texture`:** Valid current-graph texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L29).

## `TryGetBuffer`

<a id="api-d4eada1a7d18ebc6"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceMap.TryGetBuffer(InnoEngine.Rendering.RenderResourceId,InnoEngine.Rendering.RenderBufferHandle@) e6abff8134dc01b6af307f8ae6d1de41eb1ca824b65477b4240eb747cd2691e9 -->

```csharp
public bool InnoEngine.Rendering.RenderResourceMap.TryGetBuffer(InnoEngine.Rendering.RenderResourceId id, out InnoEngine.Rendering.RenderBufferHandle buffer)
```

Tries to get a published buffer.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `buffer`:** Receives the current-graph buffer.

**Returns:** `true` when the buffer has been published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L89).

## `TryGetTexture`

<a id="api-1719d21dd194dcf1"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceMap.TryGetTexture(InnoEngine.Rendering.RenderResourceId,InnoEngine.Rendering.RenderTextureHandle@) 6a79616ef60cb38d5e705c66a7a50e547fc5adc933fa23c65a380c90bf7f9508 -->

```csharp
public bool InnoEngine.Rendering.RenderResourceMap.TryGetTexture(InnoEngine.Rendering.RenderResourceId id, out InnoEngine.Rendering.RenderTextureHandle texture)
```

Tries to get a published texture.

**Parameter `id`:** Open semantic resource identifier.

**Parameter `texture`:** Receives the current-graph texture.

**Returns:** `true` when the texture has been published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderResourceMap.cs#L72).
