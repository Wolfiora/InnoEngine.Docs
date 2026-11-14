---
uid: api.5f80ff324548497468e30d1a2968806577cb1cf0ea206404956243f0c921278a
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle,System.Int32)"
source: xml
reviewed: ec3aec3887127c7f78b8c37f82f66c89e9a5412955411af1907647c533f539b6
title: "RenderCommandEncoder.BindStorageTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Binds a texture subresource for shader storage access.

## Parameters

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
