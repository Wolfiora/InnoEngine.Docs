---
uid: api.3bfed4b07fa4c80b8a30f2ce4409b3074317bc76a6c0b7567374d47b046fbabf
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32)"
source: xml
reviewed: bf2129e8a45003148d3f5192c6026a6bf31edf7c67ae12609a70d512ca70b008
title: "BeginTextureReadback"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Begins an asynchronous readback of one complete persistent texture mip.

**Parameter `texture`:** Texture created with `F:Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** An opaque device-generation readback handle.
