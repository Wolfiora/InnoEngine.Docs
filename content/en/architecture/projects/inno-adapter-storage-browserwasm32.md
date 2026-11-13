---
title: Inno.Adapter.Storage.BrowserWasm32
description: "Application-scoped browser storage through the neutral storage contract."
uid: project.inno-adapter-storage-browserwasm32
kind: project
owners: [Inno.Adapter.Storage.BrowserWasm32]
exampleMode: host
exampleProjects: [Inno.Adapter.Storage.BrowserWasm32]
---
# Inno.Adapter.Storage.BrowserWasm32

Application-scoped browser storage through the neutral storage contract.

Start with [the platform task guide](../../platforms/application-data.md).

## Scope and data contract

`BrowserWasm32ApplicationStorage(StorageScope scope)` stores application values in the current origin's `localStorage`, prefixing keys with the explicit scope namespace. The scope is not a filesystem path. An unassigned scope or invalid `StorageKey` fails explicitly. Content Packs, scripts and engine caches are outside this store.

Values are Base64-encoded bytes. `ReadAsync` returns null for a missing key. `WriteAsync` replaces one key; it is not a transaction across multiple keys. `DeleteAsync` reports whether the key existed. `ListAsync` returns this scope's keys in ordinal order and includes only the exact requested prefix or its slash-delimited descendants.

Cancellation is checked before accessing storage. The browser controls origin access, quota and persistence; storage or decoding errors remain visible. Asynchronous return types do not turn the underlying synchronous JS storage operations into a background queue. There is no filesystem fallback.

## Select the backend

The Browser host initializes the required JavaScript module and registers `BrowserWasm32StorageBackendProvider` with the adapter catalog. The factory returns caller-owned storage for the selected `StorageScope`. Application scripts keep using the neutral Storage API.

The example requires a Browser runtime with its JavaScript imports initialized. It demonstrates host composition, not a desktop storage implementation.

```csharp
using Inno.Adapter.Storage;
using Inno.Adapter.Storage.BrowserWasm32;
using Inno.Storage;

static IApplicationStorage CreateOwnedBrowserStorage(StorageScope scope)
{
    IStorageBackendFactory factory = new StorageBackendCatalog([new BrowserWasm32StorageBackendProvider()]);
    return factory.CreateStorage(StorageBackendId.browser, scope);
}
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/Inno.Adapter.Storage.BrowserWasm32.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../../api/engine/adapter/storage/browserwasm32/index.md).
