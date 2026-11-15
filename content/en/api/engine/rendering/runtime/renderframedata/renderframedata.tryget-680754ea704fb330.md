---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.680754ea704fb3301e569129efeec81e06f29a3f90dcf0d569f62e9efd3c94d5
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderFrameData.TryGet``1(Inno.Rendering.RenderDataChannelId,``0@)
title: RenderFrameData.TryGet
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 47ed96be10b0af5d0bfbbb3ced5c06f49bf98e5f24d0476fd160eac20af8d4df

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
