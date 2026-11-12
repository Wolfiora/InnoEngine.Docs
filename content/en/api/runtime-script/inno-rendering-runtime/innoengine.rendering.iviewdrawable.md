---
title: "IViewDrawable"
description: "Reference for IViewDrawable in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.eb241b95bc6316bc
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IViewDrawable`

This reference describes `IViewDrawable` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`TryPrepare`](#api-a52bf2708352374d) | Method |

## Type declaration

<a id="api-eb241b95bc6316bc"></a>
<!-- api: T:InnoEngine.Rendering.IViewDrawable c885eb79fd238426c14843f63afe504aa3ef9bcbf95faeb8465f4c599806bd9f -->

```csharp
public interface InnoEngine.Rendering.IViewDrawable
```

Prepares one model-independent drawable for a specific render pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L171).

## `TryPrepare`

<a id="api-a52bf2708352374d"></a>
<!-- api: M:InnoEngine.Rendering.IViewDrawable.TryPrepare(InnoEngine.Rendering.RenderPipelineContext,InnoEngine.Rendering.RenderView,InnoEngine.Rendering.IPreparedViewDrawable@) 59915b8de5486f0a93c2f0787a603503c42b514672f34c6824d07e004e19b4a1 -->

```csharp
bool InnoEngine.Rendering.IViewDrawable.TryPrepare(InnoEngine.Rendering.RenderPipelineContext context, InnoEngine.Rendering.RenderView view, out InnoEngine.Rendering.IPreparedViewDrawable? prepared)
```

Resolves reusable resources before render graph execution.

**Parameter `context`:** Active pipeline build context.

**Parameter `view`:** View that will draw this item.

**Parameter `prepared`:** Prepared frame-local draw when resources are available.

**Returns:** Whether the drawable is ready for this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L188).
