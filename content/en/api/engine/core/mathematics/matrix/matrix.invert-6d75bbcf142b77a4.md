---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6d75bbcf142b77a4b156116764daf5d0f0a73bc73d5ee94fe8b6b6fdbb9046d2
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.Invert(Inno.Core.Mathematics.Matrix)
title: Matrix.Invert
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
sourceFingerprint: 2c380126ffda6c9751b3ffbb5f5a8b54093e30d3ba6b480c853fce620de7f5aa
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `m`:** Source matrix.

## Returns

Inverse matrix, or `P:Inno.Core.Mathematics.Matrix.identity` when the absolute determinant is less than `F:Inno.Core.Mathematics.MathHelper.C_TOLERANCE`.
