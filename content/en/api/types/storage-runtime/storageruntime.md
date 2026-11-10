---
title: "StorageRuntime"
description: "Reference for StorageRuntime in Inno.Storage.Runtime."
uid: api.inno.storage.runtime.e3b2203bf4cb1021
kind: api
owners:
  - Inno.Storage.Runtime
apiSurface: source-clr
contracts:
  - project.inno-storage-runtime#admission-and-lifetime-contract
---
# `StorageRuntime`

This reference describes `StorageRuntime` in `Inno.Storage.Runtime`. Read the [shared contract](../../projects/inno-storage-runtime.md#admission-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.Storage.IApplicationStorage`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-73e19306e1c5dc01) | Method |
| [`DeleteAsync`](#api-c7da3361bfa8301a) | Method |
| [`ExistsAsync`](#api-5e7e6a31388f0288) | Method |
| [`ListAsync`](#api-ec0d96ab8bc36d5d) | Method |
| [`OnBeginFrame`](#api-ac69721c3cb8fcb1) | Method |
| [`OnStop`](#api-10db344123697667) | Method |
| [`ReadAsync`](#api-ee91c472d8ee6130) | Method |
| [`WriteAsync`](#api-38f448978f95d725) | Method |
| [`pendingOperations`](#api-7f2026b183e48ecc) | Property |
| [`rejectedOperations`](#api-1f613c37887b061e) | Property |
| [`storage`](#api-86522c9ad5674494) | Property |

## Type declaration

<a id="api-e3b2203bf4cb1021"></a>
<!-- api: T:Inno.Storage.Runtime.StorageRuntime 6e43075d7a9ce2651e665adce1a121a816a961807498b9cb2fbcb759a7348f53 -->

```csharp
public sealed class Inno.Storage.Runtime.StorageRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.Storage.IApplicationStorage
```

Binds one application storage sandbox throughout every runtime frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L15).

## `#ctor`

<a id="api-73e19306e1c5dc01"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.#ctor(Inno.Storage.IApplicationStorage,System.Int32,System.Int32) 15d05c7f4042ce62b17c68f4c61ebceb43813dfb835a99d5ee146c6fa2202211 -->

```csharp
public Inno.Storage.Runtime.StorageRuntime.StorageRuntime(Inno.Storage.IApplicationStorage storage, int maxPendingOperations = 128, int maxWriteBytes = 67108864)
```

Creates a feature whose optional disposable storage ownership transfers to this instance.

**Parameter `storage`:** The application-specific persistent storage sandbox.

**Parameter `maxPendingOperations`:** Positive simultaneous asynchronous operation capacity.

**Parameter `maxWriteBytes`:** Positive maximum value size accepted by one write.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L33).

## `DeleteAsync`

<a id="api-c7da3361bfa8301a"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 2443256a43cbebe08f44e9b4e042532951670becfd5b863d5f289269c4f233fe -->

```csharp
public System.Threading.Tasks.ValueTask<bool> Inno.Storage.Runtime.StorageRuntime.DeleteAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Deletes one value without failing when it is already absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when an existing value was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L132).

## `ExistsAsync`

<a id="api-5e7e6a31388f0288"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.ExistsAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 02fc3444e7d31d5bd7ad9783fc26f2386a8bbc11c6e21300de2edc3fc3d2a86a -->

```csharp
public System.Threading.Tasks.ValueTask<bool> Inno.Storage.Runtime.StorageRuntime.ExistsAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Determines whether a value exists.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when the value exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L70).

## `ListAsync`

<a id="api-ec0d96ab8bc36d5d"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.ListAsync(System.Nullable{Inno.Storage.StorageKey},System.Threading.CancellationToken) cfb0ccc61830a3eeb2752e90de0799532a541d57b7f8d97a18140c156afa3fb8 -->

```csharp
public System.Threading.Tasks.ValueTask<System.Collections.Generic.IReadOnlyList<Inno.Storage.StorageKey>> Inno.Storage.Runtime.StorageRuntime.ListAsync(Inno.Storage.StorageKey? prefix = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lists immutable keys below an optional logical prefix.

**Parameter `prefix`:** An optional normalized directory prefix.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** Keys in deterministic ordinal order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L149).

## `OnBeginFrame`

<a id="api-ac69721c3cb8fcb1"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) d814a06c4c66d74de1ab6652b18bc5a397bc28223f3702ee7c8f86566cd41cca -->

```csharp
protected override void Inno.Storage.Runtime.StorageRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Begins a frame-scoped operation and makes queued work visible.

**Parameter `frame`:** The frame consumed by begin frame; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L161).

## `OnStop`

<a id="api-10db344123697667"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.OnStop f2a19f61b0b98843f2b225ab4c90d9385e2648e008dc6d312127ed9923985a66 -->

```csharp
protected override void Inno.Storage.Runtime.StorageRuntime.OnStop()
```

Releases the storage backend after owned work has quiesced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L168).

## `ReadAsync`

<a id="api-ee91c472d8ee6130"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken) 0ab065f8f1090dcc1abeebc351660bdcbbdd44e830738c760c749c8dcea1c835 -->

```csharp
public System.Threading.Tasks.ValueTask<byte[]?> Inno.Storage.Runtime.StorageRuntime.ReadAsync(Inno.Storage.StorageKey key, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads a complete immutable value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when the key does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L87).

## `WriteAsync`

<a id="api-38f448978f95d725"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntime.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken) c28decc838fd4adb2e1fa114a3185d89d8185cbafecdfdca968f933b716f1c22 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Storage.Runtime.StorageRuntime.WriteAsync(Inno.Storage.StorageKey key, System.ReadOnlyMemory<byte> value, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after the value is durably replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L107).

## `pendingOperations`

<a id="api-7f2026b183e48ecc"></a>
<!-- api: P:Inno.Storage.Runtime.StorageRuntime.pendingOperations 8ec479343007be57ba49a61e23e5ce3e87a5e20636b26062caac976206138e7a -->

```csharp
public int Inno.Storage.Runtime.StorageRuntime.pendingOperations { get; }
```

Gets asynchronous operations retained until completion or retirement reporting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L53).

## `rejectedOperations`

<a id="api-1f613c37887b061e"></a>
<!-- api: P:Inno.Storage.Runtime.StorageRuntime.rejectedOperations 29535023777f5cdcdc0c22a813afe08aaabc662b76dd4d2d1d808d6660475152 -->

```csharp
public long Inno.Storage.Runtime.StorageRuntime.rejectedOperations { get; }
```

Gets operations rejected by finite asynchronous admission capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L57).

## `storage`

<a id="api-86522c9ad5674494"></a>
<!-- api: P:Inno.Storage.Runtime.StorageRuntime.storage 6fb662360d40fc606ae6c08d0fdb51f8e45a181d1df2ccbfe76ee41d7fb4c679 -->

```csharp
public Inno.Storage.IApplicationStorage Inno.Storage.Runtime.StorageRuntime.storage { get; }
```

Gets the storage service owned by this runtime feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntime.cs#L49).
