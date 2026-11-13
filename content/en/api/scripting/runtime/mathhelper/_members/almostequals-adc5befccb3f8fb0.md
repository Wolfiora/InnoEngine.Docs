---
uid: api.adc5befccb3f8fb05999a8a0a3bb418aff1139912d0e276238cd9e7ad5353818
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.MathHelper.AlmostEquals(System.Single,System.Single,System.Single)"
source: xml
reviewed: e8339bee3921c64620af1a5b7bf8c33a2dccd64b8d3b74c118702c1697067aab
title: "AlmostEquals"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Determines whether two floating-point numbers are approximately equal, using a relative tolerance based on the magnitude of the numbers. This is useful for comparing floats where rounding errors may occur.

**Parameter `a`:** The first float value to compare.

**Parameter `b`:** The second float value to compare.

**Parameter `relTolerance`:** The relative tolerance allowed between `a` and `b`. Default is 1e-6. The comparison checks if the difference is within `relTolerance * max(|a|, |b|)`.

**Returns:** `true` if the absolute difference between `a` and `b` is less than or equal to the relative tolerance multiplied by the larger magnitude of the two values; otherwise, `false`.
