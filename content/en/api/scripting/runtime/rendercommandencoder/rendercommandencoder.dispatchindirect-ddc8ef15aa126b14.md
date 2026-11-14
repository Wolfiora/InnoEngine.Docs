---
uid: api.ddc8ef15aa126b146c7306a5e7e8f86a25fc1302a406de0e6fad3980ea4edfc4
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 25f4c79797769d2077ea234f20503eaceb8475ee8a4de9159d08fdd96821cfb4
title: "RenderCommandEncoder.DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
