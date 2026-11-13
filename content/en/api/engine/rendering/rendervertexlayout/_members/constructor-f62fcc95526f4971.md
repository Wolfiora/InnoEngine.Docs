---
uid: api.f62fcc95526f497199ff95b03acf3c18896c4f6d9a98f26f32f81d456c032559
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderVertexAttribute},System.Int32)"
source: xml
reviewed: 65bdf30dc776805457b2f69138af9e6c514445dba95da93099a7f02d48467ba1
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates an interleaved vertex layout.

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves trailing application-defined padding.
