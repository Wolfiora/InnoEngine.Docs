---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d75bbcf142b77a4b156116764daf5d0f0a73bc73d5ee94fe8b6b6fdbb9046d2
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.Invert(Inno.Core.Mathematics.Matrix)
title: Matrix.Invert
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
reviewed: 01e7bfae3c8a53f6f7cc3dcab7e8c8a104d4e40a2c1edce2ae8ae45f3aba180e
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
