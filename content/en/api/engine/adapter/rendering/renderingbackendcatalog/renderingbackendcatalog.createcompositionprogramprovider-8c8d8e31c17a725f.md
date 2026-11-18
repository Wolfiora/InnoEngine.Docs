---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8c8d8e31c17a725f8aff327672740b3bbb82f8efbb3b3f56f2379bd25c7f4ac8
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId)
title: RenderingBackendCatalog.CreateCompositionProgramProvider
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
sourceFingerprint: e4fada775acc72a13684b15fb90164c12b6aad00dab00987c1dd0669b491a80d
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
