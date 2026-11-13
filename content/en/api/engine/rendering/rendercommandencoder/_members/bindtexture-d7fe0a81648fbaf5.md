---
uid: api.d7fe0a81648fbaf5dfd0f4badbbc07b9a1463e74c56b5707875a82b8fb381c1b
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderSamplerState)"
source: xml
reviewed: 76644fd54172d6f9397fb4f6735646882ed792b6f4a22bfc7ec56ab8cfb06786
title: "BindTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `sampler`:** Sampling state copied by value.
