---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.41a5db8a749bb6574550c68c8f00317ab57ff6be670e0dd205f0a724e1ecd6a8
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformBackendCatalog.CreateApplication(Inno.Adapter.Platform.PlatformBackendId)
title: PlatformBackendCatalog.CreateApplication
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
reviewed: 238794cc75407eacfd39b4102982803157085b3ea18d6fcd5ba061ed2619c6e8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** platform implementation selected by the composition root.

## Returns

A caller-owned backend-neutral platform application.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
