---
uid: api.8a1813cb0ac294dfbc5c14ec4a3c0398ea4850093ad5d3fca753923ff1a80864
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderTextureReadbackResult.#ctor(InnoEngine.Rendering.RenderTextureDescriptor,System.Int32,System.Int32,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 4f2500e2a98b0b1aeb94499c8dee8a1ddb0caeb09a952f92d7e852f425137021
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates one immutable texture readback result.

**Parameter `descriptor`:** Source texture descriptor.

**Parameter `mipLevel`:** Source mip level.

**Parameter `rowPitch`:** Number of bytes between adjacent texel rows.

**Parameter `data`:** Complete tightly packed mip bytes for every addressable layer.
