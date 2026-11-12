---
title: "RenderDepthCompare"
description: "Reference for RenderDepthCompare in Inno.Rendering."
uid: api.inno.rendering.runtime-script.75ac171487cafbbd
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderDepthCompare`

This reference describes `RenderDepthCompare` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-ec82638ab4887289) | Field |
| [`Equal`](#api-cae627b018cc9c7b) | Field |
| [`Greater`](#api-913fdf07bb24de21) | Field |
| [`GreaterEqual`](#api-b5b1337a7c22ff70) | Field |
| [`Less`](#api-842f5698dce8f3fa) | Field |
| [`LessEqual`](#api-83e361aa31c1895d) | Field |
| [`Never`](#api-b092eae3f22c44d0) | Field |
| [`NotEqual`](#api-0044d84c9a259d5f) | Field |

## Type declaration

<a id="api-75ac171487cafbbd"></a>
<!-- api: T:InnoEngine.Rendering.RenderDepthCompare f250cf6032c80f42e2d383dd973b88ace2eb3c7b76d398764b004db20bf76a4e -->

```csharp
public enum InnoEngine.Rendering.RenderDepthCompare : int
```

Selects depth comparison for a backend-neutral raster pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L44).

## `Always`

<a id="api-ec82638ab4887289"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.Always 5d79660be71ae569c3d59c3b798952ef7ab51facf7d6f15e42b12cb818b99a6d -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.Always = 7
```

Always accepts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L77).

## `Equal`

<a id="api-cae627b018cc9c7b"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.Equal f09877fec2a0d1fde7df836974d595b1e772f0d526e538aea4fb408ccedb938b -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.Equal = 2
```

Accepts equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L57).

## `Greater`

<a id="api-913fdf07bb24de21"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.Greater c7a382e2114d871b6475a15b574009a495e926cbb3e552c2876b19492a2ce502 -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.Greater = 4
```

Accepts greater depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L65).

## `GreaterEqual`

<a id="api-b5b1337a7c22ff70"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.GreaterEqual f3b0c2192791c207f69e31d2e9bb4ecffd87001598181ea78569efd4e392169b -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.GreaterEqual = 6
```

Accepts greater or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L73).

## `Less`

<a id="api-842f5698dce8f3fa"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.Less 3fdbdca5cd77d892732aa3c23e71d214d72f968631ff576848402f46ddc2685a -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.Less = 1
```

Accepts smaller depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L53).

## `LessEqual`

<a id="api-83e361aa31c1895d"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.LessEqual 5ea33cf85d0749b75bd5435531852f79c0f703d5db69f4f748d4fac21db14e8a -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.LessEqual = 3
```

Accepts smaller or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L61).

## `Never`

<a id="api-b092eae3f22c44d0"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.Never cce03edcd8f9a2e59b8c75e11d8a127bdf03d4fa705950866ef13eac7e3a00cf -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.Never = 0
```

Always rejects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L49).

## `NotEqual`

<a id="api-0044d84c9a259d5f"></a>
<!-- api: F:InnoEngine.Rendering.RenderDepthCompare.NotEqual 9629dba8c8d222c09a4032b0a445e2676ff48d4877d53e3c5378213728a708c6 -->

```csharp
InnoEngine.Rendering.RenderDepthCompare.NotEqual = 5
```

Accepts unequal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L69).
