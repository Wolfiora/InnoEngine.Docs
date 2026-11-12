---
title: "AnimationClipAsset"
description: "Reference for AnimationClipAsset in Inno.Animation."
uid: api.inno.animation.runtime-script.16b2de794451a82c
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationClipAsset`

This reference describes `AnimationClipAsset` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f7fbb5611582bac2) | Method |
| [`Validate`](#api-87ed49fe763397ba) | Method |
| [`duration`](#api-1b717741e7d04ded) | Property |
| [`events`](#api-a4fc5ef88ffd4cd5) | Property |
| [`tracks`](#api-4c4279bfe288d4d2) | Property |

## Type declaration

<a id="api-16b2de794451a82c"></a>
<!-- api: T:InnoEngine.Animation.AnimationClipAsset 5af1b0eb96c59be1f35e54ffd3f6523e3ba9aae2ffd9c88551e400ad9ba702ae -->

```csharp
public sealed class InnoEngine.Animation.AnimationClipAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents one imported backend-neutral collection of tracks and event markers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L150).

## `#ctor`

<a id="api-f7fbb5611582bac2"></a>
<!-- api: M:InnoEngine.Animation.AnimationClipAsset.#ctor 8f33b0e9cf56b974c8e9ccd0383c6e9746819c5a95978d5ee593b97d691929ea -->

```csharp
public InnoEngine.Animation.AnimationClipAsset.AnimationClipAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L150).

## `Validate`

<a id="api-87ed49fe763397ba"></a>
<!-- api: M:InnoEngine.Animation.AnimationClipAsset.Validate 1364ee04558f3cb2f336db883619f928eacc8ae8bb8ea37af6cbfec0632aac3f -->

```csharp
public void InnoEngine.Animation.AnimationClipAsset.Validate()
```

Validates the complete clip contract before import or playback.

**Throws `System.InvalidOperationException`:** Thrown when duration, tracks, bindings, values, or event markers are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L176).

## `duration`

<a id="api-1b717741e7d04ded"></a>
<!-- api: P:InnoEngine.Animation.AnimationClipAsset.duration e0fc1ba80e4e32f62a6e41b9d344456848294268180acfc335d00e22731b09b0 -->

```csharp
public float InnoEngine.Animation.AnimationClipAsset.duration { get; set; }
```

Gets or sets the positive clip duration in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L156).

## `events`

<a id="api-a4fc5ef88ffd4cd5"></a>
<!-- api: P:InnoEngine.Animation.AnimationClipAsset.events 7d142e4083ab2bcb886094df68d5ab063fe31e07b71d06a28d016a7f114302da -->

```csharp
public InnoEngine.Animation.AnimationEventMarker[] InnoEngine.Animation.AnimationClipAsset.events { get; set; }
```

Gets or sets ordered stable event markers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L168).

## `tracks`

<a id="api-4c4279bfe288d4d2"></a>
<!-- api: P:InnoEngine.Animation.AnimationClipAsset.tracks d75bc6b3dc393e5cad3f13e9a638ca925f265f4879d72d35dae7a09dd274fba2 -->

```csharp
public InnoEngine.Animation.AnimationTrack[] InnoEngine.Animation.AnimationClipAsset.tracks { get; set; }
```

Gets or sets the ordered backend-neutral value tracks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L162).
