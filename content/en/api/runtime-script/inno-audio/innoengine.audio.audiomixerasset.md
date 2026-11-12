---
title: "AudioMixerAsset"
description: "Reference for AudioMixerAsset in Inno.Audio."
uid: api.inno.audio.runtime-script.9520f8c3f4eff698
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerAsset`

This reference describes `AudioMixerAsset` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5dd4b82c37ba2e5b) | Method |
| [`features`](#api-023a6ac2fb2eb3ec) | Property |
| [`mixerState`](#api-6f7af0f622493d6a) | Property |
| [`mixerTypeId`](#api-02dc703f3ba116fd) | Property |

## Type declaration

<a id="api-9520f8c3f4eff698"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerAsset 10089528c62410b70858dd5b46ab8cb7884a43249d7f605a32cbee07e7327103 -->

```csharp
public sealed class InnoEngine.Audio.AudioMixerAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Selects a mixer extension and ordered features without defining a game-specific mixing model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L384).

## `#ctor`

<a id="api-5dd4b82c37ba2e5b"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerAsset.#ctor 2d07573a4266e3b5a9fa06adad23ba60d1bfd3e00b8936ee55a2665da1dae45e -->

```csharp
public InnoEngine.Audio.AudioMixerAsset.AudioMixerAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L384).

## `features`

<a id="api-023a6ac2fb2eb3ec"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerAsset.features 48fab89e051d0b140cc3a297e038a6fb8db5e1f786d45b134cf490fc2f4368e3 -->

```csharp
public InnoEngine.Audio.AudioMixerFeatureConfiguration[] InnoEngine.Audio.AudioMixerAsset.features { get; set; }
```

Gets or sets ordered feature configurations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L403).

## `mixerState`

<a id="api-6f7af0f622493d6a"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerAsset.mixerState 14dfbd0d39511691178ebff1e22ef93d7dbebabb6b52706b52cdd40d90c63398 -->

```csharp
public InnoEngine.Audio.SerializedAudioExtensionState InnoEngine.Audio.AudioMixerAsset.mixerState { get; set; }
```

Gets or sets reload-safe mixer settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L397).

## `mixerTypeId`

<a id="api-02dc703f3ba116fd"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerAsset.mixerTypeId 1598122a869622cff79b28320cc0db61d27507b649b308de1a8f82f8b1389368 -->

```csharp
public string InnoEngine.Audio.AudioMixerAsset.mixerTypeId { get; set; }
```

Gets or sets the globally stable mixer extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L391).
