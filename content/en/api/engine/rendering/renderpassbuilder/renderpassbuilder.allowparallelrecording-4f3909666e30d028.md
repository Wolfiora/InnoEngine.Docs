---
uid: api.4f3909666e30d0288153a19ddc0c71b0dde919cb55d81d37c671c83ddd61b9ca
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderPassBuilder.AllowParallelRecording"
source: xml
reviewed: 85819faceb40cd3efc7d0027f96adbafd99c62f1dc9f5cf13f8ea0a3f2fea323
title: "RenderPassBuilder.AllowParallelRecording"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Opts this pass into worker-thread recording through an isolated backend-neutral command list.

## Remarks

Pass data and code reached by the callback must be safe for worker-thread access. GPU execution and backend view order remain identical to the compiled graph order.

## Returns

This builder for fluent declarations.
