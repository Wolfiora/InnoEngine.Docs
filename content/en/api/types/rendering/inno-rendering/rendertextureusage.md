---
title: "RenderTextureUsage"
description: "Reference for RenderTextureUsage in Inno.Rendering."
uid: api.inno.rendering.44b96056b4638742
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureUsage`

This reference describes `RenderTextureUsage` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ColorAttachment`](#api-3684a90f0b61cba0) | Field |
| [`CopyDestination`](#api-bcb4fa08d87e5c85) | Field |
| [`CopySource`](#api-6671cad649e0f7cc) | Field |
| [`DepthStencilAttachment`](#api-2193713b2381d23f) | Field |
| [`Readback`](#api-17897d461852b3ed) | Field |
| [`Sampled`](#api-6bfac57885d78e30) | Field |
| [`Storage`](#api-e18764086922e5dd) | Field |

## Type declaration

<a id="api-44b96056b4638742"></a>
<!-- api: T:Inno.Rendering.RenderTextureUsage af3c876ba15cfdeddaf27bed6a54f4a5fd53bb2485f2ef494d4defc91de5be95 -->

```csharp
public enum Inno.Rendering.RenderTextureUsage : int
```

Declares intended texture operations for capability and hazard validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L75).

## `ColorAttachment`

<a id="api-3684a90f0b61cba0"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.ColorAttachment 195729da9e597a1352a39eb7cb3c65a71304e6702f6d3a5b67a7467ea405b74c -->

```csharp
Inno.Rendering.RenderTextureUsage.ColorAttachment = 2
```

Raster color attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L84).

## `CopyDestination`

<a id="api-bcb4fa08d87e5c85"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.CopyDestination 62e36f7ffe234938ea4efe4eeb582b4f79cfcec1f68c656ad58da247a904c15f -->

```csharp
Inno.Rendering.RenderTextureUsage.CopyDestination = 32
```

Copy operation destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L100).

## `CopySource`

<a id="api-6671cad649e0f7cc"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.CopySource d9283cd046f53d9c58f4bc19c5b98a76061d132bb55dc7d04dcfcbd01f6e7a28 -->

```csharp
Inno.Rendering.RenderTextureUsage.CopySource = 16
```

Copy operation source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L96).

## `DepthStencilAttachment`

<a id="api-2193713b2381d23f"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.DepthStencilAttachment 40e0da4c2cf7ea92c6ffaaa8b72b978d2441e552e71476372103c7d03a1bd82d -->

```csharp
Inno.Rendering.RenderTextureUsage.DepthStencilAttachment = 4
```

Raster depth or stencil attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L88).

## `Readback`

<a id="api-17897d461852b3ed"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.Readback 722c4a79052caf68a3c85803cfee134c9fc90c505592414d61e4486e4eefda34 -->

```csharp
Inno.Rendering.RenderTextureUsage.Readback = 64
```

Asynchronous transfer from GPU texture memory to CPU-visible bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L104).

## `Sampled`

<a id="api-6bfac57885d78e30"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.Sampled f64e830905121dcb50dc41f8a7bd92c101d10d39a6238a714665e084e8da1459 -->

```csharp
Inno.Rendering.RenderTextureUsage.Sampled = 1
```

Shader-readable texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L80).

## `Storage`

<a id="api-e18764086922e5dd"></a>
<!-- api: F:Inno.Rendering.RenderTextureUsage.Storage e16a42288be7cc62403735b25f5df0ca6b2abd2fe2fff0860fd5237e98c4c9b3 -->

```csharp
Inno.Rendering.RenderTextureUsage.Storage = 8
```

Shader-readable and writable unordered texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L92).
