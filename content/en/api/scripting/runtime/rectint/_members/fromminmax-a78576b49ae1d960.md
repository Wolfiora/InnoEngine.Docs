---
uid: api.a78576b49ae1d960aa1cfcbf2ba5fd1018cd64f4c95661bd3275a3be077da329
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.RectInt.FromMinMax(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int)"
source: xml
reviewed: e6473471886535183354abbc34faf10444cd1bbdd9f93d2f2842504b6fc1a27b
title: "FromMinMax"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a rectangle from minimum and maximum boundaries; point containment excludes the maximum boundary.

**Parameter `min`:** The min consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `max`:** The max consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect int that represents the completed operation.
