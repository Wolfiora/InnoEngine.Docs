---
uid: api.inno.core.mathematics.runtime-script.2a3e30d2fc986231
symbol: "scripting:Inno.Core.Mathematics:T:InnoEngine.Mathematics.Matrix"
source: xml
reviewed: 719497b737feb5d101c5ac129b46058e0423fdec0009842ca06ca72880ebbdd0
title: "Matrix"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-mathematics#numeric-and-layout-contract
aliases: []
---

Represents a mutable four-by-four transformation matrix using column-vector multiplication.

## Remarks

Conventions used by this type: 

- **Column-vector math**: points/vectors are treated as column vectors on the right: `v' = M * v`.
- **Translation is stored in the last column**: (m14, m24, m34).
- Matrix multiplication follows standard form: `C = A * B` (apply B then A in column-vector convention: `A * (B * v)`).



Note on handedness: This `T:InnoEngine.Mathematics.Matrix` type is **handedness-agnostic**. Handedness is determined by the specific factory (e.g. `M:InnoEngine.Mathematics.Matrix.CreateLookAt(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)` and `M:InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single)` are currently **left-handed**). If your engine convention is right-handed (-Z forward), add/use explicit RH variants (e.g. CreateLookAtRH / CreatePerspectiveFieldOfViewRH).
