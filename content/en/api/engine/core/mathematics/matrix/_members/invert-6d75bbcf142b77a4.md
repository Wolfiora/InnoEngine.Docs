---
uid: api.6d75bbcf142b77a4b156116764daf5d0f0a73bc73d5ee94fe8b6b6fdbb9046d2
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.Invert(Inno.Core.Mathematics.Matrix)"
source: xml
reviewed: 7a7b4e2b0704521d554b27fc7cd928d8d74f30a138f85ac113b0b3cd24d04e8e
title: "Invert"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Returns the inverse, or identity when the absolute determinant is below the default tolerance.

**Parameter `m`:** Source matrix.

**Returns:** Inverse matrix, or `P:Inno.Core.Mathematics.Matrix.identity` when the absolute determinant is less than `F:Inno.Core.Mathematics.MathHelper.C_TOLERANCE`.
