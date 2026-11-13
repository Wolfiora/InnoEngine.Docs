---
uid: api.e75fd950604ea47c19707a98a9f57be94f2eee12f628c088dd5919c86a9fb0de
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderTextureReadbackResult.#ctor(Inno.Rendering.RenderTextureDescriptor,System.Int32,System.Int32,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: d57eeebc6150abc4a2ed30f4ec8b8c2df60f7cc0e2f15833d03da8e9a98b5d87
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates one immutable texture readback result.

**Parameter `descriptor`:** Source texture descriptor.

**Parameter `mipLevel`:** Source mip level.

**Parameter `rowPitch`:** Number of bytes between adjacent texel rows.

**Parameter `data`:** Complete tightly packed mip bytes for every addressable layer.
