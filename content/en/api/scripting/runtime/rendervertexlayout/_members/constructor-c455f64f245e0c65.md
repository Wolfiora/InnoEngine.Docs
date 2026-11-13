---
uid: api.c455f64f245e0c65d940d31eb902366323ca583606f951b90abdc47a039bfee0
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderVertexAttribute},System.Int32)"
source: xml
reviewed: 606565c34c6335bb4030460e4bbb8d5d95a5b39c2db88b31dd549b9bffecd880
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates an interleaved vertex layout.

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves trailing application-defined padding.
