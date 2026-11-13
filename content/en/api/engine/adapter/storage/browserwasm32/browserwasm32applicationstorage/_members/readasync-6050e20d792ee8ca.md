---
uid: api.6050e20d792ee8cabf8cbcc5681d8132bb6d536867e1ed7ca2000c7e826191bd
symbol: "engine:Inno.Adapter.Storage.BrowserWasm32:M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 266d0c971d432f9a8669b098d9a115e362c21ad67c9f50a0745afc6b9b8ab1d7
title: "ReadAsync"
kind: api
owners: [Inno.Adapter.Storage.BrowserWasm32]
apiSurface: source-clr
---

Reads a stored value from this browser origin.

**Parameter `key`:** The application key to read.

**Parameter `cancellationToken`:** Cancels the operation before accessing storage.

**Returns:** The stored bytes, or null when the key is absent.
