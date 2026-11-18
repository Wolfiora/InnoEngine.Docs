---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.82dce4f905c235e1628ec1ea1a887e027a6db49bc165efefa6e787f0caee1591
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderFrameUploadService.UploadBuffer(Inno.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderFrameUploadService.UploadBuffer
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 3f90588b3b4c0834de239cd6e1ae20fbf1bb2ad3a0b498bbd3a9806c934a5547
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** Element interpretation and permitted GPU uses.

**Parameter `data`:** Tightly packed complete element bytes.

**Parameter `name`:** Diagnostic name used when a backing page is allocated.

## Returns

A current-frame slice covering the uploaded elements.
