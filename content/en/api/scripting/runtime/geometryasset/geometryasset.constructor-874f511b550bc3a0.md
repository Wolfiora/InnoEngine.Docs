---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.874f511b550bc3a07385790a1391c9d19aa316eccfd31e05861f4f1185a14b66
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.GeometryAsset.#ctor(System.Int32,System.Int32,System.Int32,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)
title: GeometryAsset.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: 23ae5aa3714aa869c46b2953339adb4138c816d6d3b160177e1f23f4886e5891
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
