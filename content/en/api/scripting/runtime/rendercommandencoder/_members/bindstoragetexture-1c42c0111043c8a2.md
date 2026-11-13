---
uid: api.1c42c0111043c8a27616ac50081c75554803f6d761a2790a28f0ccc75b0b39c2
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentTextureHandle,System.Int32)"
source: xml
reviewed: b780916bad8914b3dfea7c36e52b67521d576d98ecde790d2cd85c1d5c1dc9fb
title: "BindStorageTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
