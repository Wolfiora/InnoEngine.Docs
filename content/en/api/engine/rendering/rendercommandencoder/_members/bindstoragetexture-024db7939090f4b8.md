---
uid: api.024db7939090f4b81762a9262ab2e430e01d4a50b4e8826cfd236d4ffe6986ec
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentTextureHandle,System.Int32)"
source: xml
reviewed: 33b40682162986cf9e221e32af48c881a4a97eeb0ce976a933598a88e1492320
title: "BindStorageTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
