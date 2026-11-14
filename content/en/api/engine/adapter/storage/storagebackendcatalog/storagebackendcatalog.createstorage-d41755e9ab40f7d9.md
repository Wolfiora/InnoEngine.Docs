---
uid: api.d41755e9ab40f7d970b708358e15b57ec993f2c100ac5072bea3dbcb6067802e
symbol: "engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope)"
source: xml
reviewed: adc6553e2d4127cf36d7ed6d8c82a9809d8ba9fb4f6c12b5be4b5ecf0b4f8df3
title: "StorageBackendCatalog.CreateStorage"
kind: api
owners: [Inno.Adapter.Storage]
apiSurface: source-clr
---

Creates isolated storage for a logical application namespace.

**Parameter `backend`:** storage implementation selected by the composition root.

**Parameter `scope`:** The application namespace mapped to a location by the selected provider.

**Returns:** A caller-owned backend-neutral application storage service.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
