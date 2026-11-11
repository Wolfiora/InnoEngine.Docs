---
title: "GeometryData"
description: "Reference for GeometryData in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.c73466b8cb672553
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `GeometryData`

This reference describes `GeometryData` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-232a10db1cd4458a) | Method |
| [`indices`](#api-2b356da5dd0ad2e3) | Property |
| [`sections`](#api-7068df96c12ec89f) | Property |
| [`vertices`](#api-c7b202ebad8c6cbb) | Property |

## Type declaration

<a id="api-c73466b8cb672553"></a>
<!-- api: T:Inno.Rendering.Assets.GeometryData ca0304ad58a1adfa6930bb66ae5da2b2223dfd5e8d28c3102f5988c25e9ac7f1 -->

```csharp
public sealed class Inno.Rendering.Assets.GeometryData
```

Contains normalized CPU mesh data ready for backend upload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryData.cs#L13).

## `#ctor`

<a id="api-232a10db1cd4458a"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryData.#ctor(Inno.Rendering.Assets.GeometryVertex[],System.UInt32[],Inno.Rendering.Assets.GeometrySection[]) 27cba1bed7799fc1ef8e0d61fff655c01291a5507afc3bf6ad424ce8b1d4edcc -->

```csharp
public Inno.Rendering.Assets.GeometryData.GeometryData(Inno.Rendering.Assets.GeometryVertex[] vertices, uint[] indices, Inno.Rendering.Assets.GeometrySection[] sections)
```

Creates normalized mesh data.

**Parameter `vertices`:** Vertex stream.

**Parameter `indices`:** Triangle index stream.

**Parameter `sections`:** Contiguous submesh ranges.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryData.cs#L27).

## `indices`

<a id="api-2b356da5dd0ad2e3"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryData.indices 24a5e16057757d1e05902e055a928f1fab5c8110fdeeca15265c638e00b6ed4e -->

```csharp
public System.Collections.Generic.IReadOnlyList<uint> Inno.Rendering.Assets.GeometryData.indices { get; }
```

Gets the triangle index stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryData.cs#L48).

## `sections`

<a id="api-7068df96c12ec89f"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryData.sections 9acaaccd84bb783140c9b54bbb17a868cdb957e1a018ad725e34e33a49201b0b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.GeometrySection> Inno.Rendering.Assets.GeometryData.sections { get; }
```

Gets contiguous submesh ranges.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryData.cs#L53).

## `vertices`

<a id="api-c7b202ebad8c6cbb"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryData.vertices 769e8c170adf937c44715354b0863a86b1c7358e7c19736f6a960cb9a88f7896 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.GeometryVertex> Inno.Rendering.Assets.GeometryData.vertices { get; }
```

Gets the normalized vertex stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryData.cs#L43).
