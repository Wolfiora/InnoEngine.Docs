---
title: "RenderPipelineFeature"
description: "Reference for RenderPipelineFeature in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.07d70f666697b13e
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderPipelineFeature`

This reference describes `RenderPipelineFeature` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6fafa3266a23b39d) | Method |
| [`AddRenderPasses`](#api-656eb0d913f6d759) | Method |
| [`Configure`](#api-2192a3ffccbe1f00) | Method |
| [`OnConfigure`](#api-b3f627e7d191dbc1) | Method |

## Type declaration

<a id="api-07d70f666697b13e"></a>
<!-- api: T:InnoEngine.Rendering.RenderPipelineFeature d1aaaa6ea2534e0cddeef60bac59278bb156bff327a0a6dbac3da2d6fe66c52e -->

```csharp
public abstract class InnoEngine.Rendering.RenderPipelineFeature
```

Adds capability-aware passes without owning frame graph state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L15).

## `#ctor`

<a id="api-6fafa3266a23b39d"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineFeature.#ctor e889d8b7c9d6c7ec21f24963104ca2073c7c6e7f7e5b56a2056f80bfb8415ec8 -->

```csharp
protected InnoEngine.Rendering.RenderPipelineFeature.RenderPipelineFeature()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L15).

## `AddRenderPasses`

<a id="api-656eb0d913f6d759"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineFeature.AddRenderPasses(InnoEngine.Rendering.RenderFeatureContext) 1eddf8323fbf3b7602c277512d9f2b3a18bf78db205fdb3741f1ec44e6539cc0 -->

```csharp
public abstract void InnoEngine.Rendering.RenderPipelineFeature.AddRenderPasses(InnoEngine.Rendering.RenderFeatureContext context)
```

Adds frame-scoped passes and dependencies.

**Parameter `context`:** Frame-scoped feature context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L40).

## `Configure`

<a id="api-2192a3ffccbe1f00"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineFeature.Configure(InnoEngine.Rendering.RenderFeatureConfiguration,InnoEngine.Rendering.RenderExtensionStateContext) ab169c12ac9f3e94fd4407b861955aa6cb322b55f743c2420dcffa3e0945d33f -->

```csharp
public void InnoEngine.Rendering.RenderPipelineFeature.Configure(InnoEngine.Rendering.RenderFeatureConfiguration configuration, InnoEngine.Rendering.RenderExtensionStateContext settings)
```

Applies reload-safe settings to this feature generation.

**Parameter `configuration`:** Stable feature configuration.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L26).

## `OnConfigure`

<a id="api-b3f627e7d191dbc1"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineFeature.OnConfigure(InnoEngine.Rendering.SerializedRenderExtensionState,InnoEngine.Rendering.RenderExtensionStateContext) df1cdb960cbefa97fea783e3865089e88b1804c82100feae96961f3b713f9625 -->

```csharp
protected virtual void InnoEngine.Rendering.RenderPipelineFeature.OnConfigure(InnoEngine.Rendering.SerializedRenderExtensionState state, InnoEngine.Rendering.RenderExtensionStateContext settings)
```

Reads feature-owned settings from neutral state.

**Parameter `state`:** Reload-safe extension state.

**Parameter `settings`:** Native context bound to the canonical Pipeline asset's actual owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineFeature.cs#L51).
