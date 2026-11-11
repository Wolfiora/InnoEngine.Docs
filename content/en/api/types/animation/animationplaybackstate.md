---
title: "AnimationPlaybackState"
description: "Reference for AnimationPlaybackState in Inno.Animation."
uid: api.inno.animation.c2f9142596ef24b5
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationPlaybackState`

This reference describes `AnimationPlaybackState` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Paused`](#api-99f1c126c55d9bd1) | Field |
| [`Playing`](#api-5040e1831eddf702) | Field |

## Type declaration

<a id="api-c2f9142596ef24b5"></a>
<!-- api: T:Inno.Animation.AnimationPlaybackState 71a65c88fe1dc2d6f086dd9c229fa9762f5e26b9ee6bd066d76b5c62a89eb7e6 -->

```csharp
public enum Inno.Animation.AnimationPlaybackState : int
```

Describes the observable lifecycle of one animation playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L238).

## `Paused`

<a id="api-99f1c126c55d9bd1"></a>
<!-- api: F:Inno.Animation.AnimationPlaybackState.Paused 7043ad35b4165d2e1cde55f5c307cd06c671438d47deef17443b33faa6d91aec -->

```csharp
Inno.Animation.AnimationPlaybackState.Paused = 1
```

The playback retains its position without advancing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L248).

## `Playing`

<a id="api-5040e1831eddf702"></a>
<!-- api: F:Inno.Animation.AnimationPlaybackState.Playing 3986bc9afab9576f9380606bc3cf4951d348ca720490803571f2b0615b038cfa -->

```csharp
Inno.Animation.AnimationPlaybackState.Playing = 0
```

The playback is advancing and producing samples.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L243).
