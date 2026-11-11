---
title: "EventHub"
description: "Reference for EventHub in Inno.Core.Events."
uid: api.inno.core.events.cbb7274ff8371a01
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `EventHub`

This reference describes `EventHub` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Announce`](#api-2f33adb1d30547ed) | Method |
| [`Dispose`](#api-5608de70373d0185) | Method |
| [```Listen``1```](#api-11fd3f619ed209fd) | Method |
| [```ListenOnce``1```](#api-7264b8ade0d8c9aa) | Method |
| [`isValid`](#api-a196f3245943e8e7) | Property |
| [`order`](#api-943ddb34a09a19fa) | Property |

## Type declaration

<a id="api-cbb7274ff8371a01"></a>
<!-- api: T:Inno.Core.Events.EventHub 9f6f280c1899fa2b454c1ed1b3baaf319682a647f53c5a1e27a132fe2e9bf5ed -->

```csharp
public sealed class Inno.Core.Events.EventHub : System.IDisposable
```

A disposable subscription hub bound to a single `Inno.Core.Events.EventDispatcher`.

**Constraints:** Dispatch visits the concrete event type before its base types. Within each type bucket,
listeners are ordered by priority (descending) and registration order (ascending).
Callbacks execute on the dispatching thread; subscription disposal does not join an active callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L15).

## `Announce`

<a id="api-2f33adb1d30547ed"></a>
<!-- api: M:Inno.Core.Events.EventHub.Announce(Inno.Core.Events.Event) ee3964ab0d03b2fc261a1eb98d79b2058f86253d8e8c02796b982156f1ae7ca1 -->

```csharp
public void Inno.Core.Events.EventHub.Announce(Inno.Core.Events.Event e)
```

Immediately dispatches an event inside this hub only.

**Constraints:** This does not route through the dispatcher hub chain.
Only listeners registered on this hub are invoked.

**Parameter `e`:** The event instance to dispatch locally.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L161).

## `Dispose`

<a id="api-5608de70373d0185"></a>
<!-- api: M:Inno.Core.Events.EventHub.Dispose 3767e5018a15b19fa55b6e8e6f32082b5b25498f3c00fbd5e089c0d733f90507 -->

```csharp
public void Inno.Core.Events.EventHub.Dispose()
```

Disposes this hub and removes all listeners in this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L171).

## ```Listen``1```

<a id="api-11fd3f619ed209fd"></a>
<!-- api: M:Inno.Core.Events.EventHub.Listen``1(System.Action{``0},System.Int32) a350a08e489fccee0420d8a6d5a8f214e6e4f84a4a3843c0309be9ca6280d660 -->

```csharp
public System.IDisposable Inno.Core.Events.EventHub.Listen<TEvent>(System.Action<TEvent> handler, int priority = 0) where TEvent : Inno.Core.Events.Event
```

Subscribes a listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier;
a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that unsubscribes this listener when disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L91).

## ```ListenOnce``1```

<a id="api-7264b8ade0d8c9aa"></a>
<!-- api: M:Inno.Core.Events.EventHub.ListenOnce``1(System.Action{``0},System.Int32) 2c377f1fc4a515dab06d7334b69df0ebfd01664cb3bb1348e13f1c7b19f69793 -->

```csharp
public System.IDisposable Inno.Core.Events.EventHub.ListenOnce<TEvent>(System.Action<TEvent> handler, int priority = 0) where TEvent : Inno.Core.Events.Event
```

Subscribes a one-shot listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier;
a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that can cancel the one-shot listener before it runs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L136).

## `isValid`

<a id="api-a196f3245943e8e7"></a>
<!-- api: P:Inno.Core.Events.EventHub.isValid 1dd1e71f89c09f1385526898e8d36bf086e98c04045c60d6ce97e0fce50fa04c -->

```csharp
public bool Inno.Core.Events.EventHub.isValid { get; }
```

Gets whether this hub is still attached to a live dispatcher and not disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L59).

## `order`

<a id="api-943ddb34a09a19fa"></a>
<!-- api: P:Inno.Core.Events.EventHub.order 48b0be461b1927c3dc1f99e8d90a4a48c400223a16ad407ab4dca6726aebfe37 -->

```csharp
public int Inno.Core.Events.EventHub.order { get; set; }
```

Gets or sets the hub dispatch order. Higher values run earlier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/EventHub.cs#L38).
