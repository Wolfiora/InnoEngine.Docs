---
uid: api.b187b88e0defd271d99ec8809fbacb9defbd75001dd54cf7b627c6cb2ebd4421
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Rect.TryIntersect(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect@)"
source: xml
reviewed: 4c73328436e089cb5776006dc1cd4cbffe47f6e77048d758a7202a3e40d14f82
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
