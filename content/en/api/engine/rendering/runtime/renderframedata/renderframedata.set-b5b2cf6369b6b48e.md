---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5b2cf6369b6b48ee21be77164ed0b83bfb8b56b9e1db6ebdef5a2b2a8f82121
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.Set``1(Inno.Rendering.RenderDataChannelId,``0)
title: RenderFrameData.Set
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 58fd34ef51299de3c7507490eafc4d3d65f2cea448d4c438552f9324d80d7550

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TValue`:** Frame-local payload type.

## Parameters

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Value retained until the current frame completes.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown after the data has entered a request.
