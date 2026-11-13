---
uid: api.1e3087d926cc80a3652a48aa0b7753f279153b8a6c83680d41fb148de92a7102
symbol: "engine:Inno.Adapter.Storage.BrowserWasm32:M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider.CreateStorage(Inno.Storage.StorageScope)"
source: xml
reviewed: 17fad0e3b5545467a485f8ffd1fa3d854158de2d5ee5a03632133efc192b9960
title: "CreateStorage"
kind: api
owners: [Inno.Adapter.Storage.BrowserWasm32]
apiSurface: source-clr
---

Creates a caller-owned storage service using this implementation.

**Parameter `scope`:** The application namespace to isolate within this provider's host configuration.

**Returns:** A new service owned by the caller; providers must not return null.
