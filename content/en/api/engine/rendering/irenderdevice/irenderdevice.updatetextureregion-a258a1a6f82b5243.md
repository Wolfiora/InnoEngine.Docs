---
uid: api.a258a1a6f82b52433b78b4f5d46b81e310808fc097f59d312a9a1ea5bc42a86b
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.UpdateTextureRegion(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureRegion,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 1e8246a5995be99677494b8cb5c8201dff0f29a637b60ec3957bdf2a38eed64b
title: "IRenderDevice.UpdateTextureRegion"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Replaces a tightly packed rectangular region in one persistent texture subresource.

## Parameters

**Parameter `texture`:** Texture owned by this device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.
