---
title: "IViewDrawable"
description: "Reference for IViewDrawable in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.d9068c01082c62f6
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IViewDrawable`

This reference describes `IViewDrawable` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`TryPrepare`](#api-47e5ac96c2353b0c) | Method |

## Type declaration

<a id="api-d9068c01082c62f6"></a>
<!-- api: T:Inno.Rendering.Runtime.IViewDrawable 7c16f9602f99650abc396e801f6399f682ccd83cf7498de1ab45f2af96448a3d -->

```csharp
public interface Inno.Rendering.Runtime.IViewDrawable
```

Prepares one model-independent drawable for a specific render pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L171).

## `TryPrepare`

<a id="api-47e5ac96c2353b0c"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewDrawable.TryPrepare(Inno.Rendering.Runtime.RenderPipelineContext,Inno.Rendering.Runtime.RenderView,Inno.Rendering.Runtime.IPreparedViewDrawable@) 0afcd31f204fde1c442f54852fc99d8711ed6460f7ad0b2ca22303b098ce8d07 -->

```csharp
bool Inno.Rendering.Runtime.IViewDrawable.TryPrepare(Inno.Rendering.Runtime.RenderPipelineContext context, Inno.Rendering.Runtime.RenderView view, out Inno.Rendering.Runtime.IPreparedViewDrawable? prepared)
```

Resolves reusable resources before render graph execution.

**Parameter `context`:** Active pipeline build context.

**Parameter `view`:** View that will draw this item.

**Parameter `prepared`:** Prepared frame-local draw when resources are available.

**Returns:** Whether the drawable is ready for this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L188).
