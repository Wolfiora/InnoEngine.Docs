---
title: "RenderPipeline"
description: "Reference for RenderPipeline in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.43736d5e76d73d52
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderPipeline`

This reference describes `RenderPipeline` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b8d516fd4cb405f) | Method |
| [`Build`](#api-cd5517ad12baa12c) | Method |
| [`Configure`](#api-d3524433fbbc5bfb) | Method |
| [`Dispose`](#api-15007f5b4fbdfc4d) | Method |
| [`Dispose`](#api-247683e78654c0fe) | Method |
| [`OnConfigure`](#api-a68125688dfd5296) | Method |

## Type declaration

<a id="api-43736d5e76d73d52"></a>
<!-- api: T:InnoEngine.Rendering.RenderPipeline 6a403ac294a339224ffeb0302197cd9b0b8f9c05faebbb75777cda76b48de58f -->

```csharp
public abstract class InnoEngine.Rendering.RenderPipeline : System.IDisposable
```

Builds frame-local passes without prescribing a rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L15).

## `#ctor`

<a id="api-2b8d516fd4cb405f"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipeline.#ctor 83e8f361591b6799638df3ddc22ef95a0bf573985a7048952ec8612ae6590cc3 -->

```csharp
protected InnoEngine.Rendering.RenderPipeline.RenderPipeline()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L15).

## `Build`

<a id="api-cd5517ad12baa12c"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipeline.Build(InnoEngine.Rendering.RenderPipelineContext) e4ab0b8e693a5aa0eac0745769cdb01f8073c0348ba9b78096c8bee25c314aaa -->

```csharp
public abstract void InnoEngine.Rendering.RenderPipeline.Build(InnoEngine.Rendering.RenderPipelineContext context)
```

Builds all passes for one request.

**Parameter `context`:** Frame-scoped pipeline context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L42).

## `Configure`

<a id="api-d3524433fbbc5bfb"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipeline.Configure(InnoEngine.Rendering.SerializedRenderExtensionState,InnoEngine.Rendering.RenderExtensionStateContext) 3699712e80176adf5a867445810f33a3860125921a0a113c2548fcdcbb810c3d -->

```csharp
public void InnoEngine.Rendering.RenderPipeline.Configure(InnoEngine.Rendering.SerializedRenderExtensionState state, InnoEngine.Rendering.RenderExtensionStateContext settings)
```

Applies reload-safe pipeline settings to this generation.

**Parameter `state`:** Stable type identity and neutral property bytes.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L28).

## `Dispose`

<a id="api-15007f5b4fbdfc4d"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipeline.Dispose f2fd4807bba2095613b96195cd6182882460af2803df0bc7c5290dee9a1ec2b8 -->

```csharp
public void InnoEngine.Rendering.RenderPipeline.Dispose()
```

Releases generation-scoped pipeline state.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Pipeline work is still active. The owner must retain this instance and retry before releasing dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L50).

## `Dispose`

<a id="api-247683e78654c0fe"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipeline.Dispose(System.Boolean) 027a0f3fa3bfe4ee491a174f280a2f330081cd5dadfd8269a953b15e70ed53e4 -->

```csharp
protected virtual void InnoEngine.Rendering.RenderPipeline.Dispose(bool disposing)
```

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L94).

## `OnConfigure`

<a id="api-a68125688dfd5296"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipeline.OnConfigure(InnoEngine.Rendering.SerializedRenderExtensionState,InnoEngine.Rendering.RenderExtensionStateContext) f28578ad8e4bb0144e6c063c75543582fdb0e170c5162e2484bdf4f516c16237 -->

```csharp
protected virtual void InnoEngine.Rendering.RenderPipeline.OnConfigure(InnoEngine.Rendering.SerializedRenderExtensionState state, InnoEngine.Rendering.RenderExtensionStateContext settings)
```

Reads pipeline-owned settings from neutral state.

**Parameter `state`:** Reload-safe extension state.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipeline.cs#L80).
