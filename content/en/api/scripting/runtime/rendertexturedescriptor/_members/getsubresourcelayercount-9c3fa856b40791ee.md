---
uid: api.9c3fa856b40791eeabe70ce27ff398bf1579002d05dbcb564d25bd0c4e04760f
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(System.Int32)"
source: xml
reviewed: 6996522750432e46a61665feecf0722a3042a8ee60542a73b1f03b93d5e4cc6a
title: "GetSubresourceLayerCount"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Gets the number of independently addressable layers or slices at one mip level.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** The array-layer count for 2D textures, six faces per cubemap layer, or the mip depth for 3D textures.
