---
uid: api.3e8638f0e94a7719c9ea59bbeeb21aa08cb51b259088e45eb1ece8930ffa0d4a
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateGeometry(Inno.Rendering.PersistentBufferHandle,Inno.Rendering.PersistentBufferHandle,Inno.Rendering.RenderVertexLayout,System.Int32,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderGeometrySection})"
source: xml
reviewed: 8e557c691d8d61c378e215683f25fa10717ef746ddffdd7a833044f39ae5f831
title: "RenderResourceProvider.CreateGeometry"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates generation-scoped resolved geometry from persistent buffers and immutable sections.

## Parameters

**Parameter `vertexBuffer`:** The persistent vertex buffer.

**Parameter `indexBuffer`:** The persistent index buffer.

**Parameter `vertexLayout`:** The interleaved vertex layout.

**Parameter `vertexCount`:** The number of vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sections`:** The independently drawable indexed ranges.

## Returns

Resolved geometry owned by the current device generation.
