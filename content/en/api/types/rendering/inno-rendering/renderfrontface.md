---
title: "RenderFrontFace"
description: "Reference for RenderFrontFace in Inno.Rendering."
uid: api.inno.rendering.ba18040b5f39e961
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderFrontFace`

This reference describes `RenderFrontFace` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Clockwise`](#api-f08d1e134a749dc1) | Field |
| [`CounterClockwise`](#api-267c3966117c41d0) | Field |

## Type declaration

<a id="api-ba18040b5f39e961"></a>
<!-- api: T:Inno.Rendering.RenderFrontFace 6efaa3a53ae0de6765cc981145c84590972432db3034c18c3cd4c85b4bb0fdde -->

```csharp
public enum Inno.Rendering.RenderFrontFace : int
```

Selects the winding order interpreted as the front face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L29).

## `Clockwise`

<a id="api-f08d1e134a749dc1"></a>
<!-- api: F:Inno.Rendering.RenderFrontFace.Clockwise 3252a330ba952f6186e38263bb8a7f22c6d7cc16ed3da6b6e60520a76be3cfae -->

```csharp
Inno.Rendering.RenderFrontFace.Clockwise = 0
```

Clockwise vertices form a front-facing triangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L34).

## `CounterClockwise`

<a id="api-267c3966117c41d0"></a>
<!-- api: F:Inno.Rendering.RenderFrontFace.CounterClockwise b5e725a411f871e83e1ed9fd88fb86ec7234c0cd56d27e8f20298e90209000eb -->

```csharp
Inno.Rendering.RenderFrontFace.CounterClockwise = 1
```

Counter-clockwise vertices form a front-facing triangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L38).
