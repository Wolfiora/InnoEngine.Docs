---
title: "WindowEvent"
description: "Reference for WindowEvent in Inno.Core.Events."
uid: api.inno.core.events.6ef5f9fae8fbf9d7
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `WindowEvent`

This reference describes `WindowEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-301617a3029822f0) | Method |
| [`windowId`](#api-a401cdfcdb0cd936) | Property |

## Type declaration

<a id="api-6ef5f9fae8fbf9d7"></a>
<!-- api: T:Inno.Core.Events.WindowEvent eaf24aca3087e2fed521e7362b7d3f028a8fd801191ac7601c19f052d444e7e6 -->

```csharp
public abstract class Inno.Core.Events.WindowEvent : Inno.Core.Events.Event
```

Base class for window lifecycle events.

**Parameter `windowId`:** The window id used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L9).

## `#ctor`

<a id="api-301617a3029822f0"></a>
<!-- api: M:Inno.Core.Events.WindowEvent.#ctor(System.UInt32) e6e18266729366d82411c31824cd2cc579053bb64bc91139217822f325cabdbe -->

```csharp
protected Inno.Core.Events.WindowEvent.WindowEvent(uint windowId)
```

Base class for window lifecycle events.

**Parameter `windowId`:** The window id used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L9).

## `windowId`

<a id="api-a401cdfcdb0cd936"></a>
<!-- api: P:Inno.Core.Events.WindowEvent.windowId 10b41dee261302de71dfba1c0100dd61b32af6c7c7221fe2d35576cf221c1f0f -->

```csharp
public uint Inno.Core.Events.WindowEvent.windowId { get; }
```

Gets the source window id for this event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L14).
