---
uid: api.a78576b49ae1d960aa1cfcbf2ba5fd1018cd64f4c95661bd3275a3be077da329
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.RectInt.FromMinMax(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int)"
source: xml
reviewed: f56c8f0e068a5fd5ce68671c4f83967bffd2465581b9262aa8ee2aadbf39fc9c
title: "RectInt.FromMinMax"
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

The validated rect int that represents the completed operation.
