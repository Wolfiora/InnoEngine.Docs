---
title: "AnimationMarkerEvent"
description: "Reference for AnimationMarkerEvent in Inno.Animation."
uid: api.inno.animation.b8e550a4d52aab3e
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationMarkerEvent`

This reference describes `AnimationMarkerEvent` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-960333d128f18bf7) | Method |
| [`eventId`](#api-05bd9f523f25aaba) | Property |
| [`payload`](#api-2e8f0ec8c76f1832) | Property |
| [`playback`](#api-8be183e06f7a3748) | Property |

## Type declaration

<a id="api-b8e550a4d52aab3e"></a>
<!-- api: T:Inno.Animation.AnimationMarkerEvent c465ec72e9db5488dd01500ef69695622c636092d5b7ec7e424270a3a38d34ed -->

```csharp
public sealed class Inno.Animation.AnimationMarkerEvent : Inno.Core.Events.Event
```

Publishes a stable marker reached by one animation playback on the main runtime thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L125).

## `#ctor`

<a id="api-960333d128f18bf7"></a>
<!-- api: M:Inno.Animation.AnimationMarkerEvent.#ctor(Inno.Animation.AnimationPlaybackHandle,System.String,System.ReadOnlyMemory{System.Byte}) 79372b2891ded6b0fbf1d2cdf9665056bb3f981b2bb2f6c91bb0ebc2bce22238 -->

```csharp
public Inno.Animation.AnimationMarkerEvent.AnimationMarkerEvent(Inno.Animation.AnimationPlaybackHandle playback, string eventId, System.ReadOnlyMemory<byte> payload)
```

Creates one immutable animation marker event.

**Parameter `playback`:** Playback that crossed the marker.

**Parameter `eventId`:** Stable marker protocol identifier.

**Parameter `payload`:** Opaque reload-safe marker payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L139).

## `eventId`

<a id="api-05bd9f523f25aaba"></a>
<!-- api: P:Inno.Animation.AnimationMarkerEvent.eventId 1e95aaddfbd7d517e22cdb1cc656bec0732502c49fabd2d79187184ad704ff69 -->

```csharp
public string Inno.Animation.AnimationMarkerEvent.eventId { get; }
```

Gets the stable marker protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L160).

## `payload`

<a id="api-2e8f0ec8c76f1832"></a>
<!-- api: P:Inno.Animation.AnimationMarkerEvent.payload ec5d23cd0abf9e9d6f3ad84fc4280078106f9468d504f43c8999c5edccf02b94 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Animation.AnimationMarkerEvent.payload { get; }
```

Gets an immutable copy of the marker payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L165).

## `playback`

<a id="api-8be183e06f7a3748"></a>
<!-- api: P:Inno.Animation.AnimationMarkerEvent.playback fbe6447ff3dc586cf6a37f6423a10b7ef5b6bfa82e30592e6e53e325a800e082 -->

```csharp
public Inno.Animation.AnimationPlaybackHandle Inno.Animation.AnimationMarkerEvent.playback { get; }
```

Gets the playback that crossed the marker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L155).
