---
uid: api.c48a391a10e18319fd31037c23cf332ccddf16f6b5bfc70d82fba0503c863ac0
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RasterPassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single})"
source: xml
reviewed: 8d323ef894b235ed0701c3c722a8cbd713268dc6cc46db7574e59b942ca32673
title: "SetViewTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Sets backend-ready column-major transform matrices for this raster view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.
