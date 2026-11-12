---
title: "AnimationTrack"
description: "Reference for AnimationTrack in Inno.Animation."
uid: api.inno.animation.runtime-script.2a2c19ef64ca2683
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationTrack`

This reference describes `AnimationTrack` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e87015d131201c96) | Method |
| [`#ctor`](#api-e8a4e05cdacab86e) | Method |
| [`bindingId`](#api-b90c7ff5c76ab18a) | Property |
| [`interpolation`](#api-47cda764cb7f6673) | Property |
| [`keyframes`](#api-6620622b75891759) | Property |

## Type declaration

<a id="api-2a2c19ef64ca2683"></a>
<!-- api: T:InnoEngine.Animation.AnimationTrack 7d74afe38eff1ccd6380bb7de49e3ca83d815ec8212aba2d6d24b0c2f8aa1405 -->

```csharp
public sealed class InnoEngine.Animation.AnimationTrack : InnoEngine.Serialization.ISerializable
```

Stores one ordered value track targeting a stable binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L51).

## `#ctor`

<a id="api-e87015d131201c96"></a>
<!-- api: M:InnoEngine.Animation.AnimationTrack.#ctor df4fb5e07b2eb81d1ea17761df35c0a804165363156f3fd7c1cb24334f7b1f08 -->

```csharp
public InnoEngine.Animation.AnimationTrack.AnimationTrack()
```

Creates an empty track for structured deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L56).

## `#ctor`

<a id="api-e8a4e05cdacab86e"></a>
<!-- api: M:InnoEngine.Animation.AnimationTrack.#ctor(System.String,InnoEngine.Animation.AnimationInterpolation,System.Collections.Generic.IEnumerable{InnoEngine.Animation.AnimationKeyframe}) 3c7c8bcb96f77795e4ba41a99fb9e577b97bac19b3ce0a0ac9d1f53eb7ccd280 -->

```csharp
public InnoEngine.Animation.AnimationTrack.AnimationTrack(string bindingId, InnoEngine.Animation.AnimationInterpolation interpolation, System.Collections.Generic.IEnumerable<InnoEngine.Animation.AnimationKeyframe> keyframes)
```

Creates one validated animation track.

**Parameter `bindingId`:** Stable target binding identifier.

**Parameter `interpolation`:** Sampling rule between adjacent keyframes.

**Parameter `keyframes`:** Keyframes ordered by non-decreasing clip-local time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L72).

## `bindingId`

<a id="api-b90c7ff5c76ab18a"></a>
<!-- api: P:InnoEngine.Animation.AnimationTrack.bindingId 052e1bc5b1a1e85ccc0716156388c343371d1e03b71158c5919920e9c62d6826 -->

```csharp
public string InnoEngine.Animation.AnimationTrack.bindingId { get; set; }
```

Gets or sets the stable target binding identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L89).

## `interpolation`

<a id="api-47cda764cb7f6673"></a>
<!-- api: P:InnoEngine.Animation.AnimationTrack.interpolation 9c7b9a2821eb821204b3a8a37aeb348f9f219adcef57eac511716a638a480d52 -->

```csharp
public InnoEngine.Animation.AnimationInterpolation InnoEngine.Animation.AnimationTrack.interpolation { get; set; }
```

Gets or sets the sampling rule between adjacent keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L95).

## `keyframes`

<a id="api-6620622b75891759"></a>
<!-- api: P:InnoEngine.Animation.AnimationTrack.keyframes 89517cd16bf1ae84c6f0d856c7ec6b5489db5ecde67c32d619cd9bce86a2451e -->

```csharp
public InnoEngine.Animation.AnimationKeyframe[] InnoEngine.Animation.AnimationTrack.keyframes { get; set; }
```

Gets or sets ordered keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L101).
