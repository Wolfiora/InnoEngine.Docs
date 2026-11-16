---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5b2cf6369b6b48ee21be77164ed0b83bfb8b56b9e1db6ebdef5a2b2a8f82121
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.Set``1(Inno.Rendering.RenderDataChannelId,``0)
title: RenderFrameData.Set
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: d4e0f4f7ef006f1c603aa62955266765c482fc87b3c941fa7decc2221050a8b4
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
