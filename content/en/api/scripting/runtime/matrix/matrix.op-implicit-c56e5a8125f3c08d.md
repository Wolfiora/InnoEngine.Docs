---
uid: api.c56e5a8125f3c08d4eecd56c5f0203665603c630db4ef718ad81d16bc0881813
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.op_Implicit(InnoEngine.Mathematics.Matrix)~System.Numerics.Matrix4x4"
source: xml
reviewed: fc56ca92b9d5fc15a1eed500111ecb70fe56715e5204a6342b6b6ca360775a36
title: "Matrix.op_Implicit"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Converts to `T:System.Numerics.Matrix4x4` preserving element order. System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

## Parameters

**Parameter `m`:** Source matrix.

## Returns

The validated system.numerics.matrix4x4 that represents the completed operation.
