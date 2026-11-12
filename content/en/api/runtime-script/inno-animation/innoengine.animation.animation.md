---
title: "Animation"
description: "Reference for Animation in Inno.Animation."
uid: api.inno.animation.runtime-script.bdf42f891e1bb03e
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `Animation`

This reference describes `Animation` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Pause`](#api-033c2fdb41aa45a4) | Method |
| [`Play`](#api-f7a512499d814b3b) | Method |
| [`Play`](#api-945a3db5dfc0c38e) | Method |
| [`Resume`](#api-517e1f048e16b61c) | Method |
| [`Seek`](#api-982a96b579caee04) | Method |
| [`Stop`](#api-67fc2a750a662fa5) | Method |
| [`TryGetState`](#api-197acb5f28c0810f) | Method |

## Type declaration

<a id="api-bdf42f891e1bb03e"></a>
<!-- api: T:InnoEngine.Animation.Animation b68fac183928897f97b90dfdb47b9e562cbce0a6129bae3d37b3ab1ea56a74d9 -->

```csharp
public static class InnoEngine.Animation.Animation
```

Provides script-friendly animation control through the current runtime context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L39).

## `Pause`

<a id="api-033c2fdb41aa45a4"></a>
<!-- api: M:InnoEngine.Animation.Animation.Pause(InnoEngine.Animation.AnimationPlaybackHandle) 0a303b463cc8262af8922411581367ae085e7571b16b93dff1ab741b6548ee9a -->

```csharp
public static bool InnoEngine.Animation.Animation.Pause(InnoEngine.Animation.AnimationPlaybackHandle handle)
```

Pauses one live playback.

**Parameter `handle`:** Playback handle to pause.

**Returns:** `true` when the state changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L101).

## `Play`

<a id="api-f7a512499d814b3b"></a>
<!-- api: M:InnoEngine.Animation.Animation.Play(InnoEngine.Animation.AnimationClipAsset,InnoEngine.Animation.AnimationTarget,InnoEngine.Animation.AnimationPlayOptions) ae043071cbd8e82cdde7378d551d9066f4ba8ab7caade47d26e2d639be711895 -->

```csharp
public static InnoEngine.Animation.AnimationPlaybackHandle InnoEngine.Animation.Animation.Play(InnoEngine.Animation.AnimationClipAsset clip, InnoEngine.Animation.AnimationTarget target, InnoEngine.Animation.AnimationPlayOptions options)
```

Starts one clip with explicit playback options.

**Parameter `clip`:** Valid imported animation clip.

**Parameter `options`:** Playback and blend options.

**Returns:** A generation-checked playback handle.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L74).

## `Play`

<a id="api-945a3db5dfc0c38e"></a>
<!-- api: M:InnoEngine.Animation.Animation.Play(InnoEngine.Animation.AnimationClipAsset,InnoEngine.Animation.AnimationTarget) 4f316db014ba419d4df3b6992d4ced4599b1cd755e82d6ef50eeb85406c025dc -->

```csharp
public static InnoEngine.Animation.AnimationPlaybackHandle InnoEngine.Animation.Animation.Play(InnoEngine.Animation.AnimationClipAsset clip, InnoEngine.Animation.AnimationTarget target)
```

Starts one clip with default playback options.

**Parameter `clip`:** Valid imported animation clip.

**Returns:** A generation-checked playback handle.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L53).

## `Resume`

<a id="api-517e1f048e16b61c"></a>
<!-- api: M:InnoEngine.Animation.Animation.Resume(InnoEngine.Animation.AnimationPlaybackHandle) 1dadac6b8c16401929771a2278170183814ed9b612e7de925913c2c8d1bf836e -->

```csharp
public static bool InnoEngine.Animation.Animation.Resume(InnoEngine.Animation.AnimationPlaybackHandle handle)
```

Resumes one paused playback.

**Parameter `handle`:** Playback handle to resume.

**Returns:** `true` when the state changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L112).

## `Seek`

<a id="api-982a96b579caee04"></a>
<!-- api: M:InnoEngine.Animation.Animation.Seek(InnoEngine.Animation.AnimationPlaybackHandle,System.Single) ab9df5bc6c07d62db28a8d9e4e9958eab0bee9dfa679a6da3d8a2540b7e9eace -->

```csharp
public static bool InnoEngine.Animation.Animation.Seek(InnoEngine.Animation.AnimationPlaybackHandle handle, float time)
```

Seeks one live playback to a clip-local time.

**Parameter `handle`:** Playback handle to seek.

**Parameter `time`:** Clip-local time in seconds.

**Returns:** `true` when the handle was live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L126).

## `Stop`

<a id="api-67fc2a750a662fa5"></a>
<!-- api: M:InnoEngine.Animation.Animation.Stop(InnoEngine.Animation.AnimationPlaybackHandle) 597fe76afb1cff87b39fc4e670b689e74990039fe28f9e0780fe1bb1d544a98a -->

```csharp
public static bool InnoEngine.Animation.Animation.Stop(InnoEngine.Animation.AnimationPlaybackHandle handle)
```

Stops one live playback.

**Parameter `handle`:** Playback handle to stop.

**Returns:** `true` when the playback was live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L90).

## `TryGetState`

<a id="api-197acb5f28c0810f"></a>
<!-- api: M:InnoEngine.Animation.Animation.TryGetState(InnoEngine.Animation.AnimationPlaybackHandle,InnoEngine.Animation.AnimationPlaybackState@,System.Single@) 38798f36ef0bf156d91eb81ba62705e1677f3f07c306d6a126d837a1d931e44d -->

```csharp
public static bool InnoEngine.Animation.Animation.TryGetState(InnoEngine.Animation.AnimationPlaybackHandle handle, out InnoEngine.Animation.AnimationPlaybackState state, out float time)
```

Tries to read one live playback's state and position.

**Parameter `handle`:** Playback handle to query.

**Parameter `state`:** Receives current playback state.

**Parameter `time`:** Receives clip-local time in seconds.

**Returns:** `true` when the handle was live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/Animation.cs#L146).
