---
title: "ShaderGraphPassProgram"
description: "Reference for ShaderGraphPassProgram in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.8b4c6e868a9099e7
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphPassProgram`

This reference describes `ShaderGraphPassProgram` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`pass`](#api-176a5ec9da115e55) | Property |
| [`stages`](#api-f067147171804e68) | Property |

## Type declaration

<a id="api-8b4c6e868a9099e7"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphPassProgram 242d723b5c0110770eb637fc73c90150db0ecc5e286f063e603ded9c432436d1 -->

```csharp
public struct Inno.Rendering.Shaders.ShaderGraphPassProgram
```

References shared stage output identities from a material-selectable pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L13).

## `pass`

<a id="api-176a5ec9da115e55"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphPassProgram.pass 49901d75d0e33f5e3d013dc804bb2cba4d69d140829cbf8ee98ec2db389db0e7 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphPassProgram.pass { get; set; }
```

Gets or sets the exact pass identity in the runtime shader definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L18).

## `stages`

<a id="api-f067147171804e68"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphPassProgram.stages 9296ea106883724f4e719af243b6679a4fe7d75a4462656f7cdd52dd133d3aba -->

```csharp
public string[] Inno.Rendering.Shaders.ShaderGraphPassProgram.stages { get; set; }
```

Gets or sets stable stage output node identities; computation remains owned by those nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L22).
