---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ce0109534ad485a13e6aa377adf67acb2ca2401dd6e07ac031bdfee08d82e4b2
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.Invert(InnoEngine.Mathematics.Matrix)
title: Matrix.Invert
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
reviewed: bd645f98c8931f28f0bef86c54212e28ada6d2b65fa883201420c55d6b0edd25
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
