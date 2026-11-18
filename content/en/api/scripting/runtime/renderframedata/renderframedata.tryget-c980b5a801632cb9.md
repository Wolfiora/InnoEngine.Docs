---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c980b5a801632cb960c36777dbdf7e7d7ec257122961b3d3df55137e8feab0af
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.TryGet``1(InnoEngine.Rendering.RenderDataChannelId,``0@)
title: RenderFrameData.TryGet
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 60a583c523870b951938e3ca509cd240232a2e672964b018555138341e11dad8
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
