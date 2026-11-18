---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4c14c4a612d5ecbd3638375adc3cb464a7f396b1e1d7df60823047464371df81
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout)
title: IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 4acb72e924d15082fa48a9f8909c011a66ffb70aa80bb1bd69a44d97302fa442
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
