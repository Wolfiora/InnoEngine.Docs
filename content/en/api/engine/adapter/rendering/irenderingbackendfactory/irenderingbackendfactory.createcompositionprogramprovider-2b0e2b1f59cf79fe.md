---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2b0e2b1f59cf79fef54bcc77edcefe7601d636f3fe025716a0fa60be76475d2f
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.IRenderingBackendFactory.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendID)
title: IRenderingBackendFactory.CreateCompositionProgramProvider
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
sourceFingerprint: 51f9117261ef7c3fd101fd90bcf6e6d0d2670c526e3cbb47edc1ad58b2c7fa55
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
