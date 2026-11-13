---
uid: api.048ce6df687c0a05d9826f5ce7ed58d10913a768aa3ae92781493e4742319d6a
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 4879e2d5bf37730b707e575c51b38beb12205bdb776e6ad05b0936f8f2396d6b
title: "DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
