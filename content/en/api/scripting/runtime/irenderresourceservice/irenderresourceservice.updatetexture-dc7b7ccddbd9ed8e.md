---
uid: api.dc7b7ccddbd9ed8e64f4bd269b2bc3ef4ce4f017c300ec5fd7603720b9d285fb
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.UpdateTexture(InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.RenderTextureRegion,System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: 4fd34fb3a539ed9387a54d62405738d5347ae23d850e93100c0b4b5e88e60f4b
title: "IRenderResourceService.UpdateTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Updates a rectangular region of an active persistent texture without recreating it.

## Parameters

**Parameter `texture`:** Texture owned by the active device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.
