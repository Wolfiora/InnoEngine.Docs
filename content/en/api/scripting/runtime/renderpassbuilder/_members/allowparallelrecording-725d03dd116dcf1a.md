---
uid: api.725d03dd116dcf1afd6e73ff17eceab6c126ab6a9e275b659c1ef2e35041369a
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderPassBuilder.AllowParallelRecording"
source: xml
reviewed: 85b8384a478911fb755753c8e93686063cad301eaac08159405475b68d4fef7d
title: "AllowParallelRecording"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Opts this pass into worker-thread recording through an isolated backend-neutral command list.

## Remarks

Pass data and code reached by the callback must be safe for worker-thread access. GPU execution and backend view order remain identical to the compiled graph order.

**Returns:** This builder for fluent declarations.
