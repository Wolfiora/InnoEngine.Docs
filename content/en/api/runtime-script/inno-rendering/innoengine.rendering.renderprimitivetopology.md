---
title: "RenderPrimitiveTopology"
description: "Reference for RenderPrimitiveTopology in Inno.Rendering."
uid: api.inno.rendering.runtime-script.d915513bf17d7251
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPrimitiveTopology`

This reference describes `RenderPrimitiveTopology` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`LineList`](#api-0c5031a4eab3b70b) | Field |
| [`LineStrip`](#api-c0e6d35fc51320a3) | Field |
| [`PointList`](#api-d703564ee2d84216) | Field |
| [`TriangleList`](#api-a26e739a29ed1412) | Field |
| [`TriangleStrip`](#api-f17b83751f6934de) | Field |

## Type declaration

<a id="api-d915513bf17d7251"></a>
<!-- api: T:InnoEngine.Rendering.RenderPrimitiveTopology fa6810ede5fa4264f21005129fbd4898a4648c68062a9d0b250bbc570d797604 -->

```csharp
public enum InnoEngine.Rendering.RenderPrimitiveTopology : int
```

Selects the primitive assembly used by raster draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L355).

## `LineList`

<a id="api-0c5031a4eab3b70b"></a>
<!-- api: F:InnoEngine.Rendering.RenderPrimitiveTopology.LineList b564ecd51edc2ae43c4c3add22245f7f614211308bd1c1b412e1e9d78cc362df -->

```csharp
InnoEngine.Rendering.RenderPrimitiveTopology.LineList = 2
```

Independent line pairs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L368).

## `LineStrip`

<a id="api-c0e6d35fc51320a3"></a>
<!-- api: F:InnoEngine.Rendering.RenderPrimitiveTopology.LineStrip 1d1a6271f48514952706fe3ac54ed2924a3fc5bd8ec4f1902a5e86f5f3be4f57 -->

```csharp
InnoEngine.Rendering.RenderPrimitiveTopology.LineStrip = 3
```

Connected line strip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L372).

## `PointList`

<a id="api-d703564ee2d84216"></a>
<!-- api: F:InnoEngine.Rendering.RenderPrimitiveTopology.PointList ac25fb0fa988a5ff38e990a4539c240038b4202a56a631dba522b06b983c31b9 -->

```csharp
InnoEngine.Rendering.RenderPrimitiveTopology.PointList = 4
```

Independent points.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L376).

## `TriangleList`

<a id="api-a26e739a29ed1412"></a>
<!-- api: F:InnoEngine.Rendering.RenderPrimitiveTopology.TriangleList 360629994b5536b1db35cf26c24b26514fc42ef227efba9b2970e4c244eca12e -->

```csharp
InnoEngine.Rendering.RenderPrimitiveTopology.TriangleList = 0
```

Independent triangle triplets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L360).

## `TriangleStrip`

<a id="api-f17b83751f6934de"></a>
<!-- api: F:InnoEngine.Rendering.RenderPrimitiveTopology.TriangleStrip f5669a859f3e3aaaae387bf741b341d2889018925f5f45fff46e82ba0bee12ac -->

```csharp
InnoEngine.Rendering.RenderPrimitiveTopology.TriangleStrip = 1
```

Connected triangle strip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L364).
