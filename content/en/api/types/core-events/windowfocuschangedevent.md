---
title: "WindowFocusChangedEvent"
description: "Reference for WindowFocusChangedEvent in Inno.Core.Events."
uid: api.inno.core.events.80846ba3b33ed42f
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `WindowFocusChangedEvent`

This reference describes `WindowFocusChangedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.WindowEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6b78d61618b4c672) | Method |
| [`isFocused`](#api-6e902ef54ab2e3b8) | Property |

## Type declaration

<a id="api-80846ba3b33ed42f"></a>
<!-- api: T:Inno.Core.Events.WindowFocusChangedEvent 78cb171a184ab89cb3988e0b3393c8ca3f0071ddb2d160ac75c5c1625d252924 -->

```csharp
public class Inno.Core.Events.WindowFocusChangedEvent : Inno.Core.Events.WindowEvent
```

Raised when a window gains or loses input focus.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `isFocused`:** The is focused used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L66).

## `#ctor`

<a id="api-6b78d61618b4c672"></a>
<!-- api: M:Inno.Core.Events.WindowFocusChangedEvent.#ctor(System.UInt32,System.Boolean) 263a7e664260ebec3fbcf64063418bf1a2c701202224b7f0b74dc43da8ca61e4 -->

```csharp
public Inno.Core.Events.WindowFocusChangedEvent.WindowFocusChangedEvent(uint windowId, bool isFocused)
```

Raised when a window gains or loses input focus.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `isFocused`:** The is focused used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L66).

## `isFocused`

<a id="api-6e902ef54ab2e3b8"></a>
<!-- api: P:Inno.Core.Events.WindowFocusChangedEvent.isFocused fee31c3cb6e0fd7fc2e9dcbd6b2c3143ea9ba567d664971901e3cd9cbadf3063 -->

```csharp
public bool Inno.Core.Events.WindowFocusChangedEvent.isFocused { get; }
```

Gets whether the window has input focus after the change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L74).
