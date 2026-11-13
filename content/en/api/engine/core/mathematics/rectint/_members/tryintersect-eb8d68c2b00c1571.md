---
uid: api.eb8d68c2b00c1571505aa261799dd76eeb18c76de755cd0533f14f4554121de9
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.RectInt.TryIntersect(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt@)"
source: xml
reviewed: 5d26b86293d4e9f3e7de247e1643d2697de69e8f52a7b02149de4352b750f343
title: "TryIntersect"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.
