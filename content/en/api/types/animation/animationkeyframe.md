---
title: "AnimationKeyframe"
description: "Reference for AnimationKeyframe in Inno.Animation."
uid: api.inno.animation.51d05c27d04423d4
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationKeyframe`

This reference describes `AnimationKeyframe` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-224770cf60bef32c) | Method |
| [`time`](#api-5bd30a951ab23e03) | Property |
| [`value`](#api-4640049ffce8eed4) | Property |

## Type declaration

<a id="api-51d05c27d04423d4"></a>
<!-- api: T:Inno.Animation.AnimationKeyframe 6aa02287d5c6ecdd50585dd1b4e0f91c95fe7966557da3b52412423a766885e6 -->

```csharp
public struct Inno.Animation.AnimationKeyframe
```

Stores one timestamped value inside an animation track.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L14).

## `#ctor`

<a id="api-224770cf60bef32c"></a>
<!-- api: M:Inno.Animation.AnimationKeyframe.#ctor(System.Single,Inno.Animation.AnimationValue) f2e0c925404d277392d991e9712d2e67c0a8cb30443dea7945074e191745e43d -->

```csharp
public Inno.Animation.AnimationKeyframe.AnimationKeyframe(float time, Inno.Animation.AnimationValue value)
```

Creates one animation keyframe.

**Parameter `time`:** Non-negative clip-local time in seconds.

**Parameter `value`:** Value sampled at the keyframe time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L25).

## `time`

<a id="api-5bd30a951ab23e03"></a>
<!-- api: P:Inno.Animation.AnimationKeyframe.time c59022ff007d8b37f90b339824761306ef7b69bbceac7125f8acfef971f0612e -->

```csharp
public float Inno.Animation.AnimationKeyframe.time { get; set; }
```

Gets or sets clip-local time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L39).

## `value`

<a id="api-4640049ffce8eed4"></a>
<!-- api: P:Inno.Animation.AnimationKeyframe.value 7c76956ad07628c39a3e4c9cab84b5139484a13c2ffc920f6297a9d52729f7a0 -->

```csharp
public Inno.Animation.AnimationValue Inno.Animation.AnimationKeyframe.value { get; set; }
```

Gets or sets the sampled value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L45).
