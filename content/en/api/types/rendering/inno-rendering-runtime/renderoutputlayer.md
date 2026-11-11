---
title: "RenderOutputLayer"
description: "Reference for RenderOutputLayer in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.235e743ed94ca600
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderOutputLayer`

This reference describes `RenderOutputLayer` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-aa6c8429c40397ab) | Method |
| [`modelId`](#api-86972b19e7f16778) | Property |
| [`sourceIds`](#api-ec6368c47b5735a5) | Property |

## Type declaration

<a id="api-235e743ed94ca600"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderOutputLayer e4a30caa5c541486cd61bfd09d7cbe06d6bc57eb51f4cb1675747209881da91c -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderOutputLayer
```

Assigns exactly one rendering model and its world-content sources to an output layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L15).

## `#ctor`

<a id="api-aa6c8429c40397ab"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderOutputLayer.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String}) 0c962b8e46f5b7467218b8fea61f9c5d798a13823d8710964a83e6cb0a2621a8 -->

```csharp
public Inno.Rendering.Runtime.RenderOutputLayer.RenderOutputLayer(string modelId, System.Collections.Generic.IEnumerable<string> sourceIds)
```

Creates a model layer with explicit, distinct content-source IDs.

**Parameter `modelId`:** Stable render-model or Editor contributor ID.

**Parameter `sourceIds`:** World-content sources exclusively owned by this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L26).

## `modelId`

<a id="api-86972b19e7f16778"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputLayer.modelId cac50b0b25fe92ab9d178fb8be78983e149a219f918471323b61fe81ed32d2e2 -->

```csharp
public string Inno.Rendering.Runtime.RenderOutputLayer.modelId { get; }
```

Gets the exact rendering model ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L43).

## `sourceIds`

<a id="api-ec6368c47b5735a5"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputLayer.sourceIds f90404689a74eb6183703dbe2d6ba5ee84053663a30bb9813106ba3bdff3ca4a -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Runtime.RenderOutputLayer.sourceIds { get; }
```

Gets the assigned world-content source IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputLayer.cs#L47).
