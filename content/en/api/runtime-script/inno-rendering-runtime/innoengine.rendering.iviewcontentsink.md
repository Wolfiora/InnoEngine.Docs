---
title: "IViewContentSink"
description: "Reference for IViewContentSink in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.322d7a9c23fd1c13
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IViewContentSink`

This reference describes `IViewContentSink` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Submit`](#api-88eeb9794369d256) | Method |

## Type declaration

<a id="api-322d7a9c23fd1c13"></a>
<!-- api: T:InnoEngine.Rendering.IViewContentSink dc0ecba49ddb3c6283d48d5c0398831c4c1a40185eefdb3e94f4b9c63e4a3f1f -->

```csharp
public interface InnoEngine.Rendering.IViewContentSink
```

Receives world items without imposing a rendering-model sort key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L352).

## `Submit`

<a id="api-88eeb9794369d256"></a>
<!-- api: M:InnoEngine.Rendering.IViewContentSink.Submit(InnoEngine.Rendering.ViewContentItem) edd8dbae3c622dff1fd6e4b1e72a23693a5f02519bd9941b205ae81b82a446a4 -->

```csharp
void InnoEngine.Rendering.IViewContentSink.Submit(InnoEngine.Rendering.ViewContentItem item)
```

Adds an item to the current view.

**Parameter `item`:** Frame-local content item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L360).
