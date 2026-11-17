---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4c14c4a612d5ecbd3638375adc3cb464a7f396b1e1d7df60823047464371df81
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout)
title: IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: fbcabb8abee437646a59e8d4b9360d77e8ed448fd4805e098f8f9f32f6055319
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `capabilities`:** Capabilities of the device that will own the pipeline.

**Parameter `vertexLayout`:** Layout of the fullscreen quad submitted by the runtime.

## Returns

An opaque pipeline descriptor that encodes premultiplied linear color to sRGB.
