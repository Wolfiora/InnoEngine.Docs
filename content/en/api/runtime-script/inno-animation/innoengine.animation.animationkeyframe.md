---
title: "AnimationKeyframe"
description: "Reference for AnimationKeyframe in Inno.Animation."
uid: api.inno.animation.runtime-script.1f770274015e1266
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationKeyframe`

This reference describes `AnimationKeyframe` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9e2b4986d994c891) | Method |
| [`time`](#api-09e5967383d67ce0) | Property |
| [`value`](#api-a83f08efd22c748a) | Property |

## Type declaration

<a id="api-1f770274015e1266"></a>
<!-- api: T:InnoEngine.Animation.AnimationKeyframe 6765a3951fe496794b6a9ac39cfbd1ef7a580a687a61210248f69f08f21f9722 -->

```csharp
public struct InnoEngine.Animation.AnimationKeyframe
```

Stores one timestamped value inside an animation track.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L14).

## `#ctor`

<a id="api-9e2b4986d994c891"></a>
<!-- api: M:InnoEngine.Animation.AnimationKeyframe.#ctor(System.Single,InnoEngine.Animation.AnimationValue) 07fbb00338f95b24f71b2dc9b9669eae10e7e3c8c1d070abe9ea237042c92353 -->

```csharp
public InnoEngine.Animation.AnimationKeyframe.AnimationKeyframe(float time, InnoEngine.Animation.AnimationValue value)
```

Creates one animation keyframe.

**Parameter `time`:** Non-negative clip-local time in seconds.

**Parameter `value`:** Value sampled at the keyframe time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L25).

## `time`

<a id="api-09e5967383d67ce0"></a>
<!-- api: P:InnoEngine.Animation.AnimationKeyframe.time de17e640570351a9da8f3dd87b7518dbdc4d6b10d5f2277e9b5d270f4578001a -->

```csharp
public float InnoEngine.Animation.AnimationKeyframe.time { get; set; }
```

Gets or sets clip-local time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L39).

## `value`

<a id="api-a83f08efd22c748a"></a>
<!-- api: P:InnoEngine.Animation.AnimationKeyframe.value ef4f05a62dca6becf36284e587dcebbd27a96314c965a41a954f63a1f808b83a -->

```csharp
public InnoEngine.Animation.AnimationValue InnoEngine.Animation.AnimationKeyframe.value { get; set; }
```

Gets or sets the sampled value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L45).
