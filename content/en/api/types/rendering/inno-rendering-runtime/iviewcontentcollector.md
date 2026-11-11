---
title: "IViewContentCollector"
description: "Reference for IViewContentCollector in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.81770319858ed7dd
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IViewContentCollector`

This reference describes `IViewContentCollector` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Collect`](#api-708cc3336ca8b7ba) | Method |

## Type declaration

<a id="api-81770319858ed7dd"></a>
<!-- api: T:Inno.Rendering.Runtime.IViewContentCollector b2fa72d6f64cf10b66280530e7a3cfc5961f1aba5223724cc2441ae2f7fc2700 -->

```csharp
public interface Inno.Rendering.Runtime.IViewContentCollector
```

Collects all active world-content sources for one exact view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L428).

## `Collect`

<a id="api-708cc3336ca8b7ba"></a>
<!-- api: M:Inno.Rendering.Runtime.IViewContentCollector.Collect(Inno.Rendering.Runtime.ViewContentContext) 7361c9676c780d682d8cf0ba8a65d25141459cc1c0c88227db032e06cd83a5b7 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.ViewContentItem> Inno.Rendering.Runtime.IViewContentCollector.Collect(Inno.Rendering.Runtime.ViewContentContext context)
```

Collects active source items in deterministic source order.

**Parameter `context`:** Frame-scoped host content and view.

**Returns:** Frame-local items; the caller owns their sort and composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L439).
