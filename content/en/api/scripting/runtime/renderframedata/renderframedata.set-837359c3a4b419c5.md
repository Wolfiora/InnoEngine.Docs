---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.837359c3a4b419c5d6fd4d52e348b4f96b2d1ce56c3340763913947eb7cfea92
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.Set``1(InnoEngine.Rendering.RenderDataChannelID,``0)
title: RenderFrameData.Set
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: fb2be1b5256dc4b373cd9f897a8bf750a8fd09603614e1a1481dec731f49d90a
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
