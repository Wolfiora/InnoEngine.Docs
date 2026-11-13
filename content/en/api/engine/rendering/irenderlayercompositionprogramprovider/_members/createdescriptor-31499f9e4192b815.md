---
uid: api.31499f9e4192b8150c8cfe2bdabb8ff5d7fc9ab24c3d8fa1e587c158557fa9cf
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout)"
source: xml
reviewed: 9b3c32e08fb3445f1d818767ce747f3b2f48c4c16e6003a9171fdfbe7fd0d70f
title: "CreateDescriptor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a pipeline descriptor compatible with the supplied fullscreen vertex layout.

**Parameter `capabilities`:** Capabilities of the device that will own the pipeline.

**Parameter `vertexLayout`:** Layout of the fullscreen quad submitted by the runtime.

**Returns:** A pipeline descriptor that samples a texture named `s_tex` with premultiplied alpha.
