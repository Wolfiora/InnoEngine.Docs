---
title: "AnimationMarkerEvent"
description: "Reference for AnimationMarkerEvent in Inno.Animation."
uid: api.inno.animation.runtime-script.423dce31cf75eff1
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationMarkerEvent`

This reference describes `AnimationMarkerEvent` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-01166c89cac7322d) | Method |
| [`eventId`](#api-7b4fd92ad1f08fee) | Property |
| [`payload`](#api-f05e8d1ac012715a) | Property |
| [`playback`](#api-5eacbb9fd28f1d27) | Property |

## Type declaration

<a id="api-423dce31cf75eff1"></a>
<!-- api: T:InnoEngine.Animation.AnimationMarkerEvent 1264dd6453c3921d14e877304764311fd42a572f75e71e8e21ed60d0295a5dd8 -->

```csharp
public sealed class InnoEngine.Animation.AnimationMarkerEvent : InnoEngine.Events.Event
```

Publishes a stable marker reached by one animation playback on the main runtime thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/IAnimationService.cs#L125).

## `#ctor`

<a id="api-01166c89cac7322d"></a>
<!-- api: M:InnoEngine.Animation.AnimationMarkerEvent.#ctor(InnoEngine.Animation.AnimationPlaybackHandle,System.String,System.ReadOnlyMemory{System.Byte}) 8788595eac2eed4d4592a2e22e91dbee6210fb7bcf016dfcba5ae1f09c5fbaf1 -->

```csharp
public InnoEngine.Animation.AnimationMarkerEvent.AnimationMarkerEvent(InnoEngine.Animation.AnimationPlaybackHandle playback, string eventId, System.ReadOnlyMemory<byte> payload)
```

Creates one immutable animation marker event.

**Parameter `playback`:** Playback that crossed the marker.

**Parameter `eventId`:** Stable marker protocol identifier.

**Parameter `payload`:** Opaque reload-safe marker payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/IAnimationService.cs#L139).

## `eventId`

<a id="api-7b4fd92ad1f08fee"></a>
<!-- api: P:InnoEngine.Animation.AnimationMarkerEvent.eventId d631e6cec9d4e16953a5ee6420cd2a22ba5c7a0f4657beae405e6bdd59ead328 -->

```csharp
public string InnoEngine.Animation.AnimationMarkerEvent.eventId { get; }
```

Gets the stable marker protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/IAnimationService.cs#L160).

## `payload`

<a id="api-f05e8d1ac012715a"></a>
<!-- api: P:InnoEngine.Animation.AnimationMarkerEvent.payload 56220c505df91d15c98478c459c79bad25c66be092433a0f3a529c9327fb4a44 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Animation.AnimationMarkerEvent.payload { get; }
```

Gets an immutable copy of the marker payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/IAnimationService.cs#L165).

## `playback`

<a id="api-5eacbb9fd28f1d27"></a>
<!-- api: P:InnoEngine.Animation.AnimationMarkerEvent.playback 909fb136e7ce782845cd046d18fa8d6b6e8249fa8c6b259d8f711f89fa580671 -->

```csharp
public InnoEngine.Animation.AnimationPlaybackHandle InnoEngine.Animation.AnimationMarkerEvent.playback { get; }
```

Gets the playback that crossed the marker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/IAnimationService.cs#L155).
