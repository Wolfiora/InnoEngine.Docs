---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.623efe6264eb5d960abc6895ca57a695be044e1036ad1c0fc0c7667b52d6c5e2
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.IRenderFrameUploadService.UploadBuffer(InnoEngine.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)
title: IRenderFrameUploadService.UploadBuffer
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: 2591a04dc3db14fd1c53f6a650a59b70779511c6abf8c8aa92ef9048ee6dd527
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
