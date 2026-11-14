---
uid: api.7e6759ed079730da07eaeb214fba9d748f8c1f2fbecffb30463276f298d633ff
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.RectInt.TryIntersect(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt@)"
source: xml
reviewed: dca924e978aed6425d5008c4b807584a2a8d2d2304f88477101773064bbc511b
title: "RectInt.TryIntersect"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.
