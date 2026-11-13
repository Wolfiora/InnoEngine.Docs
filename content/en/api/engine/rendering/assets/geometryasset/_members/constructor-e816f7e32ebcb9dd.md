---
uid: api.e816f7e32ebcb9dd32ebb4fef34c6e550aa3c2370d5f9015b42643e88a89a722
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)"
source: xml
reviewed: efa75b59e53eae10450335107cb874671533cf7fe5976e3470b30ad20f54acc8
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates an immutable imported geometry description.

**Parameter `vertexCount`:** The number of normalized vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sectionCount`:** The number of independently submitted sections.

**Parameter `boundsCenter`:** The object-space center of the geometry bounds.

**Parameter `boundsExtents`:** The non-negative object-space half-extents of the geometry bounds.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when any count is negative or a bounds extent is negative.
