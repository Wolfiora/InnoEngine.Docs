---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a23184e9d15b12da28da0ff0164cc90841c943ab758947695c5acbdb21ffcdab
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.MathHelper.Barycentric(System.Single,System.Single,System.Single,System.Single,System.Single)
title: MathHelper.Barycentric
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
reviewed: 04c75b3160c1b63a2d925d267636453b0b254a972a8d0c5f54b80e77d7ac85cc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value1`:** The coordinate on one axis of vertex 1 of the defining triangle.

**Parameter `value2`:** The coordinate on the same axis of vertex 2 of the defining triangle.

**Parameter `value3`:** The coordinate on the same axis of vertex 3 of the defining triangle.

**Parameter `amount1`:** The normalized barycentric (areal) coordinate b2, equal to the weighting factor for vertex 2, the coordinate of which is specified in value2.

**Parameter `amount2`:** The normalized barycentric (areal) coordinate b3, equal to the weighting factor for vertex 3, the coordinate of which is specified in value3.

## Returns

Cartesian coordinate of the specified point with respect to the axis being used.
