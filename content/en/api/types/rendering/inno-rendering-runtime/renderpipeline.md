---
title: "RenderPipeline"
description: "Reference for RenderPipeline in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.fdb8892602472dbf
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderPipeline`

This reference describes `RenderPipeline` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bf4a5ad7c6b4f336) | Method |
| [`Build`](#api-1b584b8fb582c082) | Method |
| [`Configure`](#api-ac001f756b04119c) | Method |
| [`Dispose`](#api-ecdfbb5eed64387b) | Method |
| [`Dispose`](#api-169a5a43487bd6b5) | Method |
| [`OnConfigure`](#api-f7c5b7c3e9369fea) | Method |

## Type declaration

<a id="api-fdb8892602472dbf"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderPipeline 92cfc7006e285171a1eb6af65b600eae761f764db3bdef421f0995bdd8dc6911 -->

```csharp
public abstract class Inno.Rendering.Runtime.RenderPipeline : System.IDisposable
```

Builds frame-local passes without prescribing a rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L15).

## `#ctor`

<a id="api-bf4a5ad7c6b4f336"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipeline.#ctor da54562ef09a87a43c3f5973e2df8552f2653b0daf6e08f38f8a9f78883d3942 -->

```csharp
protected Inno.Rendering.Runtime.RenderPipeline.RenderPipeline()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L15).

## `Build`

<a id="api-1b584b8fb582c082"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipeline.Build(Inno.Rendering.Runtime.RenderPipelineContext) 9130d3a2f1a2c1a6498a4fb3f0f9935dbcccb6d907045e9dd6fa0e6bd3df6590 -->

```csharp
public abstract void Inno.Rendering.Runtime.RenderPipeline.Build(Inno.Rendering.Runtime.RenderPipelineContext context)
```

Builds all passes for one request.

**Parameter `context`:** Frame-scoped pipeline context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L42).

## `Configure`

<a id="api-ac001f756b04119c"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipeline.Configure(Inno.Rendering.Assets.SerializedRenderExtensionState,Inno.Rendering.Runtime.RenderExtensionStateContext) 48344eb4166a5625832c37d2963dae2e43bb699783b5990606d6785d28de67f1 -->

```csharp
public void Inno.Rendering.Runtime.RenderPipeline.Configure(Inno.Rendering.Assets.SerializedRenderExtensionState state, Inno.Rendering.Runtime.RenderExtensionStateContext settings)
```

Applies reload-safe pipeline settings to this generation.

**Parameter `state`:** Stable type identity and neutral property bytes.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L28).

## `Dispose`

<a id="api-ecdfbb5eed64387b"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipeline.Dispose 951e1a4927f7351f3f7819363d7f79ff6e08a8dcf54f8a022e1bdab7b0463b0a -->

```csharp
public void Inno.Rendering.Runtime.RenderPipeline.Dispose()
```

Releases generation-scoped pipeline state.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Pipeline work is still active. The owner must retain this instance and retry before releasing dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L50).

## `Dispose`

<a id="api-169a5a43487bd6b5"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipeline.Dispose(System.Boolean) 89a5d30c466f7caf30939ebb0393a4af2d6bbfb808080b8fdbdf453380102e74 -->

```csharp
protected virtual void Inno.Rendering.Runtime.RenderPipeline.Dispose(bool disposing)
```

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L94).

## `OnConfigure`

<a id="api-f7c5b7c3e9369fea"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipeline.OnConfigure(Inno.Rendering.Assets.SerializedRenderExtensionState,Inno.Rendering.Runtime.RenderExtensionStateContext) f88d4a19d7f4ba95774ab40ee6dd9f59c3f6133e134ca51cdc9230d5ac5941c4 -->

```csharp
protected virtual void Inno.Rendering.Runtime.RenderPipeline.OnConfigure(Inno.Rendering.Assets.SerializedRenderExtensionState state, Inno.Rendering.Runtime.RenderExtensionStateContext settings)
```

Reads pipeline-owned settings from neutral state.

**Parameter `state`:** Reload-safe extension state.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L80).
