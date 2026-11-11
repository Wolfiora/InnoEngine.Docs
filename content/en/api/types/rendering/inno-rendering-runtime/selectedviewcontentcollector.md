---
title: "SelectedViewContentCollector"
description: "Reference for SelectedViewContentCollector in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.8a473b6fd2e539be
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `SelectedViewContentCollector`

This reference describes `SelectedViewContentCollector` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Runtime.IViewContentCollector`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-76560d5e098102e3) | Method |
| [`Collect`](#api-3c932a1c15f37f40) | Method |

## Type declaration

<a id="api-8a473b6fd2e539be"></a>
<!-- api: T:Inno.Rendering.Runtime.SelectedViewContentCollector 8961e8ce6ce579eff11a94f6e42c23d78036b36e835ee211ac8abdc62646bade -->

```csharp
public sealed class Inno.Rendering.Runtime.SelectedViewContentCollector : Inno.Rendering.Runtime.IViewContentCollector
```

Restricts a neutral world-content collector to an output layer's source IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L446).

## `#ctor`

<a id="api-76560d5e098102e3"></a>
<!-- api: M:Inno.Rendering.Runtime.SelectedViewContentCollector.#ctor(Inno.Rendering.Runtime.IViewContentCollector,System.Collections.Generic.IReadOnlyList{System.String}) a0afcf7036fb256505688dbae265c847485597fce714fe47e3db09f068c5fdb0 -->

```csharp
public Inno.Rendering.Runtime.SelectedViewContentCollector.SelectedViewContentCollector(Inno.Rendering.Runtime.IViewContentCollector inner, System.Collections.Generic.IReadOnlyList<string> sourceIds)
```

Creates a collector that forwards only the selected source identities.

**Parameter `inner`:** Active generation's source collector.

**Parameter `sourceIds`:** Source IDs exclusively assigned to this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L460).

## `Collect`

<a id="api-3c932a1c15f37f40"></a>
<!-- api: M:Inno.Rendering.Runtime.SelectedViewContentCollector.Collect(Inno.Rendering.Runtime.ViewContentContext) 566f03d8beda70710837ea2b547b0b99a4c788d2897aea2750597bb1a16ea1f7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.ViewContentItem> Inno.Rendering.Runtime.SelectedViewContentCollector.Collect(Inno.Rendering.Runtime.ViewContentContext context)
```

Collects only the assigned world-content sources for one exact view.

**Parameter `context`:** The original model view, output input, and frame timing.

**Returns:** Frame-local content emitted by the assigned sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L477).
