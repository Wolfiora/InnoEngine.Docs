---
uid: api.4eb80aba12063d4875793acb1f6f62c7d5d0a65b97ab1c01c432232fcf1ca971
symbol: "engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.IStorageBackendFactory.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope)"
source: xml
reviewed: 6ccf484f65e52028801bc34e9a061a4eb55f6b412ceaf2ad8809d073642d2fd2
title: "CreateStorage"
kind: api
owners: [Inno.Adapter.Storage]
apiSurface: source-clr
---

Creates isolated storage for a logical application namespace.

**Parameter `backend`:** storage implementation selected by the composition root.

**Parameter `scope`:** The application namespace mapped to a location by the selected provider.

**Returns:** A caller-owned backend-neutral application storage service.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.
