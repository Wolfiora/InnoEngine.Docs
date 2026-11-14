---
uid: api.ce0109534ad485a13e6aa377adf67acb2ca2401dd6e07ac031bdfee08d82e4b2
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.Invert(InnoEngine.Mathematics.Matrix)"
source: xml
reviewed: 71052ef5cd75ef126a26a7a4e4761792a6f504f47d02a5162cd25292aa5ae00a
title: "Matrix.Invert"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Returns the inverse, or identity when the absolute determinant is below the default tolerance.

## Parameters

**Parameter `m`:** Source matrix.

## Returns

Inverse matrix, or `P:InnoEngine.Mathematics.Matrix.identity` when the absolute determinant is less than `F:InnoEngine.Mathematics.MathHelper.C_TOLERANCE`.
