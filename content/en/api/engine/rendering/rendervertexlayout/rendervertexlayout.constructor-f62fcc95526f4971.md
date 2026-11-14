---
uid: api.f62fcc95526f497199ff95b03acf3c18896c4f6d9a98f26f32f81d456c032559
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderVertexAttribute},System.Int32)"
source: xml
reviewed: 3860cce71ce5f5e292f4e0f1e1bdecc5fa2199c6e7b918db8cc528732ae76f91
title: "RenderVertexLayout.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates an interleaved vertex layout.

## Parameters

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves trailing application-defined padding.
