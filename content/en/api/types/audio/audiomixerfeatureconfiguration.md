---
title: "AudioMixerFeatureConfiguration"
description: "Reference for AudioMixerFeatureConfiguration in Inno.Audio."
uid: api.inno.audio.2e791651a70287c6
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerFeatureConfiguration`

This reference describes `AudioMixerFeatureConfiguration` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-142ced871098d981) | Method |
| [`#ctor`](#api-29ab191b5651ece4) | Method |
| [`enabled`](#api-d048bc1090ce7531) | Property |
| [`featureTypeId`](#api-6e1cca82620e8c5a) | Property |
| [`state`](#api-588d94085bec6dfa) | Property |

## Type declaration

<a id="api-2e791651a70287c6"></a>
<!-- api: T:Inno.Audio.AudioMixerFeatureConfiguration 116a5120452da82f418484bc2064b7f2335d2be7eeb342acf52e551566c74d59 -->

```csharp
public struct Inno.Audio.AudioMixerFeatureConfiguration
```

Stores one ordered mixer feature selection using only stable data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L329).

## `#ctor`

<a id="api-142ced871098d981"></a>
<!-- api: M:Inno.Audio.AudioMixerFeatureConfiguration.#ctor 05d7fdab9af8087c93d7460a0eea3a1bf4ef29d9a40ad26b5dfe2118839c7246 -->

```csharp
public Inno.Audio.AudioMixerFeatureConfiguration.AudioMixerFeatureConfiguration()
```

Creates an empty feature configuration for deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L334).

## `#ctor`

<a id="api-29ab191b5651ece4"></a>
<!-- api: M:Inno.Audio.AudioMixerFeatureConfiguration.#ctor(System.String,System.Nullable{Inno.Audio.SerializedAudioExtensionState},System.Boolean) 3600a20494b462bea7f1c9854ddefb25ed5bef484929f7c23b2958210ec86a31 -->

```csharp
public Inno.Audio.AudioMixerFeatureConfiguration.AudioMixerFeatureConfiguration(string featureTypeId, Inno.Audio.SerializedAudioExtensionState? state = null, bool enabled = true)
```

Creates a mixer feature configuration.

**Parameter `featureTypeId`:** Globally stable feature extension identifier.

**Parameter `state`:** Optional reload-safe feature state.

**Parameter `enabled`:** Whether the feature participates in graph construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L350).

## `enabled`

<a id="api-d048bc1090ce7531"></a>
<!-- api: P:Inno.Audio.AudioMixerFeatureConfiguration.enabled f8f0966c80ab8e45fa1d39bc1828ebc1268bdd6bc870d1e98f53f7f501ab060e -->

```csharp
public bool Inno.Audio.AudioMixerFeatureConfiguration.enabled { get; set; }
```

Gets or sets whether the feature participates in graph construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L377).

## `featureTypeId`

<a id="api-6e1cca82620e8c5a"></a>
<!-- api: P:Inno.Audio.AudioMixerFeatureConfiguration.featureTypeId c19d6ad91b34a3145fd451033e5fd610c715b21bd50b2b3df528a6a7d4c8d6c7 -->

```csharp
public string Inno.Audio.AudioMixerFeatureConfiguration.featureTypeId { get; set; }
```

Gets or sets the stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L365).

## `state`

<a id="api-588d94085bec6dfa"></a>
<!-- api: P:Inno.Audio.AudioMixerFeatureConfiguration.state 15c1aba1f185f6cd1612e9b31963bf0ae1d22857deac63aa108c73aa68a3847c -->

```csharp
public Inno.Audio.SerializedAudioExtensionState Inno.Audio.AudioMixerFeatureConfiguration.state { get; set; }
```

Gets or sets reload-safe feature settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L371).
