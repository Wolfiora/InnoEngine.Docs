---
uid: api.966ae1e2fc57ad1ccb4b5b45e5d59f03f8a9f7e8d60710bf929a83fe22744e07
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: a5d61560961ecf2e70a3578eb5296954b5328ca92a5782fbea633d3fda0c50a0
title: "RenderCommandEncoder.DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits draws described by consecutive commands in an indirect buffer.

## Parameters

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
