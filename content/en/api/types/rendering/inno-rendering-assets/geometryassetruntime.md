---
title: "GeometryAssetRuntime"
description: "Reference for GeometryAssetRuntime in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.01638060e7e865af
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `GeometryAssetRuntime`

This reference describes `GeometryAssetRuntime` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetGeometryData`](#api-956a6b281f5efb27) | Method |

## Type declaration

<a id="api-01638060e7e865af"></a>
<!-- api: T:Inno.Rendering.Assets.GeometryAssetRuntime 3cef5feb6f2e3e2cfdfff83239177778258446754f11cfec8b4ac11640fc67ea -->

```csharp
public static class Inno.Rendering.Assets.GeometryAssetRuntime
```

Decodes normalized CPU geometry committed by mesh importers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAssetRuntime.cs#L13).

## `GetGeometryData`

<a id="api-956a6b281f5efb27"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryAssetRuntime.GetGeometryData(Inno.Rendering.Assets.GeometryAsset) 29b6575d3f86234ae5145ee83bc9873a5875f2fe079e26367044df6784a573ad -->

```csharp
public static Inno.Rendering.Assets.GeometryData Inno.Rendering.Assets.GeometryAssetRuntime.GetGeometryData(Inno.Rendering.Assets.GeometryAsset geometry)
```

Decodes the current committed mesh payload.

**Parameter `geometry`:** Imported geometry asset.

**Returns:** Normalized vertices, triangle indices and submeshes.

**Throws `System.IO.InvalidDataException`:** Thrown when the payload is missing or corrupt.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAssetRuntime.cs#L27).
