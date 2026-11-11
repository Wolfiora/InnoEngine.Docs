---
title: "MouseButtonReleasedEvent"
description: "Reference for MouseButtonReleasedEvent in Inno.Core.Events."
uid: api.inno.core.events.d1464bd0a3902d28
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `MouseButtonReleasedEvent`

This reference describes `MouseButtonReleasedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.MouseButtonEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2f0a92d05a89cb93) | Method |

## Type declaration

<a id="api-d1464bd0a3902d28"></a>
<!-- api: T:Inno.Core.Events.MouseButtonReleasedEvent 09c311676a16bcd8dba53218b0d9106616ba49b7a0d271aafbec1e9c11a3096d -->

```csharp
public class Inno.Core.Events.MouseButtonReleasedEvent : Inno.Core.Events.MouseButtonEvent
```

Raised when a mouse button is released.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `button`:** The button used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L173).

## `#ctor`

<a id="api-2f0a92d05a89cb93"></a>
<!-- api: M:Inno.Core.Events.MouseButtonReleasedEvent.#ctor(System.UInt32,Inno.Core.Input.MouseButton) c29fdadd8007c4d144d3740d182306fb0b4e3c438e64a715d692711eddf8778a -->

```csharp
public Inno.Core.Events.MouseButtonReleasedEvent.MouseButtonReleasedEvent(uint windowId, Inno.Core.Input.MouseButton button)
```

Raised when a mouse button is released.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `button`:** The button used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L173).
