---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bb417a1b8763734d7fe198604f1518bf1ad1f8d329ed3918a85d88d835374812
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions)
title: PresentationBackendProvider.CreateContext
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
sourceFingerprint: 564c0db257120e198a886d35a718d334ad8a8398c8ca55e5c6bef4f77a1d5d40
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** Externally owned platform and rendering resources, together with the requested presentation policy.

## Returns

A new context whose caller must dispose it before releasing the supplied resources. Providers must not return null.

## Exceptions

**Exception `T:System.NotSupportedException`:** The host resources or requested features are incompatible with this implementation.
