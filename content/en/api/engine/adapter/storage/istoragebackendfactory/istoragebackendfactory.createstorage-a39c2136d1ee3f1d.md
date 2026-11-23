---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a39c2136d1ee3f1d584c1a32f2a6a0406b36d4d23b877725505ecce82ac451e7
symbol: engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.IStorageBackendFactory.CreateStorage(Inno.Adapter.Storage.StorageBackendID,Inno.Storage.StorageScope)
title: IStorageBackendFactory.CreateStorage
kind: api
owners:
- Inno.Adapter.Storage
apiSurface: source-clr
sourceFingerprint: de531b5514a8793986f38133e48bc195054e76956910527ad8c0a9543164212e
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
