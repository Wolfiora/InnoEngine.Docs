---
title: "IRenderModel"
description: "Reference for IRenderModel in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.e7c07b28da53eae0
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IRenderModel`

This reference describes `IRenderModel` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Build`](#api-553cd40fe5ca2885) | Method |
| [`CanRender`](#api-4bdfd6b7f329d58a) | Method |

## Type declaration

<a id="api-e7c07b28da53eae0"></a>
<!-- api: T:Inno.Rendering.Runtime.IRenderModel b483cc64107fc42290a6f05fe75ab64c0b2ea496b6abd5baca0a94cfe9f372ae -->

```csharp
public interface Inno.Rendering.Runtime.IRenderModel : System.IDisposable
```

Builds view requests from host output sessions without owning a host window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/IRenderModel.cs#L15).

## `Build`

<a id="api-553cd40fe5ca2885"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderModel.Build(Inno.Rendering.Runtime.RenderOutputSession) 22400d14e451e5136502e62ae8e354d00a8208a700b2a3e69c7437eba89f5934 -->

```csharp
Inno.Rendering.Runtime.RenderModelOutput Inno.Rendering.Runtime.IRenderModel.Build(Inno.Rendering.Runtime.RenderOutputSession session)
```

Builds one model output after acceptance.

**Parameter `session`:** Host output session.

**Returns:** Prepared frame data and pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/IRenderModel.cs#L37).

## `CanRender`

<a id="api-4bdfd6b7f329d58a"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderModel.CanRender(Inno.Rendering.Runtime.RenderOutputSession) ad5b1615fa188027f7db726dd4c1654438548a060c6f01591768693a57287219 -->

```csharp
bool Inno.Rendering.Runtime.IRenderModel.CanRender(Inno.Rendering.Runtime.RenderOutputSession session)
```

Determines whether this model accepts the session's content.

**Parameter `session`:** Host output session.

**Returns:** Whether the model can render the selected content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/IRenderModel.cs#L26).
