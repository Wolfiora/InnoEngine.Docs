---
uid: api.0fdfe93d61ec6c8133ba74c9f126fcb232699f7dd92abc92da31692fedbbb2b0
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 95df98889b915e13334a6770144a0c4dac016e64eaf85aac8f7e157822bf6157
title: "DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
