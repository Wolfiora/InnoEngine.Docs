---
uid: api.a10e8f68498a11a1d997df426780b27cae1c71cc366b8be0f895ffa51103f65c
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.MathHelper.AlmostEquals(System.Single,System.Single,System.Single)"
source: xml
reviewed: 9827a1a19358f0779fde21290e3bd47691017b7be3be8a0ccaf9688b3ae13990
title: "MathHelper.AlmostEquals"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Determines whether two floating-point numbers are approximately equal, using a relative tolerance based on the magnitude of the numbers. This is useful for comparing floats where rounding errors may occur.

**Parameter `a`:** The first float value to compare.

**Parameter `b`:** The second float value to compare.

**Parameter `relTolerance`:** The relative tolerance allowed between `a` and `b`. Default is 1e-6. The comparison checks if the difference is within `relTolerance * max(|a|, |b|)`.

**Returns:** `true` if the absolute difference between `a` and `b` is less than or equal to the relative tolerance multiplied by the larger magnitude of the two values; otherwise, `false`.
