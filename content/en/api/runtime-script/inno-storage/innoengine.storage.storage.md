---
title: "Storage"
description: "Reference for Storage in Inno.Storage."
uid: api.inno.storage.runtime-script.6926fda1cd6fc849
kind: api
owners:
  - Inno.Storage
apiSurface: runtime-script
contracts:
  - project.inno-storage#operation-and-ownership-contract
  - manual.scripting.use-script-api
---
# `Storage`

This reference describes `Storage` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`DeleteAsync`](#api-e70f8468776a0204) | Method |
| [`ExistsAsync`](#api-484a5b19f5105066) | Method |
| [`ListAsync`](#api-a8602a19cd51c4d8) | Method |
| [`ReadAsync`](#api-7faf68d6730ad487) | Method |
| [`WriteAsync`](#api-3e42e77b3922023a) | Method |

## Type declaration

<a id="api-6926fda1cd6fc849"></a>
<!-- api: T:InnoEngine.Storage.Storage 57b4a34225f652d43aa9c897f49edcfc114a5a30eec34d5c6b26cd83c00e7a22 -->

```csharp
public static class InnoEngine.Storage.Storage
```

Provides script-friendly access to the current application storage sandbox.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/Storage.cs#L44).

## `DeleteAsync`

<a id="api-e70f8468776a0204"></a>
<!-- api: M:InnoEngine.Storage.Storage.DeleteAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken) 440cbd94940ba1f0ce07906efc204a9536b265b5dfa94d087c4456a6032bfad4 -->

```csharp
public static System.Threading.Tasks.ValueTask<bool> InnoEngine.Storage.Storage.DeleteAsync(InnoEngine.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Deletes one value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when a value was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/Storage.cs#L116).

## `ExistsAsync`

<a id="api-484a5b19f5105066"></a>
<!-- api: M:InnoEngine.Storage.Storage.ExistsAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken) 8fa45c6e444e98ead0658b61c6e9a65d65cc94805b20767cd654f2cc57659db3 -->

```csharp
public static System.Threading.Tasks.ValueTask<bool> InnoEngine.Storage.Storage.ExistsAsync(InnoEngine.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Determines whether a value exists.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when the value exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/Storage.cs#L58).

## `ListAsync`

<a id="api-a8602a19cd51c4d8"></a>
<!-- api: M:InnoEngine.Storage.Storage.ListAsync(System.Nullable{InnoEngine.Storage.StorageKey},System.Threading.CancellationToken) 392d8fbcbf424b13ad3b42db316c5f4358b4cedbc5497fb16b9fe66999be4d0e -->

```csharp
public static System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<InnoEngine.Storage.StorageKey>> InnoEngine.Storage.Storage.ListAsync(InnoEngine.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lists keys below an optional prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/Storage.cs#L134).

## `ReadAsync`

<a id="api-7faf68d6730ad487"></a>
<!-- api: M:InnoEngine.Storage.Storage.ReadAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken) f51498628da84415ecd2084baa846f5fd07da272010495bb3478d82d922d414f -->

```csharp
public static System.Threading.Tasks.ValueTask<byte[]?> InnoEngine.Storage.Storage.ReadAsync(InnoEngine.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/Storage.cs#L76).

## `WriteAsync`

<a id="api-3e42e77b3922023a"></a>
<!-- api: M:InnoEngine.Storage.Storage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) 1fc7b6d585d99635f59d09fc5a935091100e333b44d45b6cf9f9ef00ec9b0b59 -->

```csharp
public static System.Threading.Tasks.ValueTask InnoEngine.Storage.Storage.WriteAsync(InnoEngine.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/Storage.cs#L97).
