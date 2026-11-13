---
uid: api.d41755e9ab40f7d970b708358e15b57ec993f2c100ac5072bea3dbcb6067802e
symbol: "engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope)"
source: xml
reviewed: 8077c590f3c1274b71621c86caff8d16b06e80144c9816e95ed9291b1452a213
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

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
