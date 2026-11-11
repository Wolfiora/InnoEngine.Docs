---
title: "MouseScrolledEvent"
description: "Reference for MouseScrolledEvent in Inno.Core.Events."
uid: api.inno.core.events.91d900183403162a
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `MouseScrolledEvent`

This reference describes `MouseScrolledEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.MouseEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cc342e5e55cb5963) | Method |
| [`offsetX`](#api-9232a3e02693b3a2) | Property |
| [`offsetY`](#api-e80a5d2fba274a6d) | Property |

## Type declaration

<a id="api-91d900183403162a"></a>
<!-- api: T:Inno.Core.Events.MouseScrolledEvent 6cac60bd74197855d7e9c5784cffaa5d10e6c745f34387412cb46f70928150f1 -->

```csharp
public class Inno.Core.Events.MouseScrolledEvent : Inno.Core.Events.MouseEvent
```

Raised when mouse wheel scrolls.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `offsetX`:** The offset x used to initialize this instance.

**Parameter `offsetY`:** The offset y used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L111).

## `#ctor`

<a id="api-cc342e5e55cb5963"></a>
<!-- api: M:Inno.Core.Events.MouseScrolledEvent.#ctor(System.UInt32,System.Single,System.Single) 165047fab0d3b1bf82198969c5b0a24c51e288d2659be2dbaf35e7ce6ea14b03 -->

```csharp
public Inno.Core.Events.MouseScrolledEvent.MouseScrolledEvent(uint windowId, float offsetX, float offsetY)
```

Raised when mouse wheel scrolls.

**Parameter `windowId`:** The window id used to initialize this instance.

**Parameter `offsetX`:** The offset x used to initialize this instance.

**Parameter `offsetY`:** The offset y used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L111).

## `offsetX`

<a id="api-9232a3e02693b3a2"></a>
<!-- api: P:Inno.Core.Events.MouseScrolledEvent.offsetX 3568d6f7ffea0afa3dd279737a27a0852607e304db70c3ed2b8cc87e371ac6d0 -->

```csharp
public float Inno.Core.Events.MouseScrolledEvent.offsetX { get; }
```

Gets horizontal scroll offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L120).

## `offsetY`

<a id="api-e80a5d2fba274a6d"></a>
<!-- api: P:Inno.Core.Events.MouseScrolledEvent.offsetY 66e433480a03372493886b1ce95b18df01c8175c34641c52b781f971ecb3eebf -->

```csharp
public float Inno.Core.Events.MouseScrolledEvent.offsetY { get; }
```

Gets vertical scroll offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L125).
