---
title: "RenderFeatureContext"
description: "Reference for RenderFeatureContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.1043e043c9d38ec8
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderFeatureContext`

This reference describes `RenderFeatureContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-841368e3c146f31a) | Method |
| [`capabilities`](#api-e9dcfd2e3983b239) | Property |
| [`configuration`](#api-ff27cd1d292b836c) | Property |
| [`graph`](#api-2da2e457180ce471) | Property |
| [`pipeline`](#api-396bd515de3bde7a) | Property |
| [`resources`](#api-6eb6b87e1b58e879) | Property |
| [`resourceService`](#api-3cbc20ab96a40392) | Property |
| [`uploads`](#api-1869ae9cea224ec7) | Property |

## Type declaration

<a id="api-1043e043c9d38ec8"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderFeatureContext 81ce4395c4c5427b2a2bc6ebb64b67ba757363633d9896c81ada986c03886848 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderFeatureContext
```

Supplies one configured feature with frame-scoped graph services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L15).

## `#ctor`

<a id="api-841368e3c146f31a"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFeatureContext.#ctor(Inno.Rendering.Runtime.RenderPipelineContext,Inno.Rendering.Assets.RenderFeatureConfiguration) 5dd97550c8c52c0e638c8c03178143115adb8fb36bbe4f424761b3d79411e76a -->

```csharp
public Inno.Rendering.Runtime.RenderFeatureContext.RenderFeatureContext(Inno.Rendering.Runtime.RenderPipelineContext pipeline, Inno.Rendering.Assets.RenderFeatureConfiguration configuration)
```

Creates a feature build context.

**Parameter `pipeline`:** Owning pipeline context.

**Parameter `configuration`:** Stable feature configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L26).

## `capabilities`

<a id="api-e9dcfd2e3983b239"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.capabilities 500014e0f34c818457fe5308fc0c32813f387f0be56683cf5b46ae9bd3a4fe9a -->

```csharp
public Inno.Rendering.GraphicsCapabilities Inno.Rendering.Runtime.RenderFeatureContext.capabilities { get; }
```

Gets current device capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L57).

## `configuration`

<a id="api-ff27cd1d292b836c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.configuration 50199a7bdedd8ec1693b60e7123e0589a36b261319283577d813b9c6a1747781 -->

```csharp
public Inno.Rendering.Assets.RenderFeatureConfiguration Inno.Rendering.Runtime.RenderFeatureContext.configuration { get; }
```

Gets stable feature configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L42).

## `graph`

<a id="api-2da2e457180ce471"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.graph 0731e05063deb78f177d2de9f91894f16f4647cfad5de374d316c5fcd8ed9e16 -->

```csharp
public Inno.Rendering.RenderGraphBuilder Inno.Rendering.Runtime.RenderFeatureContext.graph { get; }
```

Gets the current frame graph builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L47).

## `pipeline`

<a id="api-396bd515de3bde7a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.pipeline e5614700f3780f68ea36c51a2bc5250a05548526eb94aac6fd94e17901c99d0d -->

```csharp
public Inno.Rendering.Runtime.RenderPipelineContext Inno.Rendering.Runtime.RenderFeatureContext.pipeline { get; }
```

Gets the owning pipeline context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L37).

## `resources`

<a id="api-6eb6b87e1b58e879"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.resources 434ed48068ddc10f5de28a791b0620552d3b628ccf664228d8fa40b82f60e316 -->

```csharp
public Inno.Rendering.Runtime.RenderResourceMap Inno.Rendering.Runtime.RenderFeatureContext.resources { get; }
```

Gets open semantic resources for the request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L52).

## `resourceService`

<a id="api-3cbc20ab96a40392"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.resourceService dee1cd0c58728eaa41a5c6d6bc512725c09e12dad2488d355698928d26c90a24 -->

```csharp
public Inno.Rendering.Runtime.IRenderResourceService Inno.Rendering.Runtime.RenderFeatureContext.resourceService { get; }
```

Gets the generation-aware neutral GPU resource service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L62).

## `uploads`

<a id="api-1869ae9cea224ec7"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureContext.uploads 0179c68a4f5155ccd75ef51cb839beadb33be46743cfcaf9de0f247711b591f8 -->

```csharp
public Inno.Rendering.IRenderFrameUploadService Inno.Rendering.Runtime.RenderFeatureContext.uploads { get; }
```

Gets the frame-scoped streaming buffer service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L67).
