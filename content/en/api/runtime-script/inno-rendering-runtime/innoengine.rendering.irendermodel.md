---
title: "IRenderModel"
description: "Reference for IRenderModel in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.d14239796684528f
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IRenderModel`

This reference describes `IRenderModel` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Build`](#api-a101dacd2d1dfcaa) | Method |
| [`CanRender`](#api-210a143835ba2fb0) | Method |

## Type declaration

<a id="api-d14239796684528f"></a>
<!-- api: T:InnoEngine.Rendering.IRenderModel 9ee894b4395d42899f6e2e68b254edfe74ef8acc7536d1cfe954fb64941a4167 -->

```csharp
public interface InnoEngine.Rendering.IRenderModel : System.IDisposable
```

Builds view requests from host output sessions without owning a host window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/IRenderModel.cs#L15).

## `Build`

<a id="api-a101dacd2d1dfcaa"></a>
<!-- api: M:InnoEngine.Rendering.IRenderModel.Build(InnoEngine.Rendering.RenderOutputSession) 439a60fd7d1becd1e5a13f5e7aeef4c62cd23ecf53d4891ccd125163b26c7f8f -->

```csharp
InnoEngine.Rendering.RenderModelOutput InnoEngine.Rendering.IRenderModel.Build(InnoEngine.Rendering.RenderOutputSession session)
```

Builds one model output after acceptance.

**Parameter `session`:** Host output session.

**Returns:** Prepared frame data and pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/IRenderModel.cs#L37).

## `CanRender`

<a id="api-210a143835ba2fb0"></a>
<!-- api: M:InnoEngine.Rendering.IRenderModel.CanRender(InnoEngine.Rendering.RenderOutputSession) 16cd1b98135b68d7c2dcee679da7644a4b788a9d4526aa869b4218174533c3a4 -->

```csharp
bool InnoEngine.Rendering.IRenderModel.CanRender(InnoEngine.Rendering.RenderOutputSession session)
```

Determines whether this model accepts the session's content.

**Parameter `session`:** Host output session.

**Returns:** Whether the model can render the selected content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/IRenderModel.cs#L26).
