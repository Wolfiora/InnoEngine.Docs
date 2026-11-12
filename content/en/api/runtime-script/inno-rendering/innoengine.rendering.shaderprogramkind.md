---
title: "ShaderProgramKind"
description: "Reference for ShaderProgramKind in Inno.Rendering."
uid: api.inno.rendering.runtime-script.3ac021cf477cad1e
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderProgramKind`

This reference describes `ShaderProgramKind` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compute`](#api-41408e8b67fea63d) | Field |
| [`Raster`](#api-cdfd8aa7c8d7c812) | Field |

## Type declaration

<a id="api-3ac021cf477cad1e"></a>
<!-- api: T:InnoEngine.Rendering.ShaderProgramKind cfbc3b3e2a804c80e1bcc8864c6ac06b813c3c112aa6d5fe146352e4c3d7f666 -->

```csharp
public enum InnoEngine.Rendering.ShaderProgramKind : int
```

Selects the programmable stage combination of a pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderProgramKind.cs#L14).

## `Compute`

<a id="api-41408e8b67fea63d"></a>
<!-- api: F:InnoEngine.Rendering.ShaderProgramKind.Compute 24015b60c82c8053caaa9fae98d3904f0af8211214f6e14f1d8d927f75f11f00 -->

```csharp
InnoEngine.Rendering.ShaderProgramKind.Compute = 1
```

A compute stage used by a compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderProgramKind.cs#L23).

## `Raster`

<a id="api-cdfd8aa7c8d7c812"></a>
<!-- api: F:InnoEngine.Rendering.ShaderProgramKind.Raster 614c6b953ef56d0f11d143a69b5ba5ec400ce1a30049bbd0be1efed4295dc6c4 -->

```csharp
InnoEngine.Rendering.ShaderProgramKind.Raster = 0
```

Vertex and fragment stages used by a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderProgramKind.cs#L19).
