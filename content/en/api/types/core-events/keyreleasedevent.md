---
title: "KeyReleasedEvent"
description: "Reference for KeyReleasedEvent in Inno.Core.Events."
uid: api.inno.core.events.4d9b32847c5f8d30
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `KeyReleasedEvent`

This reference describes `KeyReleasedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.KeyEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f49c881e8849e0ff) | Method |

## Type declaration

<a id="api-4d9b32847c5f8d30"></a>
<!-- api: T:Inno.Core.Events.KeyReleasedEvent d4671a8ac838d4784c2dc32b4e9d525179797d34e2725ea5afb73c93c81297c2 -->

```csharp
public class Inno.Core.Events.KeyReleasedEvent : Inno.Core.Events.KeyEvent
```

Raised when a key is released.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `key`:** The key used to initialize this instance.

**Parameter `modifiers`:** The modifiers used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L83).

## `#ctor`

<a id="api-f49c881e8849e0ff"></a>
<!-- api: M:Inno.Core.Events.KeyReleasedEvent.#ctor(System.UInt32,Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier) 4ce08ee7eec06a7e2b4bab70ae615d8636d307b756ed9bd1de29dfacd1d45efc -->

```csharp
public Inno.Core.Events.KeyReleasedEvent.KeyReleasedEvent(uint windowId, Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None)
```

Raised when a key is released.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `key`:** The key used to initialize this instance.

**Parameter `modifiers`:** The modifiers used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L83).
