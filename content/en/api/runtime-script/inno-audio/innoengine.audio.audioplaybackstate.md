---
title: "AudioPlaybackState"
description: "Reference for AudioPlaybackState in Inno.Audio."
uid: api.inno.audio.runtime-script.b6d9f1cb21fabe4f
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioPlaybackState`

This reference describes `AudioPlaybackState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Completed`](#api-c9fdcf1f2e3adbbe) | Field |
| [`Invalid`](#api-ababc92ab876ee68) | Field |
| [`Paused`](#api-33684c9e6ae07858) | Field |
| [`Playing`](#api-8eb4e18d70a06f39) | Field |
| [`Preparing`](#api-1b382fed0cb867f9) | Field |
| [`Scheduled`](#api-5a4f55817ead5eec) | Field |

## Type declaration

<a id="api-b6d9f1cb21fabe4f"></a>
<!-- api: T:InnoEngine.Audio.AudioPlaybackState 4f74cd8072b895282cfcfb345235935c82ec2a923b0934352d15231b5ca90696 -->

```csharp
public enum InnoEngine.Audio.AudioPlaybackState : int
```

Describes the observable lifecycle of one playback voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L61).

## `Completed`

<a id="api-c9fdcf1f2e3adbbe"></a>
<!-- api: F:InnoEngine.Audio.AudioPlaybackState.Completed cdeba8e3c8a37cd2e077295d20547bba79bde81bdafae8b0fed69cf3f7d3799f -->

```csharp
InnoEngine.Audio.AudioPlaybackState.Completed = 4
```

The voice has completed and no longer accepts control commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L86).

## `Invalid`

<a id="api-ababc92ab876ee68"></a>
<!-- api: F:InnoEngine.Audio.AudioPlaybackState.Invalid 96ca5ece0806bce42e2eecbdc71eb89c5eba96764a5f8ca996fa2f2de29e3f27 -->

```csharp
InnoEngine.Audio.AudioPlaybackState.Invalid = 5
```

The handle is invalid, stale, or unknown to the active runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L91).

## `Paused`

<a id="api-33684c9e6ae07858"></a>
<!-- api: F:InnoEngine.Audio.AudioPlaybackState.Paused ac0fb5af7651e8b261ff42cfc32d5471c7524078cfb831877c5b48868494718d -->

```csharp
InnoEngine.Audio.AudioPlaybackState.Paused = 3
```

The voice is paused at its current cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L81).

## `Playing`

<a id="api-8eb4e18d70a06f39"></a>
<!-- api: F:InnoEngine.Audio.AudioPlaybackState.Playing 4fde40829d7d5b9dcc8e81f6578d0ce037a56249219965234c36855a84928b56 -->

```csharp
InnoEngine.Audio.AudioPlaybackState.Playing = 2
```

The voice is actively advancing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L76).

## `Preparing`

<a id="api-1b382fed0cb867f9"></a>
<!-- api: F:InnoEngine.Audio.AudioPlaybackState.Preparing 26eff22c306d0b56749b8f7d904e071870ff437885de5f7fda831e54b1aba059 -->

```csharp
InnoEngine.Audio.AudioPlaybackState.Preparing = 0
```

The voice is waiting for clip preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L66).

## `Scheduled`

<a id="api-5a4f55817ead5eec"></a>
<!-- api: F:InnoEngine.Audio.AudioPlaybackState.Scheduled 8fc1ceeb5fb69d41bc5f3de86f4dca6775fc2edbd301dc141b327b7036c55d1b -->

```csharp
InnoEngine.Audio.AudioPlaybackState.Scheduled = 1
```

The voice is scheduled against the audio clock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L71).
