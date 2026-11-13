---
uid: api.874f511b550bc3a07385790a1391c9d19aa316eccfd31e05861f4f1185a14b66
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)"
source: xml
reviewed: 6859bb278d7d2c9f0e8d30e5744de16a685955eb829a5b096d3bbc7fb163834b
title: "GeometryAsset.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable imported geometry description.

**Parameter `vertexCount`:** The number of normalized vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sectionCount`:** The number of independently submitted sections.

**Parameter `boundsCenter`:** The object-space center of the geometry bounds.

**Parameter `boundsExtents`:** The non-negative object-space half-extents of the geometry bounds.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when any count is negative or a bounds extent is negative.
