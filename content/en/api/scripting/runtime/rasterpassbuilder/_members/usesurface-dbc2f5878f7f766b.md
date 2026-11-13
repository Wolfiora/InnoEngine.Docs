---
uid: api.dbc2f5878f7f766b7e65e89ddc4069f28b96835dfafa9c47cb098d19bb91f888
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.UseSurface(InnoEngine.Rendering.RenderSurfaceHandle)"
source: xml
reviewed: 2b404ebb5a7c59419330a2d7db88eba157b059b18187ba22c5eb4c4c2ce7104d
title: "UseSurface"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Directs this pass to a persistent presentation surface instead of the primary backbuffer.

**Parameter `surface`:** Surface owned by the active graphics-device generation.

**Returns:** This builder for fluent declarations.

**Exception `T:System.ArgumentException`:** Thrown when `surface` is invalid.
