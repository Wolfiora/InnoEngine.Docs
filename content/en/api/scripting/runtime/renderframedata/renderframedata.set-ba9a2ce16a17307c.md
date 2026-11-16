---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ba9a2ce16a17307cbc5b96beb9bd3d04d47578e176fec13228de62cf73366abf
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.Set``1(InnoEngine.Rendering.RenderDataChannelId,``0)
title: RenderFrameData.Set
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 6e89a935498d7a5082f56a832257f49c5ddf0c15f334f60818ca8c2be2489c53
apiScope: Runtime
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
