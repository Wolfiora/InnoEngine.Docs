---
uid: api.82dce4f905c235e1628ec1ea1a887e027a6db49bc165efefa6e787f0caee1591
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderFrameUploadService.UploadBuffer(Inno.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)"
source: xml
reviewed: 6c200de7f01e42717dcd62d0a89d8805b837cb6ca201d590e75652d3e01a84b6
title: "IRenderFrameUploadService.UploadBuffer"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Uploads complete elements and returns a slice valid only during the current frame.

## Parameters

**Parameter `descriptor`:** Element interpretation and permitted GPU uses.

**Parameter `data`:** Tightly packed complete element bytes.

**Parameter `name`:** Diagnostic name used when a backing page is allocated.

## Returns

A current-frame slice covering the uploaded elements.
