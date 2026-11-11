---
title: "AnimationInterpolation"
description: "Reference for AnimationInterpolation in Inno.Animation."
uid: api.inno.animation.c489157b888d7fcb
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationInterpolation`

This reference describes `AnimationInterpolation` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Linear`](#api-d45a2b59a8357bc4) | Field |
| [`Step`](#api-b9843b8dcebf6dc5) | Field |

## Type declaration

<a id="api-c489157b888d7fcb"></a>
<!-- api: T:Inno.Animation.AnimationInterpolation e9a732aa5f2b6b3beb5291b23c1f256dcdb45ede376e8f17a081dd5f1aa9cfe1 -->

```csharp
public enum Inno.Animation.AnimationInterpolation : int
```

Selects how values are sampled between adjacent keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L206).

## `Linear`

<a id="api-d45a2b59a8357bc4"></a>
<!-- api: F:Inno.Animation.AnimationInterpolation.Linear c997fd80b9932a14959e97e71038bdd61ba8ad06b6c440a3bfc00844701ac1ec -->

```csharp
Inno.Animation.AnimationInterpolation.Linear = 1
```

Blends linearly between adjacent keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L216).

## `Step`

<a id="api-b9843b8dcebf6dc5"></a>
<!-- api: F:Inno.Animation.AnimationInterpolation.Step 754303bb5ac29910837b27d8b05aa7dc0ceaa3d2498e42c156cab1c0c3c60a58 -->

```csharp
Inno.Animation.AnimationInterpolation.Step = 0
```

Holds the previous keyframe value until the next keyframe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L211).
