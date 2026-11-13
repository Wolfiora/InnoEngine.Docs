---
uid: api.048ce6df687c0a05d9826f5ce7ed58d10913a768aa3ae92781493e4742319d6a
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 993925a42641c0798716a134ef41399377f951787b94d1d6c3b287ca17631485
title: "DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
