---
title: "AudioMixerAsset"
description: "Reference for AudioMixerAsset in Inno.Audio."
uid: api.inno.audio.845bd21c33abb364
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerAsset`

This reference describes `AudioMixerAsset` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0b66cb1e6cdf8c7f) | Method |
| [`features`](#api-9833d4c950eac34e) | Property |
| [`mixerState`](#api-e601be75dfd0d033) | Property |
| [`mixerTypeId`](#api-1dbc1b1e54627948) | Property |

## Type declaration

<a id="api-845bd21c33abb364"></a>
<!-- api: T:Inno.Audio.AudioMixerAsset e66e68265a006c1272a159b19832040cc10ac05962f152e72b04a3828cb7c147 -->

```csharp
public sealed class Inno.Audio.AudioMixerAsset : Inno.Assets.AssetObject
```

Selects a mixer extension and ordered features without defining a game-specific mixing model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L384).

## `#ctor`

<a id="api-0b66cb1e6cdf8c7f"></a>
<!-- api: M:Inno.Audio.AudioMixerAsset.#ctor 8d59a751fe89db88ae29b3f5c2092ce80c940d205bc2e731dc167b3eb7614a72 -->

```csharp
public Inno.Audio.AudioMixerAsset.AudioMixerAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L384).

## `features`

<a id="api-9833d4c950eac34e"></a>
<!-- api: P:Inno.Audio.AudioMixerAsset.features bc70d9c92b493fe77c6918cebacef73f873d52b37642962b8272a186b1c4658e -->

```csharp
public Inno.Audio.AudioMixerFeatureConfiguration[] Inno.Audio.AudioMixerAsset.features { get; set; }
```

Gets or sets ordered feature configurations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L403).

## `mixerState`

<a id="api-e601be75dfd0d033"></a>
<!-- api: P:Inno.Audio.AudioMixerAsset.mixerState 6cfe1a441d17d7fa435b99073816a44b269aa20305520341a3132ade458d0ca9 -->

```csharp
public Inno.Audio.SerializedAudioExtensionState Inno.Audio.AudioMixerAsset.mixerState { get; set; }
```

Gets or sets reload-safe mixer settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L397).

## `mixerTypeId`

<a id="api-1dbc1b1e54627948"></a>
<!-- api: P:Inno.Audio.AudioMixerAsset.mixerTypeId 653f7c57668dbb42493a759679200ecfc79ac3d66f40dda976cb29fd22a35bc8 -->

```csharp
public string Inno.Audio.AudioMixerAsset.mixerTypeId { get; set; }
```

Gets or sets the globally stable mixer extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L391).
