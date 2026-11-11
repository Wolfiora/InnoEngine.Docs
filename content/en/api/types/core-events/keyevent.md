---
title: "KeyEvent"
description: "Reference for KeyEvent in Inno.Core.Events."
uid: api.inno.core.events.8ab808d0fc044e31
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `KeyEvent`

This reference describes `KeyEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-29547869d1b17333) | Method |
| [`key`](#api-401f01ef0e8b9363) | Property |
| [`modifiers`](#api-63a2c7927e0173b5) | Property |
| [`windowId`](#api-d6aa178df216e587) | Property |

## Type declaration

<a id="api-8ab808d0fc044e31"></a>
<!-- api: T:Inno.Core.Events.KeyEvent af758b230e1c0aaca790b17fb57f7dbc4c87efc87145ec69c4600a4341b1efb2 -->

```csharp
public abstract class Inno.Core.Events.KeyEvent : Inno.Core.Events.Event
```

Base class for keyboard events.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `key`:** The key used to initialize this instance.

**Parameter `modifiers`:** The modifiers used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L19).

## `#ctor`

<a id="api-29547869d1b17333"></a>
<!-- api: M:Inno.Core.Events.KeyEvent.#ctor(System.UInt32,Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier) 333a602d2fdddd898a0dcb4e123f3369da9cdfdb7552796604ad324ec47e6724 -->

```csharp
protected Inno.Core.Events.KeyEvent.KeyEvent(uint windowId, Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None)
```

Base class for keyboard events.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `key`:** The key used to initialize this instance.

**Parameter `modifiers`:** The modifiers used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L19).

## `key`

<a id="api-401f01ef0e8b9363"></a>
<!-- api: P:Inno.Core.Events.KeyEvent.key 74dbb5ac93051c391bb99fe4093d7b77a19bf87a004be3e8168330c99aec62ad -->

```csharp
public Inno.Core.Input.KeyCode Inno.Core.Events.KeyEvent.key { get; }
```

Gets the key code for this keyboard event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L34).

## `modifiers`

<a id="api-63a2c7927e0173b5"></a>
<!-- api: P:Inno.Core.Events.KeyEvent.modifiers 109739343b2508f4d8af78a6f4b75dcb43d17d44323d16275a75708e3542687d -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Core.Events.KeyEvent.modifiers { get; }
```

Gets active key modifiers for this keyboard event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L39).

## `windowId`

<a id="api-d6aa178df216e587"></a>
<!-- api: P:Inno.Core.Events.KeyEvent.windowId 1511fc215d8f88bcd929622f64cfd9d6e586c55c33f2308b56b33bf3c076cb4e -->

```csharp
public uint Inno.Core.Events.KeyEvent.windowId { get; }
```

Gets the source window id for this event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L29).
