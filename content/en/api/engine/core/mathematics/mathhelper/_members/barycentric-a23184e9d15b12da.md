---
uid: api.a23184e9d15b12da28da0ff0164cc90841c943ab758947695c5acbdb21ffcdab
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.MathHelper.Barycentric(System.Single,System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: 2da51dcacdaa95bfae7a23414cd1e1e8f62ec2e3e04fe072bac1ceafce6469a7
title: "Barycentric"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Returns the Cartesian coordinate for one axis of a point that is defined by a given triangle and two normalized barycentric (areal) coordinates.

**Parameter `value1`:** The coordinate on one axis of vertex 1 of the defining triangle.

**Parameter `value2`:** The coordinate on the same axis of vertex 2 of the defining triangle.

**Parameter `value3`:** The coordinate on the same axis of vertex 3 of the defining triangle.

**Parameter `amount1`:** The normalized barycentric (areal) coordinate b2, equal to the weighting factor for vertex 2, the coordinate of which is specified in value2.

**Parameter `amount2`:** The normalized barycentric (areal) coordinate b3, equal to the weighting factor for vertex 3, the coordinate of which is specified in value3.

**Returns:** Cartesian coordinate of the specified point with respect to the axis being used.
