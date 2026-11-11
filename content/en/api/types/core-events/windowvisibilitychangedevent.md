---
title: "WindowVisibilityChangedEvent"
description: "Reference for WindowVisibilityChangedEvent in Inno.Core.Events."
uid: api.inno.core.events.14f7c7ecccf57f7c
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `WindowVisibilityChangedEvent`

This reference describes `WindowVisibilityChangedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.WindowEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-06c41522fdae279c) | Method |
| [`isVisible`](#api-285dacb24e48adde) | Property |

## Type declaration

<a id="api-14f7c7ecccf57f7c"></a>
<!-- api: T:Inno.Core.Events.WindowVisibilityChangedEvent 5e2cc2082c88d8ded78e5e1c1b0e54bccf859d9beee610d58a45a4234c9e4434 -->

```csharp
public sealed class Inno.Core.Events.WindowVisibilityChangedEvent : Inno.Core.Events.WindowEvent
```

Reports whether a platform window can present visible content.

**Parameter `windowId`:** The application-local identity of the affected window.

**Parameter `isVisible`:** Whether the window is shown and not minimized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowVisibilityChangedEvent.cs#L12).

## `#ctor`

<a id="api-06c41522fdae279c"></a>
<!-- api: M:Inno.Core.Events.WindowVisibilityChangedEvent.#ctor(System.UInt32,System.Boolean) 0d5f9905fe049831dcd288431b5447b3754fe9f7018708efeeeee2ff12c42686 -->

```csharp
public Inno.Core.Events.WindowVisibilityChangedEvent.WindowVisibilityChangedEvent(uint windowId, bool isVisible)
```

Reports whether a platform window can present visible content.

**Parameter `windowId`:** The application-local identity of the affected window.

**Parameter `isVisible`:** Whether the window is shown and not minimized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowVisibilityChangedEvent.cs#L12).

## `isVisible`

<a id="api-285dacb24e48adde"></a>
<!-- api: P:Inno.Core.Events.WindowVisibilityChangedEvent.isVisible f20dd73fb006390bb9b635c50a1457c4b2453f77026875a79bf03fb204aac21b -->

```csharp
public bool Inno.Core.Events.WindowVisibilityChangedEvent.isVisible { get; }
```

Gets whether the window can present visible content after this notification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowVisibilityChangedEvent.cs#L20).
