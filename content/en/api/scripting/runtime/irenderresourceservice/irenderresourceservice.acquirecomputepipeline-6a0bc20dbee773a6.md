---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6a0bc20dbee773a6f74bb72037c377a64c3d69bbf64732d96cbf54623c50bcf6
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireComputePipeline(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.ComputePipelineDescriptor,System.String)
title: IRenderResourceService.AcquireComputePipeline
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 104970748c91b4f22e859981b872082d323be12e44d5a611835865372795ca9f
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target compute program and interface.

**Parameter `name`:** Diagnostic name.

## Returns

A compute pipeline owned by the active device generation.
