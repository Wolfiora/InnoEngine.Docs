---
title: "RenderPrimitiveTopology"
description: "Reference for RenderPrimitiveTopology in Inno.Rendering."
uid: api.inno.rendering.b10e6e9d3f6af68e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPrimitiveTopology`

This reference describes `RenderPrimitiveTopology` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`LineList`](#api-823d749f524c80a0) | Field |
| [`LineStrip`](#api-9612a9ba2d43ed29) | Field |
| [`PointList`](#api-a91afb53b34e2149) | Field |
| [`TriangleList`](#api-324bcf64ef970622) | Field |
| [`TriangleStrip`](#api-51b06f4cc8017917) | Field |

## Type declaration

<a id="api-b10e6e9d3f6af68e"></a>
<!-- api: T:Inno.Rendering.RenderPrimitiveTopology 5d181481099ee4c7ea2131163b532f039f20013d9544f20b4780c7ba446525f7 -->

```csharp
public enum Inno.Rendering.RenderPrimitiveTopology : int
```

Selects the primitive assembly used by raster draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L355).

## `LineList`

<a id="api-823d749f524c80a0"></a>
<!-- api: F:Inno.Rendering.RenderPrimitiveTopology.LineList 2785ca28607f55ba514ae28281133076ec000af6dfd3d1dbcd8070e301a76c10 -->

```csharp
Inno.Rendering.RenderPrimitiveTopology.LineList = 2
```

Independent line pairs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L368).

## `LineStrip`

<a id="api-9612a9ba2d43ed29"></a>
<!-- api: F:Inno.Rendering.RenderPrimitiveTopology.LineStrip 49ae9b3ec1d08c73146b004b502e5b6cdd09460ad0465e7b2cd4676cd418a28d -->

```csharp
Inno.Rendering.RenderPrimitiveTopology.LineStrip = 3
```

Connected line strip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L372).

## `PointList`

<a id="api-a91afb53b34e2149"></a>
<!-- api: F:Inno.Rendering.RenderPrimitiveTopology.PointList e0b054301b0b59297e784ad829f39dd70f3e9180970cca6d599b178f472f1754 -->

```csharp
Inno.Rendering.RenderPrimitiveTopology.PointList = 4
```

Independent points.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L376).

## `TriangleList`

<a id="api-324bcf64ef970622"></a>
<!-- api: F:Inno.Rendering.RenderPrimitiveTopology.TriangleList 0c269d7203f3a0ef403838127f498d27f44c142a4b119db366f1d421d7c77acd -->

```csharp
Inno.Rendering.RenderPrimitiveTopology.TriangleList = 0
```

Independent triangle triplets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L360).

## `TriangleStrip`

<a id="api-51b06f4cc8017917"></a>
<!-- api: F:Inno.Rendering.RenderPrimitiveTopology.TriangleStrip 12540698082c19f9f4c1573f5ea3a39cc242f630646843c4f6613e4283467f29 -->

```csharp
Inno.Rendering.RenderPrimitiveTopology.TriangleStrip = 1
```

Connected triangle strip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L364).
