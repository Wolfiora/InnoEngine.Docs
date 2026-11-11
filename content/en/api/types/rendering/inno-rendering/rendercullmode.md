---
title: "RenderCullMode"
description: "Reference for RenderCullMode in Inno.Rendering."
uid: api.inno.rendering.fe7baa7e03b88242
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderCullMode`

This reference describes `RenderCullMode` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Back`](#api-8cc3fb9b5b2953e0) | Field |
| [`Front`](#api-e22931c750fcf891) | Field |
| [`None`](#api-05bbac1d3cdcc8f8) | Field |

## Type declaration

<a id="api-fe7baa7e03b88242"></a>
<!-- api: T:Inno.Rendering.RenderCullMode c682c857c1334e429a9895dc3155dda7648a0df70b4a600471137977036b968e -->

```csharp
public enum Inno.Rendering.RenderCullMode : int
```

Selects triangle culling for a backend-neutral raster pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L10).

## `Back`

<a id="api-8cc3fb9b5b2953e0"></a>
<!-- api: F:Inno.Rendering.RenderCullMode.Back ee20c9d0f8e4e5f0b83ccb31c7763bf6ca15e6448e6e8f4cf4e471ad11c1bc15 -->

```csharp
Inno.Rendering.RenderCullMode.Back = 2
```

Culls back-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L23).

## `Front`

<a id="api-e22931c750fcf891"></a>
<!-- api: F:Inno.Rendering.RenderCullMode.Front 3781b6c3db7ffd515ebd490b21b9db341ea1b3fae5136af19759479326f7a978 -->

```csharp
Inno.Rendering.RenderCullMode.Front = 1
```

Culls front-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L19).

## `None`

<a id="api-05bbac1d3cdcc8f8"></a>
<!-- api: F:Inno.Rendering.RenderCullMode.None 6fc45c1d8b88acfc5f17a03d7ef1bebdefcb503cadd719c7bfcd6e8fef4a95ce -->

```csharp
Inno.Rendering.RenderCullMode.None = 0
```

Disables face culling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L15).
