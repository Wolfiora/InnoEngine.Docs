---
uid: api.44d9ba218d12d71996e3f5b839a20ae3f5937a488207e7615b697ea96225784b
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderSamplerState)"
source: xml
reviewed: 6bd9c163cd759e17aba413441415103dcc95a955e3d1e718cb1a8016550296f4
title: "BindTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `sampler`:** Sampling state copied by value.
