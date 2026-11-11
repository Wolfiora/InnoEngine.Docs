---
title: "EventDispatcher"
description: "Reference for EventDispatcher in Inno.Core.Events."
uid: api.inno.core.events.48b0cbce21ed23c6
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `EventDispatcher`

This reference describes `EventDispatcher` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`dispatched`](#api-0aadbbdaf8be9547) | Event |
| [`#ctor`](#api-c5210898d89b2866) | Method |
| [`CreateHub`](#api-f307c2f0e0e8beb1) | Method |
| [`DiscardPending`](#api-ea717acd015c8059) | Method |
| [`Emit`](#api-5d9f11a0e08c82fd) | Method |
| [`Enqueue`](#api-7803abe58ca24049) | Method |
| [`Flush`](#api-44935a267cdc9985) | Method |
| [`TryEnqueue`](#api-0479ca4a013df3c7) | Method |
| [`pendingCount`](#api-124e3d838099a9e3) | Property |

## Type declaration

<a id="api-48b0cbce21ed23c6"></a>
<!-- api: T:Inno.Core.Events.EventDispatcher 2cb2ca8cfe0af09273766a6e012d35b3d4fe040b297faa8bf1b9a142c7026f56 -->

```csharp
public sealed class Inno.Core.Events.EventDispatcher
```

Thread-safe event dispatcher that owns a set of `Inno.Core.Events.EventHub` instances
and routes events to hubs in descending `Inno.Core.Events.EventHub.order`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L12).

## `dispatched`

<a id="api-0aadbbdaf8be9547"></a>
<!-- api: E:Inno.Core.Events.EventDispatcher.dispatched 3ae753e2a2d9df64771bb3bd7618a1274efda42e0a25a6333ca845006e7750b0 -->

```csharp
public System.Action<Inno.Core.Events.Event>? Inno.Core.Events.EventDispatcher.dispatched
```

Observes an event after its ordered hub dispatch has completed, including globally consumed events.

**Constraints:** Observers run synchronously on the dispatching thread and do not participate in consumption.
They must not change consumption or call HandleInHub. Observer failures propagate to the caller.
Owners must unsubscribe before retiring their callbacks or extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L30).

## `#ctor`

<a id="api-c5210898d89b2866"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.#ctor(System.Int32,System.Int32) 43b7fd226ca417105fb289d9707042be0db2a01d856bfa7536e948410216525d -->

```csharp
public Inno.Core.Events.EventDispatcher.EventDispatcher(int queueCapacity = 65536, int flushBudget = 4096)
```

Creates a dispatcher with bounded pending work and a finite per-flush budget.

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

**Throws `System.ArgumentOutOfRangeException`:** A budget is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L44).

## `CreateHub`

<a id="api-f307c2f0e0e8beb1"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.CreateHub(System.Int32) dd6c239cb67b4be6ed56125dc19d799eda27f96f8fc3f85e2535b9d4cf2e6648 -->

```csharp
public Inno.Core.Events.EventHub Inno.Core.Events.EventDispatcher.CreateHub(int order = 0)
```

Creates a new hub attached to this dispatcher.

**Parameter `order`:** Hub dispatch order. Higher values run earlier.

**Returns:** The created valid hub.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L70).

## `DiscardPending`

<a id="api-ea717acd015c8059"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.DiscardPending 2d9e75a7e26fc898deebdc79e1dae3a4a3ab99c053d622202083cc42eb49f05a -->

```csharp
public int Inno.Core.Events.EventDispatcher.DiscardPending()
```

Releases queued references at a quiescent owner safe point without invoking retired handlers.

**Returns:** The number of pending events discarded by the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L140).

## `Emit`

<a id="api-5d9f11a0e08c82fd"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.Emit(Inno.Core.Events.Event) ed6ceb4f46c190f2de8f6a2957496901e834dbb6bd61d0dcf761efb96589ba98 -->

```csharp
public void Inno.Core.Events.EventDispatcher.Emit(Inno.Core.Events.Event e)
```

Immediately dispatches an event to all valid hubs in priority order.

**Constraints:** Hub dispatch stops when the event is marked globally handled. Completion observers are still notified.
A failed hub propagates its exception without reporting successful completion.

**Parameter `e`:** The event instance to dispatch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L161).

## `Enqueue`

<a id="api-7803abe58ca24049"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.Enqueue(Inno.Core.Events.Event) 44089c5f20605f436a6f38dd7cae5ba82d5bbd3ac59672b6f904619c794ec6da -->

```csharp
public void Inno.Core.Events.EventDispatcher.Enqueue(Inno.Core.Events.Event e)
```

Enqueues an event for later processing via `Inno.Core.Events.EventDispatcher.Flush`.

**Parameter `e`:** The event instance to enqueue.

**Throws `System.InvalidOperationException`:** The queue is full; the event was not accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L91).

## `Flush`

<a id="api-44935a267cdc9985"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.Flush 8ed53447a07ad78e440262bcf0e1f1a57f733801bde2c86f3cfabd4507cd203a -->

```csharp
public void Inno.Core.Events.EventDispatcher.Flush()
```

Dispatches a bounded prefix of pending events; recursively enqueued work waits for a later flush.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L124).

## `TryEnqueue`

<a id="api-0479ca4a013df3c7"></a>
<!-- api: M:Inno.Core.Events.EventDispatcher.TryEnqueue(Inno.Core.Events.Event) ed5075a04b262d88a9d2891ee81f417930911268030339a5a6a3fa936088b182 -->

```csharp
public bool Inno.Core.Events.EventDispatcher.TryEnqueue(Inno.Core.Events.Event e)
```

Attempts to enqueue without silently dropping a critical event on overload.

**Parameter `e`:** The event whose ownership transfers only on success.

**Returns:** False when capacity is exhausted; the caller retains the event.

**Throws `System.ArgumentNullException`:** The event is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L109).

## `pendingCount`

<a id="api-124e3d838099a9e3"></a>
<!-- api: P:Inno.Core.Events.EventDispatcher.pendingCount ee94707544f7efd2f67b97282894245e3a78762f4469ce7dd1eb5439cda2bd31 -->

```csharp
public int Inno.Core.Events.EventDispatcher.pendingCount { get; }
```

Gets the number of pending events, including producer reservations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L59).
