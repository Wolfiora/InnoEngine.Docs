---
title: "RenderOutputLayer"
description: "Reference for RenderOutputLayer in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.ed6d27de7a8ad411
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderOutputLayer`

This reference describes `RenderOutputLayer` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-418d916a884d9188) | Method |
| [`modelId`](#api-4910ee72f20ee0a0) | Property |
| [`sourceIds`](#api-84b2c7afcabfc407) | Property |

## Type declaration

<a id="api-ed6d27de7a8ad411"></a>
<!-- api: T:InnoEngine.Rendering.RenderOutputLayer 1592f03d8c9067c556b84f5b0782b63c7076f3f322859ab576c75f2a4ab7b826 -->

```csharp
public sealed class InnoEngine.Rendering.RenderOutputLayer
```

Assigns exactly one rendering model and its world-content sources to an output layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L15).

## `#ctor`

<a id="api-418d916a884d9188"></a>
<!-- api: M:InnoEngine.Rendering.RenderOutputLayer.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String}) f1816a602fe072d13245e3f2d71421b5dc17103aaa5dae59b892b88b61da0b64 -->

```csharp
public InnoEngine.Rendering.RenderOutputLayer.RenderOutputLayer(string modelId, System.Collections.Generic.IEnumerable<string> sourceIds)
```

Creates a model layer with explicit, distinct content-source IDs.

**Parameter `modelId`:** Stable render-model or Editor contributor ID.

**Parameter `sourceIds`:** World-content sources exclusively owned by this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L26).

## `modelId`

<a id="api-4910ee72f20ee0a0"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputLayer.modelId f7433d47117e727a28bec95807bbc6e56d35e9e80b3115bf8420116959007c19 -->

```csharp
public string InnoEngine.Rendering.RenderOutputLayer.modelId { get; }
```

Gets the exact rendering model ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L43).

## `sourceIds`

<a id="api-84b2c7afcabfc407"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputLayer.sourceIds b384bb46c526a728fb5e60d6135284c17616f067346f0575ea5ac07cfaa72c81 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.Rendering.RenderOutputLayer.sourceIds { get; }
```

Gets the assigned world-content source IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L47).
