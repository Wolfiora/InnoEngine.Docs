---
title: "RenderDepthCompare"
description: "Reference for RenderDepthCompare in Inno.Rendering."
uid: api.inno.rendering.72f68b42c00f3c7c
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDepthCompare`

This reference describes `RenderDepthCompare` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-aedd0705fae1c8d6) | Field |
| [`Equal`](#api-823a5a3acff02eaf) | Field |
| [`Greater`](#api-5573bb50e5f4b0b8) | Field |
| [`GreaterEqual`](#api-acdbee4baaacb81b) | Field |
| [`Less`](#api-7c60ee2fd0f27fd9) | Field |
| [`LessEqual`](#api-1c7b475a9077550c) | Field |
| [`Never`](#api-dca57aa54a763d54) | Field |
| [`NotEqual`](#api-5405bb65c24ef284) | Field |

## Type declaration

<a id="api-72f68b42c00f3c7c"></a>
<!-- api: T:Inno.Rendering.RenderDepthCompare 3d00ab6e4eae7fd0c4a3c6d695311e4686122d56112fe96853ece242608a8a7b -->

```csharp
public enum Inno.Rendering.RenderDepthCompare : int
```

Selects depth comparison for a backend-neutral raster pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L44).

## `Always`

<a id="api-aedd0705fae1c8d6"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.Always fd8e7e4861d2a37599b8b8536b5469f2c2f56126e7c3a3d962c52a0ba0ed8515 -->

```csharp
Inno.Rendering.RenderDepthCompare.Always = 7
```

Always accepts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L77).

## `Equal`

<a id="api-823a5a3acff02eaf"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.Equal 3c1217928b512bbcbfd0d91cbf583d1bb673c97f13fbc3fa24aab405eea7f2dd -->

```csharp
Inno.Rendering.RenderDepthCompare.Equal = 2
```

Accepts equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L57).

## `Greater`

<a id="api-5573bb50e5f4b0b8"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.Greater 7dd127f7e05b7315a040e1dfbcb882df76f0a1ec5ffbf86a47f1fdd3c353ecc1 -->

```csharp
Inno.Rendering.RenderDepthCompare.Greater = 4
```

Accepts greater depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L65).

## `GreaterEqual`

<a id="api-acdbee4baaacb81b"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.GreaterEqual af3804a4fc7b47bdd4d5d92380b3de3c3c142c2c18cc07dfb047a0c3cb281a9a -->

```csharp
Inno.Rendering.RenderDepthCompare.GreaterEqual = 6
```

Accepts greater or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L73).

## `Less`

<a id="api-7c60ee2fd0f27fd9"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.Less 6424e2917da995708cc5077a5f83c15177de52b98872bcad440986228cbded00 -->

```csharp
Inno.Rendering.RenderDepthCompare.Less = 1
```

Accepts smaller depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L53).

## `LessEqual`

<a id="api-1c7b475a9077550c"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.LessEqual 9e01c87028a307802f6c2fb482b484f18bd8f69c5238cae9ab305bc9bfaaf92c -->

```csharp
Inno.Rendering.RenderDepthCompare.LessEqual = 3
```

Accepts smaller or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L61).

## `Never`

<a id="api-dca57aa54a763d54"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.Never 76d263340fcef9b00aece4fdb6d78b3bad608c993e9ead096e0dcd0b3a40c24d -->

```csharp
Inno.Rendering.RenderDepthCompare.Never = 0
```

Always rejects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L49).

## `NotEqual`

<a id="api-5405bb65c24ef284"></a>
<!-- api: F:Inno.Rendering.RenderDepthCompare.NotEqual cc19d867b597ffe734d64db82d31d629e920b9e47f79757bec5dd7724778efce -->

```csharp
Inno.Rendering.RenderDepthCompare.NotEqual = 5
```

Accepts unequal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderRasterState.cs#L69).
