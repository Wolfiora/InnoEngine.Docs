---
title: "IViewContentSource"
description: "Reference for IViewContentSource in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.49f0f73bdcec6d13
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IViewContentSource`

This reference describes `IViewContentSource` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Collect`](#api-a659d34c5c041c1c) | Method |

## Type declaration

<a id="api-49f0f73bdcec6d13"></a>
<!-- api: T:Inno.Rendering.Runtime.IViewContentSource 4030936ee8ad87d90c09364f50018ea330d3ad0db86eeb98d7ba513ce8eff575 -->

```csharp
public interface Inno.Rendering.Runtime.IViewContentSource : System.IDisposable
```

Contributes model-independent world items to selected views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L367).

## `Collect`

<a id="api-a659d34c5c041c1c"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewContentSource.Collect(Inno.Rendering.Runtime.ViewContentContext,Inno.Rendering.Runtime.IViewContentSink) e2a8e792a9adbd3765698a662bb7f7a3852fc785f6dca2ea0bee35bdccdc20f1 -->

```csharp
void Inno.Rendering.Runtime.IViewContentSource.Collect(Inno.Rendering.Runtime.ViewContentContext context, Inno.Rendering.Runtime.IViewContentSink sink)
```

Collects items for one exact view.

**Parameter `context`:** Frame-scoped host content and view.

**Parameter `sink`:** Collector receiving items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L378).
