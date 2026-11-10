---
title: "Storage"
description: "Reference for Storage in Inno.Storage."
uid: api.inno.storage.69793dfc1818dda4
kind: api
owners:
  - Inno.Storage
apiSurface: source-clr
contracts:
  - project.inno-storage#operation-and-ownership-contract
---
# `Storage`

This reference describes `Storage` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`DeleteAsync`](#api-eccbaf8c9bb3aefb) | Method |
| [`ExistsAsync`](#api-1268f36a35b9729a) | Method |
| [`ListAsync`](#api-7fb549b7841f7b6f) | Method |
| [`ReadAsync`](#api-1f6a48d1958a5f51) | Method |
| [`WriteAsync`](#api-7d0a6ec983185fcb) | Method |

## Type declaration

<a id="api-69793dfc1818dda4"></a>
<!-- api: T:Inno.Storage.Storage 927386b6b71ca5a211114ac148be649b0df2e25878f033ed6da05f9b4eed3db4 -->

```csharp
public static class Inno.Storage.Storage
```

Provides script-friendly access to the current application storage sandbox.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L44).

## `DeleteAsync`

<a id="api-eccbaf8c9bb3aefb"></a>
<!-- api: M:Inno.Storage.Storage.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) f7b57e1368ac0fbd118330ca4cbc6b12d0dfae70a07a0dca80e10cbb1282d7ee -->

```csharp
public static System.Threading.Tasks.ValueTask<bool> Inno.Storage.Storage.DeleteAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Deletes one value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when a value was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L116).

## `ExistsAsync`

<a id="api-1268f36a35b9729a"></a>
<!-- api: M:Inno.Storage.Storage.ExistsAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 37b97323684c60cfcb397dfc6132779df0833f40a05771414c407dc8f555ee5a -->

```csharp
public static System.Threading.Tasks.ValueTask<bool> Inno.Storage.Storage.ExistsAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Determines whether a value exists.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when the value exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L58).

## `ListAsync`

<a id="api-7fb549b7841f7b6f"></a>
<!-- api: M:Inno.Storage.Storage.ListAsync(System.Nullable{Inno.Storage.StorageKey},System.Threading.CancellationToken) c8bae4cb09a0bfce8047131132957f6c40724219e5878d2b7898a8bc0023cd2c -->

```csharp
public static System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<Inno.Storage.StorageKey>> Inno.Storage.Storage.ListAsync(Inno.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lists keys below an optional prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L134).

## `ReadAsync`

<a id="api-1f6a48d1958a5f51"></a>
<!-- api: M:Inno.Storage.Storage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) b44f9c2d86d63a1fed5db8c24b2cecba37ca2459055aa285d14f4b76ced6c038 -->

```csharp
public static System.Threading.Tasks.ValueTask<byte[]?> Inno.Storage.Storage.ReadAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L76).

## `WriteAsync`

<a id="api-7d0a6ec983185fcb"></a>
<!-- api: M:Inno.Storage.Storage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) b9ef7d69fe21ebe7e81764a040e0a398d407e2886bc98370f784e9bbe56a989f -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.Storage.Storage.WriteAsync(Inno.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L97).
