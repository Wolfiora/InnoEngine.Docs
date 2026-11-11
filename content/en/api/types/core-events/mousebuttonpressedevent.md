---
title: "MouseButtonPressedEvent"
description: "Reference for MouseButtonPressedEvent in Inno.Core.Events."
uid: api.inno.core.events.ff107d47057fc2d2
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `MouseButtonPressedEvent`

This reference describes `MouseButtonPressedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.MouseButtonEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d3b42d1cec32d458) | Method |

## Type declaration

<a id="api-ff107d47057fc2d2"></a>
<!-- api: T:Inno.Core.Events.MouseButtonPressedEvent fd229e1817aa22f222998fc0ff4f3fffe244174b739d8556ba8f03da5681aab6 -->

```csharp
public class Inno.Core.Events.MouseButtonPressedEvent : Inno.Core.Events.MouseButtonEvent
```

Raised when a mouse button is pressed.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `button`:** The button used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L157).

## `#ctor`

<a id="api-d3b42d1cec32d458"></a>
<!-- api: M:Inno.Core.Events.MouseButtonPressedEvent.#ctor(System.UInt32,Inno.Core.Input.MouseButton) 05ea38cc796955e050853114d597c2586b3df1654c67edda03f5c77efb4795f3 -->

```csharp
public Inno.Core.Events.MouseButtonPressedEvent.MouseButtonPressedEvent(uint windowId, Inno.Core.Input.MouseButton button)
```

Raised when a mouse button is pressed.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `button`:** The button used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L157).
