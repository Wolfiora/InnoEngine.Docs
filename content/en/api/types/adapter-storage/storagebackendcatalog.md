---
title: "StorageBackendCatalog"
description: "Reference for StorageBackendCatalog in Inno.Adapter.Storage."
uid: api.inno.adapter.storage.95507b5eb761ae80
kind: api
owners:
  - Inno.Adapter.Storage
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage#ownership-and-scope-contract
---
# `StorageBackendCatalog`

This reference describes `StorageBackendCatalog` in `Inno.Adapter.Storage`. Read the [shared contract](../../projects/inno-adapter-storage.md#ownership-and-scope-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Storage.IStorageBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-64b96c32329a77b9) | Method |
| [`CreateStorage`](#api-dfa5c331828cee48) | Method |
| [`supportedBackends`](#api-2c32b04bf7b76df2) | Property |

## Type declaration

<a id="api-95507b5eb761ae80"></a>
<!-- api: T:Inno.Adapter.Storage.StorageBackendCatalog 321664d193436a79dd05c20db3bd8e9a920ba69c1b0e97ef9ca97fb4144a81da -->

```csharp
public sealed class Inno.Adapter.Storage.StorageBackendCatalog : Inno.Adapter.Storage.IStorageBackendFactory
```

Resolves storage providers from one immutable, composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendCatalog.cs#L11).

## `#ctor`

<a id="api-64b96c32329a77b9"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Storage.StorageBackendProvider}) 85f1e7a52ff62bfd547a3e9102c3532a06e236917d6ce1077628437c4c9130df -->

```csharp
public Inno.Adapter.Storage.StorageBackendCatalog.StorageBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Storage.StorageBackendProvider> providers)
```

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Throws `System.ArgumentNullException`:** The provider sequence is null.

**Throws `System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendCatalog.cs#L27).

## `CreateStorage`

<a id="api-dfa5c331828cee48"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendCatalog.CreateStorage(Inno.Adapter.Storage.StorageBackendId,Inno.Storage.StorageScope) 952061aebb1b68b8ecfaea996bb7e43392045eba7d74d478b658487523370c60 -->

```csharp
public Inno.Storage.IApplicationStorage Inno.Adapter.Storage.StorageBackendCatalog.CreateStorage(Inno.Adapter.Storage.StorageBackendId backend, Inno.Storage.StorageScope scope)
```

Creates isolated storage for a logical application namespace.

**Parameter `backend`:** storage implementation selected by the composition root.

**Parameter `scope`:** The application namespace mapped to a location by the selected provider.

**Returns:** A caller-owned backend-neutral application storage service.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Throws `System.InvalidOperationException`:** The selected provider returned no service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendCatalog.cs#L45).

## `supportedBackends`

<a id="api-2c32b04bf7b76df2"></a>
<!-- api: P:Inno.Adapter.Storage.StorageBackendCatalog.supportedBackends 3d777b2682d7b257d7aae7a14b737fdbf83c2f115459581c77ba669646fe7574 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Storage.StorageBackendId> Inno.Adapter.Storage.StorageBackendCatalog.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendCatalog.cs#L39).
