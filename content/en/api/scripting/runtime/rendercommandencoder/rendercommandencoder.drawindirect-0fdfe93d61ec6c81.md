---
uid: api.0fdfe93d61ec6c8133ba74c9f126fcb232699f7dd92abc92da31692fedbbb2b0
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 444bd17fc6377cf85b4fe37ba830ea74562ab8f8c90eeacddec7b54f14573769
title: "RenderCommandEncoder.DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits draws described by consecutive commands in an indirect buffer.

## Parameters

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
