---
uid: api.071af0eaf01a7bc13391513f05b6ca9c24037d40916404c1a1774e7c184d3d48
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Quaternion.LookRotation(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3)"
source: xml
reviewed: 5ab44be1acbb205a9c80e1def15343d28f484e45cabc860cb0755c35bf64a2c5
title: "Quaternion.LookRotation"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Creates a rotation quaternion that looks in `forward` direction with the given `up`.

## Parameters

**Parameter `forward`:** The forward consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `up`:** The up consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

## Returns

The validated quaternion that represents the completed operation.
