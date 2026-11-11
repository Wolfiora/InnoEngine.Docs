---
title: "AnimationRuntime"
description: "Reference for AnimationRuntime in Inno.Animation.Runtime."
uid: api.inno.animation.runtime.028be9400d36b72c
kind: api
owners:
  - Inno.Animation.Runtime
apiSurface: source-clr
contracts:
  - project.inno-animation-runtime#playback-and-update-contract
---
# `AnimationRuntime`

This reference describes `AnimationRuntime` in `Inno.Animation.Runtime`. Read the [shared contract](../../projects/inno-animation-runtime.md#playback-and-update-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.Animation.IAnimationService`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c1abd74e3789f3f0) | Method |
| [`OnBeginFrame`](#api-1f2db781a5213e67) | Method |
| [`OnStop`](#api-d76aefb233556585) | Method |
| [`OnUpdate`](#api-50b547607bac6e16) | Method |
| [`Pause`](#api-3c03999d1b84de42) | Method |
| [`Play`](#api-cc0b395c8dabc05d) | Method |
| [`Play`](#api-f520bc9ddbac7e13) | Method |
| [`Resume`](#api-da5e7b9adda2be5a) | Method |
| [`Seek`](#api-ed5dcb613bc10795) | Method |
| [`Stop`](#api-bcc3fa767505e5fd) | Method |
| [`TryGetState`](#api-df27ce2477a1315e) | Method |
| [`Update`](#api-3a480106556a46b2) | Method |
| [`playbackCount`](#api-50486b5694c26a0c) | Property |
| [`rejectedPlaybacks`](#api-fd23e244e0d02f17) | Property |

## Type declaration

<a id="api-028be9400d36b72c"></a>
<!-- api: T:Inno.Animation.Runtime.AnimationRuntime 4c049375eb40227dc58278b71c68332880c0d7a050c87818f7f9903ff88d7c26 -->

```csharp
public sealed class Inno.Animation.Runtime.AnimationRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.Animation.IAnimationService
```

Owns animation playback, sampling, blending, and marker dispatch for one runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L14).

## `#ctor`

<a id="api-c1abd74e3789f3f0"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.#ctor(Inno.Core.Events.EventDispatcher,Inno.Animation.IAnimationBindingSink,System.Int32) 102e1505c7eaf118c06bb9acda81ed97770d43e0afef0ae65391b0e539c2b379 -->

```csharp
public Inno.Animation.Runtime.AnimationRuntime.AnimationRuntime(Inno.Core.Events.EventDispatcher events, Inno.Animation.IAnimationBindingSink bindings, int maxPlaybacks = 16384)
```

Creates one isolated animation runtime generation.

**Parameter `events`:** Session event dispatcher that receives marker events.

**Parameter `bindings`:** Required output boundary; sampling-only playback must use an explicit sampling target.

**Parameter `maxPlaybacks`:** Positive active playback capacity; rejection occurs before allocating a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L54).

## `OnBeginFrame`

<a id="api-1f2db781a5213e67"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 29018befaf59a9acc133848414b56c07358a8a476123ae026a694255f8901a91 -->

```csharp
protected override void Inno.Animation.Runtime.AnimationRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Captures snapshots and binds service façades.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L33).

## `OnStop`

<a id="api-d76aefb233556585"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.OnStop b16847755f24969a5f3e47a18389a5126eab5248434fffd63bf93801dd96049d -->

```csharp
protected override void Inno.Animation.Runtime.AnimationRuntime.OnStop()
```

Releases every live playback in this runtime generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L334).

## `OnUpdate`

<a id="api-50b547607bac6e16"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.OnUpdate(Inno.Runtime.Contracts.RuntimeFrame) b79c32a6162acc19a5ca54c7e7bf74605ea75c0569e30d3958336da68301f684 -->

```csharp
protected override void Inno.Animation.Runtime.AnimationRuntime.OnUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances domain state on the variable clock.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L40).

## `Pause`

<a id="api-3c03999d1b84de42"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Pause(Inno.Animation.AnimationPlaybackHandle) 62f8149f1295581fc72e705c4f00bf59d0be3c04a2b39ccb9fa4626a780aeda0 -->

```csharp
public bool Inno.Animation.Runtime.AnimationRuntime.Pause(Inno.Animation.AnimationPlaybackHandle handle)
```

Pauses one live playback without changing its clip-local time.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Returns:** `true` when a playing playback became paused; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L193).

## `Play`

<a id="api-cc0b395c8dabc05d"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget,Inno.Animation.AnimationPlayOptions) ded9b8d9636e5f19b46ba0b8ddd96beed296834f3f49d6d174726acafb50e02b -->

```csharp
public Inno.Animation.AnimationPlaybackHandle Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset clip, Inno.Animation.AnimationTarget target, Inno.Animation.AnimationPlayOptions options)
```

Starts one clip with an explicit clock, looping, speed, layer, and blend policy.

**Parameter `clip`:** Valid clip to sample until completion or explicit stop.

**Parameter `options`:** Playback options validated before a runtime slot is allocated.

**Returns:** A generation-checked handle owned by this runtime.

**Throws `System.ObjectDisposedException`:** Thrown when this runtime has been disposed.

**Throws `System.ArgumentNullException`:** Thrown when `clip` is null.

**Throws `System.ArgumentException`:** Thrown when `options` contains a non-finite or unsupported value.

**Throws `System.InvalidOperationException`:** Thrown when the clip is structurally invalid.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L120).

## `Play`

<a id="api-f520bc9ddbac7e13"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget) 55e3f9dd72bf6f59ce12cc42ad7c9cfbb6db76f397933469cdd64204687c914a -->

```csharp
public Inno.Animation.AnimationPlaybackHandle Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset clip, Inno.Animation.AnimationTarget target)
```

Starts one clip with the runtime's default playback policy.

**Parameter `clip`:** Valid clip to sample until completion or explicit stop.

**Returns:** A generation-checked handle owned by this runtime.

**Throws `System.ObjectDisposedException`:** Thrown when this runtime has been disposed.

**Throws `System.ArgumentNullException`:** Thrown when `clip` is null.

**Throws `System.InvalidOperationException`:** Thrown when the clip is structurally invalid.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L87).

## `Resume`

<a id="api-da5e7b9adda2be5a"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Resume(Inno.Animation.AnimationPlaybackHandle) 7723502804a0dd3b815111528194d2714fad947be18ff4d7496d0de445c3d956 -->

```csharp
public bool Inno.Animation.Runtime.AnimationRuntime.Resume(Inno.Animation.AnimationPlaybackHandle handle)
```

Resumes one paused playback from its current clip-local time.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Returns:** `true` when a paused playback resumed; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L210).

## `Seek`

<a id="api-ed5dcb613bc10795"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Seek(Inno.Animation.AnimationPlaybackHandle,System.Single) 7fa8d634bad0d5f09f668508ed774d7dd3f077ba43fb3a9c2429dfc1f6e2ee35 -->

```csharp
public bool Inno.Animation.Runtime.AnimationRuntime.Seek(Inno.Animation.AnimationPlaybackHandle handle, float time)
```

Seeks one live playback to a clamped clip-local time.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Parameter `time`:** Finite clip-local time in seconds.

**Returns:** `true` when the handle was live and its time was updated; otherwise, `false`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `time` is not finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L233).

## `Stop`

<a id="api-bcc3fa767505e5fd"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Stop(Inno.Animation.AnimationPlaybackHandle) dd197c5cb7a15e946231e7d6617c95c6e869e6fe908765839a7e994f49b3652b -->

```csharp
public bool Inno.Animation.Runtime.AnimationRuntime.Stop(Inno.Animation.AnimationPlaybackHandle handle)
```

Stops and retires one live playback slot.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Returns:** `true` when a live playback was retired; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L175).

## `TryGetState`

<a id="api-df27ce2477a1315e"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.TryGetState(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackState@,System.Single@) 6e9922e86645c85b3a78d852fdf17ae80e40cb8d8939f57a8f1f5b41def9d616 -->

```csharp
public bool Inno.Animation.Runtime.AnimationRuntime.TryGetState(Inno.Animation.AnimationPlaybackHandle handle, out Inno.Animation.AnimationPlaybackState state, out float time)
```

Tries to read the state and clip-local time of one live playback.

**Parameter `handle`:** Playback handle produced by this runtime generation.

**Parameter `state`:** Receives the live playback state, or the default value when the handle is stale.

**Parameter `time`:** Receives clip-local time in seconds, or zero when the handle is stale.

**Returns:** `true` when the handle identifies a live playback; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L260).

## `Update`

<a id="api-3a480106556a46b2"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntime.Update(System.Single,System.Single) a7c6627fdaadfc4ea702cb3e264a07c88088913231b434f483cfd06931d88cf7 -->

```csharp
public void Inno.Animation.Runtime.AnimationRuntime.Update(float scaledDeltaTime, float unscaledDeltaTime)
```

Advances every playback and applies one deterministic blended sample batch.

**Parameter `scaledDeltaTime`:** Non-negative scaled frame interval.

**Parameter `unscaledDeltaTime`:** Non-negative unscaled frame interval.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L285).

## `playbackCount`

<a id="api-50486b5694c26a0c"></a>
<!-- api: P:Inno.Animation.Runtime.AnimationRuntime.playbackCount 54f7b80763c820825bb60bbfa50e388af88aa8663233010d69e72ee439c8fae7 -->

```csharp
public int Inno.Animation.Runtime.AnimationRuntime.playbackCount { get; }
```

Gets active animation playback slots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L159).

## `rejectedPlaybacks`

<a id="api-fd23e244e0d02f17"></a>
<!-- api: P:Inno.Animation.Runtime.AnimationRuntime.rejectedPlaybacks 547bcdd877de2b09a870a22e4875bf045d3e6ed94de2402761aa89457bf99d34 -->

```csharp
public long Inno.Animation.Runtime.AnimationRuntime.rejectedPlaybacks { get; }
```

Gets playback admissions rejected by finite capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntime.cs#L164).
