---
title: "RenderBufferUsage"
description: "Reference for RenderBufferUsage in Inno.Rendering."
uid: api.inno.rendering.runtime-script.17edbb2b94d72688
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBufferUsage`

This reference describes `RenderBufferUsage` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`CopyDestination`](#api-3122b23c3c48b88a) | Field |
| [`CopySource`](#api-a78335658446b2e9) | Field |
| [`Dynamic`](#api-fcd9e8bb2e7c86a8) | Field |
| [`Index`](#api-65f6ead69cd9cab3) | Field |
| [`Indirect`](#api-66e1c5cb97642cf6) | Field |
| [`Storage`](#api-60b7d886caedb59a) | Field |
| [`Uniform`](#api-c57dc010ac405b24) | Field |
| [`Vertex`](#api-333bbd9f04d93b1a) | Field |

## Type declaration

<a id="api-17edbb2b94d72688"></a>
<!-- api: T:InnoEngine.Rendering.RenderBufferUsage bd5d8f7bd717b0ba547f0a72dccdba6bc5c0af9ed05c8034f87b357645ee6c78 -->

```csharp
public enum InnoEngine.Rendering.RenderBufferUsage : int
```

Declares intended buffer operations for capability and hazard validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L111).

## `CopyDestination`

<a id="api-3122b23c3c48b88a"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.CopyDestination b7cc8f285e8799856e06da6457b535246b9d2f96d0d9b319a212005558c7ba56 -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.CopyDestination = 64
```

Copy operation destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L140).

## `CopySource`

<a id="api-a78335658446b2e9"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.CopySource f6aa5b1f9fdccd923e1094a9f5479a5b9fd5a63ab8e38d17846ef551a459380d -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.CopySource = 32
```

Copy operation source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L136).

## `Dynamic`

<a id="api-fcd9e8bb2e7c86a8"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.Dynamic 7bfa208b49242ebfbc962d5e0637713798831e6e147ab961d9b3d585258d3baf -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.Dynamic = 128
```

Contents may be replaced at frame safety points.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L144).

## `Index`

<a id="api-65f6ead69cd9cab3"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.Index 469151dca9ca09eb3a49aa7c6036b29c7bf7e862b48628f7e7379f6c5944730a -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.Index = 2
```

Index input data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L120).

## `Indirect`

<a id="api-66e1c5cb97642cf6"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.Indirect 457d9f04125358ed3617e3f287032109a405441af794567f32ee68272422c4e5 -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.Indirect = 16
```

Indirect command data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L132).

## `Storage`

<a id="api-60b7d886caedb59a"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.Storage d447f6035189c0fb2690d4bd55dc908076c0c7eb14ce4593ebdddf057265b453 -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.Storage = 8
```

Shader-readable and writable storage data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L128).

## `Uniform`

<a id="api-c57dc010ac405b24"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.Uniform b35d95b67a482f89ff15f8c9a2c5d7b65b6e7c53141f80f1a7f47d6438723805 -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.Uniform = 4
```

Read-only shader data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L124).

## `Vertex`

<a id="api-333bbd9f04d93b1a"></a>
<!-- api: F:InnoEngine.Rendering.RenderBufferUsage.Vertex b4fcdfbe755fb3bddafba19818b7e744e4f5ad58c68e38be3e956c0f609321f0 -->

```csharp
InnoEngine.Rendering.RenderBufferUsage.Vertex = 1
```

Vertex input data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L116).
