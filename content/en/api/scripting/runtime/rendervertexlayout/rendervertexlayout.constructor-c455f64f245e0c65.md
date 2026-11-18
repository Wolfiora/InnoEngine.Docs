---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c455f64f245e0c65d940d31eb902366323ca583606f951b90abdc47a039bfee0
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderVertexAttribute},System.Int32)
title: RenderVertexLayout.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
sourceFingerprint: 5194512960a0d13b476d3e054f799b90b30cd9df1b314c4b8900d981210441f0
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves trailing application-defined padding.
