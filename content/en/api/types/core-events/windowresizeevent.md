---
title: "WindowResizeEvent"
description: "Reference for WindowResizeEvent in Inno.Core.Events."
uid: api.inno.core.events.1cee4d0bebb4c419
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `WindowResizeEvent`

This reference describes `WindowResizeEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.WindowEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-abe19d29747662fc) | Method |
| [`height`](#api-4db9d46f31059f74) | Property |
| [`width`](#api-f2c18bf6f30cbaf5) | Property |

## Type declaration

<a id="api-1cee4d0bebb4c419"></a>
<!-- api: T:Inno.Core.Events.WindowResizeEvent 8097715848d5a3ebe25c1616cc7ae4c2ede2c578e3fb520dffd4035787c32ab4 -->

```csharp
public class Inno.Core.Events.WindowResizeEvent : Inno.Core.Events.WindowEvent
```

Raised when the window size changes.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L30).

## `#ctor`

<a id="api-abe19d29747662fc"></a>
<!-- api: M:Inno.Core.Events.WindowResizeEvent.#ctor(System.UInt32,System.Int32,System.Int32) b686cc0d1b15b43c3d7bdef6df23e5212c10bf5629e2f0e92b453b1158b132a2 -->

```csharp
public Inno.Core.Events.WindowResizeEvent.WindowResizeEvent(uint windowId, int width, int height)
```

Raised when the window size changes.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L30).

## `height`

<a id="api-4db9d46f31059f74"></a>
<!-- api: P:Inno.Core.Events.WindowResizeEvent.height ba5294ecc398c1e8d21d7f6ac13a4542782203056a1f2aa66948bed7a7107131 -->

```csharp
public int Inno.Core.Events.WindowResizeEvent.height { get; }
```

Gets the new window height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L44).

## `width`

<a id="api-f2c18bf6f30cbaf5"></a>
<!-- api: P:Inno.Core.Events.WindowResizeEvent.width 24c07a8870e865eacf175103e8677393631aec43ebdb43f1502a776a8bf35f2b -->

```csharp
public int Inno.Core.Events.WindowResizeEvent.width { get; }
```

Gets the new window width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/WindowEvents.cs#L39).
