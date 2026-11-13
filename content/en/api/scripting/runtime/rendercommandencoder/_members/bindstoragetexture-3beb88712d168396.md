---
uid: api.3beb88712d16839677081c271253384b47c655063b435d17336e883c04ab62bb
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderTextureHandle,System.Int32)"
source: xml
reviewed: 52335e208614d870bfbe0333bfa60d9207fd6fc6ab6c9ba5c824e18b4de15dd7
title: "BindStorageTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
