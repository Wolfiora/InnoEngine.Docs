---
uid: api.071af0eaf01a7bc13391513f05b6ca9c24037d40916404c1a1774e7c184d3d48
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Quaternion.LookRotation(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)"
source: xml
reviewed: 4a9d1d96602d6cca532228573579a5c1ec76611d9b266b1aa3e5450bdc4c4783
title: "LookRotation"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Creates a rotation quaternion that looks in `forward` direction with the given `up`.

**Parameter `forward`:** The forward consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `up`:** The up consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.
