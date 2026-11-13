---
uid: api.9c3fa856b40791eeabe70ce27ff398bf1579002d05dbcb564d25bd0c4e04760f
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(System.Int32)"
source: xml
reviewed: 8dd99d97910fe45577d672edf44718d79303cc194eb262fadefc691b2c18d259
title: "RenderTextureDescriptor.GetSubresourceLayerCount"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Gets the number of independently addressable layers or slices at one mip level.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** The array-layer count for 2D textures, six faces per cubemap layer, or the mip depth for 3D textures.
