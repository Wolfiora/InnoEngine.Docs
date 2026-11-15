---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1c42c0111043c8a27616ac50081c75554803f6d761a2790a28f0ccc75b0b39c2
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentTextureHandle,System.Int32)
title: RenderCommandEncoder.BindStorageTexture
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: e2ab7916fbbb210ea2fad37760c5127066a3a02321700a762e0e04438f52d11b
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Binds a texture subresource for shader storage access.

## Parameters

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
