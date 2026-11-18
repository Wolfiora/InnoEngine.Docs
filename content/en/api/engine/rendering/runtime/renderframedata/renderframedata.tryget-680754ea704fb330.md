---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.680754ea704fb3301e569129efeec81e06f29a3f90dcf0d569f62e9efd3c94d5
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.TryGet``1(Inno.Rendering.RenderDataChannelId,``0@)
title: RenderFrameData.TryGet
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 999e5969420a8be9b82e1d8cff97533f59a90c5811864ce4a97ea283bcb016ee
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
