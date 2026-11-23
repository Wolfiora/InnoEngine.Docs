---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.df7a63df4e5e451ccc9f98d2b9b0bed2c8b442c41263b45cfcd903054e1a8aa2
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.TryGet``1(InnoEngine.Rendering.RenderDataChannelID,``0@)
title: RenderFrameData.TryGet
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 5e18409a4da38bfb3b83491d944b3dae35e507cf1706e518fa3eeacd893216ad
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** Expected frame-local payload type.

## Parameters

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Receives the stored value when present.

## Returns

`true` when the channel contains the exact requested type.
