---
title: "IViewContentFrameSource"
description: "Reference for IViewContentFrameSource in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.1fb33473ed530fa8
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IViewContentFrameSource`

This reference describes `IViewContentFrameSource` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CompleteFrame`](#api-022a33cccc2c727e) | Method |

## Type declaration

<a id="api-1fb33473ed530fa8"></a>
<!-- api: T:Inno.Rendering.Runtime.IViewContentFrameSource 2316c20c65f10d3f5329dd03d5d094719833dce346dd70878f9e2e4cb2992911 -->

```csharp
public interface Inno.Rendering.Runtime.IViewContentFrameSource
```

Completes frame-local input after every output has routed its views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L388).

## `CompleteFrame`

<a id="api-022a33cccc2c727e"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewContentFrameSource.CompleteFrame(System.UInt64) bacd130ab498acb4bb0004ca24dcf1b53a935abfee625b56c5040bc23e2d3c32 -->

```csharp
void Inno.Rendering.Runtime.IViewContentFrameSource.CompleteFrame(ulong frameIndex)
```

Advances retained content once after all output views have supplied input.

**Parameter `frameIndex`:** The shared render frame whose input routing has completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L396).
