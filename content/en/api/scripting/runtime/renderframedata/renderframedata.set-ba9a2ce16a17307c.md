---
uid: api.ba9a2ce16a17307cbc5b96beb9bd3d04d47578e176fec13228de62cf73366abf
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.Set\u0060\u00601(InnoEngine.Rendering.RenderDataChannelId,\u0060\u00600)"
source: xml
reviewed: 6e89a935498d7a5082f56a832257f49c5ddf0c15f334f60818ca8c2be2489c53
title: "RenderFrameData.Set"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Adds or replaces one typed value in an open data channel.

**Type parameter `TValue`:** Frame-local payload type.

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Value retained until the current frame completes.

**Exception `T:System.InvalidOperationException`:** Thrown after the data has entered a request.
