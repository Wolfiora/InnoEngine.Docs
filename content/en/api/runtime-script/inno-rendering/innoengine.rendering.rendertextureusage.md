---
title: "RenderTextureUsage"
description: "Reference for RenderTextureUsage in Inno.Rendering."
uid: api.inno.rendering.runtime-script.88d8b1e06756b34d
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureUsage`

This reference describes `RenderTextureUsage` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ColorAttachment`](#api-47df6d9b1e4feabd) | Field |
| [`CopyDestination`](#api-247c23adb5bd2bc5) | Field |
| [`CopySource`](#api-c9e26ec986c427d7) | Field |
| [`DepthStencilAttachment`](#api-3d7c1cfcf373c923) | Field |
| [`Readback`](#api-dc91604297a95757) | Field |
| [`Sampled`](#api-a64c63c6785b55b4) | Field |
| [`Storage`](#api-39363786de0f49bd) | Field |

## Type declaration

<a id="api-88d8b1e06756b34d"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureUsage 4875bc93e6636d84a2cbde455f503e42e20e2f3bb5328e3d72a0d141e3dc6d97 -->

```csharp
public enum InnoEngine.Rendering.RenderTextureUsage : int
```

Declares intended texture operations for capability and hazard validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L75).

## `ColorAttachment`

<a id="api-47df6d9b1e4feabd"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.ColorAttachment fd64f974857ec903aaf33d7894f544a2b64bf4ba589ce56d1bb588ea817bf6d1 -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.ColorAttachment = 2
```

Raster color attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L84).

## `CopyDestination`

<a id="api-247c23adb5bd2bc5"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.CopyDestination cbd3f1313f99494f6d6e1a9548900b8c1c01260c94e39586f773ff33aaf21fa3 -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.CopyDestination = 32
```

Copy operation destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L100).

## `CopySource`

<a id="api-c9e26ec986c427d7"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.CopySource 2375532aeb6802b191d32309519ba8573295bc7e554f1ebfb96d44414b9bc15c -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.CopySource = 16
```

Copy operation source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L96).

## `DepthStencilAttachment`

<a id="api-3d7c1cfcf373c923"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.DepthStencilAttachment 98dad74d88c1656dcb3f6eac1783af973bed399cbda9be65ab9cd72ef764499d -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.DepthStencilAttachment = 4
```

Raster depth or stencil attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L88).

## `Readback`

<a id="api-dc91604297a95757"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.Readback 34fd067c761481b32cff340060f639a899e0c3217abbe7f75fd2b8a41f3fbd91 -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.Readback = 64
```

Asynchronous transfer from GPU texture memory to CPU-visible bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L104).

## `Sampled`

<a id="api-a64c63c6785b55b4"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.Sampled 6ea718abfb081e9fb9e75b8bbfbdaabe3574a2a15d86eeb3e6b375056f372137 -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.Sampled = 1
```

Shader-readable texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L80).

## `Storage`

<a id="api-39363786de0f49bd"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureUsage.Storage f6e742ff61355fcc3ecd43cfbaf0a740447ca9d1d75e38db5bacb762509e508a -->

```csharp
InnoEngine.Rendering.RenderTextureUsage.Storage = 8
```

Shader-readable and writable unordered texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L92).
