---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d41755e9ab40f7d970b708358e15b57ec993f2c100ac5072bea3dbcb6067802e
symbol: engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope)
title: StorageBackendCatalog.CreateStorage
kind: api
owners:
- Inno.Adapter.Storage
apiSurface: source-clr
reviewed: b9cf0b567ee8c1e369a323bdfbfb1b004322706f39df4a5af84d15bce7b655ba
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** storage implementation selected by the composition root.

**Parameter `scope`:** The application namespace mapped to a location by the selected provider.

## Returns

A caller-owned backend-neutral application storage service.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
