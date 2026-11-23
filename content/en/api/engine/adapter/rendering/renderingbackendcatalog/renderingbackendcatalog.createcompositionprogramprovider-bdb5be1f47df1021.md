---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bdb5be1f47df102144cb5375aed7fd8303dfa737afd7fa6bf0d24a5883f86e2d
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendID)
title: RenderingBackendCatalog.CreateCompositionProgramProvider
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
sourceFingerprint: 8c1a145cd4861e21a25a5b8e4dfbe2d9a94a581f90d799f5421f7aaebbdecc83
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
