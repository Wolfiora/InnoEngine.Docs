---
uid: api.b0983b01f4a131f41d9e7e94dc526d3b40dd1dd75a35c78fdd2b94547fa41497
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Rect.FromMinMax(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2)"
source: xml
reviewed: a5037d25c68483dd9b4399e29758bbe7b4680989bf8ba6ee63d9b0a1851510bf
title: "Rect.FromMinMax"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a rectangle from minimum and maximum boundaries; point containment excludes the maximum boundary.

## Parameters

**Parameter `min`:** The min consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `max`:** The max consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

## Returns

The validated rect that represents the completed operation.
