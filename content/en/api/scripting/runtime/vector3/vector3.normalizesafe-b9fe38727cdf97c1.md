---
uid: api.b9fe38727cdf97c12c715f5e7519db61866fde7eeb804cd0da3b7f9e2818488d
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Vector3.NormalizeSafe(InnoEngine.Mathematics.Vector3,System.Single)"
source: xml
reviewed: 20c5adf5fa1cd2af1ccb92654b6bd960dc41221d6c194f8de3e5cdb3e679f8b1
title: "Vector3.NormalizeSafe"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Returns a unit-length value while handling degenerate input according to the method contract.

## Parameters

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `epsilon`:** The positive tolerance below which input is treated as degenerate.

## Returns

The validated vector3 that represents the completed operation.
