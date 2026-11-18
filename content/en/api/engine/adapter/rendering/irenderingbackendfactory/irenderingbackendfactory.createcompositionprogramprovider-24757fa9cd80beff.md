---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.24757fa9cd80beff46363f6b8444c77fd87168da74fda3a32c355cbe9e16063e
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.IRenderingBackendFactory.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId)
title: IRenderingBackendFactory.CreateCompositionProgramProvider
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
sourceFingerprint: c96b3238401fc308eaf232f272c25b46a81d85a301c37bc53f92b96d198311b8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** Stable identity of the selected rendering backend.

## Returns

A provider whose target programs are compatible with that backend.

## Exceptions

**Exception `T:System.NotSupportedException`:** No provider is registered for the requested backend identity.
