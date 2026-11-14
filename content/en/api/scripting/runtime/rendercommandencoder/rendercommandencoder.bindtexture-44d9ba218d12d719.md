---
uid: api.44d9ba218d12d71996e3f5b839a20ae3f5937a488207e7615b697ea96225784b
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderSamplerState)"
source: xml
reviewed: 9c93d079368a31dc568dc37c3a3fcf092b8dd4f7feffc47ac803254d172e21a7
title: "RenderCommandEncoder.BindTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Binds a sampled texture and its sampler to a shader binding.

## Parameters

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `sampler`:** Sampling state copied by value.
