---
title: "ShaderIrInputKind"
description: "Reference for ShaderIrInputKind in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.3e7d7c1a61dd79e9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrInputKind`

This reference describes `ShaderIrInputKind` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Builtin`](#api-dfed13631626f2aa) | Field |
| [`SampledTexture`](#api-6364a47a81b16f92) | Field |
| [`Storage`](#api-f376245669e70b71) | Field |
| [`Uniform`](#api-11d2d64b71b7901b) | Field |
| [`Varying`](#api-6f707a4a9b740cd7) | Field |
| [`VertexAttribute`](#api-12aac89e485f7392) | Field |

## Type declaration

<a id="api-3e7d7c1a61dd79e9"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrInputKind 4fcbb0728996833a00283f8401c9986aa8ac84e3537994824667180b9c794a7b -->

```csharp
public enum InnoEditor.Rendering.Shaders.ShaderIrInputKind : int
```

Identifies the GPU interface through which a stage receives a value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L11).

## `Builtin`

<a id="api-dfed13631626f2aa"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrInputKind.Builtin 898d69b088ffcf13e37b517bef06586bd0cdc286cf01dea0f37f1f417eb1a556 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrInputKind.Builtin = 5
```

A standard GPU stage input identified by a target semantic, not native source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L36).

## `SampledTexture`

<a id="api-6364a47a81b16f92"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrInputKind.SampledTexture ab26d8e64c2dcabb094ee911da5075d3d7d9dc8ad7701e8e3d16619f2449b9b7 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrInputKind.SampledTexture = 3
```

A sampled texture binding whose slot is assigned by target resource layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L28).

## `Storage`

<a id="api-f376245669e70b71"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrInputKind.Storage e792efe6e4b9e9a2f1989e1ee1fcf546b743012f66beb0fca306308b05774858 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrInputKind.Storage = 4
```

A typed storage buffer or image whose access, shape and layout are explicit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L32).

## `Uniform`

<a id="api-11d2d64b71b7901b"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrInputKind.Uniform 4449e8395bd7b1134342906ef92514d95d5e4fe35571fd38bb67a990bfac8d38 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrInputKind.Uniform = 2
```

A material, frame or draw uniform identified by a stable binding identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L24).

## `Varying`

<a id="api-6f707a4a9b740cd7"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrInputKind.Varying a1b03c0a77acfc44ece674a394997ade36918edc83ae741c7ff5d59d5ae058b1 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrInputKind.Varying = 1
```

An interpolated value written by the preceding raster stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L20).

## `VertexAttribute`

<a id="api-12aac89e485f7392"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrInputKind.VertexAttribute 17c0cf3ed8a1744fb3ef155f749aa921c2bf8af5d5015d1f96f70cb416a09628 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrInputKind.VertexAttribute = 0
```

A vertex stream attribute, including instance-rate streams.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L16).
