---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.56cbd4e9c034e47452b051cedf935efcd2f93664a2f10aabec694ec9e0024f2f
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.Set``1(Inno.Rendering.RenderDataChannelID,``0)
title: RenderFrameData.Set
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: b844be2a1defb0e52205b12f8bafbbfb92a7006ebc012dce13a8075ad9d5b45d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** Frame-local payload type.

## Parameters

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Value retained until the current frame completes.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown after the data has entered a request.
