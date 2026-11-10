---
title: "IApplicationStorage"
description: "Reference for IApplicationStorage in Inno.Storage."
uid: api.inno.storage.a2689b2828c5bca4
kind: api
owners:
  - Inno.Storage
apiSurface: source-clr
contracts:
  - project.inno-storage#operation-and-ownership-contract
---
# `IApplicationStorage`

This reference describes `IApplicationStorage` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`DeleteAsync`](#api-cda5d4ec036816c0) | Method |
| [`ExistsAsync`](#api-ad3020a9dff73b3f) | Method |
| [`ListAsync`](#api-ff7b552161e58bd1) | Method |
| [`ReadAsync`](#api-9e26f73c2b41c170) | Method |
| [`WriteAsync`](#api-ad639962a25cd115) | Method |

## Type declaration

<a id="api-a2689b2828c5bca4"></a>
<!-- api: T:Inno.Storage.IApplicationStorage eacae9b666303a81748fb6331fab8959bd899ce0b4099556aa060d7195b97214 -->

```csharp
public interface Inno.Storage.IApplicationStorage
```

Provides asynchronous atomic access to one application-specific persistent sandbox.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/IApplicationStorage.cs#L11).

## `DeleteAsync`

<a id="api-cda5d4ec036816c0"></a>
<!-- api: M:Inno.Storage.IApplicationStorage.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 599bd0064f561ca5a84fbd716c5906f8119baf03812a01e711bcc7f4e2cfa1c1 -->

```csharp
System.Threading.Tasks.ValueTask<bool> Inno.Storage.IApplicationStorage.DeleteAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Deletes one value without failing when it is already absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when an existing value was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/IApplicationStorage.cs#L80).

## `ExistsAsync`

<a id="api-ad3020a9dff73b3f"></a>
<!-- api: M:Inno.Storage.IApplicationStorage.ExistsAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) ba233d0da76709978f2fc2772a6a330fd155bd7190e3e55dea79e7263f333200 -->

```csharp
System.Threading.Tasks.ValueTask<bool> Inno.Storage.IApplicationStorage.ExistsAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Determines whether a value exists.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when the value exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/IApplicationStorage.cs#L25).

## `ListAsync`

<a id="api-ff7b552161e58bd1"></a>
<!-- api: M:Inno.Storage.IApplicationStorage.ListAsync(System.Nullable{Inno.Storage.StorageKey},System.Threading.CancellationToken) 9197418366de3ffaaec57a19c2f6269c761885bdd20b2309c911ce4bdfb26f36 -->

```csharp
System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<Inno.Storage.StorageKey>> Inno.Storage.IApplicationStorage.ListAsync(Inno.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lists immutable keys below an optional logical prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/IApplicationStorage.cs#L97).

## `ReadAsync`

<a id="api-9e26f73c2b41c170"></a>
<!-- api: M:Inno.Storage.IApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) f49c09953d2c005c6ebd2e82bb48b441ab18c74939801f64cdc9b18170b8f9f4 -->

```csharp
System.Threading.Tasks.ValueTask<byte[]?> Inno.Storage.IApplicationStorage.ReadAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads a complete immutable value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when the key does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/IApplicationStorage.cs#L42).

## `WriteAsync`

<a id="api-ad639962a25cd115"></a>
<!-- api: M:Inno.Storage.IApplicationStorage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) 43247e0129b8b02b6f10b715ad4049464d9b50e3a4d053dc95e67af6dc93bd0a -->

```csharp
System.Threading.Tasks.ValueTask Inno.Storage.IApplicationStorage.WriteAsync(Inno.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after the value is durably replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/IApplicationStorage.cs#L62).
