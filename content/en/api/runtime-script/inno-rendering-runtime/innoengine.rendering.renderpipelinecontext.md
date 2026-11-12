---
title: "RenderPipelineContext"
description: "Reference for RenderPipelineContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.8450ee22e9021ad1
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderPipelineContext`

This reference describes `RenderPipelineContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-adff4e2d3ef7b6fb) | Method |
| [`capabilities`](#api-dd8ad7953f14303e) | Property |
| [`diagnostics`](#api-40fb0a41853937f8) | Property |
| [`frameIndex`](#api-aa67c94087164419) | Property |
| [`graph`](#api-b9711dd9e45f533f) | Property |
| [`outputTexture`](#api-9394f5e195f1c8dd) | Property |
| [`pipelineAsset`](#api-639deeec49a4017e) | Property |
| [`preservePresentationTarget`](#api-c07b495e8a6fcae4) | Property |
| [`request`](#api-906c61e3d5837ad5) | Property |
| [`resources`](#api-8e98e86f42e83df9) | Property |
| [`resourceService`](#api-b839a5a028adbfe8) | Property |
| [`uploads`](#api-280d60c724f60921) | Property |

## Type declaration

<a id="api-8450ee22e9021ad1"></a>
<!-- api: T:InnoEngine.Rendering.RenderPipelineContext 000ba3715a14899561412d8560fde3eda3817ec987bb3057ee0eb4db6ebb77fc -->

```csharp
public sealed class InnoEngine.Rendering.RenderPipelineContext
```

Supplies one request and frame-scoped services to a render pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L15).

## `#ctor`

<a id="api-adff4e2d3ef7b6fb"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineContext.#ctor(InnoEngine.Rendering.RenderRequest,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderGraphBuilder,InnoEngine.Rendering.GraphicsCapabilities,InnoEngine.Rendering.RenderResourceMap,InnoEngine.Diagnostics.IDiagnosticReporter,InnoEngine.Rendering.IRenderResourceService,InnoEngine.Rendering.IRenderFrameUploadService,System.UInt64,System.Boolean,InnoEngine.Rendering.RenderTextureHandle) 75747866f81c8ee672729bce4f8c466e2a74e22ac3b1967d0a82e1bdd384f340 -->

```csharp
public InnoEngine.Rendering.RenderPipelineContext.RenderPipelineContext(InnoEngine.Rendering.RenderRequest request, InnoEngine.Rendering.RenderPipelineAsset pipelineAsset, InnoEngine.Rendering.RenderGraphBuilder graph, InnoEngine.Rendering.GraphicsCapabilities capabilities, InnoEngine.Rendering.RenderResourceMap resources, InnoEngine.Diagnostics.IDiagnosticReporter diagnostics, InnoEngine.Rendering.IRenderResourceService resourceService, InnoEngine.Rendering.IRenderFrameUploadService uploads, ulong frameIndex, bool preservePresentationTarget, InnoEngine.Rendering.RenderTextureHandle outputTexture = default(InnoEngine.Rendering.RenderTextureHandle))
```

Creates a pipeline build context.

**Parameter `request`:** Pipeline-defined render request.

**Parameter `pipelineAsset`:** Selected persistent pipeline configuration.

**Parameter `graph`:** Current frame graph builder.

**Parameter `capabilities`:** Current device capability snapshot.

**Parameter `resources`:** Open semantic resource registry.

**Parameter `diagnostics`:** Structured diagnostic sink.

**Parameter `resourceService`:** Generation-aware shader, material and persistent GPU resource service.

**Parameter `uploads`:** Frame-scoped streaming buffer service.

**Parameter `frameIndex`:** Monotonic render frame index.

**Parameter `preservePresentationTarget`:** Whether an earlier successful model contribution already initialized the same presentation target.

**Parameter `outputTexture`:** Imported offscreen target, or an invalid handle for the backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L53).

## `capabilities`

<a id="api-dd8ad7953f14303e"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.capabilities 6e96da8289dcdf7476c28cc5d035169fb30cc6a7188406c5aa67e21b6565bb2c -->

```csharp
public InnoEngine.Rendering.GraphicsCapabilities InnoEngine.Rendering.RenderPipelineContext.capabilities { get; }
```

Gets current device capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L105).

## `diagnostics`

<a id="api-40fb0a41853937f8"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.diagnostics f09f4dbeca5b1f8b6073d1fb11f4c841cf6ec694ba5f66579a8d89d6efc44a11 -->

```csharp
public InnoEngine.Diagnostics.IDiagnosticReporter InnoEngine.Rendering.RenderPipelineContext.diagnostics { get; }
```

Gets the structured diagnostic sink.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L115).

## `frameIndex`

<a id="api-aa67c94087164419"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.frameIndex e7a71b1259bcec06ca98a3f6b6df117b3cb4e2803f88238400b5616457cfa57c -->

```csharp
public ulong InnoEngine.Rendering.RenderPipelineContext.frameIndex { get; }
```

Gets the monotonic render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L130).

## `graph`

<a id="api-b9711dd9e45f533f"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.graph ed7ca72526eb44b047ce6153e00e42d4cca2380f9af2a2947fc98d980285920c -->

```csharp
public InnoEngine.Rendering.RenderGraphBuilder InnoEngine.Rendering.RenderPipelineContext.graph { get; }
```

Gets the current frame graph builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L100).

## `outputTexture`

<a id="api-9394f5e195f1c8dd"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.outputTexture 049297d341ea04432a67fa274e6689bce30c462d052bd5cf3aee28fcae75bf3d -->

```csharp
public InnoEngine.Rendering.RenderTextureHandle InnoEngine.Rendering.RenderPipelineContext.outputTexture { get; }
```

Gets the imported offscreen target, or an invalid handle for the backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L143).

## `pipelineAsset`

<a id="api-639deeec49a4017e"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.pipelineAsset 1307bb359a7d91b3cc3a11e895bd2af6cf00c8c2eafedd12b5a595359e318b3c -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset InnoEngine.Rendering.RenderPipelineContext.pipelineAsset { get; }
```

Gets selected pipeline configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L95).

## `preservePresentationTarget`

<a id="api-c07b495e8a6fcae4"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.preservePresentationTarget f4d0b9d210451e40ec6ca44fb779e2e35e001feaab54498ab1dffe1fcbafe371 -->

```csharp
public bool InnoEngine.Rendering.RenderPipelineContext.preservePresentationTarget { get; }
```

Gets whether this model contribution must load and preserve an earlier contribution to the same target.

**Constraints:** A pipeline must not clear its presentation color target when this value is `true`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L138).

## `request`

<a id="api-906c61e3d5837ad5"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.request 1e1d0b895d49bbee36c53943984532665c91ffc3637a4f6e5f05e8c4e1319260 -->

```csharp
public InnoEngine.Rendering.RenderRequest InnoEngine.Rendering.RenderPipelineContext.request { get; }
```

Gets the current request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L90).

## `resources`

<a id="api-8e98e86f42e83df9"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.resources 00813002a4696b6c4d0128be47bf29e6addf1d641eeb9e830183ec71d711fbe8 -->

```csharp
public InnoEngine.Rendering.RenderResourceMap InnoEngine.Rendering.RenderPipelineContext.resources { get; }
```

Gets open semantic resources for this request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L110).

## `resourceService`

<a id="api-b839a5a028adbfe8"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.resourceService d3c0437bad3cfe7b73f9a5702cb01df3cbc55ec84899554e34d0c08c7fd79f2c -->

```csharp
public InnoEngine.Rendering.IRenderResourceService InnoEngine.Rendering.RenderPipelineContext.resourceService { get; }
```

Gets the generation-aware neutral GPU resource service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L120).

## `uploads`

<a id="api-280d60c724f60921"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineContext.uploads 61f587f2be0e7a8f54280753efc54404eb0a37ec3cd023cffde8ed8893e7fc8c -->

```csharp
public InnoEngine.Rendering.IRenderFrameUploadService InnoEngine.Rendering.RenderPipelineContext.uploads { get; }
```

Gets the frame-scoped streaming buffer service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L125).
