---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.874f511b550bc3a07385790a1391c9d19aa316eccfd31e05861f4f1185a14b66
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)
title: GeometryAsset.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: be6df99b92b2063048ff3367612428a7d51fc83e5f6cafefc3ff8c13e48d640c
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `vertexCount`:** The number of normalized vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sectionCount`:** The number of independently submitted sections.

**Parameter `boundsCenter`:** The object-space center of the geometry bounds.

**Parameter `boundsExtents`:** The non-negative object-space half-extents of the geometry bounds.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when any count is negative or a bounds extent is negative.
