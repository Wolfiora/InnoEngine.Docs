---
uid: api.ddc8ef15aa126b146c7306a5e7e8f86a25fc1302a406de0e6fad3980ea4edfc4
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 7d92daadd80b5253e1048d67226149be9be8d5e27fbe3664112e2358bb0e972a
title: "DispatchIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
