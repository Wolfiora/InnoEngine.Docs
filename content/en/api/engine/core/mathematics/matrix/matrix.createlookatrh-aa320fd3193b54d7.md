---
uid: api.aa320fd3193b54d7de73002ee04508806e8e4d9abf6ea2eed435fb3a41c25b5d
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.CreateLookAtRH(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)"
source: xml
reviewed: e347807e401dc0b4d16a091609bf2a5ae977d3fb499fa7e738480d557c9438d0
title: "Matrix.CreateLookAtRH"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Creates a right-handed view matrix that looks from `eye` to `target`.

## Parameters

**Parameter `eye`:** The eye consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Parameter `up`:** The up consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

## Returns

The validated matrix that represents the completed operation.
