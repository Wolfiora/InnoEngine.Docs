---
uid: api.6d75bbcf142b77a4b156116764daf5d0f0a73bc73d5ee94fe8b6b6fdbb9046d2
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.Invert(Inno.Core.Mathematics.Matrix)"
source: xml
reviewed: 1a740224da96f0637cdfefe0f929219ebc5de10738589d7f93f31df32bcc0e06
title: "Matrix.Invert"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Returns the inverse, or identity when the absolute determinant is below the default tolerance.

## Parameters

**Parameter `m`:** Source matrix.

## Returns

Inverse matrix, or `P:Inno.Core.Mathematics.Matrix.identity` when the absolute determinant is less than `F:Inno.Core.Mathematics.MathHelper.C_TOLERANCE`.
