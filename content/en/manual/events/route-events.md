---
title: Route and consume events
description: Order event handlers, apply bounded admission, and release subscriptions with their owner.
uid: manual.events.route-events
kind: how-to
owners:
  - Inno.Core.Events
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Core.Events
---
# Route and consume events

Use a dispatcher to route an event through ordered hubs. Use a hub to group listeners with a shared lifetime and consumption boundary. An event describes a current occurrence; it is not a persistent identity or a replacement for stored diagnostic state.

## Prerequisites

The owner decides when to dispatch immediately or flush queued work, and which thread executes handlers. The example uses the real Runtime script projection, `InnoEngine.Events`. It creates a local dispatcher; it does not automatically subscribe to the engine's platform-input dispatcher.

## Own subscriptions explicitly

```csharp
using System;
using InnoEngine.Events;

public sealed class SelectionRequestedEvent : Event
{
}

public static class EventExample
{
    public static void Run(
        Action previewSelection,
        Action applySelection
    ) {
        EventDispatcher dispatcher = new(queueCapacity: 64, flushBudget: 16);
        using EventHub preview = dispatcher.CreateHub(order: 100);
        using EventHub action = dispatcher.CreateHub(order: 0);
        using IDisposable previewSubscription = preview.Listen<SelectionRequestedEvent>(e =>
        {
            previewSelection();
            e.HandleInHub();
        });
        using IDisposable actionSubscription = action.Listen<SelectionRequestedEvent>(e => applySelection());

        dispatcher.Enqueue(new SelectionRequestedEvent());
        dispatcher.Flush();
    }
}
```

The preview runs first. `HandleInHub` stops any remaining listeners in that hub, while the action hub still receives the event. The method releases subscriptions before their hubs. A long-lived session or script should retain these tokens and dispose them before retiring its callbacks.

## Choose the consumption boundary

| Operation | Effect |
| --- | --- |
| `HandleInHub()` | Stops the current event's remaining listeners in the current hub dispatch. |
| `HandleInGlobal()` | Stops the current hub and all subsequent hubs, sharing that state with routed representations. |
| `hub.Announce(event)` | Dispatches only inside that hub; it does not traverse the dispatcher chain. |
| `dispatcher.Emit(event)` | Dispatches synchronously through ordered valid hubs. |

`HandleInHub` is valid only while that event is being dispatched in a hub. Calling it from unrelated code or a completion observer throws. It is scoped to the current dispatch stack, not a durable flag on all copies.

Hubs run in descending `order`, with creation order breaking ties. Within one event-type bucket, listener `priority` descends and registration order breaks ties. Dispatch visits the concrete event type before its base types. A high-priority base-type listener does not jump ahead of a concrete-type listener.

## Handle queue pressure

The defaults are 65,536 pending events and a 4,096-event flush budget. `TryEnqueue` returns false when capacity is exhausted; the producer still owns the rejected event. `Enqueue` throws instead. Explicitly defer or reject that work according to the owning feature's policy.

`Flush` processes a bounded prefix visible when it starts. Work enqueued by a handler waits for a later flush. Keep advancing the owner's loop while accepted work remains. `pendingCount` includes producer reservations as well as queued events.

`DiscardPending` returns the number of discarded queued references. Use it only at an explicit quiescent retirement point; it is not a silent overload strategy for critical events.

## Preserve routed input identity

A derived event can call the protected `Event(source)` constructor to share global consumption with its source. The source or any routed representation can consume all of them, including across dispatchers. `MouseMovedEvent.WithPosition` preserves the source window and global consumption while changing coordinates.

The Editor Game View uses this contract for window-coordinate conversion. An already-consumed event must not be revived by copying its coordinates or starting a new capture. See [input routing](../input/read-input.md) for session and platform boundaries.

## Observe completion without consuming

The host can subscribe to `dispatcher.dispatched`. This synchronous notification runs after successful hub traversal, including when the event was already globally consumed. A hub exception propagates and prevents completion notification; observer exceptions also propagate.

Observers do not participate in consumption, do not call `HandleInHub`, and must unsubscribe before their owner retires. Dispatch does not marshal handlers to another thread or make the listener's own state thread-safe.

[Event project contracts](../../api/projects/inno-core-events.md) provide the exact type/member reference and lifetime boundary.
