---
uid: api.42809ae885ccb0967619866208390f7eb67e87a962d36029282e41cd883c5598
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: ecdb322c03f6cb58597f1a9ea935304f0bbc847e3861a6185291dc648a02a924
title: "DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
