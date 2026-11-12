---
title: "ViewContentItem"
description: "Reference for ViewContentItem in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.303b9f537000afd5
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `ViewContentItem`

This reference describes `ViewContentItem` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-da66af32b7a18a2b) | Method |
| [`drawable`](#api-0088f9bbb3490a0c) | Property |
| [`localBoundsMax`](#api-0cbc2328b6447f5e) | Property |
| [`localBoundsMin`](#api-08be6199a7279ca5) | Property |
| [`localToWorld`](#api-34c42bca357ec309) | Property |
| [`owner`](#api-6016d9077f923366) | Property |
| [`pointerTarget`](#api-3df3f8fc266376ef) | Property |

## Type declaration

<a id="api-303b9f537000afd5"></a>
<!-- api: T:InnoEngine.Rendering.ViewContentItem 71cd9e35d6910347f9095e6c6b42fbb9b61f40cd57ac23224a4c6795e81b15c6 -->

```csharp
public sealed class InnoEngine.Rendering.ViewContentItem
```

One world item supplied to a rendering model without choosing its sort policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L279).

## `#ctor`

<a id="api-da66af32b7a18a2b"></a>
<!-- api: M:InnoEngine.Rendering.ViewContentItem.#ctor(InnoEngine.Core.Identity,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Rendering.IViewDrawable,InnoEngine.Rendering.IViewPointerTarget) 9f59b8069244c249160ecebdde86fba6395da37020dedf75d0e518fd6b117d98 -->

```csharp
public InnoEngine.Rendering.ViewContentItem.ViewContentItem(InnoEngine.Core.Identity owner, InnoEngine.Mathematics.Matrix localToWorld, InnoEngine.Mathematics.Vector3 localBoundsMin, InnoEngine.Mathematics.Vector3 localBoundsMax, InnoEngine.Rendering.IViewDrawable drawable, InnoEngine.Rendering.IViewPointerTarget? pointerTarget = null)
```

Creates an item whose lifetime is limited to the current frame.

**Parameter `owner`:** Scene object identity used for model-owned sorting and visibility.

**Parameter `localToWorld`:** Exact transform of its local geometry.

**Parameter `localBoundsMin`:** Local minimum corner for conservative culling.

**Parameter `localBoundsMax`:** Local maximum corner for conservative culling.

**Parameter `drawable`:** Drawable inserted into the model's scene pass.

**Parameter `pointerTarget`:** Optional input target routed by the rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L302).

## `drawable`

<a id="api-0088f9bbb3490a0c"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentItem.drawable 7c782fd2402d662a566aaccadaf10eb7dd731ece67396e72bc55a8917cfe0270 -->

```csharp
public InnoEngine.Rendering.IViewDrawable InnoEngine.Rendering.ViewContentItem.drawable { get; }
```

Gets the drawable encoded by the selected rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L341).

## `localBoundsMax`

<a id="api-0cbc2328b6447f5e"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentItem.localBoundsMax ecf528843bebfe2a06362580e5c7643ce0a8dfb5bd44ba268663fc403895891e -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Rendering.ViewContentItem.localBoundsMax { get; }
```

Gets the local maximum corner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L336).

## `localBoundsMin`

<a id="api-08be6199a7279ca5"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentItem.localBoundsMin 4d10f8c2e2ef97ffb322f42b765cefee21de4598889916495cfaa1be4af1e496 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Rendering.ViewContentItem.localBoundsMin { get; }
```

Gets the local minimum corner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L331).

## `localToWorld`

<a id="api-34c42bca357ec309"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentItem.localToWorld 0dd6b5bf6b320cfeb7ba1f2d78eb27fc44da9b7329cfc7434108dcf898aad399 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Rendering.ViewContentItem.localToWorld { get; }
```

Gets the local-to-world transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L326).

## `owner`

<a id="api-6016d9077f923366"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentItem.owner 7c58ed357ee94edb275b698f8514179c9342eb464219dfb1eabd3ee5643b26c1 -->

```csharp
public InnoEngine.Core.Identity InnoEngine.Rendering.ViewContentItem.owner { get; }
```

Gets the owner identity for model-owned sorting and visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L321).

## `pointerTarget`

<a id="api-3df3f8fc266376ef"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentItem.pointerTarget dcae9c19149b6b621c7f847d4fc47151dc83e7b0ca87e329daf75002298d303a -->

```csharp
public InnoEngine.Rendering.IViewPointerTarget? InnoEngine.Rendering.ViewContentItem.pointerTarget { get; }
```

Gets the optional pointer target associated with this draw item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L345).
