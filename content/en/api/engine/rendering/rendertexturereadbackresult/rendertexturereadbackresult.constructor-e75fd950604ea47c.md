---
uid: api.e75fd950604ea47c19707a98a9f57be94f2eee12f628c088dd5919c86a9fb0de
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderTextureReadbackResult.#ctor(Inno.Rendering.RenderTextureDescriptor,System.Int32,System.Int32,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 6e4d9d4e432b84fd9ab07a5c1ed04272c9262f72d394dc65e5b5c127c073f3c4
title: "RenderTextureReadbackResult.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates one immutable texture readback result.

## Parameters

**Parameter `descriptor`:** Source texture descriptor.

**Parameter `mipLevel`:** Source mip level.

**Parameter `rowPitch`:** Number of bytes between adjacent texel rows.

**Parameter `data`:** Complete tightly packed mip bytes for every addressable layer.
