---
uid: api.31499f9e4192b8150c8cfe2bdabb8ff5d7fc9ab24c3d8fa1e587c158557fa9cf
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout)"
source: xml
reviewed: 94de05e050dc5d971facefef5852421c9100dcbaad046373ea040115d7164f2b
title: "IRenderLayerCompositionProgramProvider.CreateDescriptor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a pipeline descriptor compatible with the supplied fullscreen vertex layout.

**Parameter `capabilities`:** Capabilities of the device that will own the pipeline.

**Parameter `vertexLayout`:** Layout of the fullscreen quad submitted by the runtime.

**Returns:** A pipeline descriptor that samples a texture named `s_tex` with premultiplied alpha.
