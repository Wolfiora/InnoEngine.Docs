---
title: "BrowserWasm32ApplicationStorage"
description: "Reference for BrowserWasm32ApplicationStorage in Inno.Adapter.Storage.BrowserWasm32."
uid: api.inno.adapter.storage.browserwasm32.60d09eeba6c4e8b7
kind: api
owners:
  - Inno.Adapter.Storage.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage-browserwasm32
---
# `BrowserWasm32ApplicationStorage`

This reference describes `BrowserWasm32ApplicationStorage` in `Inno.Adapter.Storage.BrowserWasm32`. Read the [shared contract](../../../projects/inno-adapter-storage-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Storage.IApplicationStorage`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-02745bb724fe0f89) | Method |
| [`DeleteAsync`](#api-fba4a6cb03751198) | Method |
| [`ExistsAsync`](#api-fd0c95f5776797d1) | Method |
| [`ListAsync`](#api-e91ca09b8d499f3d) | Method |
| [`ReadAsync`](#api-d2009c0e58d50863) | Method |
| [`WriteAsync`](#api-3ea9bb59861421cf) | Method |

## Type declaration

<a id="api-60d09eeba6c4e8b7"></a>
<!-- api: T:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage 70bd662d09bca2fbc55bf0fac355afe552e14a8b286720bd968e44a24fdd6cfb -->

```csharp
public sealed class Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage : Inno.Storage.IApplicationStorage
```

Stores application values atomically in the browser origin's durable key-value store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L14).

## `#ctor`

<a id="api-02745bb724fe0f89"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.#ctor(Inno.Storage.StorageScope) f08945127584a243f843a015ec942b3bb518db852762fefd4720c5c410c4da1c -->

```csharp
public Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.BrowserWasm32ApplicationStorage(Inno.Storage.StorageScope scope)
```

Creates a namespace sandbox within the current browser origin.

**Parameter `scope`:** The application namespace used to isolate keys within the browser origin.

**Throws `System.ArgumentException`:** The namespace is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L27).

## `DeleteAsync`

<a id="api-fba4a6cb03751198"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 2fafd0954954bf787c0a15d993258841ea108488a2979b55ee362ec3b09acd97 -->

```csharp
public System.Threading.Tasks.ValueTask<bool> Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.DeleteAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Removes a value from this browser origin.

**Parameter `key`:** The application key to remove.

**Parameter `cancellationToken`:** Cancels the operation before accessing storage.

**Returns:** True when the key existed and was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L112).

## `ExistsAsync`

<a id="api-fd0c95f5776797d1"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ExistsAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 0c51d2f73432700435456bdc01c8483dd58e70c8d42b1ea9a2fade5c5f9b9801 -->

```csharp
public System.Threading.Tasks.ValueTask<bool> Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ExistsAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Checks whether a key has a value in this browser origin.

**Parameter `key`:** The application key to check.

**Parameter `cancellationToken`:** Cancels the operation before accessing storage.

**Returns:** True when a value exists for the key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L46).

## `ListAsync`

<a id="api-e91ca09b8d499f3d"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ListAsync(System.Nullable{Inno.Storage.StorageKey},System.Threading.CancellationToken) 01867939c15da7287eb7c94a560027b65313dfde7e1c45a4d26ec0f46160d771 -->

```csharp
public System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<Inno.Storage.StorageKey>> Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ListAsync(Inno.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lists keys in this application sandbox, optionally under a prefix.

**Parameter `prefix`:** The optional key prefix to filter.

**Parameter `cancellationToken`:** Cancels the operation before accessing storage.

**Returns:** The matching keys in ordinal order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L136).

## `ReadAsync`

<a id="api-d2009c0e58d50863"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 20fb01c065200aa6b10ba9cbafdcc254a111c5d769f8e430777cbeb99e8b66d1 -->

```csharp
public System.Threading.Tasks.ValueTask<byte[]?> Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.ReadAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads a stored value from this browser origin.

**Parameter `key`:** The application key to read.

**Parameter `cancellationToken`:** Cancels the operation before accessing storage.

**Returns:** The stored bytes, or null when the key is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L66).

## `WriteAsync`

<a id="api-3ea9bb59861421cf"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) 0ed97dbe004a5690003966a74e20e5f84fd4a256488baef1d688f547f57423e3 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32ApplicationStorage.WriteAsync(Inno.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Replaces a value in this browser origin.

**Parameter `key`:** The application key to write.

**Parameter `value`:** The bytes to store.

**Parameter `cancellationToken`:** Cancels the operation before accessing storage.

**Returns:** An operation that completes when the browser has stored the value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32ApplicationStorage.cs#L90).
