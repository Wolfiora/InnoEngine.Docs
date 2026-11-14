---
uid: api.024db7939090f4b81762a9262ab2e430e01d4a50b4e8826cfd236d4ffe6986ec
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentTextureHandle,System.Int32)"
source: xml
reviewed: 4157896e1aa8540a1f49ed0c2948bf848dfb6f59287f437f99c1e7d77fe5707a
title: "RenderCommandEncoder.BindStorageTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Binds a texture subresource for shader storage access.

## Parameters

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.
