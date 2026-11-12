---
title: "RenderRasterState"
description: "Reference for RenderRasterState in Inno.Rendering."
uid: api.inno.rendering.runtime-script.4d1d0749766829c6
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderRasterState`

This reference describes `RenderRasterState` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1096cdc1a624f89f) | Method |
| [`#ctor`](#api-44ccc7cca2502a8e) | Method |
| [`blend`](#api-3617ec19bbe870c4) | Property |
| [`colorWriteMask`](#api-88c84eae800ad929) | Property |
| [`cull`](#api-5e26ba56c0da4f6f) | Property |
| [`depthCompare`](#api-3e13eade0405a4d9) | Property |
| [`depthWrite`](#api-42d752e6663b1e00) | Property |
| [`frontFace`](#api-fb9c5267e31bdb43) | Property |
| [`multisampling`](#api-a9b07b2a6879e844) | Property |
| [`opaque`](#api-0ace485155aebb60) | Property |
| [`topology`](#api-1f951c21c7e04c61) | Property |

## Type declaration

<a id="api-4d1d0749766829c6"></a>
<!-- api: T:InnoEngine.Rendering.RenderRasterState e331a00989f1860d08c3bccf10f72618e42fed528694163562719e9114a53fbc -->

```csharp
public sealed class InnoEngine.Rendering.RenderRasterState
```

Stores backend-neutral fixed-function raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L83).

## `#ctor`

<a id="api-1096cdc1a624f89f"></a>
<!-- api: M:InnoEngine.Rendering.RenderRasterState.#ctor d88e2d5070da9fa513e391233625d455482bd8f1e9e866fdfc56dfb2883009f2 -->

```csharp
public InnoEngine.Rendering.RenderRasterState.RenderRasterState()
```

Creates the default opaque raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L88).

## `#ctor`

<a id="api-44ccc7cca2502a8e"></a>
<!-- api: M:InnoEngine.Rendering.RenderRasterState.#ctor(InnoEngine.Rendering.RenderCullMode,InnoEngine.Rendering.RenderFrontFace,InnoEngine.Rendering.RenderDepthCompare,System.Boolean,InnoEngine.Rendering.RenderBlendState,System.Byte,System.Boolean,InnoEngine.Rendering.RenderPrimitiveTopology) 681781d6f812f07e45c5ceca7fd9002c87cb6dd280373f695356c526aad879a9 -->

```csharp
public InnoEngine.Rendering.RenderRasterState.RenderRasterState(InnoEngine.Rendering.RenderCullMode cull, InnoEngine.Rendering.RenderFrontFace frontFace, InnoEngine.Rendering.RenderDepthCompare depthCompare, bool depthWrite, InnoEngine.Rendering.RenderBlendState blend, byte colorWriteMask, bool multisampling, InnoEngine.Rendering.RenderPrimitiveTopology topology)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L119).

## `blend`

<a id="api-3617ec19bbe870c4"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.blend f0adc60d62d7423c548b78c22d1994a8a380ccbe48c6cefff3132c701d599c53 -->

```csharp
public InnoEngine.Rendering.RenderBlendState InnoEngine.Rendering.RenderRasterState.blend { get; set; }
```

Gets independent RGB and alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L167).

## `colorWriteMask`

<a id="api-88c84eae800ad929"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.colorWriteMask 677055c49a647c725ea38605fa1a6b3298089116892bcea0d6ce13f55a72c851 -->

```csharp
public byte InnoEngine.Rendering.RenderRasterState.colorWriteMask { get; set; }
```

Gets the four-bit RGBA write mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L172).

## `cull`

<a id="api-5e26ba56c0da4f6f"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.cull 870cc18544835f46714145a9771b0d9f15daaf32a86f3efff0ca29b10d276bd6 -->

```csharp
public InnoEngine.Rendering.RenderCullMode InnoEngine.Rendering.RenderRasterState.cull { get; set; }
```

Gets the face culling mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L147).

## `depthCompare`

<a id="api-3e13eade0405a4d9"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.depthCompare 079d245b7f28aa1fd3f5bcfa1d38267398c8b0eabc6790b5da26b5bbca49ed03 -->

```csharp
public InnoEngine.Rendering.RenderDepthCompare InnoEngine.Rendering.RenderRasterState.depthCompare { get; set; }
```

Gets depth comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L157).

## `depthWrite`

<a id="api-42d752e6663b1e00"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.depthWrite 426f0c7769a55611ac65a30117d0dc029455f54470a1676c5df9ce28756e9b56 -->

```csharp
public bool InnoEngine.Rendering.RenderRasterState.depthWrite { get; set; }
```

Gets whether accepted fragments update depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L162).

## `frontFace`

<a id="api-fb9c5267e31bdb43"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.frontFace 8911f7d73dc604b5cde3217c8f1c4b957e5c99e1eb0846390bd7650a8da82d9c -->

```csharp
public InnoEngine.Rendering.RenderFrontFace InnoEngine.Rendering.RenderRasterState.frontFace { get; set; }
```

Gets the winding order interpreted as the front face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L152).

## `multisampling`

<a id="api-a9b07b2a6879e844"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.multisampling fa0a71e9282f9dd1e800de367a6f9c9f8ec78cb7fb3c386c63b365d3b958cf13 -->

```csharp
public bool InnoEngine.Rendering.RenderRasterState.multisampling { get; set; }
```

Gets whether multisample rasterization is enabled for compatible targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L177).

## `opaque`

<a id="api-0ace485155aebb60"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.opaque cc5401ebe0e12bb0179388e06a9703c1211b14d96278d1c3ad990e0c89be0ae0 -->

```csharp
public static InnoEngine.Rendering.RenderRasterState InnoEngine.Rendering.RenderRasterState.opaque { get; }
```

Gets the default opaque raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L142).

## `topology`

<a id="api-1f951c21c7e04c61"></a>
<!-- api: P:InnoEngine.Rendering.RenderRasterState.topology 9af9d3bb0bc75b75a2682dc10bf7a71c95270a4bbbe749ff7f1e188034e1255c -->

```csharp
public InnoEngine.Rendering.RenderPrimitiveTopology InnoEngine.Rendering.RenderRasterState.topology { get; set; }
```

Gets primitive assembly for subsequent draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L182).
