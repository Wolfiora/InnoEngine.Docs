---
uid: api.99ff16c68e948d098596d8ff9c26350392ffb781f4ec0320d6317f986ca38d56
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.op_Implicit(System.Numerics.Matrix4x4)~InnoEngine.Mathematics.Matrix"
source: xml
reviewed: 6422f31d6469dea756bca08ffbc170e54b4b2791d54735e03413895aefe0cd3b
title: "op_Implicit"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Converts from `T:System.Numerics.Matrix4x4` preserving element order. System.Numerics assumes row-major with row vectors, so transpose as needed for column-vector usage.

**Parameter `m`:** Source matrix.

**Returns:** The validated matrix that represents the completed operation.
