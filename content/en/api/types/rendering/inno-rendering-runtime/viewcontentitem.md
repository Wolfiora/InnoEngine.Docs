---
title: "ViewContentItem"
description: "Reference for ViewContentItem in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.024cc1bbc9548a86
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `ViewContentItem`

This reference describes `ViewContentItem` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eb0a61e9c6e61b5c) | Method |
| [`drawable`](#api-e24def516f41774b) | Property |
| [`localBoundsMax`](#api-ec13f21926eb114b) | Property |
| [`localBoundsMin`](#api-8cb5dea6ec572dcb) | Property |
| [`localToWorld`](#api-a490c5530c6f6052) | Property |
| [`owner`](#api-5b1f896629d89a01) | Property |
| [`pointerTarget`](#api-4b8d337a665818cd) | Property |

## Type declaration

<a id="api-024cc1bbc9548a86"></a>
<!-- api: T:Inno.Rendering.Runtime.ViewContentItem a3a9a8956f8940c1eb222a1167f45a0d32ffec9ba990acd25406336997dc6e43 -->

```csharp
public sealed class Inno.Rendering.Runtime.ViewContentItem
```

One world item supplied to a rendering model without choosing its sort policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L279).

## `#ctor`

<a id="api-eb0a61e9c6e61b5c"></a>
<!-- api: M:Inno.Rendering.Runtime.ViewContentItem.#ctor(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Rendering.Runtime.IViewDrawable,Inno.Rendering.Runtime.IViewPointerTarget) 6413da0c8a102d2695fa8f2293deb86af5659ddf755455af84085443e4df5a5a -->

```csharp
public Inno.Rendering.Runtime.ViewContentItem.ViewContentItem(Inno.Core.Identity.Identity owner, Inno.Core.Mathematics.Matrix localToWorld, Inno.Core.Mathematics.Vector3 localBoundsMin, Inno.Core.Mathematics.Vector3 localBoundsMax, Inno.Rendering.Runtime.IViewDrawable drawable, Inno.Rendering.Runtime.IViewPointerTarget? pointerTarget = null)
```

Creates an item whose lifetime is limited to the current frame.

**Parameter `owner`:** Scene object identity used for model-owned sorting and visibility.

**Parameter `localToWorld`:** Exact transform of its local geometry.

**Parameter `localBoundsMin`:** Local minimum corner for conservative culling.

**Parameter `localBoundsMax`:** Local maximum corner for conservative culling.

**Parameter `drawable`:** Drawable inserted into the model's scene pass.

**Parameter `pointerTarget`:** Optional input target routed by the rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L302).

## `drawable`

<a id="api-e24def516f41774b"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentItem.drawable c890510ca8c2a09ba7f7b600a5ed8891307bda01df5dc84304a783e1fe5c420a -->

```csharp
public Inno.Rendering.Runtime.IViewDrawable Inno.Rendering.Runtime.ViewContentItem.drawable { get; }
```

Gets the drawable encoded by the selected rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L341).

## `localBoundsMax`

<a id="api-ec13f21926eb114b"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentItem.localBoundsMax 659ef84aef209925dc0846358d8a1b8a1a3bcbe8be3e1d0b84d5cac69655c3ae -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Rendering.Runtime.ViewContentItem.localBoundsMax { get; }
```

Gets the local maximum corner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L336).

## `localBoundsMin`

<a id="api-8cb5dea6ec572dcb"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentItem.localBoundsMin e15a84fe028b27338940c7bf0b5b7855d2fe69e9861b7dfa878d0187731c5070 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Rendering.Runtime.ViewContentItem.localBoundsMin { get; }
```

Gets the local minimum corner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L331).

## `localToWorld`

<a id="api-a490c5530c6f6052"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentItem.localToWorld 82cfa172ec4b220077c586de5f8a26d216437ea635382e93c66d836fa4e53489 -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Rendering.Runtime.ViewContentItem.localToWorld { get; }
```

Gets the local-to-world transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L326).

## `owner`

<a id="api-5b1f896629d89a01"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentItem.owner 9bb919b12bb0574883d4f5e28cb062bfa2d572455115c9e808575bf6c25cbc23 -->

```csharp
public Inno.Core.Identity.Identity Inno.Rendering.Runtime.ViewContentItem.owner { get; }
```

Gets the owner identity for model-owned sorting and visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L321).

## `pointerTarget`

<a id="api-4b8d337a665818cd"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentItem.pointerTarget 6130582157268055b8b9cda6c25cd7881ad43361396aff0b8207981ef98ba326 -->

```csharp
public Inno.Rendering.Runtime.IViewPointerTarget? Inno.Rendering.Runtime.ViewContentItem.pointerTarget { get; }
```

Gets the optional pointer target associated with this draw item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L345).
