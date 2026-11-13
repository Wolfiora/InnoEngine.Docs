---
uid: api.2085cc8e96e172546c94e4b65e432158d6cca515f6fea75c26d81a7706247235
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 22c317bdaced02ace8624b25be8f67948cf024d32922a193aff35de2b2a8c57f
title: "DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
