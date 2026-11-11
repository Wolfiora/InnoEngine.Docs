---
title: "ShaderIrOutputKind"
description: "Reference for ShaderIrOutputKind in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.a4dcb578881bb96f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrOutputKind`

This reference describes `ShaderIrOutputKind` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ClipPosition`](#api-90079215c27f34c6) | Field |
| [`Color`](#api-006c9356c4fef898) | Field |
| [`Depth`](#api-2d2c5ec8dc42755d) | Field |
| [`Varying`](#api-6214a0b5482f1960) | Field |

## Type declaration

<a id="api-a4dcb578881bb96f"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrOutputKind 81e0aa3efe4663fc02ba8047a61015e9469c3b7f73a7c839c025239ac3b3e4f0 -->

```csharp
public enum Inno.Rendering.Shaders.ShaderIrOutputKind : int
```

Identifies where a typed stage output is written.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L42).

## `ClipPosition`

<a id="api-90079215c27f34c6"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOutputKind.ClipPosition 0c462de867811fa0a2a621474f5cf8cdede15bb2f3401a60f47e5564441f4a3a -->

```csharp
Inno.Rendering.Shaders.ShaderIrOutputKind.ClipPosition = 0
```

The vertex position in homogeneous clip space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L47).

## `Color`

<a id="api-006c9356c4fef898"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOutputKind.Color a9fc5ddbfa610aa8f0dd3f2d3a6f378030b4b52351d2ea3b7d9aed3adb3d5fb0 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOutputKind.Color = 2
```

A fragment color attachment at its explicit location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L55).

## `Depth`

<a id="api-2d2c5ec8dc42755d"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOutputKind.Depth 5b89db8c292e4be9991be7a9e97aab7dbd1e403aa29c935c3413cd7cda61e1ce -->

```csharp
Inno.Rendering.Shaders.ShaderIrOutputKind.Depth = 3
```

The fragment depth value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L59).

## `Varying`

<a id="api-6214a0b5482f1960"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOutputKind.Varying 0855b909e0860c3c532dc70ff6aab34ea4b890b850bf817300a360f7ece51859 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOutputKind.Varying = 1
```

A value interpolated for the next raster stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L51).
