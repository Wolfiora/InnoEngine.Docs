---
title: "ShaderIrOutputKind"
description: "Reference for ShaderIrOutputKind in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.126c56f57277c4a1
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrOutputKind`

This reference describes `ShaderIrOutputKind` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ClipPosition`](#api-2c44a01d6570eb08) | Field |
| [`Color`](#api-f4e0d1f5fc2bce2d) | Field |
| [`Depth`](#api-434465192a629967) | Field |
| [`Varying`](#api-5a8fdbc05c462a15) | Field |

## Type declaration

<a id="api-126c56f57277c4a1"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrOutputKind a780e8a00cf424b45da91c5b389a0d10a7d8a4771b7dcf25d93142f04a78e68c -->

```csharp
public enum InnoEditor.Rendering.Shaders.ShaderIrOutputKind : int
```

Identifies where a typed stage output is written.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L42).

## `ClipPosition`

<a id="api-2c44a01d6570eb08"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOutputKind.ClipPosition a3491902bcd4caa9fce14e533b1f33f98c59acbaf1e5a2b12f4a3e68f1227f7d -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOutputKind.ClipPosition = 0
```

The vertex position in homogeneous clip space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L47).

## `Color`

<a id="api-f4e0d1f5fc2bce2d"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOutputKind.Color 01984105fb703f0555c47f2144760ff7c107f8ee1b326e94c1dfbc6208b5c82b -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOutputKind.Color = 2
```

A fragment color attachment at its explicit location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L55).

## `Depth`

<a id="api-434465192a629967"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOutputKind.Depth 14c8c46c3d958c9d3a14ca0e5aec1bd2e487e0da5f8d94f88b27c6e6b2ea06c5 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOutputKind.Depth = 3
```

The fragment depth value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L59).

## `Varying`

<a id="api-5a8fdbc05c462a15"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOutputKind.Varying 18611aa2317846cb200e11d6791c1b8ed1ee4f5c0727cec408f81875ceba260e -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOutputKind.Varying = 1
```

A value interpolated for the next raster stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L51).
