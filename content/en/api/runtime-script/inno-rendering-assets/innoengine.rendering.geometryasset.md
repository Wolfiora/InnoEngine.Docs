---
title: "GeometryAsset"
description: "Reference for GeometryAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.06ee6857b3f4e2e3
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `GeometryAsset`

This reference describes `GeometryAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e7b22babee1439e4) | Method |
| [`boundsCenter`](#api-038339398988977d) | Property |
| [`boundsExtents`](#api-c64b17dac9d3a870) | Property |
| [`indexCount`](#api-3cb0af59e331d928) | Property |
| [`sectionCount`](#api-0365359b746eb81d) | Property |
| [`vertexCount`](#api-0ef72c372c0aa109) | Property |

## Type declaration

<a id="api-06ee6857b3f4e2e3"></a>
<!-- api: T:InnoEngine.Rendering.GeometryAsset ba14fabbc329faad859d15953f8b50723d00556f778041bee14c128a8d88685d -->

```csharp
public sealed class InnoEngine.Rendering.GeometryAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents imported geometry without prescribing scene or draw semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L17).

## `#ctor`

<a id="api-e7b22babee1439e4"></a>
<!-- api: M:InnoEngine.Rendering.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) d2a6a5dffc8acd0af740ac372473d11038ebf070b760091045b0c3842867ab04 -->

```csharp
public InnoEngine.Rendering.GeometryAsset.GeometryAsset(int vertexCount, int indexCount, int sectionCount, InnoEngine.Mathematics.Vector3 boundsCenter, InnoEngine.Mathematics.Vector3 boundsExtents)
```

Creates an immutable imported geometry description.

**Parameter `vertexCount`:** The number of normalized vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sectionCount`:** The number of independently submitted sections.

**Parameter `boundsCenter`:** The object-space center of the geometry bounds.

**Parameter `boundsExtents`:** The non-negative object-space half-extents of the geometry bounds.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when any count is negative or a bounds extent is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L44).

## `boundsCenter`

<a id="api-038339398988977d"></a>
<!-- api: P:InnoEngine.Rendering.GeometryAsset.boundsCenter a05375b9f71c8905abcabe88260d5d694691d07c6e99f1187210e6fd6dcb9df5 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Rendering.GeometryAsset.boundsCenter { get; }
```

Gets the object-space center of imported geometry bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L85).

## `boundsExtents`

<a id="api-c64b17dac9d3a870"></a>
<!-- api: P:InnoEngine.Rendering.GeometryAsset.boundsExtents 8549ecd7580aa3f2f73d913dab675fccfda3021506bdd79fcf22ce1f71d13866 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Rendering.GeometryAsset.boundsExtents { get; }
```

Gets the non-negative object-space half-extents of imported geometry bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L91).

## `indexCount`

<a id="api-3cb0af59e331d928"></a>
<!-- api: P:InnoEngine.Rendering.GeometryAsset.indexCount 34a76fa3e5eca4d798e5a3d9cb70016ec9d9dbba55c57607180c03053ebbd7f3 -->

```csharp
public int InnoEngine.Rendering.GeometryAsset.indexCount { get; }
```

Gets the number of indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L73).

## `sectionCount`

<a id="api-0365359b746eb81d"></a>
<!-- api: P:InnoEngine.Rendering.GeometryAsset.sectionCount fba3bd6928b9d39a490f90c56b8f7e3fed00628a63063fa9419a763a4f427e0a -->

```csharp
public int InnoEngine.Rendering.GeometryAsset.sectionCount { get; }
```

Gets the number of independently submitted geometry sections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L79).

## `vertexCount`

<a id="api-0ef72c372c0aa109"></a>
<!-- api: P:InnoEngine.Rendering.GeometryAsset.vertexCount ed6de85acdc9f14ca125b1d88b86412b22e26bf409279ff0120409e902d38d3f -->

```csharp
public int InnoEngine.Rendering.GeometryAsset.vertexCount { get; }
```

Gets the number of normalized vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryAsset.cs#L67).
