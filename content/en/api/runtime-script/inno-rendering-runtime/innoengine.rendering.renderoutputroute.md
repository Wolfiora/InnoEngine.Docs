---
title: "RenderOutputRoute"
description: "Reference for RenderOutputRoute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.5f7e34d1d72f1467
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderOutputRoute`

This reference describes `RenderOutputRoute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ef7099559951a3fc) | Method |
| [`layers`](#api-403b67acfe78cc4f) | Property |

## Type declaration

<a id="api-5f7e34d1d72f1467"></a>
<!-- api: T:InnoEngine.Rendering.RenderOutputRoute 85665e0b9fc3e3a00dec57d48b75ae5ef941dc2e7a9e9b9c1de2e76627b854d7 -->

```csharp
public sealed class InnoEngine.Rendering.RenderOutputRoute
```

States the exact model order and exclusive world-content assignment for one output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputRoute.cs#L15).

## `#ctor`

<a id="api-ef7099559951a3fc"></a>
<!-- api: M:InnoEngine.Rendering.RenderOutputRoute.#ctor(System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderOutputLayer}) 95eff6e95de985a4e16a083b4fb161065ff858cd2b7d79f99622dd9d3063636e -->

```csharp
public InnoEngine.Rendering.RenderOutputRoute.RenderOutputRoute(System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderOutputLayer> layers)
```

Creates a route from explicitly assigned model layers in draw order.

**Parameter `layers`:** Exact model identities and exclusive source assignments in draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputRoute.cs#L23).

## `layers`

<a id="api-403b67acfe78cc4f"></a>
<!-- api: P:InnoEngine.Rendering.RenderOutputRoute.layers 352d1d0c78801cba20dc8faede3758e90745d9d2c5a8dbf26b85acf487e2c0b2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderOutputLayer> InnoEngine.Rendering.RenderOutputRoute.layers { get; }
```

Gets exact model and source assignments in draw order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderOutputRoute.cs#L39).
