---
uid: api.24757fa9cd80beff46363f6b8444c77fd87168da74fda3a32c355cbe9e16063e
symbol: "engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.IRenderingBackendFactory.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId)"
source: xml
reviewed: 8c48e2f584fe8e2a6450867f2ad29b66fc14a7bf1eb0fddd9dae1a56b0694320
title: "IRenderingBackendFactory.CreateCompositionProgramProvider"
kind: api
owners: [Inno.Adapter.Rendering]
apiSurface: source-clr
---

Creates the composition program provider owned by the selected rendering backend.

**Parameter `backend`:** Stable identity of the selected rendering backend.

**Returns:** A provider whose target programs are compatible with that backend.

**Exception `T:System.NotSupportedException`:** No provider is registered for the requested backend identity.
