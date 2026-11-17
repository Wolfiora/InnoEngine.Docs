---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3e8638f0e94a7719c9ea59bbeeb21aa08cb51b259088e45eb1ece8930ffa0d4a
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderResourceProvider.CreateGeometry(Inno.Rendering.PersistentBufferHandle,Inno.Rendering.PersistentBufferHandle,Inno.Rendering.RenderVertexLayout,System.Int32,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderGeometrySection})
title: RenderResourceProvider.CreateGeometry
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 357e62728837ba57264709fcba5c3e9ab4442092247dd68a1c57296008a50d6e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `vertexBuffer`:** The persistent vertex buffer.

**Parameter `indexBuffer`:** The persistent index buffer.

**Parameter `vertexLayout`:** The interleaved vertex layout.

**Parameter `vertexCount`:** The number of vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sections`:** The independently drawable indexed ranges.

## Returns

Resolved geometry owned by the current device generation.
