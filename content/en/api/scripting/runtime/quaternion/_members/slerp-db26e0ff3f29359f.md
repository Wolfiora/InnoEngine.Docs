---
uid: api.db26e0ff3f29359fa235172e027fb084fd705a30682ca62f9462b9ef258b56c5
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Quaternion.Slerp(InnoEngine.Mathematics.Quaternion,InnoEngine.Mathematics.Quaternion,System.Single)"
source: xml
reviewed: cc0e295d8e93f2e11527cc2a718d5df6b6dc8371fa424836d1dcd2fd9581cd93
title: "Slerp"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Interpolates along the shortest spherical path between two rotations.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated quaternion that represents the completed operation.
