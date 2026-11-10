---
title: "FileSystemStorageBackendProvider"
description: "Reference for FileSystemStorageBackendProvider in Inno.Adapter.Storage.FileSystem."
uid: api.inno.adapter.storage.filesystem.e934561af6fd34af
kind: api
owners:
  - Inno.Adapter.Storage.FileSystem
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage-filesystem#shutdown-and-ownership
---
# `FileSystemStorageBackendProvider`

This reference describes `FileSystemStorageBackendProvider` in `Inno.Adapter.Storage.FileSystem`. Read the [shared contract](../../projects/inno-adapter-storage-filesystem.md#shutdown-and-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Storage.StorageBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b1932ca3b82ebb6f) | Method |
| [`CreateStorage`](#api-75a2bda41b99082d) | Method |

## Type declaration

<a id="api-e934561af6fd34af"></a>
<!-- api: T:Inno.Adapter.Storage.FileSystem.FileSystemStorageBackendProvider 762db495943f7be99de93f65d8bcaaf91b3c0b339a75e2a04389cc84044c57c6 -->

```csharp
public sealed class Inno.Adapter.Storage.FileSystem.FileSystemStorageBackendProvider : Inno.Adapter.Storage.StorageBackendProvider
```

Supplies the FileSystem implementation through the neutral storage creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemStorageBackendProvider.cs#L10).

## `#ctor`

<a id="api-b1932ca3b82ebb6f"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemStorageBackendProvider.#ctor(System.String) 64376eb1fa27d9bb1e74416b53d0864ced5a3a0eb2545a7cef4c3d5710ac2313 -->

```csharp
public Inno.Adapter.Storage.FileSystem.FileSystemStorageBackendProvider.FileSystemStorageBackendProvider(string rootDirectory)
```

Captures the host-selected root beneath which application namespaces are isolated.

**Parameter `rootDirectory`:** The absolute writable data root owned by the host.

**Throws `System.ArgumentException`:** The root is absent or not fully qualified.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemStorageBackendProvider.cs#L23).

## `CreateStorage`

<a id="api-75a2bda41b99082d"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemStorageBackendProvider.CreateStorage(Inno.Storage.StorageScope) bb1611a683e04873502530e546f2e59abbdda96a1efb1de7012d90c9f68f1e31 -->

```csharp
public override Inno.Storage.IApplicationStorage Inno.Adapter.Storage.FileSystem.FileSystemStorageBackendProvider.CreateStorage(Inno.Storage.StorageScope scope)
```

Creates a caller-owned storage service using this implementation.

**Parameter `scope`:** The application namespace to isolate within this provider's host configuration.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemStorageBackendProvider.cs#L32).
