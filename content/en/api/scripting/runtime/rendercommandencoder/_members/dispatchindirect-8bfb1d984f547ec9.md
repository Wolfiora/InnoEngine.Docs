---
uid: api.8bfb1d984f547ec9ce1a4eced9873d92ff75bb09ed4c4993c3560a8da690dd66
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 0ebe59a78ca09a106549cb82de93099afcd73fc5591d3fa39bfef0d9003be0b3
title: "DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
