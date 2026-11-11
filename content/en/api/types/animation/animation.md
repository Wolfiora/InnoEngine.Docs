---
title: "Animation"
description: "Reference for Animation in Inno.Animation."
uid: api.inno.animation.b9e99d263b9f29a1
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `Animation`

This reference describes `Animation` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Pause`](#api-d6898af03783ed01) | Method |
| [`Play`](#api-b8b4c8ff4639ca46) | Method |
| [`Play`](#api-d09b1f146067f302) | Method |
| [`Resume`](#api-df14354916f4e7e7) | Method |
| [`Seek`](#api-67496c29376285f1) | Method |
| [`Stop`](#api-7f0590922735ab7f) | Method |
| [`TryGetState`](#api-90ca906e0bf6f9f4) | Method |

## Type declaration

<a id="api-b9e99d263b9f29a1"></a>
<!-- api: T:Inno.Animation.Animation d6b807f61686173b91b4af76f07dbab0cccff7f3d7a23ed4ff317b174fdb5a1d -->

```csharp
public static class Inno.Animation.Animation
```

Provides script-friendly animation control through the current runtime context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L39).

## `Pause`

<a id="api-d6898af03783ed01"></a>
<!-- api: M:Inno.Animation.Animation.Pause(Inno.Animation.AnimationPlaybackHandle) 9790f3506faaccf1966d6d6f25b498bf50912fca9538dd3b7c5c598ca4708aca -->

```csharp
public static bool Inno.Animation.Animation.Pause(Inno.Animation.AnimationPlaybackHandle handle)
```

Pauses one live playback.

**Parameter `handle`:** Playback handle to pause.

**Returns:** `true` when the state changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L101).

## `Play`

<a id="api-b8b4c8ff4639ca46"></a>
<!-- api: M:Inno.Animation.Animation.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget,Inno.Animation.AnimationPlayOptions) 2022bf28cd3b7a227c1ea95b93035d613f88655513791b129c14b025d91bcb87 -->

```csharp
public static Inno.Animation.AnimationPlaybackHandle Inno.Animation.Animation.Play(Inno.Animation.AnimationClipAsset clip, Inno.Animation.AnimationTarget target, Inno.Animation.AnimationPlayOptions options)
```

Starts one clip with explicit playback options.

**Parameter `clip`:** Valid imported animation clip.

**Parameter `options`:** Playback and blend options.

**Returns:** A generation-checked playback handle.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L74).

## `Play`

<a id="api-d09b1f146067f302"></a>
<!-- api: M:Inno.Animation.Animation.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget) 8badee5bc29268c0e3b224ef836a36a98583c4e1abf51de9c28178e1432af357 -->

```csharp
public static Inno.Animation.AnimationPlaybackHandle Inno.Animation.Animation.Play(Inno.Animation.AnimationClipAsset clip, Inno.Animation.AnimationTarget target)
```

Starts one clip with default playback options.

**Parameter `clip`:** Valid imported animation clip.

**Returns:** A generation-checked playback handle.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L53).

## `Resume`

<a id="api-df14354916f4e7e7"></a>
<!-- api: M:Inno.Animation.Animation.Resume(Inno.Animation.AnimationPlaybackHandle) d39670da36d3e1fc8816028cf96d299576550358aca8306e1429e55da64ed298 -->

```csharp
public static bool Inno.Animation.Animation.Resume(Inno.Animation.AnimationPlaybackHandle handle)
```

Resumes one paused playback.

**Parameter `handle`:** Playback handle to resume.

**Returns:** `true` when the state changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L112).

## `Seek`

<a id="api-67496c29376285f1"></a>
<!-- api: M:Inno.Animation.Animation.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single) 9be9b4921b589d66df8c4ef2732fd3c6b6bc25df5486ef0282bb44d6be21b5bc -->

```csharp
public static bool Inno.Animation.Animation.Seek(Inno.Animation.AnimationPlaybackHandle handle, float time)
```

Seeks one live playback to a clip-local time.

**Parameter `handle`:** Playback handle to seek.

**Parameter `time`:** Clip-local time in seconds.

**Returns:** `true` when the handle was live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L126).

## `Stop`

<a id="api-7f0590922735ab7f"></a>
<!-- api: M:Inno.Animation.Animation.Stop(Inno.Animation.AnimationPlaybackHandle) f6c109ef29eee1fd7a4d5b74d00569808f213dc3608a3756fc71c98e65da79a3 -->

```csharp
public static bool Inno.Animation.Animation.Stop(Inno.Animation.AnimationPlaybackHandle handle)
```

Stops one live playback.

**Parameter `handle`:** Playback handle to stop.

**Returns:** `true` when the playback was live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L90).

## `TryGetState`

<a id="api-90ca906e0bf6f9f4"></a>
<!-- api: M:Inno.Animation.Animation.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@) dc509a7d28777738faf0fcd2025d587166c681620f5e5f9f8dd61879e22d4655 -->

```csharp
public static bool Inno.Animation.Animation.TryGetState(Inno.Animation.AnimationPlaybackHandle handle, out Inno.Animation.AnimationPlaybackState state, out float time)
```

Tries to read one live playback's state and position.

**Parameter `handle`:** Playback handle to query.

**Parameter `state`:** Receives current playback state.

**Parameter `time`:** Receives clip-local time in seconds.

**Returns:** `true` when the handle was live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L146).
