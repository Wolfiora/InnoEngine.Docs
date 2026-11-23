---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.17112b2b04f0f59db5e7ac3fe75aeeb3536c4ae14a6b9978e378ee8c50b216e7
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.TryGet``1(Inno.Rendering.RenderDataChannelID,``0@)
title: RenderFrameData.TryGet
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 9aa1e36251cdf84167327022730487b4cc44df9c20aa38212f30ff2a7f51e086
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
