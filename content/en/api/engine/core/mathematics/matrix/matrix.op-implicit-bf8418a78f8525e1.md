---
uid: api.bf8418a78f8525e109eb63d3437a574db518be1da75e09c807fc40dcedb43d52
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.op_Implicit(Inno.Core.Mathematics.Matrix)~System.Numerics.Matrix4x4"
source: xml
reviewed: 24a8cb48f74fc900d524b9a5e1eb58e2e6fc94266bc1697596689e6762dda7bf
title: "Matrix.op_Implicit"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Converts to `T:System.Numerics.Matrix4x4` preserving element order. System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

## Parameters

**Parameter `m`:** Source matrix.

## Returns

The validated system.numerics.matrix4x4 that represents the completed operation.
