---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c980b5a801632cb960c36777dbdf7e7d7ec257122961b3d3df55137e8feab0af
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderFrameData.TryGet``1(InnoEngine.Rendering.RenderDataChannelId,``0@)
title: RenderFrameData.TryGet
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 89425bcfc6008e6ffe2e419b7fd486afec86c66ca8a18988edddbb082413012a
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Tries to read one typed value from an open data channel.

## Type parameters

**Type parameter `TValue`:** Expected frame-local payload type.

## Parameters

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Receives the stored value when present.

## Returns

`true` when the channel contains the exact requested type.
