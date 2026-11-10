---
title: "AudioMixer"
description: "Reference for AudioMixer in Inno.Audio."
uid: api.inno.audio.29bf05e26f89624c
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixer`

This reference describes `AudioMixer` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`buses`](#api-35124c322457cf72) | Property |

## Type declaration

<a id="api-29bf05e26f89624c"></a>
<!-- api: T:Inno.Audio.AudioMixer 92855b5b64997e9e1fed179e2edc4a50d47d62387426c7fe649cb10eaada05e0 -->

```csharp
public sealed class Inno.Audio.AudioMixer
```

Contains one validated backend-neutral mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L160).

## `buses`

<a id="api-35124c322457cf72"></a>
<!-- api: P:Inno.Audio.AudioMixer.buses 39056326cfc3ef1977136903168d94945741de96924aeeb58e89e097c70fb500 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Audio.AudioBusDefinition> Inno.Audio.AudioMixer.buses { get; }
```

Gets buses in parent-before-child creation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L172).
