---
uid: api.4f3909666e30d0288153a19ddc0c71b0dde919cb55d81d37c671c83ddd61b9ca
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderPassBuilder.AllowParallelRecording"
source: xml
reviewed: 78f57f690e0891731541599a78e7235fa7e4f2d8a952253621d4aa14ea1a3731
title: "AllowParallelRecording"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Opts this pass into worker-thread recording through an isolated backend-neutral command list.

## Remarks

Pass data and code reached by the callback must be safe for worker-thread access. GPU execution and backend view order remain identical to the compiled graph order.

**Returns:** This builder for fluent declarations.
