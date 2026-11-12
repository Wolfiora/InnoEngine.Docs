---
title: "AudioProjectSettings"
description: "Reference for AudioProjectSettings in Inno.Audio."
uid: api.inno.audio.runtime-script.4bebde776ac9c88b
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioProjectSettings`

This reference describes `AudioProjectSettings` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-ca065721e8eb3b2e) | Field |
| [`#ctor`](#api-8b8ea77216d14341) | Method |
| [`automaticStreamingThresholdBytes`](#api-e7847077548bc99e) | Property |
| [`decodedCacheBudgetBytes`](#api-0dfa736f032e8586) | Property |
| [`defaultMixer`](#api-04b62bea87b4e488) | Property |
| [`masterVolume`](#api-7a9109dc9492f6de) | Property |
| [`maxVoices`](#api-82cd8e9fea3d04ab) | Property |
| [`settingId`](#api-8c205fc25d116c18) | Property |

## Type declaration

<a id="api-4bebde776ac9c88b"></a>
<!-- api: T:InnoEngine.Audio.AudioProjectSettings b80f1ad6df71caa00defef90ea7ca209a77a69f0298e0a07ee688904d0c5e729 -->

```csharp
public sealed class InnoEngine.Audio.AudioProjectSettings : InnoEngine.Serialization.ISerializable
```

Stores portable project-wide defaults for audio playback and caching.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L12).

## `settingProtocolId`

<a id="api-ca065721e8eb3b2e"></a>
<!-- api: F:InnoEngine.Audio.AudioProjectSettings.settingProtocolId bbc9df76eb08ea103322f8665810b3becb3861d86a518de676e293dbd477db4a -->

```csharp
public const string InnoEngine.Audio.AudioProjectSettings.settingProtocolId = "inno.audio.runtime"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L17).

## `#ctor`

<a id="api-8b8ea77216d14341"></a>
<!-- api: M:InnoEngine.Audio.AudioProjectSettings.#ctor c55bdc859077c3bd403d52cae3865dac995223983d9e7f275ec9951e8a54361b -->

```csharp
public InnoEngine.Audio.AudioProjectSettings.AudioProjectSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L12).

## `automaticStreamingThresholdBytes`

<a id="api-e7847077548bc99e"></a>
<!-- api: P:InnoEngine.Audio.AudioProjectSettings.automaticStreamingThresholdBytes b733959426e79e79b5aa24214154908078e380af80da3703238f06d514f70363 -->

```csharp
public long InnoEngine.Audio.AudioProjectSettings.automaticStreamingThresholdBytes { get; set; }
```

Gets or sets the encoded byte threshold used by automatic streaming selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L52).

## `decodedCacheBudgetBytes`

<a id="api-0dfa736f032e8586"></a>
<!-- api: P:InnoEngine.Audio.AudioProjectSettings.decodedCacheBudgetBytes f6bc221ebfee3749896a6e2c90320b7557c4f528d7029d10b6deadff69904cec -->

```csharp
public long InnoEngine.Audio.AudioProjectSettings.decodedCacheBudgetBytes { get; set; }
```

Gets or sets the decoded clip cache budget in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L46).

## `defaultMixer`

<a id="api-04b62bea87b4e488"></a>
<!-- api: P:InnoEngine.Audio.AudioProjectSettings.defaultMixer 2c60515e611f86dd2b4d7d6256d2677054428bf72221b473d9b7116939ba4226 -->

```csharp
public InnoEngine.Audio.AudioMixerAsset? InnoEngine.Audio.AudioProjectSettings.defaultMixer { get; set; }
```

Gets or sets the default mixer asset, or `null` for the master-only graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L28).

## `masterVolume`

<a id="api-7a9109dc9492f6de"></a>
<!-- api: P:InnoEngine.Audio.AudioProjectSettings.masterVolume 0d38ce7559db945d52fa6f2611d8dadc8ae9cea66238ab5dd9babd0af09a66d0 -->

```csharp
public float InnoEngine.Audio.AudioProjectSettings.masterVolume { get; set; }
```

Gets or sets the initial non-negative master bus gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L34).

## `maxVoices`

<a id="api-82cd8e9fea3d04ab"></a>
<!-- api: P:InnoEngine.Audio.AudioProjectSettings.maxVoices 67ca546e2be27b2a0c10a1e164f34482f4cde3d39e05d29d0d31a8006054a920 -->

```csharp
public int InnoEngine.Audio.AudioProjectSettings.maxVoices { get; set; }
```

Gets or sets the positive maximum active voice count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L40).

## `settingId`

<a id="api-8c205fc25d116c18"></a>
<!-- api: P:InnoEngine.Audio.AudioProjectSettings.settingId dda63d1f34fe44de570ec1851c33e73977cf3f17b0fc34e8410b2f867eb1bb82 -->

```csharp
public static InnoEngine.Settings.ProjectSettingId InnoEngine.Audio.AudioProjectSettings.settingId { get; }
```

Gets the stable project-setting identity for audio runtime defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProjectSettings.cs#L22).
