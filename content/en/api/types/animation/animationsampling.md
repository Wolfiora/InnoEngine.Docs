---
title: "AnimationSampling"
description: "Reference for AnimationSampling in Inno.Animation."
uid: api.inno.animation.5e8dca405fed10d2
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationSampling`

This reference describes `AnimationSampling` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AddWeighted`](#api-3463951b43277bf0) | Method |
| [`CompleteWeighted`](#api-e2dc2ad9fce5b867) | Method |
| [`Interpolate`](#api-88725d1ff3cc1f17) | Method |

## Type declaration

<a id="api-5e8dca405fed10d2"></a>
<!-- api: T:Inno.Animation.AnimationSampling 66be67103dc29dd87938bc60a81485b017e60c38322ad67c884d4de3057560ee -->

```csharp
public static class Inno.Animation.AnimationSampling
```

Provides backend-neutral interpolation and weighted composition used by animation runtimes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationSampling.cs#L6).

## `AddWeighted`

<a id="api-3463951b43277bf0"></a>
<!-- api: M:Inno.Animation.AnimationSampling.AddWeighted(Inno.Animation.AnimationValue,Inno.Animation.AnimationValue,System.Single) 248c5d7ae5d805644641af3cdaea18e5f578b0c8291cc35848122055730a554d -->

```csharp
public static Inno.Animation.AnimationValue Inno.Animation.AnimationSampling.AddWeighted(Inno.Animation.AnimationValue sum, Inno.Animation.AnimationValue value, float weight)
```

Adds one weighted value to an accumulation of the same kind.

**Parameter `sum`:** The current weighted sum.

**Parameter `value`:** The value to accumulate.

**Parameter `weight`:** The blend weight.

**Returns:** The updated sum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationSampling.cs#L45).

## `CompleteWeighted`

<a id="api-e2dc2ad9fce5b867"></a>
<!-- api: M:Inno.Animation.AnimationSampling.CompleteWeighted(Inno.Animation.AnimationValue,System.Single) 64f6c420b26f8240e7581cfe2b120b4f3208bb64e9df65503a3e1def2ac4c56e -->

```csharp
public static Inno.Animation.AnimationValue Inno.Animation.AnimationSampling.CompleteWeighted(Inno.Animation.AnimationValue sum, float inverseWeight)
```

Normalizes a weighted sum, including quaternion normalization.

**Parameter `sum`:** The accumulated sum.

**Parameter `inverseWeight`:** The reciprocal total weight.

**Returns:** The final blended value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationSampling.cs#L64).

## `Interpolate`

<a id="api-88725d1ff3cc1f17"></a>
<!-- api: M:Inno.Animation.AnimationSampling.Interpolate(Inno.Animation.AnimationValue,Inno.Animation.AnimationValue,System.Single) 5f72385cc2d920c0538820c7a1e30bf6e26e77623f5141c7d5cf692320410864 -->

```csharp
public static Inno.Animation.AnimationValue Inno.Animation.AnimationSampling.Interpolate(Inno.Animation.AnimationValue left, Inno.Animation.AnimationValue right, float amount)
```

Interpolates compatible values, normalizing quaternion output.

**Parameter `left`:** The initial value.

**Parameter `right`:** The final value of the same kind.

**Parameter `amount`:** The interpolation fraction, clamped to zero through one.

**Returns:** The interpolated value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationSampling.cs#L23).
