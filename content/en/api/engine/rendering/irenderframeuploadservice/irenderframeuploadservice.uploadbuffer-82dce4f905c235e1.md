---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82dce4f905c235e1628ec1ea1a887e027a6db49bc165efefa6e787f0caee1591
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderFrameUploadService.UploadBuffer(Inno.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderFrameUploadService.UploadBuffer
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 64740d5542df79f8a88720faff8ce3414775dd9ee686be7baf9e1c4cf81eede6
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
