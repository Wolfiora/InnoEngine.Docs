---
title: "MouseButtonEvent"
description: "Reference for MouseButtonEvent in Inno.Core.Events."
uid: api.inno.core.events.a0e1cc49b8a3ff07
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `MouseButtonEvent`

This reference describes `MouseButtonEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.MouseEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8663232c9c743c3c) | Method |
| [`button`](#api-bf79f8c7d26d02bf) | Property |

## Type declaration

<a id="api-a0e1cc49b8a3ff07"></a>
<!-- api: T:Inno.Core.Events.MouseButtonEvent f1db0cd69de39f6aa49065e03231da3b7652ea023ef409acce0d8fced5403947 -->

```csharp
public abstract class Inno.Core.Events.MouseButtonEvent : Inno.Core.Events.MouseEvent
```

Base class for mouse button events.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `button`:** The button used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L137).

## `#ctor`

<a id="api-8663232c9c743c3c"></a>
<!-- api: M:Inno.Core.Events.MouseButtonEvent.#ctor(System.UInt32,Inno.Core.Input.MouseButton) 3218c938c846466a658ad2f8076b531acdef8e1e7d702220a28f697e1147f5b0 -->

```csharp
protected Inno.Core.Events.MouseButtonEvent.MouseButtonEvent(uint windowId, Inno.Core.Input.MouseButton button)
```

Base class for mouse button events.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `button`:** The button used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L137).

## `button`

<a id="api-bf79f8c7d26d02bf"></a>
<!-- api: P:Inno.Core.Events.MouseButtonEvent.button 2f5acde8a977e0e0176e0d3cde2fd8427bdc786bd2d711c1d63c7e632af6eb62 -->

```csharp
public Inno.Core.Input.MouseButton Inno.Core.Events.MouseButtonEvent.button { get; }
```

Gets the mouse button for this event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L145).
