---
uid: api.inno.core.mathematics.950d79d89205df55
symbol: "engine:Inno.Core.Mathematics:T:Inno.Core.Mathematics.Matrix"
source: xml
reviewed: e77f0bc31608b739de7b8b178d8769e1989ae3fa3a7736ce4ac6a7af5a1e4b34
title: "Matrix"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
contracts:
- project.inno-core-mathematics#numeric-and-layout-contract
aliases: []
---

Represents a mutable four-by-four transformation matrix using column-vector multiplication.

## Remarks

Conventions used by this type: 

- **Column-vector math**: points/vectors are treated as column vectors on the right: `v' = M * v`.
- **Translation is stored in the last column**: (m14, m24, m34).
- Matrix multiplication follows standard form: `C = A * B` (apply B then A in column-vector convention: `A * (B * v)`).

 

Note on handedness: This `T:Inno.Core.Mathematics.Matrix` type is **handedness-agnostic**. Handedness is determined by the specific factory (e.g. `M:Inno.Core.Mathematics.Matrix.CreateLookAt(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)` and `M:Inno.Core.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single)` are currently **left-handed**). If your engine convention is right-handed (-Z forward), add/use explicit RH variants (e.g. CreateLookAtRH / CreatePerspectiveFieldOfViewRH).
