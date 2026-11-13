---
uid: api.aa320fd3193b54d7de73002ee04508806e8e4d9abf6ea2eed435fb3a41c25b5d
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.CreateLookAtRH(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)"
source: xml
reviewed: 22334299b2720db45b08991f8843780414f20a61bf5deb319ced0dbf10661900
title: "CreateLookAtRH"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Creates a right-handed view matrix that looks from `eye` to `target`.

**Parameter `eye`:** The eye consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Parameter `up`:** The up consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated matrix that represents the completed operation.
