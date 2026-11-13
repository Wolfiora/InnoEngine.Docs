---
uid: api.dc7b7ccddbd9ed8e64f4bd269b2bc3ef4ce4f017c300ec5fd7603720b9d285fb
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.UpdateTexture(InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.RenderTextureRegion,System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: b41caa984e85fc5825233daecbb15ef5916907fca199e771e176a0bae4b41bc8
title: "UpdateTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Updates a rectangular region of an active persistent texture without recreating it.

**Parameter `texture`:** Texture owned by the active device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.
