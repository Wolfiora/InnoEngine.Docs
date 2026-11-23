---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cc0eb671beed8f77a1fc50d813cdafc7c7dd0bcdb3a7deaf51f0c96e52ba8592
symbol: engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.CreateStorage(Inno.Adapter.Storage.StorageBackendID,Inno.Storage.StorageScope)
title: StorageBackendCatalog.CreateStorage
kind: api
owners:
- Inno.Adapter.Storage
apiSurface: source-clr
sourceFingerprint: 42960fb51751721507601c1670ae3b14ac13e7ee0547eab517d869d92d7e9bc3
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
