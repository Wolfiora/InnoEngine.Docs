---
title: "ShaderIrInputKind"
description: "Reference for ShaderIrInputKind in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.abd58932ffc0b8a0
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrInputKind`

This reference describes `ShaderIrInputKind` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Builtin`](#api-06e6918fa341e55c) | Field |
| [`SampledTexture`](#api-47d4286ef517aa98) | Field |
| [`Storage`](#api-c2176d77db0bc22e) | Field |
| [`Uniform`](#api-f87f3a96d158beb1) | Field |
| [`Varying`](#api-b3af3ca8e5dd57df) | Field |
| [`VertexAttribute`](#api-83df41d556b0e550) | Field |

## Type declaration

<a id="api-abd58932ffc0b8a0"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrInputKind a6cdf6c2e767e526497e661c20f0504b8140393f10fdf4e4cf27364a5e76db29 -->

```csharp
public enum Inno.Rendering.Shaders.ShaderIrInputKind : int
```

Identifies the GPU interface through which a stage receives a value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L11).

## `Builtin`

<a id="api-06e6918fa341e55c"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrInputKind.Builtin afcfd789f2abbb21b1f059c01520625e7df7d5ffb810f17bf4f0bf5a5a426ce6 -->

```csharp
Inno.Rendering.Shaders.ShaderIrInputKind.Builtin = 5
```

A standard GPU stage input identified by a target semantic, not native source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L36).

## `SampledTexture`

<a id="api-47d4286ef517aa98"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrInputKind.SampledTexture 10b110ae225dfd8f40c999097b1553371644acef51b0ee383faa87583878abfb -->

```csharp
Inno.Rendering.Shaders.ShaderIrInputKind.SampledTexture = 3
```

A sampled texture binding whose slot is assigned by target resource layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L28).

## `Storage`

<a id="api-c2176d77db0bc22e"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrInputKind.Storage 4fefa24fcf3b96228cd0c2011942335c185a8df93e10541b3920ed0579274099 -->

```csharp
Inno.Rendering.Shaders.ShaderIrInputKind.Storage = 4
```

A typed storage buffer or image whose access, shape and layout are explicit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L32).

## `Uniform`

<a id="api-f87f3a96d158beb1"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrInputKind.Uniform 262f0b0c814a693ea5b9ed1bb0b20d20a168fb9a96ce353cc1f03eaff3c058fa -->

```csharp
Inno.Rendering.Shaders.ShaderIrInputKind.Uniform = 2
```

A material, frame or draw uniform identified by a stable binding identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L24).

## `Varying`

<a id="api-b3af3ca8e5dd57df"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrInputKind.Varying d3e649947818ae252e04130a518a348006543a247165d1443b2d431cdb07d193 -->

```csharp
Inno.Rendering.Shaders.ShaderIrInputKind.Varying = 1
```

An interpolated value written by the preceding raster stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L20).

## `VertexAttribute`

<a id="api-83df41d556b0e550"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrInputKind.VertexAttribute 471162ee238d2b491c8c501e1eaf34418dd924f8abde70894d0653ce15c98c14 -->

```csharp
Inno.Rendering.Shaders.ShaderIrInputKind.VertexAttribute = 0
```

A vertex stream attribute, including instance-rate streams.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L16).
