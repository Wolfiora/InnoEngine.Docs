---
title: "SelectedViewContentCollector"
description: "Reference for SelectedViewContentCollector in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.8a17c479e5eefcf1
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `SelectedViewContentCollector`

This reference describes `SelectedViewContentCollector` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Rendering.IViewContentCollector`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cb623e7a12b39b16) | Method |
| [`Collect`](#api-b51d615af19975a4) | Method |

## Type declaration

<a id="api-8a17c479e5eefcf1"></a>
<!-- api: T:InnoEngine.Rendering.SelectedViewContentCollector a0908dfb9313476cbd044f31db7e79a04ac4910355971bbdd0a545f34147176d -->

```csharp
public sealed class InnoEngine.Rendering.SelectedViewContentCollector : InnoEngine.Rendering.IViewContentCollector
```

Restricts a neutral world-content collector to an output layer's source IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L446).

## `#ctor`

<a id="api-cb623e7a12b39b16"></a>
<!-- api: M:InnoEngine.Rendering.SelectedViewContentCollector.#ctor(InnoEngine.Rendering.IViewContentCollector,System.Collections.Generic.IReadOnlyList{System.String}) 1da45d74c8afbb37583d8c31ab180c1c5407406283de64da9a197d8a86073d0e -->

```csharp
public InnoEngine.Rendering.SelectedViewContentCollector.SelectedViewContentCollector(InnoEngine.Rendering.IViewContentCollector inner, System.Collections.Generic.IReadOnlyList<string> sourceIds)
```

Creates a collector that forwards only the selected source identities.

**Parameter `inner`:** Active generation's source collector.

**Parameter `sourceIds`:** Source IDs exclusively assigned to this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L460).

## `Collect`

<a id="api-b51d615af19975a4"></a>
<!-- api: M:InnoEngine.Rendering.SelectedViewContentCollector.Collect(InnoEngine.Rendering.ViewContentContext) e2d06ff0d0092bdeed5e334fa0e1a71a333f069e21f89d70634172d2a08c1f04 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ViewContentItem> InnoEngine.Rendering.SelectedViewContentCollector.Collect(InnoEngine.Rendering.ViewContentContext context)
```

Collects only the assigned world-content sources for one exact view.

**Parameter `context`:** The original model view, output input, and frame timing.

**Returns:** Frame-local content emitted by the assigned sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L477).
