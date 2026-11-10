---
title: "IStorageBackendFactory"
description: "Reference for IStorageBackendFactory in Inno.Adapter.Storage."
uid: api.inno.adapter.storage.a431ac47d391da82
kind: api
owners:
  - Inno.Adapter.Storage
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage#ownership-and-scope-contract
---
# `IStorageBackendFactory`

This reference describes `IStorageBackendFactory` in `Inno.Adapter.Storage`. Read the [shared contract](../../projects/inno-adapter-storage.md#ownership-and-scope-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateStorage`](#api-07701109d1fc1542) | Method |
| [`supportedBackends`](#api-328e36f80e510b88) | Property |

## Type declaration

<a id="api-a431ac47d391da82"></a>
<!-- api: T:Inno.Adapter.Storage.IStorageBackendFactory ca140a914a3f1bf4ea2f48eaa1480b6202fb8b17e284c084cdbd1c76a7e0002e -->

```csharp
public interface Inno.Adapter.Storage.IStorageBackendFactory
```

Creates isolated application-storage instances from explicit backend selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/IStorageBackendFactory.cs#L9).

## `CreateStorage`

<a id="api-07701109d1fc1542"></a>
<!-- api: M:Inno.Adapter.Storage.IStorageBackendFactory.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope) 7d6215b15b429e5baaf40bbbfd1ca52fde24a020b2763f67e6c9d2e6953ca7ed -->

```csharp
Inno.Storage.IApplicationStorage Inno.Adapter.Storage.IStorageBackendFactory.CreateStorage(Inno.Adapter.Storage.StorageBackendId backend, Inno.Storage.StorageScope scope)
```

Creates isolated storage for a logical application namespace.

**Parameter `backend`:** storage implementation selected by the composition root.

**Parameter `scope`:** The application namespace mapped to a location by the selected provider.

**Returns:** A caller-owned backend-neutral application storage service.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/IStorageBackendFactory.cs#L31).

## `supportedBackends`

<a id="api-328e36f80e510b88"></a>
<!-- api: P:Inno.Adapter.Storage.IStorageBackendFactory.supportedBackends ab5cdc7b8dd015226529e8ad6c81f1e1cdef66768eafce8cd8f2b47866fbcd67 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Storage.StorageBackendId> Inno.Adapter.Storage.IStorageBackendFactory.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/IStorageBackendFactory.cs#L14).
