---
title: "AnimationInterpolation"
description: "Reference for AnimationInterpolation in Inno.Animation."
uid: api.inno.animation.runtime-script.d5c74561b33f1406
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationInterpolation`

This reference describes `AnimationInterpolation` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Linear`](#api-f023e6398fedf5ba) | Field |
| [`Step`](#api-f6755c27a5a0c18c) | Field |

## Type declaration

<a id="api-d5c74561b33f1406"></a>
<!-- api: T:InnoEngine.Animation.AnimationInterpolation c3f88f8f4c28f64ca8772372f617388a2b6e25f6658c7ebaf61fb4d4ee1c3bf1 -->

```csharp
public enum InnoEngine.Animation.AnimationInterpolation : int
```

Selects how values are sampled between adjacent keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L206).

## `Linear`

<a id="api-f023e6398fedf5ba"></a>
<!-- api: F:InnoEngine.Animation.AnimationInterpolation.Linear c15662b75b02e079e1b0b035fb0ef0ff29740163539f77078d99e0867cd4a06b -->

```csharp
InnoEngine.Animation.AnimationInterpolation.Linear = 1
```

Blends linearly between adjacent keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L216).

## `Step`

<a id="api-f6755c27a5a0c18c"></a>
<!-- api: F:InnoEngine.Animation.AnimationInterpolation.Step 03deada9c148c158031840e68d0e75df4346bb857968f95eabb672402830b173 -->

```csharp
InnoEngine.Animation.AnimationInterpolation.Step = 0
```

Holds the previous keyframe value until the next keyframe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L211).
