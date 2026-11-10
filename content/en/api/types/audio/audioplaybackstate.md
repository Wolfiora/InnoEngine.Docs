---
title: "AudioPlaybackState"
description: "Reference for AudioPlaybackState in Inno.Audio."
uid: api.inno.audio.c88e00e350d900ec
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioPlaybackState`

This reference describes `AudioPlaybackState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Completed`](#api-6bb021e331ac5055) | Field |
| [`Invalid`](#api-43f35b931603f3e7) | Field |
| [`Paused`](#api-0c4e40f7294c4fe6) | Field |
| [`Playing`](#api-0de28cc08ee1de4a) | Field |
| [`Preparing`](#api-e42d42feb91cc45b) | Field |
| [`Scheduled`](#api-188d57eef1900cbc) | Field |

## Type declaration

<a id="api-c88e00e350d900ec"></a>
<!-- api: T:Inno.Audio.AudioPlaybackState 0e3354d9e4f78c0f7ec570e215cc93cf0f2cd7cac14222c66bb9f3229588e51d -->

```csharp
public enum Inno.Audio.AudioPlaybackState : int
```

Describes the observable lifecycle of one playback voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L61).

## `Completed`

<a id="api-6bb021e331ac5055"></a>
<!-- api: F:Inno.Audio.AudioPlaybackState.Completed 7f5cd141a58c85cff24a65bd6c3a8bfda5e5f88e686283798bb6e2c4fbc92c17 -->

```csharp
Inno.Audio.AudioPlaybackState.Completed = 4
```

The voice has completed and no longer accepts control commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L86).

## `Invalid`

<a id="api-43f35b931603f3e7"></a>
<!-- api: F:Inno.Audio.AudioPlaybackState.Invalid ca6970f3ca94176ba90e10271f1dbed4a8dcf6580de465b3e3f165fd8e840791 -->

```csharp
Inno.Audio.AudioPlaybackState.Invalid = 5
```

The handle is invalid, stale, or unknown to the active runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L91).

## `Paused`

<a id="api-0c4e40f7294c4fe6"></a>
<!-- api: F:Inno.Audio.AudioPlaybackState.Paused 87d5f1594d5b35a29eabc9452ba28d75898d902f75637b52248b97aedea5b54d -->

```csharp
Inno.Audio.AudioPlaybackState.Paused = 3
```

The voice is paused at its current cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L81).

## `Playing`

<a id="api-0de28cc08ee1de4a"></a>
<!-- api: F:Inno.Audio.AudioPlaybackState.Playing 865aadeeeb04d190a25c660518ed887697ebb65221fb10b9837361802f113884 -->

```csharp
Inno.Audio.AudioPlaybackState.Playing = 2
```

The voice is actively advancing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L76).

## `Preparing`

<a id="api-e42d42feb91cc45b"></a>
<!-- api: F:Inno.Audio.AudioPlaybackState.Preparing e18a97c39560e2760d64fadf090cc112e7971acb091d6f5b825bf4540b1657d5 -->

```csharp
Inno.Audio.AudioPlaybackState.Preparing = 0
```

The voice is waiting for clip preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L66).

## `Scheduled`

<a id="api-188d57eef1900cbc"></a>
<!-- api: F:Inno.Audio.AudioPlaybackState.Scheduled 3d58a3ddef69ac566310c53bec448d449233235c22278e5f214406f6909e1ce4 -->

```csharp
Inno.Audio.AudioPlaybackState.Scheduled = 1
```

The voice is scheduled against the audio clock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L71).
