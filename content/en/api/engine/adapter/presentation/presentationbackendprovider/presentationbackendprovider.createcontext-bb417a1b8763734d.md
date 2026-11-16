---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bb417a1b8763734d7fe198604f1518bf1ad1f8d329ed3918a85d88d835374812
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions)
title: PresentationBackendProvider.CreateContext
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
reviewed: ffe46fac5622fa0f80143e2e0bb62ac2adf587811d70e58f260c1afb5b100b2f
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
