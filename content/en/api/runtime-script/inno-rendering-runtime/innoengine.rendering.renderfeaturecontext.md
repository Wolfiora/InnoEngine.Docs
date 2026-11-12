---
title: "RenderFeatureContext"
description: "Reference for RenderFeatureContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.bc6253b93feff0a8
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderFeatureContext`

This reference describes `RenderFeatureContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c2f172ae37827bd1) | Method |
| [`capabilities`](#api-1b5186fcab6022c1) | Property |
| [`configuration`](#api-14e000001627db6b) | Property |
| [`graph`](#api-fd3390aecdba919a) | Property |
| [`pipeline`](#api-65cc2d64b7cf4774) | Property |
| [`resources`](#api-628783f42114448d) | Property |
| [`resourceService`](#api-d33afa799f7c8be0) | Property |
| [`uploads`](#api-60ab139e99199c81) | Property |

## Type declaration

<a id="api-bc6253b93feff0a8"></a>
<!-- api: T:InnoEngine.Rendering.RenderFeatureContext 4ee438e19e2df925d8d71ca67ef8484d8f5f278f945469787a9d0646eb2cc97e -->

```csharp
public sealed class InnoEngine.Rendering.RenderFeatureContext
```

Supplies one configured feature with frame-scoped graph services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L15).

## `#ctor`

<a id="api-c2f172ae37827bd1"></a>
<!-- api: M:InnoEngine.Rendering.RenderFeatureContext.#ctor(InnoEngine.Rendering.RenderPipelineContext,InnoEngine.Rendering.RenderFeatureConfiguration) 468a1263102a35a4b4337ac696af487c8a96d5709b328d092a13967ad356615c -->

```csharp
public InnoEngine.Rendering.RenderFeatureContext.RenderFeatureContext(InnoEngine.Rendering.RenderPipelineContext pipeline, InnoEngine.Rendering.RenderFeatureConfiguration configuration)
```

Creates a feature build context.

**Parameter `pipeline`:** Owning pipeline context.

**Parameter `configuration`:** Stable feature configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L26).

## `capabilities`

<a id="api-1b5186fcab6022c1"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.capabilities afc7ecd6b6114571a7648a64cf616682d903ea482d3a22c15dfb5538a848724f -->

```csharp
public InnoEngine.Rendering.GraphicsCapabilities InnoEngine.Rendering.RenderFeatureContext.capabilities { get; }
```

Gets current device capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L57).

## `configuration`

<a id="api-14e000001627db6b"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.configuration 254949baeac6dd9001979fd5dad338028bb390e0ad626451501133612cc36f23 -->

```csharp
public InnoEngine.Rendering.RenderFeatureConfiguration InnoEngine.Rendering.RenderFeatureContext.configuration { get; }
```

Gets stable feature configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L42).

## `graph`

<a id="api-fd3390aecdba919a"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.graph 5abce3b4e23eab6f7d1a8ee5c951cfd26fef34f1adcc18d2d97784443d09b08f -->

```csharp
public InnoEngine.Rendering.RenderGraphBuilder InnoEngine.Rendering.RenderFeatureContext.graph { get; }
```

Gets the current frame graph builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L47).

## `pipeline`

<a id="api-65cc2d64b7cf4774"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.pipeline 87aec17b03428d1583bab7be0db6719c2abc4163f30bdb2cb92120adb3095ed1 -->

```csharp
public InnoEngine.Rendering.RenderPipelineContext InnoEngine.Rendering.RenderFeatureContext.pipeline { get; }
```

Gets the owning pipeline context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L37).

## `resources`

<a id="api-628783f42114448d"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.resources 4513aca01ab2111dafa3dd32e9be63c62128d98afc53c3f914f3e878e9b0d6ba -->

```csharp
public InnoEngine.Rendering.RenderResourceMap InnoEngine.Rendering.RenderFeatureContext.resources { get; }
```

Gets open semantic resources for the request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L52).

## `resourceService`

<a id="api-d33afa799f7c8be0"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.resourceService 7d77a84238a4b969d11bc6bcaf7eadd01aad445b82d7b57ac87fba34654ddd83 -->

```csharp
public InnoEngine.Rendering.IRenderResourceService InnoEngine.Rendering.RenderFeatureContext.resourceService { get; }
```

Gets the generation-aware neutral GPU resource service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L62).

## `uploads`

<a id="api-60ab139e99199c81"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureContext.uploads fb81dfb868b4848f35d7a0252f127033e948f5712f53fcd55ce998e2ca31c1fc -->

```csharp
public InnoEngine.Rendering.IRenderFrameUploadService InnoEngine.Rendering.RenderFeatureContext.uploads { get; }
```

Gets the frame-scoped streaming buffer service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureContext.cs#L67).
