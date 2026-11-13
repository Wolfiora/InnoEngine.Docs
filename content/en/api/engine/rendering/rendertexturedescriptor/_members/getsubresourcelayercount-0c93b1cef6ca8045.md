---
uid: api.0c93b1cef6ca80454e29a5d09918bd929ba24bfd5cb752f50b0b12fcfa31bfbe
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(System.Int32)"
source: xml
reviewed: 91101d37e9984c77d243f46fcbf6d1d70730889fb352706b667b89f5434fee36
title: "GetSubresourceLayerCount"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Gets the number of independently addressable layers or slices at one mip level.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** The array-layer count for 2D textures, six faces per cubemap layer, or the mip depth for 3D textures.
