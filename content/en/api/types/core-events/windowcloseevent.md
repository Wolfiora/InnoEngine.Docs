---
title: "WindowCloseEvent"
description: "Reference for WindowCloseEvent in Inno.Core.Events."
uid: api.inno.core.events.9f1500929a2ebafc
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `WindowCloseEvent`

This reference describes `WindowCloseEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.WindowEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d9a0263bd114240c) | Method |

## Type declaration

<a id="api-9f1500929a2ebafc"></a>
<!-- api: T:Inno.Core.Events.WindowCloseEvent 40c321fd8c1bb62dcb6f8e4761262a63679108a014df53d62e0262caa5ddf5b5 -->

```csharp
public class Inno.Core.Events.WindowCloseEvent : Inno.Core.Events.WindowEvent
```

Raised when the window requests close.

**Parameter `windowId`:** The window id used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L53).

## `#ctor`

<a id="api-d9a0263bd114240c"></a>
<!-- api: M:Inno.Core.Events.WindowCloseEvent.#ctor(System.UInt32) e81807440f2e05be8385d817731652574a75cfcff4a31566c0f56ffdf0243c0f -->

```csharp
public Inno.Core.Events.WindowCloseEvent.WindowCloseEvent(uint windowId)
```

Raised when the window requests close.

**Parameter `windowId`:** The window id used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L53).
