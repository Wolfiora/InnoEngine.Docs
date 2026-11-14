---
uid: api.3bfed4b07fa4c80b8a30f2ce4409b3074317bc76a6c0b7567374d47b046fbabf
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32)"
source: xml
reviewed: 4dfcda064d504dcaa0eb04522117c54fa11d714afe6bc0d25b171c7be7552c02
title: "IRenderDevice.BeginTextureReadback"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Begins an asynchronous readback of one complete persistent texture mip.

## Parameters

**Parameter `texture`:** Texture created with `F:Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

## Returns

An opaque device-generation readback handle.
