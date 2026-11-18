---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b5b2cf6369b6b48ee21be77164ed0b83bfb8b56b9e1db6ebdef5a2b2a8f82121
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.Set``1(Inno.Rendering.RenderDataChannelId,``0)
title: RenderFrameData.Set
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: a43d12dc1def69b9db31cd51e7e10add56b3fb069179e154f3ee0c1b3e0cda4c
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
