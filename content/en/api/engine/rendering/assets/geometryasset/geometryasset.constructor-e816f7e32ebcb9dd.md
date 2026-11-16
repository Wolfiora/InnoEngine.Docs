---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e816f7e32ebcb9dd32ebb4fef34c6e550aa3c2370d5f9015b42643e88a89a722
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)
title: GeometryAsset.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 39a4cd6b82481553cfdc3494aae645b85bf37981ad1384fca3bd24518dfa9cdf
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
