---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4eb80aba12063d4875793acb1f6f62c7d5d0a65b97ab1c01c432232fcf1ca971
symbol: engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.IStorageBackendFactory.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope)
title: IStorageBackendFactory.CreateStorage
kind: api
owners:
- Inno.Adapter.Storage
apiSurface: source-clr
reviewed: f4fb3d60c1f6c5715728a15f84fa71ad3c66de79c71a74b71bddea9446181275
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
