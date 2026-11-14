---
uid: api.06dfc76d55dbfa2662058e08d50a66c8dc7517e024fdd3c76c7747a1c8d61d07
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Vector4Int.Lerp(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int,System.Single)"
source: xml
reviewed: 726eb93a592ccef13faae742b5ee48239eea3b7207043d05e70a167d58c1f95c
title: "Vector4Int.Lerp"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Clamps the interpolation factor to \[0, 1\] and truncates each interpolated component to an integer.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector4int that represents the completed operation.
