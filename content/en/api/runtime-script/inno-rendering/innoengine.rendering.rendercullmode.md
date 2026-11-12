---
title: "RenderCullMode"
description: "Reference for RenderCullMode in Inno.Rendering."
uid: api.inno.rendering.runtime-script.05e584a89f62e32e
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderCullMode`

This reference describes `RenderCullMode` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Back`](#api-337832995ecef1ab) | Field |
| [`Front`](#api-595772166e29e1ef) | Field |
| [`None`](#api-cbed725bb4619918) | Field |

## Type declaration

<a id="api-05e584a89f62e32e"></a>
<!-- api: T:InnoEngine.Rendering.RenderCullMode f7e72ae482a2b7d363b9746cd007e8b6de7b37b19a157f641fc70f8b0113470e -->

```csharp
public enum InnoEngine.Rendering.RenderCullMode : int
```

Selects triangle culling for a backend-neutral raster pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L10).

## `Back`

<a id="api-337832995ecef1ab"></a>
<!-- api: F:InnoEngine.Rendering.RenderCullMode.Back 870a13c9383b4d4e10e826d7055be9c5d18179bc137f976ae9486cebfa96077f -->

```csharp
InnoEngine.Rendering.RenderCullMode.Back = 2
```

Culls back-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L23).

## `Front`

<a id="api-595772166e29e1ef"></a>
<!-- api: F:InnoEngine.Rendering.RenderCullMode.Front 950680ba7bc29370cd6a46ddd0f82a0f844f8a60a85dffbf2a2fdefd340e54ed -->

```csharp
InnoEngine.Rendering.RenderCullMode.Front = 1
```

Culls front-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L19).

## `None`

<a id="api-cbed725bb4619918"></a>
<!-- api: F:InnoEngine.Rendering.RenderCullMode.None a96e792f1f499045832d5890916576300b08575bb752cba9150b8a7b325a0581 -->

```csharp
InnoEngine.Rendering.RenderCullMode.None = 0
```

Disables face culling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L15).
