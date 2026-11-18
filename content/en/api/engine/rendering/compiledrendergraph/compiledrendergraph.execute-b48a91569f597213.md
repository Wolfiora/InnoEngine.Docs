---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b48a91569f5972133aa6d2bafd796aee778f5819a5332d30abc6e46239c5be78
symbol: engine:Inno.Rendering:M:Inno.Rendering.CompiledRenderGraph.Execute(Inno.Rendering.IRenderGraphBackend,System.UInt64)
title: CompiledRenderGraph.Execute
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 110648da4c42389769973f6000862dfd432165a220eeee82b66ed3f6a5c254c7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** Backend bridge for the current device generation.

**Parameter `frameIndex`:** Monotonic frame index exposed to pass callbacks.

## Exceptions

**Exception `T:System.AggregateException`:** Thrown when execution and cleanup both fail.
