---
title: "IApplicationStorage"
description: "Reference for IApplicationStorage in Inno.Storage."
uid: api.inno.storage.runtime-script.e5e7f946b5949b8b
kind: api
owners:
  - Inno.Storage
apiSurface: runtime-script
contracts:
  - project.inno-storage#operation-and-ownership-contract
  - manual.scripting.use-script-api
---
# `IApplicationStorage`

This reference describes `IApplicationStorage` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`DeleteAsync`](#api-264e67fa7bf39d86) | Method |
| [`ExistsAsync`](#api-166b6ff553ad7567) | Method |
| [`ListAsync`](#api-c62e2e129baa445a) | Method |
| [`ReadAsync`](#api-235c41841b54e55e) | Method |
| [`WriteAsync`](#api-22bcd99665c8c946) | Method |

## Type declaration

<a id="api-e5e7f946b5949b8b"></a>
<!-- api: T:InnoEngine.Storage.IApplicationStorage 16104594671a137c5a2b8c3bdba84097126a131f8bed4a977e649287141ac64a -->

```csharp
public interface InnoEngine.Storage.IApplicationStorage
```

Provides asynchronous atomic access to one application-specific persistent sandbox.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/IApplicationStorage.cs#L11).

## `DeleteAsync`

<a id="api-264e67fa7bf39d86"></a>
<!-- api: M:InnoEngine.Storage.IApplicationStorage.DeleteAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken) 9a9893a745d92ff931f2dbeb323cffbd7a704b4e300e588a53b7494edfea6065 -->

```csharp
System.Threading.Tasks.ValueTask<bool> InnoEngine.Storage.IApplicationStorage.DeleteAsync(InnoEngine.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Deletes one value without failing when it is already absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when an existing value was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/IApplicationStorage.cs#L80).

## `ExistsAsync`

<a id="api-166b6ff553ad7567"></a>
<!-- api: M:InnoEngine.Storage.IApplicationStorage.ExistsAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken) 2fcc00e9b64f990df52bd4444da9f970001af1b0cea0bc0b2290d5833711e5b1 -->

```csharp
System.Threading.Tasks.ValueTask<bool> InnoEngine.Storage.IApplicationStorage.ExistsAsync(InnoEngine.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Determines whether a value exists.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when the value exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/IApplicationStorage.cs#L25).

## `ListAsync`

<a id="api-c62e2e129baa445a"></a>
<!-- api: M:InnoEngine.Storage.IApplicationStorage.ListAsync(System.Nullable{InnoEngine.Storage.StorageKey},System.Threading.CancellationToken) 1d08e1269e5a679193a5b330d263196b8a8789a3d2aeb7632fe7398ba23b5331 -->

```csharp
System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<InnoEngine.Storage.StorageKey>> InnoEngine.Storage.IApplicationStorage.ListAsync(InnoEngine.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lists immutable keys below an optional logical prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/IApplicationStorage.cs#L97).

## `ReadAsync`

<a id="api-235c41841b54e55e"></a>
<!-- api: M:InnoEngine.Storage.IApplicationStorage.ReadAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken) 24750f9515ea6e4b64bb8425930baddbee82dae683e19ecd4a84fbd4b1d8c186 -->

```csharp
System.Threading.Tasks.ValueTask<byte[]?> InnoEngine.Storage.IApplicationStorage.ReadAsync(InnoEngine.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads a complete immutable value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when the key does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/IApplicationStorage.cs#L42).

## `WriteAsync`

<a id="api-22bcd99665c8c946"></a>
<!-- api: M:InnoEngine.Storage.IApplicationStorage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) 2294dbb75c9bec673e07489567f370cd6633f842a1eff294b34b615b0d47727f -->

```csharp
System.Threading.Tasks.ValueTask InnoEngine.Storage.IApplicationStorage.WriteAsync(InnoEngine.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after the value is durably replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/IApplicationStorage.cs#L62).
