---
uid: api.4d9c544c81f5b1df20d174aeebfa274d78a0309b407981e2fc148127345d8deb
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Vector4.Lerp(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4,System.Single)"
source: xml
reviewed: d513943ed999761f5a0a604c37d1fc8a5595874681061b7b2e5f3ee9d5d97219
title: "Lerp"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Interpolates linearly after clamping the interpolation factor to \[0, 1\].

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector4 that represents the completed operation.
