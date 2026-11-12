---
title: "IViewContentFrameSource"
description: "Reference for IViewContentFrameSource in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.c3da430a6644b29d
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IViewContentFrameSource`

This reference describes `IViewContentFrameSource` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`CompleteFrame`](#api-c4a98aa13a6a9c95) | Method |

## Type declaration

<a id="api-c3da430a6644b29d"></a>
<!-- api: T:InnoEngine.Rendering.IViewContentFrameSource 3296e6dfa03f3c88428eb951d457e9de197336f4b85e264ffcb1b626e3cdb55e -->

```csharp
public interface InnoEngine.Rendering.IViewContentFrameSource
```

Completes frame-local input after every output has routed its views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L388).

## `CompleteFrame`

<a id="api-c4a98aa13a6a9c95"></a>
<!-- api: M:InnoEngine.Rendering.IViewContentFrameSource.CompleteFrame(System.UInt64) 971fb7a30f5090b6b253b1fc63a266dfa9fb2dc51f64aa69e6b3541d9129e90b -->

```csharp
void InnoEngine.Rendering.IViewContentFrameSource.CompleteFrame(ulong frameIndex)
```

Advances retained content once after all output views have supplied input.

**Parameter `frameIndex`:** The shared render frame whose input routing has completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L396).
