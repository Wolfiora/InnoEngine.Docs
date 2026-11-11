---
title: "MouseEvent"
description: "Reference for MouseEvent in Inno.Core.Events."
uid: api.inno.core.events.adb09c1c33cdbc84
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `MouseEvent`

This reference describes `MouseEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7702d63c3e765417) | Method |
| [`#ctor`](#api-407705706a657b5f) | Method |
| [`windowId`](#api-30e3370aa3618ae0) | Property |

## Type declaration

<a id="api-adb09c1c33cdbc84"></a>
<!-- api: T:Inno.Core.Events.MouseEvent 2b8964fc8f037fe61a40c996fcefa8e6c75bfc27589ebe2e2e094eb3386feace -->

```csharp
public abstract class Inno.Core.Events.MouseEvent : Inno.Core.Events.Event
```

Base class for mouse events.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L8).

## `#ctor`

<a id="api-7702d63c3e765417"></a>
<!-- api: M:Inno.Core.Events.MouseEvent.#ctor(Inno.Core.Events.MouseEvent) 098223f0a8b32f6ef892e5d30ae486a37d801b5c492a704bc51cf1c546a7994f -->

```csharp
protected Inno.Core.Events.MouseEvent.MouseEvent(Inno.Core.Events.MouseEvent source)
```

Creates a routed mouse event sharing its source's window and global consumption.

**Parameter `source`:** The mouse event whose input lifetime remains authoritative.

**Throws `System.ArgumentNullException`:** The source event is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L27).

## `#ctor`

<a id="api-407705706a657b5f"></a>
<!-- api: M:Inno.Core.Events.MouseEvent.#ctor(System.UInt32) a66995fdc69146818a0bc425ee52a11b9a864b72aca5812db54dc81b72170432 -->

```csharp
protected Inno.Core.Events.MouseEvent.MouseEvent(uint windowId)
```

Creates an independent mouse event belonging to one platform window.

**Parameter `windowId`:** The platform window that produced the event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L16).

## `windowId`

<a id="api-30e3370aa3618ae0"></a>
<!-- api: P:Inno.Core.Events.MouseEvent.windowId a4a6f107d770f5a614bd31fefa9a9e4eb228a7975e6663ca2e32092da75c0280 -->

```csharp
public uint Inno.Core.Events.MouseEvent.windowId { get; }
```

Gets the source window id for this event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L32).
