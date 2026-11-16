---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82dce4f905c235e1628ec1ea1a887e027a6db49bc165efefa6e787f0caee1591
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderFrameUploadService.UploadBuffer(Inno.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderFrameUploadService.UploadBuffer
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 6c200de7f01e42717dcd62d0a89d8805b837cb6ca201d590e75652d3e01a84b6
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
