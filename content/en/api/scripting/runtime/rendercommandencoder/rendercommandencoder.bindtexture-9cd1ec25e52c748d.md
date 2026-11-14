---
uid: api.9cd1ec25e52c748dc483564d7884bdbafdf803952fccc0fc6f89f583f080ad54
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.RenderSamplerState)"
source: xml
reviewed: 2b43e4c130436971d25202606c1c6051c1cd1156a7d2679ca71cb4ed5a850435
title: "RenderCommandEncoder.BindTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `sampler`:** Sampling state copied by value.
