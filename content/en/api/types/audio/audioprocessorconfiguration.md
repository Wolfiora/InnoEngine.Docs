---
title: "AudioProcessorConfiguration"
description: "Reference for AudioProcessorConfiguration in Inno.Audio."
uid: api.inno.audio.42a67d884ffa0cde
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioProcessorConfiguration`

This reference describes `AudioProcessorConfiguration` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-233be0b61828d033) | Method |
| [`id`](#api-28dfc0e680750a18) | Property |
| [`parameters`](#api-622e7b2365608d5f) | Property |

## Type declaration

<a id="api-42a67d884ffa0cde"></a>
<!-- api: T:Inno.Audio.AudioProcessorConfiguration a9ecaf8c2b580c44c1468f20543aa01da878154cb0f7ec894377719139c50376 -->

```csharp
public sealed class Inno.Audio.AudioProcessorConfiguration
```

Describes one ordered processor instance attached to a mixer bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L48).

## `#ctor`

<a id="api-233be0b61828d033"></a>
<!-- api: M:Inno.Audio.AudioProcessorConfiguration.#ctor(Inno.Audio.AudioProcessorId,System.Collections.Generic.IEnumerable{Inno.Audio.AudioProcessorParameter}) 08f02b4a5fa4eb4a1aee66a4cc71d71a846d19bf9296ea422391b8e23fe07ed3 -->

```csharp
public Inno.Audio.AudioProcessorConfiguration.AudioProcessorConfiguration(Inno.Audio.AudioProcessorId id, System.Collections.Generic.IEnumerable<Inno.Audio.AudioProcessorParameter>? parameters = null)
```

Creates an immutable processor configuration.

**Parameter `id`:** Open processor protocol identifier.

**Parameter `parameters`:** Complete processor parameter set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L61).

## `id`

<a id="api-28dfc0e680750a18"></a>
<!-- api: P:Inno.Audio.AudioProcessorConfiguration.id 71c5cccb3cdb59e6915ca5a6fcaa89612188c38947b090d5e2f37b578fb16e54 -->

```csharp
public Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorConfiguration.id { get; }
```

Gets the open processor protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L76).

## `parameters`

<a id="api-622e7b2365608d5f"></a>
<!-- api: P:Inno.Audio.AudioProcessorConfiguration.parameters 80edf72054fac187b4fc9ddd6a9beda379f12e350fb5c3ba13667605b6911a52 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Audio.AudioProcessorParameter> Inno.Audio.AudioProcessorConfiguration.parameters { get; }
```

Gets the immutable processor parameter set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L81).
