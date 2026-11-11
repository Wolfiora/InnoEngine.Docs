---
title: "RenderPipelineContext"
description: "Reference for RenderPipelineContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.0ec8dea9180a4bdd
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderPipelineContext`

This reference describes `RenderPipelineContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-99384ef805f45270) | Method |
| [`capabilities`](#api-0e006bb7b8550742) | Property |
| [`diagnostics`](#api-7ae2c07557b9db21) | Property |
| [`frameIndex`](#api-23e910bc64af267a) | Property |
| [`graph`](#api-a8de581702a7f370) | Property |
| [`outputTexture`](#api-205109fa6edd3401) | Property |
| [`pipelineAsset`](#api-0b92b3bf20ac8997) | Property |
| [`preservePresentationTarget`](#api-c93b34aa82be7d43) | Property |
| [`request`](#api-0872ecbb753504b6) | Property |
| [`resources`](#api-322df3b9b0f84558) | Property |
| [`resourceService`](#api-349b6e7a5404a210) | Property |
| [`uploads`](#api-ade6aa9d492a0791) | Property |

## Type declaration

<a id="api-0ec8dea9180a4bdd"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderPipelineContext a08fe1b55fdba61c65a8e62c19d2b312315ac35a521bf7363095249da8d28246 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderPipelineContext
```

Supplies one request and frame-scoped services to a render pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L15).

## `#ctor`

<a id="api-99384ef805f45270"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipelineContext.#ctor(Inno.Rendering.Runtime.RenderRequest,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.RenderGraphBuilder,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Runtime.RenderResourceMap,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Rendering.Runtime.IRenderResourceService,Inno.Rendering.IRenderFrameUploadService,System.UInt64,System.Boolean,Inno.Rendering.RenderTextureHandle) 1e62ff9665f5179e9e20036b421c9fae54b0c2711c9ca0c3a42ad7f9884ee929 -->

```csharp
public Inno.Rendering.Runtime.RenderPipelineContext.RenderPipelineContext(Inno.Rendering.Runtime.RenderRequest request, Inno.Rendering.Assets.RenderPipelineAsset pipelineAsset, Inno.Rendering.RenderGraphBuilder graph, Inno.Rendering.GraphicsCapabilities capabilities, Inno.Rendering.Runtime.RenderResourceMap resources, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics, Inno.Rendering.Runtime.IRenderResourceService resourceService, Inno.Rendering.IRenderFrameUploadService uploads, ulong frameIndex, bool preservePresentationTarget, Inno.Rendering.RenderTextureHandle outputTexture = default(Inno.Rendering.RenderTextureHandle))
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L53).

## `capabilities`

<a id="api-0e006bb7b8550742"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.capabilities 0281f39b58e2c7837ae80d19596ad86a51e39c13081a75baa9ba579b79ee8980 -->

```csharp
public Inno.Rendering.GraphicsCapabilities Inno.Rendering.Runtime.RenderPipelineContext.capabilities { get; }
```

Gets current device capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L105).

## `diagnostics`

<a id="api-7ae2c07557b9db21"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.diagnostics 0e1d47608980d6c971d9bab98869201284c142fe3f078949ff93c374f7470313 -->

```csharp
public Inno.Core.Diagnostics.IDiagnosticReporter Inno.Rendering.Runtime.RenderPipelineContext.diagnostics { get; }
```

Gets the structured diagnostic sink.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L115).

## `frameIndex`

<a id="api-23e910bc64af267a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.frameIndex b284669a4894224123978b84c556a91e166fff586557fc92a1492653abe2d901 -->

```csharp
public ulong Inno.Rendering.Runtime.RenderPipelineContext.frameIndex { get; }
```

Gets the monotonic render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L130).

## `graph`

<a id="api-a8de581702a7f370"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.graph 20c76576249300aa7ff3006f52993023111308c251bf48e2cbce49c16c1a4269 -->

```csharp
public Inno.Rendering.RenderGraphBuilder Inno.Rendering.Runtime.RenderPipelineContext.graph { get; }
```

Gets the current frame graph builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L100).

## `outputTexture`

<a id="api-205109fa6edd3401"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.outputTexture d1a2bb6af43ac720006c818b496cc45f80a28a8b073ac27d1e9bb9514a0d7403 -->

```csharp
public Inno.Rendering.RenderTextureHandle Inno.Rendering.Runtime.RenderPipelineContext.outputTexture { get; }
```

Gets the imported offscreen target, or an invalid handle for the backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L143).

## `pipelineAsset`

<a id="api-0b92b3bf20ac8997"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.pipelineAsset 3a691be6cacb33b33dec0f16c7a511473f7c55fa56fac34c793b74b9a0140a93 -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset Inno.Rendering.Runtime.RenderPipelineContext.pipelineAsset { get; }
```

Gets selected pipeline configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L95).

## `preservePresentationTarget`

<a id="api-c93b34aa82be7d43"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.preservePresentationTarget bec18458deffea6a361f38940f5a92719d1010c127fa2b4caeffb30b7dbfe4fe -->

```csharp
public bool Inno.Rendering.Runtime.RenderPipelineContext.preservePresentationTarget { get; }
```

Gets whether this model contribution must load and preserve an earlier contribution to the same target.

**Constraints:** A pipeline must not clear its presentation color target when this value is `true`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L138).

## `request`

<a id="api-0872ecbb753504b6"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.request a78cdd71ed950f3df3aef5df780781a85760e8796aed08338f361255f9b4e08f -->

```csharp
public Inno.Rendering.Runtime.RenderRequest Inno.Rendering.Runtime.RenderPipelineContext.request { get; }
```

Gets the current request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L90).

## `resources`

<a id="api-322df3b9b0f84558"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.resources 14a09c12ad1807d82140a8d1a9baf7ee78fcf5bc1818a23edbed9691f89275f5 -->

```csharp
public Inno.Rendering.Runtime.RenderResourceMap Inno.Rendering.Runtime.RenderPipelineContext.resources { get; }
```

Gets open semantic resources for this request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L110).

## `resourceService`

<a id="api-349b6e7a5404a210"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.resourceService 51fc0cf845dddc738e800204bdc52fc24f5821492fd533093656912f66a6c76d -->

```csharp
public Inno.Rendering.Runtime.IRenderResourceService Inno.Rendering.Runtime.RenderPipelineContext.resourceService { get; }
```

Gets the generation-aware neutral GPU resource service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L120).

## `uploads`

<a id="api-ade6aa9d492a0791"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineContext.uploads af9956793bccb7cf39e35f55b47146aa4caa8f50da08f3e0b8ec97a09d82faf2 -->

```csharp
public Inno.Rendering.IRenderFrameUploadService Inno.Rendering.Runtime.RenderPipelineContext.uploads { get; }
```

Gets the frame-scoped streaming buffer service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineContext.cs#L125).
