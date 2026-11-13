---
uid: api.5f80ff324548497468e30d1a2968806577cb1cf0ea206404956243f0c921278a
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle,System.Int32)"
source: xml
reviewed: 0ac1b3d3bdbc0ee40f49b2b75e953aa80f887fb0b8115bbde080e5890f1690df
title: "BindStorageTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
