---
title: "RenderRasterState"
description: "Reference for RenderRasterState in Inno.Rendering."
uid: api.inno.rendering.4c609944dec497a3
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderRasterState`

This reference describes `RenderRasterState` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-215f80efcdc2ac31) | Method |
| [`#ctor`](#api-b628f3f1494087b7) | Method |
| [`blend`](#api-13522c420fad2b5f) | Property |
| [`colorWriteMask`](#api-1d832f1b205fa93c) | Property |
| [`cull`](#api-99a71b1bb3441f2a) | Property |
| [`depthCompare`](#api-739424f5ea113c45) | Property |
| [`depthWrite`](#api-cfee929853c0405a) | Property |
| [`frontFace`](#api-db22f3d7218c4dab) | Property |
| [`multisampling`](#api-6ef4b2bdf1f64f6b) | Property |
| [`opaque`](#api-852a89e6c4a6e53c) | Property |
| [`topology`](#api-f76d1224070d014d) | Property |

## Type declaration

<a id="api-4c609944dec497a3"></a>
<!-- api: T:Inno.Rendering.RenderRasterState 8a5aa4343c4292abacaa9254e9f061ef4a784bc48fcbab0ce9befe64f3aa85c4 -->

```csharp
public sealed class Inno.Rendering.RenderRasterState
```

Stores backend-neutral fixed-function raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L83).

## `#ctor`

<a id="api-215f80efcdc2ac31"></a>
<!-- api: M:Inno.Rendering.RenderRasterState.#ctor ed391dad6ae0a34689bedbb016faf01d411c56272e6b98621f1e7adf73dc4859 -->

```csharp
public Inno.Rendering.RenderRasterState.RenderRasterState()
```

Creates the default opaque raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L88).

## `#ctor`

<a id="api-b628f3f1494087b7"></a>
<!-- api: M:Inno.Rendering.RenderRasterState.#ctor(Inno.Rendering.RenderCullMode,Inno.Rendering.RenderFrontFace,Inno.Rendering.RenderDepthCompare,System.Boolean,Inno.Rendering.RenderBlendState,System.Byte,System.Boolean,Inno.Rendering.RenderPrimitiveTopology) 3ed623ab7a3160c338783f562fdd89a695444b57ccaedc0d5cd2b2241dbee107 -->

```csharp
public Inno.Rendering.RenderRasterState.RenderRasterState(Inno.Rendering.RenderCullMode cull, Inno.Rendering.RenderFrontFace frontFace, Inno.Rendering.RenderDepthCompare depthCompare, bool depthWrite, Inno.Rendering.RenderBlendState blend, byte colorWriteMask, bool multisampling, Inno.Rendering.RenderPrimitiveTopology topology)
```

Creates a complete immutable raster configuration without relying on init-only setters.

**Parameter `cull`:** Face culling mode.

**Parameter `frontFace`:** Winding order interpreted as the front face.

**Parameter `depthCompare`:** Depth comparison.

**Parameter `depthWrite`:** Whether accepted fragments update depth.

**Parameter `blend`:** Independent RGB and alpha blending.

**Parameter `colorWriteMask`:** Four-bit RGBA write mask.

**Parameter `multisampling`:** Whether multisample rasterization is enabled.

**Parameter `topology`:** Primitive assembly for subsequent draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L119).

## `blend`

<a id="api-13522c420fad2b5f"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.blend c4ff4a1852f350dad629547cb5b2118f2b1bad550e24aad1f832d3fbc1194034 -->

```csharp
public Inno.Rendering.RenderBlendState Inno.Rendering.RenderRasterState.blend { get; init; }
```

Gets independent RGB and alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L167).

## `colorWriteMask`

<a id="api-1d832f1b205fa93c"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.colorWriteMask b41c3b3ce2f60d05c23d8b15ddc8cf5c7cb33f95a11b5aba33e86eaca191108c -->

```csharp
public byte Inno.Rendering.RenderRasterState.colorWriteMask { get; init; }
```

Gets the four-bit RGBA write mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L172).

## `cull`

<a id="api-99a71b1bb3441f2a"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.cull d76e988faf7c9420d983f575e0eb33745845a4335295fc12d5bc36b92ec5aac7 -->

```csharp
public Inno.Rendering.RenderCullMode Inno.Rendering.RenderRasterState.cull { get; init; }
```

Gets the face culling mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L147).

## `depthCompare`

<a id="api-739424f5ea113c45"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.depthCompare c8b561c3f85304228c1d8e514c7d24075c46f4dc93663c058227a0a8be09c508 -->

```csharp
public Inno.Rendering.RenderDepthCompare Inno.Rendering.RenderRasterState.depthCompare { get; init; }
```

Gets depth comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L157).

## `depthWrite`

<a id="api-cfee929853c0405a"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.depthWrite b324dde347b8a7d7841273d8cb474d33ebbacfa86eca9c2ec37b0c343cddb7d8 -->

```csharp
public bool Inno.Rendering.RenderRasterState.depthWrite { get; init; }
```

Gets whether accepted fragments update depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L162).

## `frontFace`

<a id="api-db22f3d7218c4dab"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.frontFace bc37c27d7b81a37e0877a8ee635c56cfb62b9c70a2b3ee5638a7e4816103c4a2 -->

```csharp
public Inno.Rendering.RenderFrontFace Inno.Rendering.RenderRasterState.frontFace { get; init; }
```

Gets the winding order interpreted as the front face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L152).

## `multisampling`

<a id="api-6ef4b2bdf1f64f6b"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.multisampling 3f9354daefa0045c2f0b795152c5b29362eafe43f1730ed9a7f4ee314144a08a -->

```csharp
public bool Inno.Rendering.RenderRasterState.multisampling { get; init; }
```

Gets whether multisample rasterization is enabled for compatible targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L177).

## `opaque`

<a id="api-852a89e6c4a6e53c"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.opaque 2ef6902800ec65d93348416a79d6b42cd48e6c207761e9f80ace804ab3ea3d6f -->

```csharp
public static Inno.Rendering.RenderRasterState Inno.Rendering.RenderRasterState.opaque { get; }
```

Gets the default opaque raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L142).

## `topology`

<a id="api-f76d1224070d014d"></a>
<!-- api: P:Inno.Rendering.RenderRasterState.topology 0bb7d94ac932c70c3eaf15f1ce15240eb762ff5a1410e53dd8585ce7a04428d2 -->

```csharp
public Inno.Rendering.RenderPrimitiveTopology Inno.Rendering.RenderRasterState.topology { get; init; }
```

Gets primitive assembly for subsequent draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L182).
