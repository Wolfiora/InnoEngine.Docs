---
uid: api.42809ae885ccb0967619866208390f7eb67e87a962d36029282e41cd883c5598
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 69513084c6643c174ddfb46f63cdda0993e8725f27d8e869b6752b1175247e07
title: "RenderCommandEncoder.DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
