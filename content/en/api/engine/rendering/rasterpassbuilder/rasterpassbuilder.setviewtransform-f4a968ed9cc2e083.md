---
uid: api.f4a968ed9cc2e0836f35338d773c5919a743b88b7d674641d4d1a8e48fd90f01
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single})"
source: xml
reviewed: a9f4288f0132a90e804f6d4ea56bc01542fb9a980fe382ea8d2ef775a808d60d
title: "RasterPassBuilder.SetViewTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Sets backend-ready column-major transform matrices for this raster view.

## Parameters

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

## Returns

This builder for fluent declarations.
