---
uid: api.cca68d14ed868e394a00569d30ba666b2129f95274a9d64205f653c5fef56f4d
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.Decompose(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3@,Inno.Core.Mathematics.Quaternion@,Inno.Core.Mathematics.Vector3@)"
source: xml
reviewed: 1d3bb2db089623bde249354edfca137914f19fda93f0729bdb253d910ef0fb9b
title: "Matrix.Decompose"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Decomposes a matrix into scale, rotation and translation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Parameter `scale`:** Receives basis-column lengths, with the X sign negated for a negative determinant.

**Parameter `rotation`:** Receives the rotation derived from normalized basis columns, or identity when a scale is too small.

**Parameter `translation`:** Receives the last-column XYZ translation.

**Returns:** False when a basis-column length is at most the default tolerance; otherwise true. Success does not certify that a matrix with shear or perspective is a pure TRS transform.
