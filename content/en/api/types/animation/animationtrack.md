---
title: "AnimationTrack"
description: "Reference for AnimationTrack in Inno.Animation."
uid: api.inno.animation.7c490762dfa1d2c4
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationTrack`

This reference describes `AnimationTrack` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7547c35664d5ad07) | Method |
| [`#ctor`](#api-cdc5e3a93bc8694b) | Method |
| [`bindingId`](#api-2a0be1bc12daf720) | Property |
| [`interpolation`](#api-4f6a7708dfd27688) | Property |
| [`keyframes`](#api-ac4a2fd9cfc81c71) | Property |

## Type declaration

<a id="api-7c490762dfa1d2c4"></a>
<!-- api: T:Inno.Animation.AnimationTrack 51af2255350f68af6599d45b6b4b179c76c5d8c068585712501f93189f080008 -->

```csharp
public sealed class Inno.Animation.AnimationTrack : Inno.Core.Serialization.ISerializable
```

Stores one ordered value track targeting a stable binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L51).

## `#ctor`

<a id="api-7547c35664d5ad07"></a>
<!-- api: M:Inno.Animation.AnimationTrack.#ctor 4eac9a9da59c42cd9012f335b409c25d677e8f26d95624bd8d96070aba96347c -->

```csharp
public Inno.Animation.AnimationTrack.AnimationTrack()
```

Creates an empty track for structured deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L56).

## `#ctor`

<a id="api-cdc5e3a93bc8694b"></a>
<!-- api: M:Inno.Animation.AnimationTrack.#ctor(System.String,Inno.Animation.AnimationInterpolation,System.Collections.Generic.IEnumerable{Inno.Animation.AnimationKeyframe}) 3a01f121bac7ec7b9c10b4cdcbe3ca3da750b90767ae6916a097e4245f419cbe -->

```csharp
public Inno.Animation.AnimationTrack.AnimationTrack(string bindingId, Inno.Animation.AnimationInterpolation interpolation, System.Collections.Generic.IEnumerable<Inno.Animation.AnimationKeyframe> keyframes)
```

Creates one validated animation track.

**Parameter `bindingId`:** Stable target binding identifier.

**Parameter `interpolation`:** Sampling rule between adjacent keyframes.

**Parameter `keyframes`:** Keyframes ordered by non-decreasing clip-local time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L72).

## `bindingId`

<a id="api-2a0be1bc12daf720"></a>
<!-- api: P:Inno.Animation.AnimationTrack.bindingId 8797900857d7e4755a32f79859c695c74e794c3151410026f39dd4c7c3783d28 -->

```csharp
public string Inno.Animation.AnimationTrack.bindingId { get; set; }
```

Gets or sets the stable target binding identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L89).

## `interpolation`

<a id="api-4f6a7708dfd27688"></a>
<!-- api: P:Inno.Animation.AnimationTrack.interpolation 5bc371ab29606e0d60905b7aa8df041d7376750a103025056fdabf07fe1b7f03 -->

```csharp
public Inno.Animation.AnimationInterpolation Inno.Animation.AnimationTrack.interpolation { get; set; }
```

Gets or sets the sampling rule between adjacent keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L95).

## `keyframes`

<a id="api-ac4a2fd9cfc81c71"></a>
<!-- api: P:Inno.Animation.AnimationTrack.keyframes 42a6c6a9e2151105be915374ff53e9abf79d70dd60787ca5b4caa8c3366f2fce -->

```csharp
public Inno.Animation.AnimationKeyframe[] Inno.Animation.AnimationTrack.keyframes { get; set; }
```

Gets or sets ordered keyframes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L101).
