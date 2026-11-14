---
uid: api.dbc2f5878f7f766b7e65e89ddc4069f28b96835dfafa9c47cb098d19bb91f888
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.UseSurface(InnoEngine.Rendering.RenderSurfaceHandle)"
source: xml
reviewed: 0c5df63646a58e6a19269900bda393d057f566fb0c21380242b713b3e69b4e48
title: "RasterPassBuilder.UseSurface"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Directs this pass to a persistent presentation surface instead of the primary backbuffer.

**Parameter `surface`:** Surface owned by the active graphics-device generation.

**Returns:** This builder for fluent declarations.

**Exception `T:System.ArgumentException`:** Thrown when `surface` is invalid.
