---
uid: api.eb8d68c2b00c1571505aa261799dd76eeb18c76de755cd0533f14f4554121de9
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.RectInt.TryIntersect(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt@)"
source: xml
reviewed: fa0de18ba5ee376a139f6bbf7abccdd5e01b10677ec2b834336590fc1d65358b
title: "RectInt.TryIntersect"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.
