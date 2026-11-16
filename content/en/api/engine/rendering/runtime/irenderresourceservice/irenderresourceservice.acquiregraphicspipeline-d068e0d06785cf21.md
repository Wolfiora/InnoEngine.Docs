---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d068e0d06785cf21e2af11cd221e5c7b8f6a0c35d6ce2b57e343ebbf640e366b
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireGraphicsPipeline(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.GraphicsPipelineDescriptor,System.String)
title: IRenderResourceService.AcquireGraphicsPipeline
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: eb799c09dbd11d721979a76d9981cb89471a13d244687207424eeb0598eca8bf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target program, interface, layout, and raster state.

**Parameter `name`:** Diagnostic name.

## Returns

A graphics pipeline owned by the active device generation.
