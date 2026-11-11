---
title: "RenderBufferUsage"
description: "Reference for RenderBufferUsage in Inno.Rendering."
uid: api.inno.rendering.a090cb78dac7b29c
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBufferUsage`

This reference describes `RenderBufferUsage` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`CopyDestination`](#api-ff4942a6dcec5936) | Field |
| [`CopySource`](#api-a655ed754107e4a4) | Field |
| [`Dynamic`](#api-3a439d59e03a350c) | Field |
| [`Index`](#api-f8fe08600ad14298) | Field |
| [`Indirect`](#api-fe2fc974c9e28978) | Field |
| [`Storage`](#api-9bea3698b0fad0bf) | Field |
| [`Uniform`](#api-0f382eab2511e926) | Field |
| [`Vertex`](#api-04d9c4a18ba5eab7) | Field |

## Type declaration

<a id="api-a090cb78dac7b29c"></a>
<!-- api: T:Inno.Rendering.RenderBufferUsage daaf3f5eade14b6caa97edcdc3bde232ba0dd31549cce9f340ea11ac08ba8846 -->

```csharp
public enum Inno.Rendering.RenderBufferUsage : int
```

Declares intended buffer operations for capability and hazard validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L111).

## `CopyDestination`

<a id="api-ff4942a6dcec5936"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.CopyDestination e42e62248795d7fb494ecbd52f83ca67afd12e28f0251ca5e05c0754653ea5c9 -->

```csharp
Inno.Rendering.RenderBufferUsage.CopyDestination = 64
```

Copy operation destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L140).

## `CopySource`

<a id="api-a655ed754107e4a4"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.CopySource 6e98a028c62cddecd30b52d61f9edf013a137c7395159615def59eccb1309bf6 -->

```csharp
Inno.Rendering.RenderBufferUsage.CopySource = 32
```

Copy operation source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L136).

## `Dynamic`

<a id="api-3a439d59e03a350c"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.Dynamic a097b6f430dd71129a7b7b6ce5a5987debc8f5877f37c3a451d865b3f47c407d -->

```csharp
Inno.Rendering.RenderBufferUsage.Dynamic = 128
```

Contents may be replaced at frame safety points.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L144).

## `Index`

<a id="api-f8fe08600ad14298"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.Index b0bd33c57a6b079f6219154ecee98aa61ad21e73f89f492375acd1f66d10e90d -->

```csharp
Inno.Rendering.RenderBufferUsage.Index = 2
```

Index input data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L120).

## `Indirect`

<a id="api-fe2fc974c9e28978"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.Indirect 9469a7ba425a6929f1d805fbad3cd11499a7310734d541fde5548add1dcf09fd -->

```csharp
Inno.Rendering.RenderBufferUsage.Indirect = 16
```

Indirect command data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L132).

## `Storage`

<a id="api-9bea3698b0fad0bf"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.Storage c1e5fbba68705d5cf188b39f34f329c05d78394caae3ad52f912542741897769 -->

```csharp
Inno.Rendering.RenderBufferUsage.Storage = 8
```

Shader-readable and writable storage data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L128).

## `Uniform`

<a id="api-0f382eab2511e926"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.Uniform b9d3e06a98571e1c1ba94cd30bd8ab6410e1591788a2cfe0f940dc2244e357fc -->

```csharp
Inno.Rendering.RenderBufferUsage.Uniform = 4
```

Read-only shader data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L124).

## `Vertex`

<a id="api-04d9c4a18ba5eab7"></a>
<!-- api: F:Inno.Rendering.RenderBufferUsage.Vertex 928a9682c60c69dfd7ee5c4028273fc9024c5f2c34f5e106fca775c6319bc566 -->

```csharp
Inno.Rendering.RenderBufferUsage.Vertex = 1
```

Vertex input data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L116).
