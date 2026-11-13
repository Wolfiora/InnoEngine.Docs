---
uid: api.c56e5a8125f3c08d4eecd56c5f0203665603c630db4ef718ad81d16bc0881813
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.op_Implicit(InnoEngine.Mathematics.Matrix)~System.Numerics.Matrix4x4"
source: xml
reviewed: 2b8bdb021d15f46bfdaedbe400070c7d279005d86c52660699918b1292b1ad33
title: "op_Implicit"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Converts to `T:System.Numerics.Matrix4x4` preserving element order. System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

**Parameter `m`:** Source matrix.

**Returns:** The validated system.numerics.matrix4x4 that represents the completed operation.
