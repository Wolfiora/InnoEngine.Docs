---
title: "RenderOutputRoute"
description: "Reference for RenderOutputRoute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.83fc599e68a6b64a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderOutputRoute`

This reference describes `RenderOutputRoute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-011b4f7bd60821c7) | Method |
| [`layers`](#api-df3c72fda518891d) | Property |

## Type declaration

<a id="api-83fc599e68a6b64a"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderOutputRoute b7f6c344ea1d05b96d4a3a56e04fada190ccb51bb665c55a88a16150740b1eb6 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderOutputRoute
```

States the exact model order and exclusive world-content assignment for one output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputRoute.cs#L15).

## `#ctor`

<a id="api-011b4f7bd60821c7"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderOutputRoute.#ctor(System.Collections.Generic.IEnumerable{Inno.Rendering.Runtime.RenderOutputLayer}) 41d625077e4607e1b4cf22351b6ebc24cf80aee248a4a8eab153aec81fdf173e -->

```csharp
public Inno.Rendering.Runtime.RenderOutputRoute.RenderOutputRoute(System.Collections.Generic.IEnumerable<Inno.Rendering.Runtime.RenderOutputLayer> layers)
```

Creates a route from explicitly assigned model layers in draw order.

**Parameter `layers`:** Exact model identities and exclusive source assignments in draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputRoute.cs#L23).

## `layers`

<a id="api-df3c72fda518891d"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderOutputRoute.layers 8968c4f94732083660a4a9e776f63934f91bb1b44c029fa63c9c031aba571cba -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderOutputLayer> Inno.Rendering.Runtime.RenderOutputRoute.layers { get; }
```

Gets exact model and source assignments in draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputRoute.cs#L39).
