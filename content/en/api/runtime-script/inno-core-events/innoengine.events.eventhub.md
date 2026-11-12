---
title: "EventHub"
description: "Reference for EventHub in Inno.Core.Events."
uid: api.inno.core.events.runtime-script.b769708cdced8a07
kind: api
owners:
  - Inno.Core.Events
apiSurface: runtime-script
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
  - manual.scripting.use-script-api
---
# `EventHub`

This reference describes `EventHub` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eeb6754b9faa023f) | Method |
| [`Announce`](#api-b04e65b9386faae5) | Method |
| [`Dispose`](#api-12249ae683669ee9) | Method |
| [```Listen``1```](#api-d15871649fa3bed9) | Method |
| [```ListenOnce``1```](#api-b5239e5130c7705d) | Method |
| [`isValid`](#api-a627064726a6e893) | Property |
| [`order`](#api-ec3c899e808e2ec2) | Property |

## Type declaration

<a id="api-b769708cdced8a07"></a>
<!-- api: T:InnoEngine.Events.EventHub d17e9ce27842b92ed97ae08a57199676f38df75335cc79654bd1afe0b89a0da6 -->

```csharp
public sealed class InnoEngine.Events.EventHub : System.IDisposable
```

A disposable subscription hub bound to a single `InnoEngine.Events.EventDispatcher`.

**Constraints:** Dispatch visits the concrete event type before its base types. Within each type bucket,
listeners are ordered by priority (descending) and registration order (ascending).
Callbacks execute on the dispatching thread; subscription disposal does not join an active callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L15).

## `#ctor`

<a id="api-eeb6754b9faa023f"></a>
<!-- api: M:InnoEngine.Events.EventHub.#ctor b2a3036d459c66e797f511bed25b013d4b4d71a0b4350e820e752750c9e1254a -->

```csharp
public InnoEngine.Events.EventHub.EventHub()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L15).

## `Announce`

<a id="api-b04e65b9386faae5"></a>
<!-- api: M:InnoEngine.Events.EventHub.Announce(InnoEngine.Events.Event) 67be11c23ca65ecec8875a7ed1268c4a0ae907cf6823f64c74ad3ca18ffa6996 -->

```csharp
public void InnoEngine.Events.EventHub.Announce(InnoEngine.Events.Event e)
```

Immediately dispatches an event inside this hub only.

**Constraints:** This does not route through the dispatcher hub chain.
Only listeners registered on this hub are invoked.

**Parameter `e`:** The event instance to dispatch locally.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L161).

## `Dispose`

<a id="api-12249ae683669ee9"></a>
<!-- api: M:InnoEngine.Events.EventHub.Dispose 7097ccbff1cd5242896f84031f7affe7857e97f18ac08c00001bfcc2e6aef6e1 -->

```csharp
public void InnoEngine.Events.EventHub.Dispose()
```

Disposes this hub and removes all listeners in this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L171).

## ```Listen``1```

<a id="api-d15871649fa3bed9"></a>
<!-- api: M:InnoEngine.Events.EventHub.Listen``1(System.Action{``0},System.Int32) 6f71aebdae6da10a1e2c75df4b1997460ad00ec694611a02089aba0be798d3de -->

```csharp
public System.IDisposable InnoEngine.Events.EventHub.Listen<TEvent>(System.Action<TEvent> handler, int priority = 0) where TEvent : InnoEngine.Events.Event
```

Subscribes a listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier;
a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that unsubscribes this listener when disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L91).

## ```ListenOnce``1```

<a id="api-b5239e5130c7705d"></a>
<!-- api: M:InnoEngine.Events.EventHub.ListenOnce``1(System.Action{``0},System.Int32) 9b8ce2cd6376b848a174817184b2ac117ad0d840795c2c00eb17f30bc700753a -->

```csharp
public System.IDisposable InnoEngine.Events.EventHub.ListenOnce<TEvent>(System.Action<TEvent> handler, int priority = 0) where TEvent : InnoEngine.Events.Event
```

Subscribes a one-shot listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier;
a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that can cancel the one-shot listener before it runs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L136).

## `isValid`

<a id="api-a627064726a6e893"></a>
<!-- api: P:InnoEngine.Events.EventHub.isValid 3c7d87ed7661ce85692dd8b36a1fce0f1ea4ae3aca91f2ddd621ac14ee1349ec -->

```csharp
public bool InnoEngine.Events.EventHub.isValid { get; }
```

Gets whether this hub is still attached to a live dispatcher and not disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L59).

## `order`

<a id="api-ec3c899e808e2ec2"></a>
<!-- api: P:InnoEngine.Events.EventHub.order d8956fab94df4f62bcb510c96a0f65031e8ae2d9b1c04431105a2ba5cbc2d6b7 -->

```csharp
public int InnoEngine.Events.EventHub.order { get; set; }
```

Gets or sets the hub dispatch order. Higher values run earlier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/EventHub.cs#L38).
