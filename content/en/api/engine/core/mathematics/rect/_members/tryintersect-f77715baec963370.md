---
uid: api.f77715baec963370f7e3271abd151a4deab02160215a00ca05acb6a01c641e3b
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Rect.TryIntersect(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect@)"
source: xml
reviewed: 3058f384a275a64f754cb49e2cf15b066926cda1ef667aa9d7168e15d89603b2
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
