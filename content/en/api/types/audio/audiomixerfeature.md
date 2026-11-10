---
title: "AudioMixerFeature"
description: "Reference for AudioMixerFeature in Inno.Audio."
uid: api.inno.audio.9203a3a141b34c50
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerFeature`

This reference describes `AudioMixerFeature` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-15b3bcc65ea42241) | Method |
| [`Build`](#api-453d668eb17bc417) | Method |

## Type declaration

<a id="api-9203a3a141b34c50"></a>
<!-- api: T:Inno.Audio.AudioMixerFeature d4c72c92845f2259e91aa93d39395d412da82709cb68474855fd75923fef01a2 -->

```csharp
public abstract class Inno.Audio.AudioMixerFeature
```

Contributes optional buses and processors to a candidate mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L87).

## `#ctor`

<a id="api-15b3bcc65ea42241"></a>
<!-- api: M:Inno.Audio.AudioMixerFeature.#ctor 586c09b2dc78336b5e9140734adbbabc6be3aff7acfbf327ec487a53c977627f -->

```csharp
protected Inno.Audio.AudioMixerFeature.AudioMixerFeature()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L87).

## `Build`

<a id="api-453d668eb17bc417"></a>
<!-- api: M:Inno.Audio.AudioMixerFeature.Build(Inno.Audio.AudioMixerBuilder,Inno.Audio.SerializedAudioExtensionState) 5bf2827a4071d3b4d566775d0b9db92ac70fb9c64ce139b5202fd52db4cad2bd -->

```csharp
public abstract void Inno.Audio.AudioMixerFeature.Build(Inno.Audio.AudioMixerBuilder builder, Inno.Audio.SerializedAudioExtensionState state)
```

Adds feature-owned graph declarations on the host control thread.

**Parameter `builder`:** Candidate graph builder valid only for this invocation.

**Parameter `state`:** Reload-safe neutral feature state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L98).
