---
uid: api.8bfb1d984f547ec9ce1a4eced9873d92ff75bb09ed4c4993c3560a8da690dd66
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 85685c974533d1d1b90988e808f17db9b1f896081bec408ce5a4c5133607d5a0
title: "RenderCommandEncoder.DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
