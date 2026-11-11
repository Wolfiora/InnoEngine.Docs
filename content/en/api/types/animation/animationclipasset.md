---
title: "AnimationClipAsset"
description: "Reference for AnimationClipAsset in Inno.Animation."
uid: api.inno.animation.06e3aa1cec85c5c7
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationClipAsset`

This reference describes `AnimationClipAsset` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b10a43817bc3bb7) | Method |
| [`Validate`](#api-2b12ea72cf4b0820) | Method |
| [`duration`](#api-134d75fe45b17de4) | Property |
| [`events`](#api-0d3941c6141b89e6) | Property |
| [`tracks`](#api-2937abcf1cebbc6b) | Property |

## Type declaration

<a id="api-06e3aa1cec85c5c7"></a>
<!-- api: T:Inno.Animation.AnimationClipAsset acfcbf0569320d969a4d64a84f036d5fdb01d1de32da1e064511a337d470d395 -->

```csharp
public sealed class Inno.Animation.AnimationClipAsset : Inno.Assets.AssetObject
```

Represents one imported backend-neutral collection of tracks and event markers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L150).

## `#ctor`

<a id="api-2b10a43817bc3bb7"></a>
<!-- api: M:Inno.Animation.AnimationClipAsset.#ctor 3c19ca3bd1bd1fbb16724829e93a28d52351fa545a2a2fafbe3534626f2e1357 -->

```csharp
public Inno.Animation.AnimationClipAsset.AnimationClipAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L150).

## `Validate`

<a id="api-2b12ea72cf4b0820"></a>
<!-- api: M:Inno.Animation.AnimationClipAsset.Validate facae62e36fd20788399ed031338e2d6837e4f74f6987c9b421adab86e3ad987 -->

```csharp
public void Inno.Animation.AnimationClipAsset.Validate()
```

Validates the complete clip contract before import or playback.

**Throws `System.InvalidOperationException`:** Thrown when duration, tracks, bindings, values, or event markers are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L176).

## `duration`

<a id="api-134d75fe45b17de4"></a>
<!-- api: P:Inno.Animation.AnimationClipAsset.duration d15475ed7ffdb22770ed5892af308b345508c2b173317d27a12122fb17745cbd -->

```csharp
public float Inno.Animation.AnimationClipAsset.duration { get; set; }
```

Gets or sets the positive clip duration in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L156).

## `events`

<a id="api-0d3941c6141b89e6"></a>
<!-- api: P:Inno.Animation.AnimationClipAsset.events dbaecf669e3f3146f96845f2c2444a21600c1fbce1677c3e1cbafe8396e89492 -->

```csharp
public Inno.Animation.AnimationEventMarker[] Inno.Animation.AnimationClipAsset.events { get; set; }
```

Gets or sets ordered stable event markers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L168).

## `tracks`

<a id="api-2937abcf1cebbc6b"></a>
<!-- api: P:Inno.Animation.AnimationClipAsset.tracks 597129f18e36e34a89aa4f80bcd3949a69a841876b2bb25c141f1e48c6449715 -->

```csharp
public Inno.Animation.AnimationTrack[] Inno.Animation.AnimationClipAsset.tracks { get; set; }
```

Gets or sets the ordered backend-neutral value tracks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L162).
