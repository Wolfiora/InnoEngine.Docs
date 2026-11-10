---
title: "AudioProjectSettings"
description: "Reference for AudioProjectSettings in Inno.Audio."
uid: api.inno.audio.336fb995d7479d30
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioProjectSettings`

This reference describes `AudioProjectSettings` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-28a7889d434dbdfd) | Field |
| [`#ctor`](#api-629974c0df19ba2a) | Method |
| [`automaticStreamingThresholdBytes`](#api-68e46ee69c2b7268) | Property |
| [`decodedCacheBudgetBytes`](#api-698b1f828c8e3dae) | Property |
| [`defaultMixer`](#api-d12ebcfdda7e27e1) | Property |
| [`masterVolume`](#api-b0d1c5149f4b3cb0) | Property |
| [`maxVoices`](#api-f5820ce84820e907) | Property |
| [`settingId`](#api-3992246f5dd5b647) | Property |

## Type declaration

<a id="api-336fb995d7479d30"></a>
<!-- api: T:Inno.Audio.AudioProjectSettings be9d0367734cb027edd4d219b81fc3f1c39a07862ffb4333074a9ae4423baa0f -->

```csharp
public sealed class Inno.Audio.AudioProjectSettings : Inno.Core.Serialization.ISerializable
```

Stores portable project-wide defaults for audio playback and caching.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L12).

## `settingProtocolId`

<a id="api-28a7889d434dbdfd"></a>
<!-- api: F:Inno.Audio.AudioProjectSettings.settingProtocolId f1cdad1416a3fb1d847233432c53bd4385c9b05b842ee302b03d2b823a2ce540 -->

```csharp
public const string Inno.Audio.AudioProjectSettings.settingProtocolId = "inno.audio.runtime"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L17).

## `#ctor`

<a id="api-629974c0df19ba2a"></a>
<!-- api: M:Inno.Audio.AudioProjectSettings.#ctor ccbc1f1d67219b289786eb01176c0ea76fc1b492220598f70df1b50a81324c22 -->

```csharp
public Inno.Audio.AudioProjectSettings.AudioProjectSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L12).

## `automaticStreamingThresholdBytes`

<a id="api-68e46ee69c2b7268"></a>
<!-- api: P:Inno.Audio.AudioProjectSettings.automaticStreamingThresholdBytes d891e85dfff097fa83956989f9f1fd394af66a3e379bf67c979ed449228360e8 -->

```csharp
public long Inno.Audio.AudioProjectSettings.automaticStreamingThresholdBytes { get; set; }
```

Gets or sets the encoded byte threshold used by automatic streaming selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L52).

## `decodedCacheBudgetBytes`

<a id="api-698b1f828c8e3dae"></a>
<!-- api: P:Inno.Audio.AudioProjectSettings.decodedCacheBudgetBytes b5539f605f6a8a5c86ca35ae7bf442d129c954e986af2ffc40aa972453af22e7 -->

```csharp
public long Inno.Audio.AudioProjectSettings.decodedCacheBudgetBytes { get; set; }
```

Gets or sets the decoded clip cache budget in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L46).

## `defaultMixer`

<a id="api-d12ebcfdda7e27e1"></a>
<!-- api: P:Inno.Audio.AudioProjectSettings.defaultMixer 38a806a7645b1ef2dbd16dd7184d069e8663873dfc395c3234850b9f3cf9f70c -->

```csharp
public Inno.Audio.AudioMixerAsset? Inno.Audio.AudioProjectSettings.defaultMixer { get; set; }
```

Gets or sets the default mixer asset, or `null` for the master-only graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L28).

## `masterVolume`

<a id="api-b0d1c5149f4b3cb0"></a>
<!-- api: P:Inno.Audio.AudioProjectSettings.masterVolume 61ca97406aded5e07e6b6cfd5b988b22b76a5a21842b52838cce6425effd4713 -->

```csharp
public float Inno.Audio.AudioProjectSettings.masterVolume { get; set; }
```

Gets or sets the initial non-negative master bus gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L34).

## `maxVoices`

<a id="api-f5820ce84820e907"></a>
<!-- api: P:Inno.Audio.AudioProjectSettings.maxVoices f54363ab488b554f45a64a5983c691d611e9bbc4494c552a8b0ca4567de03b77 -->

```csharp
public int Inno.Audio.AudioProjectSettings.maxVoices { get; set; }
```

Gets or sets the positive maximum active voice count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L40).

## `settingId`

<a id="api-3992246f5dd5b647"></a>
<!-- api: P:Inno.Audio.AudioProjectSettings.settingId 45504e77e90d17f7e40bcae0b2ec775a7143d97d48cbe8e66e2a52c77f2f5d9d -->

```csharp
public static Inno.Core.Settings.ProjectSettingId Inno.Audio.AudioProjectSettings.settingId { get; }
```

Gets the stable project-setting identity for audio runtime defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L22).
