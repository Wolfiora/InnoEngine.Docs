---
title: "IViewContentSink"
description: "Reference for IViewContentSink in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.994b9d57d43bbe97
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IViewContentSink`

This reference describes `IViewContentSink` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Submit`](#api-16325c554344042a) | Method |

## Type declaration

<a id="api-994b9d57d43bbe97"></a>
<!-- api: T:Inno.Rendering.Runtime.IViewContentSink 7b45b52b43acffdc5de2abb6ce86635d80c96569f33adab2f3913505a348c8c1 -->

```csharp
public interface Inno.Rendering.Runtime.IViewContentSink
```

Receives world items without imposing a rendering-model sort key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L352).

## `Submit`

<a id="api-16325c554344042a"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewContentSink.Submit(Inno.Rendering.Runtime.ViewContentItem) 163060482ec732b67c53fd2f5399d56bbe0465f21942d5a7b2cf0155dfe91785 -->

```csharp
void Inno.Rendering.Runtime.IViewContentSink.Submit(Inno.Rendering.Runtime.ViewContentItem item)
```

Adds an item to the current view.

**Parameter `item`:** Frame-local content item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L360).
