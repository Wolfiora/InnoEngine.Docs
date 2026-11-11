---
title: "RenderPipelineFeature"
description: "Reference for RenderPipelineFeature in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.1227515dd306beb4
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderPipelineFeature`

This reference describes `RenderPipelineFeature` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3ef1cca084ed8d98) | Method |
| [`AddRenderPasses`](#api-6578a1e17a044599) | Method |
| [`Configure`](#api-e857243ba3d6a519) | Method |
| [`OnConfigure`](#api-18d8ea91415c8518) | Method |

## Type declaration

<a id="api-1227515dd306beb4"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderPipelineFeature e13ea9f674e590ea1a6f0e49818ebd47b3ad6ed7b82fc1b590114334d9fd5b61 -->

```csharp
public abstract class Inno.Rendering.Runtime.RenderPipelineFeature
```

Adds capability-aware passes without owning frame graph state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L15).

## `#ctor`

<a id="api-3ef1cca084ed8d98"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipelineFeature.#ctor ade60dc4e255640732610c94390ff7a1eab7627f96e8151b4c4724496855c246 -->

```csharp
protected Inno.Rendering.Runtime.RenderPipelineFeature.RenderPipelineFeature()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L15).

## `AddRenderPasses`

<a id="api-6578a1e17a044599"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipelineFeature.AddRenderPasses(Inno.Rendering.Runtime.RenderFeatureContext) 71b0ce315fc527b1ea6119d44c278dcc77d822d206694655e001f83cd9fe6fa8 -->

```csharp
public abstract void Inno.Rendering.Runtime.RenderPipelineFeature.AddRenderPasses(Inno.Rendering.Runtime.RenderFeatureContext context)
```

Adds frame-scoped passes and dependencies.

**Parameter `context`:** Frame-scoped feature context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L40).

## `Configure`

<a id="api-e857243ba3d6a519"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipelineFeature.Configure(Inno.Rendering.Assets.RenderFeatureConfiguration,Inno.Rendering.Runtime.RenderExtensionStateContext) 2388f43e5d3180482ca0342e7445fe4956d404213ec3d7a9b5c258a4b741572b -->

```csharp
public void Inno.Rendering.Runtime.RenderPipelineFeature.Configure(Inno.Rendering.Assets.RenderFeatureConfiguration configuration, Inno.Rendering.Runtime.RenderExtensionStateContext settings)
```

Applies reload-safe settings to this feature generation.

**Parameter `configuration`:** Stable feature configuration.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L26).

## `OnConfigure`

<a id="api-18d8ea91415c8518"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipelineFeature.OnConfigure(Inno.Rendering.Assets.SerializedRenderExtensionState,Inno.Rendering.Runtime.RenderExtensionStateContext) a4dd17a39e821f7a0787263db3f669bec32876638fc712c40e059b839347e884 -->

```csharp
protected virtual void Inno.Rendering.Runtime.RenderPipelineFeature.OnConfigure(Inno.Rendering.Assets.SerializedRenderExtensionState state, Inno.Rendering.Runtime.RenderExtensionStateContext settings)
```

Reads feature-owned settings from neutral state.

**Parameter `state`:** Reload-safe extension state.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L51).
