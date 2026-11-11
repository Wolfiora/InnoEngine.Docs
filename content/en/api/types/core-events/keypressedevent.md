---
title: "KeyPressedEvent"
description: "Reference for KeyPressedEvent in Inno.Core.Events."
uid: api.inno.core.events.dec0fcde34bd616f
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `KeyPressedEvent`

This reference describes `KeyPressedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.KeyEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f7ff84451fac05f9) | Method |
| [`repeat`](#api-b553287c374a2676) | Property |

## Type declaration

<a id="api-dec0fcde34bd616f"></a>
<!-- api: T:Inno.Core.Events.KeyPressedEvent e26443acde278bd689a92c4e302c3cc3d3f976b03d039f49e9b871a3fb3b92ae -->

```csharp
public class Inno.Core.Events.KeyPressedEvent : Inno.Core.Events.KeyEvent
```

Raised when a key is pressed.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `key`:** The key used to initialize this instance.

**Parameter `modifiers`:** The modifiers used to initialize this instance.

**Parameter `repeat`:** The repeat used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L57).

## `#ctor`

<a id="api-f7ff84451fac05f9"></a>
<!-- api: M:Inno.Core.Events.KeyPressedEvent.#ctor(System.UInt32,Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.Boolean) c48d666f0cac7b3c8ac09c8b1571eb799820a57ce235cf291aa49cedaa4c63da -->

```csharp
public Inno.Core.Events.KeyPressedEvent.KeyPressedEvent(uint windowId, Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None, bool repeat = false)
```

Raised when a key is pressed.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `key`:** The key used to initialize this instance.

**Parameter `modifiers`:** The modifiers used to initialize this instance.

**Parameter `repeat`:** The repeat used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L57).

## `repeat`

<a id="api-b553287c374a2676"></a>
<!-- api: P:Inno.Core.Events.KeyPressedEvent.repeat dd3cbffed12b4c273c2beb9d5795a1ccd3e32e6b6bf71022cab79a662a14b524 -->

```csharp
public bool Inno.Core.Events.KeyPressedEvent.repeat { get; }
```

Gets whether this key press is an auto-repeat event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/KeyEvents.cs#L68).
