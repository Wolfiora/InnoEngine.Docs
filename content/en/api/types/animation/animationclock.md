---
title: "AnimationClock"
description: "Reference for AnimationClock in Inno.Animation."
uid: api.inno.animation.f680ea5bd3dc5443
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationClock`

This reference describes `AnimationClock` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Scaled`](#api-9b0de08d402dc914) | Field |
| [`Unscaled`](#api-27c0765bfa23121b) | Field |

## Type declaration

<a id="api-f680ea5bd3dc5443"></a>
<!-- api: T:Inno.Animation.AnimationClock 1da1eaa8506c4f730e672dd4516236bcda43a0569506927047a09e242820fac0 -->

```csharp
public enum Inno.Animation.AnimationClock : int
```

Selects the session clock used to advance an animation playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L222).

## `Scaled`

<a id="api-9b0de08d402dc914"></a>
<!-- api: F:Inno.Animation.AnimationClock.Scaled 254db32eeaaaf1e7dab874d08911a5ec8b6694229b47f4179302a2c9b43fecb3 -->

```csharp
Inno.Animation.AnimationClock.Scaled = 0
```

Uses scaled simulation time and stops while the session is paused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L227).

## `Unscaled`

<a id="api-27c0765bfa23121b"></a>
<!-- api: F:Inno.Animation.AnimationClock.Unscaled f1532fc6cd96a880de1073a842d9f9eddc2c43e8b09cbc4a2408f20843d22592 -->

```csharp
Inno.Animation.AnimationClock.Unscaled = 1
```

Uses unscaled session time and continues while simulation is paused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L232).
