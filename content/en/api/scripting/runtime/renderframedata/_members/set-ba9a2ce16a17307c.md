---
uid: api.ba9a2ce16a17307cbc5b96beb9bd3d04d47578e176fec13228de62cf73366abf
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.Set\u0060\u00601(InnoEngine.Rendering.RenderDataChannelId,\u0060\u00600)"
source: xml
reviewed: e270c6cab6a5861ec913ca57faa66de1aeba774dcd1149ed28b17cb58fb96dad
title: "Set"
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
