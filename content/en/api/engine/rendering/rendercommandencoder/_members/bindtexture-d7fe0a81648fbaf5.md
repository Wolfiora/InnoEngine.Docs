---
uid: api.d7fe0a81648fbaf5dfd0f4badbbc07b9a1463e74c56b5707875a82b8fb381c1b
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderSamplerState)"
source: xml
reviewed: ced913886f4629484ff6f86cd33d4128f2be52b8422d3b238462c633675364f7
title: "BindTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `sampler`:** Sampling state copied by value.
