---
title: "ShaderProgramKind"
description: "Reference for ShaderProgramKind in Inno.Rendering."
uid: api.inno.rendering.1ed5fadeddd4ab87
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderProgramKind`

This reference describes `ShaderProgramKind` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compute`](#api-3d3b413a402b7bb1) | Field |
| [`Raster`](#api-85b0fb865ecedd0f) | Field |

## Type declaration

<a id="api-1ed5fadeddd4ab87"></a>
<!-- api: T:Inno.Rendering.ShaderProgramKind 17f43cdb4830c7c1d4f11d16cb3b1bf343b01b60538871838921dc623826702d -->

```csharp
public enum Inno.Rendering.ShaderProgramKind : int
```

Selects the programmable stage combination of a pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderProgramKind.cs#L14).

## `Compute`

<a id="api-3d3b413a402b7bb1"></a>
<!-- api: F:Inno.Rendering.ShaderProgramKind.Compute 1ec6184c28f01cc5a2e81a77e173d0cd84ca351ad11511a52c35cac5fcbe9371 -->

```csharp
Inno.Rendering.ShaderProgramKind.Compute = 1
```

A compute stage used by a compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderProgramKind.cs#L23).

## `Raster`

<a id="api-85b0fb865ecedd0f"></a>
<!-- api: F:Inno.Rendering.ShaderProgramKind.Raster 77fb25541e6dbd1ae47cb9f775c22b85955a5eda14e29323adb4bd36464b9aa9 -->

```csharp
Inno.Rendering.ShaderProgramKind.Raster = 0
```

Vertex and fragment stages used by a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderProgramKind.cs#L19).
