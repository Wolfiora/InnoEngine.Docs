---
uid: api.4c14c4a612d5ecbd3638375adc3cb464a7f396b1e1d7df60823047464371df81
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout)"
source: xml
reviewed: 77e996b699bc0c7f3ae20d57af255cc8e247d7fefd84b1ef1320ac5cdcb15468
title: "CreateOutputTransferDescriptor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates the final transfer pipeline for a presentation target without automatic sRGB encoding.

**Parameter `capabilities`:** Capabilities of the device that will own the pipeline.

**Parameter `vertexLayout`:** Layout of the fullscreen quad submitted by the runtime.

**Returns:** An opaque pipeline descriptor that encodes premultiplied linear color to sRGB.
