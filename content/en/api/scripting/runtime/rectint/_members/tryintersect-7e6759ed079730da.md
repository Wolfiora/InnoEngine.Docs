---
uid: api.7e6759ed079730da07eaeb214fba9d748f8c1f2fbecffb30463276f298d633ff
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.RectInt.TryIntersect(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt@)"
source: xml
reviewed: ea3a14ac896a0baffb000b59ddfb6de35a218e08e764da40e6f3fbdfdad17f94
title: "TryIntersect"
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
