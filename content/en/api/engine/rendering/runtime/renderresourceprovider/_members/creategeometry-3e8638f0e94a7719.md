---
uid: api.3e8638f0e94a7719c9ea59bbeeb21aa08cb51b259088e45eb1ece8930ffa0d4a
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateGeometry(Inno.Rendering.PersistentBufferHandle,Inno.Rendering.PersistentBufferHandle,Inno.Rendering.RenderVertexLayout,System.Int32,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderGeometrySection})"
source: xml
reviewed: bc35aad76bf61dcaa5dafbe386fbe887948ed41bb2401c9841fb5ad6fd99ee21
title: "CreateGeometry"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates generation-scoped resolved geometry from persistent buffers and immutable sections.

**Parameter `vertexBuffer`:** The persistent vertex buffer.

**Parameter `indexBuffer`:** The persistent index buffer.

**Parameter `vertexLayout`:** The interleaved vertex layout.

**Parameter `vertexCount`:** The number of vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sections`:** The independently drawable indexed ranges.

**Returns:** Resolved geometry owned by the current device generation.
