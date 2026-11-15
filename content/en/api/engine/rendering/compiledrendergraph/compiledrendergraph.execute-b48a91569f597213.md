---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b48a91569f5972133aa6d2bafd796aee778f5819a5332d30abc6e46239c5be78
symbol: engine:Inno.Rendering:M:Inno.Rendering.CompiledRenderGraph.Execute(Inno.Rendering.IRenderGraphBackend,System.UInt64)
title: CompiledRenderGraph.Execute
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 096e5a2fa25e6c8f0b11bb2ea71f65e4b495e00a50862af0bc41ea08edc6f4c7

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Executes pass callbacks through a concrete backend with complete unwind.

## Parameters

**Parameter `backend`:** Backend bridge for the current device generation.

**Parameter `frameIndex`:** Monotonic frame index exposed to pass callbacks.

## Exceptions

**Exception `T:System.AggregateException`:** Thrown when execution and cleanup both fail.
