---
title: "IAnimationService"
description: "Reference for IAnimationService in Inno.Animation."
uid: api.inno.animation.4df2550beb612b3e
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `IAnimationService`

This reference describes `IAnimationService` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Pause`](#api-a5ccf2b40eae7627) | Method |
| [`Play`](#api-479c69b68039895d) | Method |
| [`Play`](#api-0d00d295f70e211c) | Method |
| [`Resume`](#api-11a92db2741fb287) | Method |
| [`Seek`](#api-c8083f39b4ba1cf5) | Method |
| [`Stop`](#api-595259a7b7d97f5c) | Method |
| [`TryGetState`](#api-4b9063aa09178baf) | Method |

## Type declaration

<a id="api-4df2550beb612b3e"></a>
<!-- api: T:Inno.Animation.IAnimationService 2f1719d6b13c058c14e2c229931960b0e7d4ebe8b469f74ac55476b5d60deaf2 -->

```csharp
public interface Inno.Animation.IAnimationService
```

Defines backend-neutral animation playback and control for one isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L10).

## `Pause`

<a id="api-a5ccf2b40eae7627"></a>
<!-- api: M:Inno.Animation.IAnimationService.Pause(Inno.Animation.AnimationPlaybackHandle) 8279b796afad8ac0ce6a273eb6abb656307062626531f4e6b37132e0ef2eb6f6 -->

```csharp
bool Inno.Animation.IAnimationService.Pause(Inno.Animation.AnimationPlaybackHandle handle)
```

Pauses one live playback at its current position.

**Parameter `handle`:** Playback handle from this runtime generation.

**Returns:** `true` when the playback state changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L70).

## `Play`

<a id="api-479c69b68039895d"></a>
<!-- api: M:Inno.Animation.IAnimationService.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget,Inno.Animation.AnimationPlayOptions) 43151d586a1e09b474768b6fe94df1a61f18e850dbe44b5c469c3d83bd171ac5 -->

```csharp
Inno.Animation.AnimationPlaybackHandle Inno.Animation.IAnimationService.Play(Inno.Animation.AnimationClipAsset clip, Inno.Animation.AnimationTarget target, Inno.Animation.AnimationPlayOptions options)
```

Starts one clip with explicit playback options.

**Parameter `clip`:** Valid imported animation clip.

**Parameter `options`:** Playback clock, speed, blend, layer, and looping policy.

**Returns:** A generation-checked playback handle.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L44).

## `Play`

<a id="api-0d00d295f70e211c"></a>
<!-- api: M:Inno.Animation.IAnimationService.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget) 201bcd5adcec25db1baf1ed0806e92b44885ca6625ebac6644cfc7f7317ca395 -->

```csharp
Inno.Animation.AnimationPlaybackHandle Inno.Animation.IAnimationService.Play(Inno.Animation.AnimationClipAsset clip, Inno.Animation.AnimationTarget target)
```

Starts one clip with default playback options.

**Parameter `clip`:** Valid imported animation clip.

**Returns:** A generation-checked playback handle.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L24).

## `Resume`

<a id="api-11a92db2741fb287"></a>
<!-- api: M:Inno.Animation.IAnimationService.Resume(Inno.Animation.AnimationPlaybackHandle) 61deb8ad5785be0dfb66783af9c1290411626b3124e4b3f50cfc7183d06ded87 -->

```csharp
bool Inno.Animation.IAnimationService.Resume(Inno.Animation.AnimationPlaybackHandle handle)
```

Resumes one paused playback.

**Parameter `handle`:** Playback handle from this runtime generation.

**Returns:** `true` when the playback state changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L81).

## `Seek`

<a id="api-c8083f39b4ba1cf5"></a>
<!-- api: M:Inno.Animation.IAnimationService.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single) 80e68f1553dfb9476555abddc9a984a08e1b18f0d6c826b1cda7fea659af8579 -->

```csharp
bool Inno.Animation.IAnimationService.Seek(Inno.Animation.AnimationPlaybackHandle handle, float time)
```

Seeks one live playback to a clip-local time.

**Parameter `handle`:** Playback handle from this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds, clamped to the clip duration.

**Returns:** `true` when the handle was live and the position was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L95).

## `Stop`

<a id="api-595259a7b7d97f5c"></a>
<!-- api: M:Inno.Animation.IAnimationService.Stop(Inno.Animation.AnimationPlaybackHandle) 8a91c7e19cebcaae6a21dcaf0af8c7bcaf1dd7cf8d2ddd8d652ca3b2bd79b474 -->

```csharp
bool Inno.Animation.IAnimationService.Stop(Inno.Animation.AnimationPlaybackHandle handle)
```

Stops one live playback.

**Parameter `handle`:** Playback handle from this runtime generation.

**Returns:** `true` when a live playback was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L59).

## `TryGetState`

<a id="api-4b9063aa09178baf"></a>
<!-- api: M:Inno.Animation.IAnimationService.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@) d3a25d7d2f5a6fd09fe5e68f1b50434ddc1bcf78d7b461c9296c713715381d4c -->

```csharp
bool Inno.Animation.IAnimationService.TryGetState(Inno.Animation.AnimationPlaybackHandle handle, out Inno.Animation.AnimationPlaybackState state, out float time)
```

Tries to read one live playback's state and position.

**Parameter `handle`:** Playback handle from this runtime generation.

**Parameter `state`:** Receives the current playback state when successful.

**Parameter `time`:** Receives the current clip-local time in seconds when successful.

**Returns:** `true` when the handle still identifies a live playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/IAnimationService.cs#L115).
