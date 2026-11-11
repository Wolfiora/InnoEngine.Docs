---
title: "MouseMovedEvent"
description: "Reference for MouseMovedEvent in Inno.Core.Events."
uid: api.inno.core.events.adfe26fd12347d51
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `MouseMovedEvent`

This reference describes `MouseMovedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.MouseEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2f29f5c5dd4c0ecf) | Method |
| [`WithPosition`](#api-99909a545baee917) | Method |
| [`x`](#api-33cf198db5b0b06d) | Property |
| [`y`](#api-2270cf58bd0d5acc) | Property |

## Type declaration

<a id="api-adfe26fd12347d51"></a>
<!-- api: T:Inno.Core.Events.MouseMovedEvent df2bbeebb7086d3a88937fa01c464cc6466896e19e886829939839afba6dccfb -->

```csharp
public class Inno.Core.Events.MouseMovedEvent : Inno.Core.Events.MouseEvent
```

Raised when the cursor moves.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L39).

## `#ctor`

<a id="api-2f29f5c5dd4c0ecf"></a>
<!-- api: M:Inno.Core.Events.MouseMovedEvent.#ctor(System.UInt32,System.Single,System.Single) 3ec0083ab6017747f22ded4730b8fffc15591461a60514a38e025cac2c22b2b1 -->

```csharp
public Inno.Core.Events.MouseMovedEvent.MouseMovedEvent(uint windowId, float x, float y)
```

Creates a pointer movement in platform-window coordinates.

**Parameter `windowId`:** The platform window that produced the movement.

**Parameter `x`:** The horizontal pointer coordinate in logical pixels.

**Parameter `y`:** The vertical pointer coordinate in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L53).

## `WithPosition`

<a id="api-99909a545baee917"></a>
<!-- api: M:Inno.Core.Events.MouseMovedEvent.WithPosition(System.Single,System.Single) 7d4075624596db9af331cd658e911d3e280c1ce865e9cd9d07418d60d9506d35 -->

```csharp
public Inno.Core.Events.MouseMovedEvent Inno.Core.Events.MouseMovedEvent.WithPosition(float x, float y)
```

Repositions this movement without starting a new global consumption lifetime.

**Parameter `x`:** The routed horizontal coordinate in logical pixels.

**Parameter `y`:** The routed vertical coordinate in logical pixels.

**Returns:** A new coordinate representation sharing global consumption with this movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L84).

## `x`

<a id="api-33cf198db5b0b06d"></a>
<!-- api: P:Inno.Core.Events.MouseMovedEvent.x 7029595740764582f2de02047a9428d5261a7c97b9fc67d05fba570ff03a0c14 -->

```csharp
public float Inno.Core.Events.MouseMovedEvent.x { get; }
```

Gets cursor X coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L65).

## `y`

<a id="api-2270cf58bd0d5acc"></a>
<!-- api: P:Inno.Core.Events.MouseMovedEvent.y 0b59f1aa64da2c40cab58a82fb55a2562ae4e67d3123b9a74437343f6f4d9637 -->

```csharp
public float Inno.Core.Events.MouseMovedEvent.y { get; }
```

Gets cursor Y coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/MouseEvents.cs#L70).
