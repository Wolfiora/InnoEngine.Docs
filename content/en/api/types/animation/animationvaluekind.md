---
title: "AnimationValueKind"
description: "Reference for AnimationValueKind in Inno.Animation."
uid: api.inno.animation.4432af756bdc8d39
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationValueKind`

This reference describes `AnimationValueKind` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Quaternion`](#api-e41035cac4d5d471) | Field |
| [`Scalar`](#api-fc06e97f6eef0ddd) | Field |
| [`Vector2`](#api-1d1707114a0e7583) | Field |
| [`Vector3`](#api-0159fb4b5d412da5) | Field |
| [`Vector4`](#api-c9a843b617dce0b3) | Field |

## Type declaration

<a id="api-4432af756bdc8d39"></a>
<!-- api: T:Inno.Animation.AnimationValueKind 50ae905569ff9c8ecd85fec0312f521378c98a3d5203987cdbc79a17f19c194d -->

```csharp
public enum Inno.Animation.AnimationValueKind : int
```

Describes the number and interpretation of components in an animation value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L46).

## `Quaternion`

<a id="api-e41035cac4d5d471"></a>
<!-- api: F:Inno.Animation.AnimationValueKind.Quaternion 0a176f7c9f7d1bb61f9d5c902dec1a55178a9e99e3e76c43172ffae847c2a3ad -->

```csharp
Inno.Animation.AnimationValueKind.Quaternion = 4
```

Four normalized rotation components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L71).

## `Scalar`

<a id="api-fc06e97f6eef0ddd"></a>
<!-- api: F:Inno.Animation.AnimationValueKind.Scalar 9146c7fdbe4da04141cd46a47f813f60bfcbb502a86dd71d23e153291fc921d6 -->

```csharp
Inno.Animation.AnimationValueKind.Scalar = 0
```

A single scalar component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L51).

## `Vector2`

<a id="api-1d1707114a0e7583"></a>
<!-- api: F:Inno.Animation.AnimationValueKind.Vector2 bdc03becff6514f3da1498e85ee2bc4ca8d103ec842ab995ab4eddf665dfcd6b -->

```csharp
Inno.Animation.AnimationValueKind.Vector2 = 1
```

Two independent components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L56).

## `Vector3`

<a id="api-0159fb4b5d412da5"></a>
<!-- api: F:Inno.Animation.AnimationValueKind.Vector3 185c0f9b00899688fe0a2e319a4b48bf401897736d06093026d342c79675a0e1 -->

```csharp
Inno.Animation.AnimationValueKind.Vector3 = 2
```

Three independent components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L61).

## `Vector4`

<a id="api-c9a843b617dce0b3"></a>
<!-- api: F:Inno.Animation.AnimationValueKind.Vector4 03105d5740c7bc5ee8f2fef5732c6527d5e9e2b04f4c954c7c846cd454b4bb05 -->

```csharp
Inno.Animation.AnimationValueKind.Vector4 = 3
```

Four independent components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L66).
