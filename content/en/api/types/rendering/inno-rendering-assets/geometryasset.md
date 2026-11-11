---
title: "GeometryAsset"
description: "Reference for GeometryAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.872bbf217bf7b8b3
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `GeometryAsset`

This reference describes `GeometryAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-396ab75bc7f03463) | Method |
| [`boundsCenter`](#api-3e4df70327689cc5) | Property |
| [`boundsExtents`](#api-1dfe21daaa2e7d7f) | Property |
| [`indexCount`](#api-18e8eceb043a759f) | Property |
| [`sectionCount`](#api-680e5481b5a7abdd) | Property |
| [`vertexCount`](#api-8cec9485a44ca7f5) | Property |

## Type declaration

<a id="api-872bbf217bf7b8b3"></a>
<!-- api: T:Inno.Rendering.Assets.GeometryAsset 0169a06257d8ff5474db0b909b5164c1478bd1ebee931d639ce4a9bba1791935 -->

```csharp
public sealed class Inno.Rendering.Assets.GeometryAsset : Inno.Assets.AssetObject
```

Represents imported geometry without prescribing scene or draw semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L17).

## `#ctor`

<a id="api-396ab75bc7f03463"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 922e1a6427934a4decc4f521ca247c155175d456cf176427ca1463b725ba8f93 -->

```csharp
public Inno.Rendering.Assets.GeometryAsset.GeometryAsset(int vertexCount, int indexCount, int sectionCount, Inno.Core.Mathematics.Vector3 boundsCenter, Inno.Core.Mathematics.Vector3 boundsExtents)
```

Creates an immutable imported geometry description.

**Parameter `vertexCount`:** The number of normalized vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sectionCount`:** The number of independently submitted sections.

**Parameter `boundsCenter`:** The object-space center of the geometry bounds.

**Parameter `boundsExtents`:** The non-negative object-space half-extents of the geometry bounds.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when any count is negative or a bounds extent is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L44).

## `boundsCenter`

<a id="api-3e4df70327689cc5"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryAsset.boundsCenter bf8921d8416d79aed69028492eee5324c42f05e94e1235d217b99a8ede1066f7 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Rendering.Assets.GeometryAsset.boundsCenter { get; internal set; }
```

Gets the object-space center of imported geometry bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L85).

## `boundsExtents`

<a id="api-1dfe21daaa2e7d7f"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryAsset.boundsExtents f3d911dada0e0c3936ddfd5e16baabf4996a6102e96edf55f1bb253dec2fefb3 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Rendering.Assets.GeometryAsset.boundsExtents { get; internal set; }
```

Gets the non-negative object-space half-extents of imported geometry bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L91).

## `indexCount`

<a id="api-18e8eceb043a759f"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryAsset.indexCount f0593d14a95eec9000e6bd5f29fbd0be7a2dce9f1380c1940f88a371e0c3c0f9 -->

```csharp
public int Inno.Rendering.Assets.GeometryAsset.indexCount { get; internal set; }
```

Gets the number of indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L73).

## `sectionCount`

<a id="api-680e5481b5a7abdd"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryAsset.sectionCount 2515ac711dcc7f760b7a3995441d01a1d9de38522558085c043031f4b80c2243 -->

```csharp
public int Inno.Rendering.Assets.GeometryAsset.sectionCount { get; internal set; }
```

Gets the number of independently submitted geometry sections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L79).

## `vertexCount`

<a id="api-8cec9485a44ca7f5"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryAsset.vertexCount 2afa9a8e29f6baee4de2bec56874bfeb3a4e81940bedf91baf71730e00509714 -->

```csharp
public int Inno.Rendering.Assets.GeometryAsset.vertexCount { get; internal set; }
```

Gets the number of normalized vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L67).
