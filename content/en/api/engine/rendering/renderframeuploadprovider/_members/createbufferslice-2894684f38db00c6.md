---
uid: api.2894684f38db00c6fd4f0c4b16ae952a0978506fe8bb90727a5d15af13eca904
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderFrameUploadProvider.CreateBufferSlice(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32,Inno.Rendering.RenderBufferUsage,System.UInt64)"
source: xml
reviewed: f5c3e04633dd84e03001b6992ee99c83eebcab59aaba37d84b61c43984754252
title: "CreateBufferSlice"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a frame-scoped slice over a provider-owned persistent upload buffer.

**Parameter `buffer`:** The persistent upload page backing the slice.

**Parameter `firstElement`:** The zero-based first uploaded element.

**Parameter `elementCount`:** The positive number of uploaded elements.

**Parameter `usage`:** The GPU uses supported by the uploaded range.

**Parameter `frameIndex`:** The render frame during which the slice remains valid.

**Returns:** An opaque frame-scoped buffer slice.
