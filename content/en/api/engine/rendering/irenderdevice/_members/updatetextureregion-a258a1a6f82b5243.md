---
uid: api.a258a1a6f82b52433b78b4f5d46b81e310808fc097f59d312a9a1ea5bc42a86b
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.UpdateTextureRegion(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureRegion,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: f814f570d06d374d9d079d0fa6caf2d60e7dda4ee0f0cf3d03676fb233d57129
title: "UpdateTextureRegion"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Replaces a tightly packed rectangular region in one persistent texture subresource.

**Parameter `texture`:** Texture owned by this device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.
