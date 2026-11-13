---
uid: api.b5b2cf6369b6b48ee21be77164ed0b83bfb8b56b9e1db6ebdef5a2b2a8f82121
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.Set\u0060\u00601(Inno.Rendering.RenderDataChannelId,\u0060\u00600)"
source: xml
reviewed: 9473c66b365a05dbb93bfbe6e925676c3fae18d8b184869a6f4c61ad3776caed
title: "Set"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Adds or replaces one typed value in an open data channel.

**Type parameter `TValue`:** Frame-local payload type.

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Value retained until the current frame completes.

**Exception `T:System.InvalidOperationException`:** Thrown after the data has entered a request.
