---
title: "AudioClipState"
description: "Reference for AudioClipState in Inno.Audio."
uid: api.inno.audio.2fb88b4ba6c0ce35
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipState`

This reference describes `AudioClipState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Failed`](#api-8b53329f9cd6bea9) | Field |
| [`Preparing`](#api-cbca2904d18dc403) | Field |
| [`Ready`](#api-a41c373692e8e527) | Field |

## Type declaration

<a id="api-2fb88b4ba6c0ce35"></a>
<!-- api: T:Inno.Audio.AudioClipState 63de7cf0377fa700e58ddcc89c349ce16debb420fb2815bd88f22adaa20b090b -->

```csharp
public enum Inno.Audio.AudioClipState : int
```

Describes asynchronous preparation of a backend-owned clip generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipState.cs#L6).

## `Failed`

<a id="api-8b53329f9cd6bea9"></a>
<!-- api: F:Inno.Audio.AudioClipState.Failed 4c9c629fdabf211d8f368521c0adf3abfeceb3902830e3c9dd0a5289cafeb4f8 -->

```csharp
Inno.Audio.AudioClipState.Failed = 2
```

Preparation failed; the clip must be destroyed and callers notified.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipState.cs#L19).

## `Preparing`

<a id="api-cbca2904d18dc403"></a>
<!-- api: F:Inno.Audio.AudioClipState.Preparing ed89646d144827e51e1a9f219ea2f6acc1e76200b36a6408df40a73c7babb7fd -->

```csharp
Inno.Audio.AudioClipState.Preparing = 0
```

Native preparation is still in progress and the clip must not start yet.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipState.cs#L11).

## `Ready`

<a id="api-a41c373692e8e527"></a>
<!-- api: F:Inno.Audio.AudioClipState.Ready 06921b5d603de636b0287970087dc9e4d570ccd7abab87dfca2d34df10160947 -->

```csharp
Inno.Audio.AudioClipState.Ready = 1
```

The retained native data source is ready for playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipState.cs#L15).
