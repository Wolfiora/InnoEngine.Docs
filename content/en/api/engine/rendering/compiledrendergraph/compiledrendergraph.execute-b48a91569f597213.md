---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b48a91569f5972133aa6d2bafd796aee778f5819a5332d30abc6e46239c5be78
symbol: engine:Inno.Rendering:M:Inno.Rendering.CompiledRenderGraph.Execute(Inno.Rendering.IRenderGraphBackend,System.UInt64)
title: CompiledRenderGraph.Execute
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: faa429f0d70370ce9fd51ef73e35dd99876f8e9b60e5b9719838a6163b240a84
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
