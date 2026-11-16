---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8c8d8e31c17a725f8aff327672740b3bbb82f8efbb3b3f56f2379bd25c7f4ac8
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId)
title: RenderingBackendCatalog.CreateCompositionProgramProvider
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
reviewed: 7bdbb8c460c62d54c3f83ca2982010be83671b83d78c7bd43ccd22152ca89138
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** Stable identity of the selected rendering backend.

## Returns

A provider compatible with devices created by the same backend registration.

## Exceptions

**Exception `T:System.NotSupportedException`:** No provider is registered for this exact backend identity.
