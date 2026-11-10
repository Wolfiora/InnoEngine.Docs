---
title: "AudioMixerExtension"
description: "Reference for AudioMixerExtension in Inno.Audio."
uid: api.inno.audio.1040644af5a3212e
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerExtension`

This reference describes `AudioMixerExtension` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e02227236760165d) | Method |
| [`Build`](#api-ad1ac2cabe87d645) | Method |

## Type declaration

<a id="api-1040644af5a3212e"></a>
<!-- api: T:Inno.Audio.AudioMixerExtension f5f48962af1ea53f5a6b5ddeac5b29438478b9f657dff463f8c666568d78d299 -->

```csharp
public abstract class Inno.Audio.AudioMixerExtension
```

Builds a base mixer graph on the host control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L67).

## `#ctor`

<a id="api-e02227236760165d"></a>
<!-- api: M:Inno.Audio.AudioMixerExtension.#ctor b023e67d66fd8e22ae4577f11cb0924ae0d954e9594df3e788be1522419764b9 -->

```csharp
protected Inno.Audio.AudioMixerExtension.AudioMixerExtension()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L67).

## `Build`

<a id="api-ad1ac2cabe87d645"></a>
<!-- api: M:Inno.Audio.AudioMixerExtension.Build(Inno.Audio.AudioMixerBuilder,Inno.Audio.SerializedAudioExtensionState) ca060f1b7de16f4ceb564a904ac1b20ec5e74040e8690cde9291fe5384eed495 -->

```csharp
public abstract void Inno.Audio.AudioMixerExtension.Build(Inno.Audio.AudioMixerBuilder builder, Inno.Audio.SerializedAudioExtensionState state)
```

Adds base buses and processors to a candidate mixer graph.

**Parameter `builder`:** Candidate graph builder valid only for this invocation.

**Parameter `state`:** Reload-safe neutral extension state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L78).
