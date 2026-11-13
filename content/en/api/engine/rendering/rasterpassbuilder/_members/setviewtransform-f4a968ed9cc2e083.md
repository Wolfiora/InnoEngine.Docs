---
uid: api.f4a968ed9cc2e0836f35338d773c5919a743b88b7d674641d4d1a8e48fd90f01
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single})"
source: xml
reviewed: 9efc44dae0cdb4a0e4069a56f279ae370c01e4009665d476d1b5382c2267998d
title: "SetViewTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Sets backend-ready column-major transform matrices for this raster view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.
