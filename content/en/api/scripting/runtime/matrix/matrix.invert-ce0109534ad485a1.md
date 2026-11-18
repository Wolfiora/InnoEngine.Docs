---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ce0109534ad485a13e6aa377adf67acb2ca2401dd6e07ac031bdfee08d82e4b2
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.Invert(InnoEngine.Mathematics.Matrix)
title: Matrix.Invert
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
sourceFingerprint: da171e18d76e4ba5d5b1d995ff8d603b4288f883e15435622d2e150756f851de
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `m`:** Source matrix.

## Returns

Inverse matrix, or `P:InnoEngine.Mathematics.Matrix.identity` when the absolute determinant is less than `F:InnoEngine.Mathematics.MathHelper.C_TOLERANCE`.
