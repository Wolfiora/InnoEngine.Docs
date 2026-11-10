---
title: "AudioDeviceLimits"
description: "Reference for AudioDeviceLimits in Inno.Audio."
uid: api.inno.audio.9e4fc986f1ff8167
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDeviceLimits`

This reference describes `AudioDeviceLimits` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f6ec0dfe4d2b66d4) | Method |
| [`buses`](#api-718837def761de4e) | Property |
| [`clips`](#api-4afc64f4d89fdebb) | Property |
| [`voices`](#api-ad64238ded3766bc) | Property |

## Type declaration

<a id="api-9e4fc986f1ff8167"></a>
<!-- api: T:Inno.Audio.AudioDeviceLimits 488470c25474583f1808279d95612de0b234fe1467558a0c95190bc0607c5b1d -->

```csharp
public sealed class Inno.Audio.AudioDeviceLimits
```

Bounds device-side resource admission independently of the Runtime's smaller gameplay voice budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceLimits.cs#L8).

## `#ctor`

<a id="api-f6ec0dfe4d2b66d4"></a>
<!-- api: M:Inno.Audio.AudioDeviceLimits.#ctor(System.Int32,System.Int32,System.Int32) 064eb0121ce0cd4bfc37ee8e000a9e46ac7fc21827f8234786ba8dd40ba0eef2 -->

```csharp
public Inno.Audio.AudioDeviceLimits.AudioDeviceLimits(int clips = 16384, int voices = 65536, int buses = 4096)
```

Creates immutable positive capacities for one backend generation.

**Parameter `clips`:** Maximum simultaneously retained clip descriptors and native sources.

**Parameter `voices`:** Maximum active voices plus undelivered completions.

**Parameter `buses`:** Maximum simultaneously retained mixer buses.

**Throws `System.ArgumentOutOfRangeException`:** A capacity is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceLimits.cs#L25).

## `buses`

<a id="api-718837def761de4e"></a>
<!-- api: P:Inno.Audio.AudioDeviceLimits.buses e7c4170f529269529a61514eebee1cb61bb1472995c7e3629bb5035a90335b1e -->

```csharp
public int Inno.Audio.AudioDeviceLimits.buses { get; }
```

Gets the maximum retained bus count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceLimits.cs#L49).

## `clips`

<a id="api-4afc64f4d89fdebb"></a>
<!-- api: P:Inno.Audio.AudioDeviceLimits.clips 6875a4912fa81c8289d5cb6fd08ef3858ce60cf7e02891c23272ada625fe737d -->

```csharp
public int Inno.Audio.AudioDeviceLimits.clips { get; }
```

Gets the maximum retained clip count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceLimits.cs#L41).

## `voices`

<a id="api-ad64238ded3766bc"></a>
<!-- api: P:Inno.Audio.AudioDeviceLimits.voices f1c06668db6350ffb86b20eda354664fef24ad2bbe055ed34069aa4f3847fb77 -->

```csharp
public int Inno.Audio.AudioDeviceLimits.voices { get; }
```

Gets the combined voice and undelivered completion capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceLimits.cs#L45).
