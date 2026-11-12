---
title: "AudioMixerFeatureConfiguration"
description: "Reference for AudioMixerFeatureConfiguration in Inno.Audio."
uid: api.inno.audio.runtime-script.f1419fda92711c0f
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerFeatureConfiguration`

This reference describes `AudioMixerFeatureConfiguration` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c547316378ba1f6d) | Method |
| [`enabled`](#api-fb1490f5ee2615f6) | Property |
| [`featureTypeId`](#api-edc7541111d32778) | Property |
| [`state`](#api-eb74b22cef0e529d) | Property |

## Type declaration

<a id="api-f1419fda92711c0f"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerFeatureConfiguration 95693d8f4e0602c13c7439eb277ce7fd9c4bba4c040b4de5fe981113e3e1c81e -->

```csharp
public struct InnoEngine.Audio.AudioMixerFeatureConfiguration
```

Stores one ordered mixer feature selection using only stable data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L329).

## `#ctor`

<a id="api-c547316378ba1f6d"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerFeatureConfiguration.#ctor(System.String,System.Nullable{InnoEngine.Audio.SerializedAudioExtensionState},System.Boolean) b5db4378fad8a686ee49d4e1aa29bf43b18b4dc9008da7f506c475f90fb64a4b -->

```csharp
public InnoEngine.Audio.AudioMixerFeatureConfiguration.AudioMixerFeatureConfiguration(string featureTypeId, InnoEngine.Audio.SerializedAudioExtensionState? state = null, bool enabled = true)
```

Creates a mixer feature configuration.

**Parameter `featureTypeId`:** Globally stable feature extension identifier.

**Parameter `state`:** Optional reload-safe feature state.

**Parameter `enabled`:** Whether the feature participates in graph construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L350).

## `enabled`

<a id="api-fb1490f5ee2615f6"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerFeatureConfiguration.enabled 83650d5afdf266b4567c6064f99f8187ebb7b1a5ebedc14121abfacc0d9b0dff -->

```csharp
public bool InnoEngine.Audio.AudioMixerFeatureConfiguration.enabled { get; set; }
```

Gets or sets whether the feature participates in graph construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L377).

## `featureTypeId`

<a id="api-edc7541111d32778"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerFeatureConfiguration.featureTypeId 336e243c206caa6f5e78b2366db4cc2c930bf37f6b0305697ea7529e0adfae6f -->

```csharp
public string InnoEngine.Audio.AudioMixerFeatureConfiguration.featureTypeId { get; set; }
```

Gets or sets the stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L365).

## `state`

<a id="api-eb74b22cef0e529d"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerFeatureConfiguration.state 7312c5e1206c33a5844de1e16f8750d84d621928a17af6406e34898b399b926a -->

```csharp
public InnoEngine.Audio.SerializedAudioExtensionState InnoEngine.Audio.AudioMixerFeatureConfiguration.state { get; set; }
```

Gets or sets reload-safe feature settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L371).
