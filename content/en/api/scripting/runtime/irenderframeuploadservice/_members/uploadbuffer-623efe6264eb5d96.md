---
uid: api.623efe6264eb5d960abc6895ca57a695be044e1036ad1c0fc0c7667b52d6c5e2
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.IRenderFrameUploadService.UploadBuffer(InnoEngine.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String)"
source: xml
reviewed: eadd0501eeed7be6cfaf846b77f1f87d8ff745aa993a02482c4256cf81278dbb
title: "UploadBuffer"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Uploads complete elements and returns a slice valid only during the current frame.

**Parameter `descriptor`:** Element interpretation and permitted GPU uses.

**Parameter `data`:** Tightly packed complete element bytes.

**Parameter `name`:** Diagnostic name used when a backing page is allocated.

**Returns:** A current-frame slice covering the uploaded elements.
