---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.623efe6264eb5d960abc6895ca57a695be044e1036ad1c0fc0c7667b52d6c5e2
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.IRenderFrameUploadService.UploadBuffer(InnoEngine.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderFrameUploadService.UploadBuffer
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: b182b20a76c5eee86dc8960ed6f489d4a21520c0a7e05cc7438b81faf87fec8d
apiScope: Runtime
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
