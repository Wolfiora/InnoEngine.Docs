---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f62fcc95526f497199ff95b03acf3c18896c4f6d9a98f26f32f81d456c032559
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderVertexAttribute},System.Int32)
title: RenderVertexLayout.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 5f0d913a523ad0ddc77dd082a4a193287fef48bed0969a660c6df171d7c8b1eb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves trailing application-defined padding.
