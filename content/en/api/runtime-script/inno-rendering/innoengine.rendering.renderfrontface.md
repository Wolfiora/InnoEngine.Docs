---
title: "RenderFrontFace"
description: "Reference for RenderFrontFace in Inno.Rendering."
uid: api.inno.rendering.runtime-script.d49714a2db04954f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderFrontFace`

This reference describes `RenderFrontFace` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Clockwise`](#api-c56b827da513720b) | Field |
| [`CounterClockwise`](#api-0b371b3605ae958d) | Field |

## Type declaration

<a id="api-d49714a2db04954f"></a>
<!-- api: T:InnoEngine.Rendering.RenderFrontFace 2017e1e155edf0642da6f47238c69566645786d95881807e315602259d334e4d -->

```csharp
public enum InnoEngine.Rendering.RenderFrontFace : int
```

Selects the winding order interpreted as the front face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L29).

## `Clockwise`

<a id="api-c56b827da513720b"></a>
<!-- api: F:InnoEngine.Rendering.RenderFrontFace.Clockwise 138d2bbdc72199535168f3a704d3d8cc102e43fcb618e517ec79b0c22cc11c3e -->

```csharp
InnoEngine.Rendering.RenderFrontFace.Clockwise = 0
```

Clockwise vertices form a front-facing triangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L34).

## `CounterClockwise`

<a id="api-0b371b3605ae958d"></a>
<!-- api: F:InnoEngine.Rendering.RenderFrontFace.CounterClockwise 84159c943946116d7b74f6e1143e18b18d5ec984a4922ec67eaf0dbce9e4c0c5 -->

```csharp
InnoEngine.Rendering.RenderFrontFace.CounterClockwise = 1
```

Counter-clockwise vertices form a front-facing triangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L38).
