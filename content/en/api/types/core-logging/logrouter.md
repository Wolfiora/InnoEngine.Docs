---
title: "LogRouter"
description: "Reference for LogRouter in Inno.Core.Logging."
uid: api.inno.core.logging.447b7e9618a45ea4
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `LogRouter`

This reference describes `LogRouter` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`sinkFailed`](#api-18a83fc30033096e) | Event |
| [`#ctor`](#api-8064ea46b47ad839) | Method |
| [```CreateLogger``1```](#api-63de34d89162e3bd) | Method |
| [`Dispatch`](#api-fa5aa34b064a9f7a) | Method |
| [`Dispose`](#api-d5b211097bc9423c) | Method |
| [`EnterScope`](#api-456d27d9191d5db1) | Method |
| [`Flush`](#api-109d37e201f254cc) | Method |
| [`RegisterSink`](#api-30e7af2a2948c10c) | Method |
| [`SetMinimumLevel`](#api-769ba1236de06b3d) | Method |
| [`TryDispatch`](#api-84788e628a3a59ec) | Method |
| [`UnregisterSink`](#api-fb7bbd0e8840dafd) | Method |

## Type declaration

<a id="api-447b7e9618a45ea4"></a>
<!-- api: T:Inno.Core.Logging.LogRouter 6ae9f1ee4fb48f5dbcc4a3a63fb976677afebfa089185bab09d8f751a7907c94 -->

```csharp
public sealed class Inno.Core.Logging.LogRouter : System.IDisposable
```

Owns one host's bounded log queue, filtering policy, and sink collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L15).

## `sinkFailed`

<a id="api-18a83fc30033096e"></a>
<!-- api: E:Inno.Core.Logging.LogRouter.sinkFailed 8d84be2afa650d6621c19e8549af758eac1fd778891f00f1bee31d83f2f6e946 -->

```csharp
public System.Action<Inno.Core.Logging.ILogSink, System.Exception>? Inno.Core.Logging.LogRouter.sinkFailed
```

Occurs after a failing sink has been quarantined from this router.

**Constraints:** Quarantine removes the sink from delivery but does not dispose it. The host must retain
responsibility for safely releasing a removed sink. Observers run within delivery and
must not flush or dispose this router from their callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L43).

## `#ctor`

<a id="api-8064ea46b47ad839"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.#ctor(System.Int32,System.Int32,Inno.Core.Logging.LogDeliveryMode) 1c412e79cdeaea55df724a6b09ad56c880b34ee0e0354bf14d4c3137454e47df -->

```csharp
public Inno.Core.Logging.LogRouter.LogRouter(int queueCapacity = 65536, int drainBudget = 4096, Inno.Core.Logging.LogDeliveryMode deliveryMode = Inno.Core.Logging.LogDeliveryMode.Background)
```

Creates an isolated logging router with an explicit delivery policy.

**Parameter `queueCapacity`:** Maximum pending entries and flush barriers before explicit rejection.

**Parameter `drainBudget`:** Maximum work items delivered using one sink snapshot.

**Parameter `deliveryMode`:** Selects worker or inline delivery independently of the platform.

**Throws `System.ArgumentOutOfRangeException`:** A capacity or budget is not positive, or the delivery policy is not a defined mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L60).

## ```CreateLogger``1```

<a id="api-63de34d89162e3bd"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.CreateLogger``1 cc1e261f7e8258d8ce2ec2b7f9a5dac78abb6f3f9be221eca679c41170db4000 -->

```csharp
public Inno.Core.Logging.Logger Inno.Core.Logging.LogRouter.CreateLogger<TOwner>()
```

Creates a category-bound logger for one engine service or extension type.

**Type parameter `TOwner`:** The type whose assembly ownership and category identify emitted entries.

**Returns:** A stateless logger bound to this router and the supplied owner type.

**Throws `System.ObjectDisposedException`:** Thrown after this router has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L177).

## `Dispatch`

<a id="api-fa5aa34b064a9f7a"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.Dispatch(Inno.Core.Logging.LogEntry) cd03ddac7140bc3747cc6952a5aae96ca2622695da4b6b07d9d46371b91b137c -->

```csharp
public void Inno.Core.Logging.LogRouter.Dispatch(Inno.Core.Logging.LogEntry entry)
```

Queues an immutable entry under the configured worker or inline delivery policy.

**Parameter `entry`:** The entry to dispatch when it satisfies the current severity policy.

**Throws `System.InvalidOperationException`:** The bounded queue is full and the producer must apply backpressure.

**Throws `System.ObjectDisposedException`:** Thrown after this router has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L200).

## `Dispose`

<a id="api-d5b211097bc9423c"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.Dispose 53a033d1e9718139ebd6139496c0f7e97768195d2ddec78b74b8c9f8e47e8ef7 -->

```csharp
public void Inno.Core.Logging.LogRouter.Dispose()
```

Drains pending entries, stops the worker, and disposes every sink still owned by this router.

**Throws `System.InvalidOperationException`:** A delivery callback attempts to dispose its own router.

**Throws `System.AggregateException`:** One or more owned sinks fail to dispose after pending entries have drained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L273).

## `EnterScope`

<a id="api-456d27d9191d5db1"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.EnterScope d43a5299c500c8d851c484edf5926934fa3eba76a3bad108e549c0a5502ee152 -->

```csharp
public System.IDisposable Inno.Core.Logging.LogRouter.EnterScope()
```

Binds this router to the current asynchronous execution context.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Throws `System.ObjectDisposedException`:** Thrown after this router has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L93).

## `Flush`

<a id="api-109d37e201f254cc"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.Flush 9127df56f8af402b427f3b0b2cf47f3a10b532e11af95ae7055e979030f3a4f4 -->

```csharp
public void Inno.Core.Logging.LogRouter.Flush()
```

Blocks until every entry enqueued before this call has reached the current sink snapshot.

**Throws `System.InvalidOperationException`:** A delivery callback attempts to wait for its own completion, or the queue cannot accept a flush barrier.

**Throws `System.ObjectDisposedException`:** Thrown after this router has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L247).

## `RegisterSink`

<a id="api-30e7af2a2948c10c"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.RegisterSink(Inno.Core.Logging.ILogSink) 4665d44d5a977911c341c19ac43f04191320fbb96586671b9cc3d18046feb638 -->

```csharp
public void Inno.Core.Logging.LogRouter.RegisterSink(Inno.Core.Logging.ILogSink sink)
```

Registers a sink to receive future entries from this router.

**Parameter `sink`:** The sink to register exactly once.

**Throws `System.ArgumentNullException`:** Thrown when `sink` is null.

**Throws `System.ObjectDisposedException`:** Thrown after this router has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L111).

## `SetMinimumLevel`

<a id="api-769ba1236de06b3d"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.SetMinimumLevel(Inno.Core.Logging.LogLevel) e978aa34ccadae07658fc69f426512718e40e7e1282332b95fdc4ab6216f5e94 -->

```csharp
public void Inno.Core.Logging.LogRouter.SetMinimumLevel(Inno.Core.Logging.LogLevel level)
```

Sets the lowest severity accepted by this router.

**Parameter `level`:** The minimum dispatched severity.

**Throws `System.ObjectDisposedException`:** Thrown after this router has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L159).

## `TryDispatch`

<a id="api-84788e628a3a59ec"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.TryDispatch(Inno.Core.Logging.LogEntry) 8a5997cdad093bf81a998b2191a1bab1cfb33409d82e7da481940b4b76623cfe -->

```csharp
public bool Inno.Core.Logging.LogRouter.TryDispatch(Inno.Core.Logging.LogEntry entry)
```

Attempts to queue an immutable entry, draining it inline when the host has no logging worker.

**Parameter `entry`:** The message to accept under the current severity policy.

**Returns:** True when accepted or filtered by policy; false when bounded queue capacity is exhausted.

**Constraints:** Inline callers serialize delivery. Entries written by a sink callback are queued until
every sink has received the current entry, without recursively invoking callbacks.

**Throws `System.ObjectDisposedException`:** The router has stopped accepting work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L222).

## `UnregisterSink`

<a id="api-fb7bbd0e8840dafd"></a>
<!-- api: M:Inno.Core.Logging.LogRouter.UnregisterSink(Inno.Core.Logging.ILogSink) 7731544638e42b4cb1a8b037f105c16d41f4835cabd6ca08633d6f0056a0cf99 -->

```csharp
public void Inno.Core.Logging.LogRouter.UnregisterSink(Inno.Core.Logging.ILogSink sink)
```

Removes a sink from subsequent delivery snapshots without disposing it.

**Constraints:** An in-flight batch may still borrow the previous snapshot. This operation does not wait
for its callbacks; the host must coordinate quiescence before releasing sink resources.
Router disposal releases only sinks that remain registered.

**Parameter `sink`:** The sink to remove when registered.

**Throws `System.ArgumentNullException`:** Thrown when `sink` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogRouter.cs#L140).
