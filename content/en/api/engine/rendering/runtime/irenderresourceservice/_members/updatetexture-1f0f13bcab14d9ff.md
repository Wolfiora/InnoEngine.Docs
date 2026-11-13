---
uid: api.1f0f13bcab14d9ff3ec83fbb061a6dac75ad32f35432463e35e71a26098c7f34
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.UpdateTexture(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureRegion,System.ReadOnlyMemory{System.Byte})"
source: xml
reviewed: 0409fbcc0528efd173e534df402ddfdaa954693a8bae13934ae252349c8491f0
title: "UpdateTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Updates a rectangular region of an active persistent texture without recreating it.

**Parameter `texture`:** Texture owned by the active device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.
