---
title: "AudioClipLoadMode"
description: "Reference for AudioClipLoadMode in Inno.Audio."
uid: api.inno.audio.runtime-script.28da20af7eddc9c6
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioClipLoadMode`

This reference describes `AudioClipLoadMode` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Automatic`](#api-bf2f81360fb781cb) | Field |
| [`Decode`](#api-bfc1587f48710ba3) | Field |
| [`Stream`](#api-367fcbaacaae7a05) | Field |

## Type declaration

<a id="api-28da20af7eddc9c6"></a>
<!-- api: T:InnoEngine.Audio.AudioClipLoadMode 38adef49ace1a91f318088682c269b87986580721bbd8875d305fd4d54873529 -->

```csharp
public enum InnoEngine.Audio.AudioClipLoadMode : int
```

Selects how encoded clip data is prepared for playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L9).

## `Automatic`

<a id="api-bf2f81360fb781cb"></a>
<!-- api: F:InnoEngine.Audio.AudioClipLoadMode.Automatic 244a0730fa73ebdca6bec1a7645f77b063b7d5530791d55def02d346f0d19133 -->

```csharp
InnoEngine.Audio.AudioClipLoadMode.Automatic = 0
```

Lets the runtime choose between decoded and streamed storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L14).

## `Decode`

<a id="api-bfc1587f48710ba3"></a>
<!-- api: F:InnoEngine.Audio.AudioClipLoadMode.Decode 61d61e05f8ef384f163dc3f1d8b8d36cadbc53e7ce8e3ca4407f7bfc20be59d1 -->

```csharp
InnoEngine.Audio.AudioClipLoadMode.Decode = 1
```

Decodes the complete clip before playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L19).

## `Stream`

<a id="api-367fcbaacaae7a05"></a>
<!-- api: F:InnoEngine.Audio.AudioClipLoadMode.Stream 01090d71368040281819da48dbe33c5fd67b617e680c66067ba221a4f6bd53c7 -->

```csharp
InnoEngine.Audio.AudioClipLoadMode.Stream = 2
```

Decodes encoded data incrementally while playback advances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L24).
