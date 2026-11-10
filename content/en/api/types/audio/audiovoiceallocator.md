---
title: "AudioVoiceAllocator"
description: "Reference for AudioVoiceAllocator in Inno.Audio."
uid: api.inno.audio.6f7b86f4a7b0b6f6
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioVoiceAllocator`

This reference describes `AudioVoiceAllocator` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-30f2a6c2e5785ddd) | Method |
| [`Allocate`](#api-fc64a8295a7dae21) | Method |
| [`generation`](#api-c836aa9b9686f622) | Property |

## Type declaration

<a id="api-6f7b86f4a7b0b6f6"></a>
<!-- api: T:Inno.Audio.AudioVoiceAllocator 7ea5a0c52babbb04e44c7b8bdb284c9b23467822629ef3dc20947bce6dd5f2c3 -->

```csharp
public sealed class Inno.Audio.AudioVoiceAllocator
```

Allocates service-owned playback handles without impersonating a backend audio device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceAllocator.cs#L9).

## `#ctor`

<a id="api-30f2a6c2e5785ddd"></a>
<!-- api: M:Inno.Audio.AudioVoiceAllocator.#ctor 1682e7ec36771abfb97b23688ab37ffd2912312b22c89686874f916f19ab99ab -->

```csharp
public Inno.Audio.AudioVoiceAllocator.AudioVoiceAllocator()
```

Creates an isolated playback identity owner.

**Throws `System.InvalidOperationException`:** The process exhausted its owner generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceAllocator.cs#L21).

## `Allocate`

<a id="api-fc64a8295a7dae21"></a>
<!-- api: M:Inno.Audio.AudioVoiceAllocator.Allocate 7fc8cf54b45bdaefdddd10f64c9070b843949a5ef305ccdda3e993d83be139ac -->

```csharp
public Inno.Audio.AudioVoiceHandle Inno.Audio.AudioVoiceAllocator.Allocate()
```

Allocates a unique service handle that cannot alias a different service's playback.

**Returns:** A new opaque playback handle; identities are never reused within this owner.

**Throws `System.OverflowException`:** The owner exhausted its playback identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceAllocator.cs#L43).

## `generation`

<a id="api-c836aa9b9686f622"></a>
<!-- api: P:Inno.Audio.AudioVoiceAllocator.generation 180ef6986400594c7bf985c8f8c64ce4058376022d05dd20c1ce1f578c5b9539 -->

```csharp
public uint Inno.Audio.AudioVoiceAllocator.generation { get; }
```

Gets the process-unique owner generation encoded in every allocated playback handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceAllocator.cs#L32).
