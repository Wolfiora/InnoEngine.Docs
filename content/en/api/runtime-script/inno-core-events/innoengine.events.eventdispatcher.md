---
title: "EventDispatcher"
description: "Reference for EventDispatcher in Inno.Core.Events."
uid: api.inno.core.events.runtime-script.7bcc2c6aae71e4e1
kind: api
owners:
  - Inno.Core.Events
apiSurface: runtime-script
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
  - manual.scripting.use-script-api
---
# `EventDispatcher`

This reference describes `EventDispatcher` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`dispatched`](#api-0cf3842d474cf0ca) | Event |
| [`#ctor`](#api-66cf0a365c6ecb25) | Method |
| [`CreateHub`](#api-aa41160491b13a8f) | Method |
| [`DiscardPending`](#api-302dd7c937b0b634) | Method |
| [`Emit`](#api-da9ea48211383d48) | Method |
| [`Enqueue`](#api-2c42e634ec8c11ff) | Method |
| [`Flush`](#api-4f62ec5fd856c88f) | Method |
| [`TryEnqueue`](#api-cabc2fa58cd9846b) | Method |
| [`pendingCount`](#api-6d93030803ab6cd1) | Property |

## Type declaration

<a id="api-7bcc2c6aae71e4e1"></a>
<!-- api: T:InnoEngine.Events.EventDispatcher a91bd3ac096d5b8e1c679e72b0f29b70f722042caa7d7c387041ae65b766ac9e -->

```csharp
public sealed class InnoEngine.Events.EventDispatcher
```

Thread-safe event dispatcher that owns a set of `InnoEngine.Events.EventHub` instances
and routes events to hubs in descending `InnoEngine.Events.EventHub.order`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L12).

## `dispatched`

<a id="api-0cf3842d474cf0ca"></a>
<!-- api: E:InnoEngine.Events.EventDispatcher.dispatched 27e35e7e7fe97195e587c1130bf6dda09fb93e01f5bdfedc337a07118961275c -->

```csharp
public System.Action<InnoEngine.Events.Event>? InnoEngine.Events.EventDispatcher.dispatched
```

Observes an event after its ordered hub dispatch has completed, including globally consumed events.

**Constraints:** Observers run synchronously on the dispatching thread and do not participate in consumption.
They must not change consumption or call HandleInHub. Observer failures propagate to the caller.
Owners must unsubscribe before retiring their callbacks or extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L30).

## `#ctor`

<a id="api-66cf0a365c6ecb25"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.#ctor(System.Int32,System.Int32) b519303c6c966939ac61c057c42cfe195dd1b5c25d2f85f5e4f445c583c9739d -->

```csharp
public InnoEngine.Events.EventDispatcher.EventDispatcher(int queueCapacity = 65536, int flushBudget = 4096)
```

Creates a dispatcher with bounded pending work and a finite per-flush budget.

**Parameter `queueCapacity`:** Maximum pending events; producers must handle explicit rejection.

**Parameter `flushBudget`:** Maximum events dispatched by one flush, excluding events enqueued during that flush.

**Throws `System.ArgumentOutOfRangeException`:** A budget is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L44).

## `CreateHub`

<a id="api-aa41160491b13a8f"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.CreateHub(System.Int32) 42392cc8b3bce96589ad7623c6493f3b8c1b68c4f2a2e2f57313583b8d5cc53c -->

```csharp
public InnoEngine.Events.EventHub InnoEngine.Events.EventDispatcher.CreateHub(int order = 0)
```

Creates a new hub attached to this dispatcher.

**Parameter `order`:** Hub dispatch order. Higher values run earlier.

**Returns:** The created valid hub.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L70).

## `DiscardPending`

<a id="api-302dd7c937b0b634"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.DiscardPending 14c2c8984204ee5446862c319cb1961276d0e9d3aa832181e19c88ce45e710e6 -->

```csharp
public int InnoEngine.Events.EventDispatcher.DiscardPending()
```

Releases queued references at a quiescent owner safe point without invoking retired handlers.

**Returns:** The number of pending events discarded by the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L140).

## `Emit`

<a id="api-da9ea48211383d48"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.Emit(InnoEngine.Events.Event) 08a9c6dd55a5592b743212854d2c5bedc8ce7ab416f223213b226fb02bc61d82 -->

```csharp
public void InnoEngine.Events.EventDispatcher.Emit(InnoEngine.Events.Event e)
```

Immediately dispatches an event to all valid hubs in priority order.

**Constraints:** Hub dispatch stops when the event is marked globally handled. Completion observers are still notified.
A failed hub propagates its exception without reporting successful completion.

**Parameter `e`:** The event instance to dispatch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L161).

## `Enqueue`

<a id="api-2c42e634ec8c11ff"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.Enqueue(InnoEngine.Events.Event) f6c5a1bf6ab605675de5a38f61bb665eb26fd532e3a886027e6185c4ea3969de -->

```csharp
public void InnoEngine.Events.EventDispatcher.Enqueue(InnoEngine.Events.Event e)
```

Enqueues an event for later processing via `InnoEngine.Events.EventDispatcher.Flush`.

**Parameter `e`:** The event instance to enqueue.

**Throws `System.InvalidOperationException`:** The queue is full; the event was not accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L91).

## `Flush`

<a id="api-4f62ec5fd856c88f"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.Flush 5554b0b5a44747b4a8b1c304f62f4483cabf7a59c6d27c7a257b42f55e09adc9 -->

```csharp
public void InnoEngine.Events.EventDispatcher.Flush()
```

Dispatches a bounded prefix of pending events; recursively enqueued work waits for a later flush.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L124).

## `TryEnqueue`

<a id="api-cabc2fa58cd9846b"></a>
<!-- api: M:InnoEngine.Events.EventDispatcher.TryEnqueue(InnoEngine.Events.Event) 1cbdf7100290481d2981108253ee44df47520c98ef924e4b99f5ec6a6f881b0c -->

```csharp
public bool InnoEngine.Events.EventDispatcher.TryEnqueue(InnoEngine.Events.Event e)
```

Attempts to enqueue without silently dropping a critical event on overload.

**Parameter `e`:** The event whose ownership transfers only on success.

**Returns:** False when capacity is exhausted; the caller retains the event.

**Throws `System.ArgumentNullException`:** The event is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L109).

## `pendingCount`

<a id="api-6d93030803ab6cd1"></a>
<!-- api: P:InnoEngine.Events.EventDispatcher.pendingCount 30aa8f18c522f1d1b83a1bf82cec7947eda1ca5929baca7d47477158f75e24ca -->

```csharp
public int InnoEngine.Events.EventDispatcher.pendingCount { get; }
```

Gets the number of pending events, including producer reservations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventDispatcher.cs#L59).
