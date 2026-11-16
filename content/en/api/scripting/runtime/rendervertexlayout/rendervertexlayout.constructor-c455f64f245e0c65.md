---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c455f64f245e0c65d940d31eb902366323ca583606f951b90abdc47a039bfee0
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderVertexAttribute},System.Int32)
title: RenderVertexLayout.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: cdb0ac2783d0ace0c4abcbb9ed5101fe0855db2a620d682d343326f730de1067
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
