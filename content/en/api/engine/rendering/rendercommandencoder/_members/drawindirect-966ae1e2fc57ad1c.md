---
uid: api.966ae1e2fc57ad1ccb4b5b45e5d59f03f8a9f7e8d60710bf929a83fe22744e07
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: a3d9e1583b65f6eb0c7fb3ccd7c5a10b6c72a02bc534b4d01df684bc43c7566d
title: "DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
