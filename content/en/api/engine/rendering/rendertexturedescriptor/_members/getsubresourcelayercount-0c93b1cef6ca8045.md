---
uid: api.0c93b1cef6ca80454e29a5d09918bd929ba24bfd5cb752f50b0b12fcfa31bfbe
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(System.Int32)"
source: xml
reviewed: c7989e24cc57edb7f42749361fb7008dfe430a68ccb07459527efd8098139bcf
title: "GetSubresourceLayerCount"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Gets the number of independently addressable layers or slices at one mip level.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** The array-layer count for 2D textures, six faces per cubemap layer, or the mip depth for 3D textures.
