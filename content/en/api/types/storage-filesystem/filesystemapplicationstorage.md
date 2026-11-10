---
title: "FileSystemApplicationStorage"
description: "Reference for FileSystemApplicationStorage in Inno.Adapter.Storage.FileSystem."
uid: api.inno.adapter.storage.filesystem.79b273fd0ee44e5b
kind: api
owners:
  - Inno.Adapter.Storage.FileSystem
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage-filesystem#shutdown-and-ownership
---
# `FileSystemApplicationStorage`

This reference describes `FileSystemApplicationStorage` in `Inno.Adapter.Storage.FileSystem`. Read the [shared contract](../../projects/inno-adapter-storage-filesystem.md#shutdown-and-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Storage.IApplicationStorage`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2777544c591d5dba) | Method |
| [`DeleteAsync`](#api-39c2c6f6e0a333a0) | Method |
| [`Dispose`](#api-8e94dda1ae3dad1b) | Method |
| [`ExistsAsync`](#api-eb1a05dc556b9279) | Method |
| [`ListAsync`](#api-223917850faa0ee7) | Method |
| [`ReadAsync`](#api-bbf862ff4dbfd074) | Method |
| [`WriteAsync`](#api-a0eb37b1927b521e) | Method |
| [`rootDirectory`](#api-384e39a2a5ea318b) | Property |

## Type declaration

<a id="api-79b273fd0ee44e5b"></a>
<!-- api: T:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage 2c9dc48583345e09b527f82e4c3f6dc563f3b9832df6091cc198ce21b23902df -->

```csharp
public sealed class Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage : Inno.Storage.IApplicationStorage, System.IDisposable
```

Implements atomic application storage inside one isolated filesystem directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L16).

## `#ctor`

<a id="api-2777544c591d5dba"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.#ctor(System.String) 1c42bd9bb90d33a6cdcd1e1f441fc8ae3e5757e5149b75524d0eeaf5cefbd29d -->

```csharp
public Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.FileSystemApplicationStorage(string rootDirectory)
```

Creates a storage sandbox rooted at the supplied directory.

**Parameter `rootDirectory`:** The directory exclusively exposed through storage keys.

**Throws `System.ArgumentException`:** Thrown when the root is blank.

**Throws `System.IO.IOException`:** Thrown when the root itself is a symbolic link or reparse point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L34).

## `DeleteAsync`

<a id="api-39c2c6f6e0a333a0"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 32b344ddb6d8c31f2567afc185ff327e845f4af4c49b547713f302167a169450 -->

```csharp
public System.Threading.Tasks.ValueTask<bool> Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.DeleteAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Deletes one regular file without failing when it is absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** `true` when an existing value was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L184).

## `Dispose`

<a id="api-8e94dda1ae3dad1b"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.Dispose 1d154dd3816f0c3568faaca86913093061d462ff95dd3e3fc41cb20758e8f053 -->

```csharp
public void Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.Dispose()
```

Releases synchronization resources retained by this adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L248).

## `ExistsAsync`

<a id="api-eb1a05dc556b9279"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.ExistsAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) b5c45a02029ddd7967df7dab7b085dfee86bf184a460a217390b5de0d4b55e58 -->

```csharp
public System.Threading.Tasks.ValueTask<bool> Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.ExistsAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Determines whether a regular file exists for the supplied sandbox key.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** `true` when the value exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L59).

## `ListAsync`

<a id="api-223917850faa0ee7"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.ListAsync(System.Nullable{Inno.Storage.StorageKey},System.Threading.CancellationToken) 4fb54c912692a602b93edba7f3b95387473635a8e120055638233c5d8997516c -->

```csharp
public System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<Inno.Storage.StorageKey>> Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.ListAsync(Inno.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Enumerates regular files below an optional logical prefix in deterministic order.

**Parameter `prefix`:** An optional normalized key prefix.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** An immutable key snapshot ordered by ordinal key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L217).

## `ReadAsync`

<a id="api-bbf862ff4dbfd074"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 66af48a2fd70ce2ea57c6df1528ec331b198ecab147a51e0734431dfe7128645 -->

```csharp
public System.Threading.Tasks.ValueTask<byte[]?> Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.ReadAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads one complete immutable value after validating every existing path component.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** The stored bytes, or `null` when the key does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L89).

## `WriteAsync`

<a id="api-a0eb37b1927b521e"></a>
<!-- api: M:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) bcf60d9a5b9f2148cfca7157b4e17f566089f3f69b8723f787126f72b90acea8 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.WriteAsync(Inno.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically replaces one complete value through a temporary file in the target directory.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** A task that completes after the replacement has been flushed and committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L124).

## `rootDirectory`

<a id="api-384e39a2a5ea318b"></a>
<!-- api: P:Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.rootDirectory 9d01417a74b07af59808785247b262fb1cd0056eed9e9e633138e68130f15685 -->

```csharp
public string Inno.Adapter.Storage.FileSystem.FileSystemApplicationStorage.rootDirectory { get; }
```

Gets the absolute host directory that owns the sandbox.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/backends/FileSystem/runtime/Inno.Adapter.Storage.FileSystem/FileSystemApplicationStorage.cs#L45).
