---
title: "AudioDistanceModel"
description: "Reference for AudioDistanceModel in Inno.Audio."
uid: api.inno.audio.runtime-script.c3ca1eab92692739
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioDistanceModel`

This reference describes `AudioDistanceModel` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Exponential`](#api-ef2874f5077b660b) | Field |
| [`Inverse`](#api-846d470f37f65eb6) | Field |
| [`Linear`](#api-0b452b03dd10acbe) | Field |
| [`None`](#api-dcfd22612c90352a) | Field |

## Type declaration

<a id="api-c3ca1eab92692739"></a>
<!-- api: T:InnoEngine.Audio.AudioDistanceModel 3484c72cdb49486521d7ec0e63b26b6fa94c2ecaba7ff1b707f4433d459a01d7 -->

```csharp
public enum InnoEngine.Audio.AudioDistanceModel : int
```

Selects the distance attenuation model for one spatial voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L128).

## `Exponential`

<a id="api-ef2874f5077b660b"></a>
<!-- api: F:InnoEngine.Audio.AudioDistanceModel.Exponential 8ccb26c1f2480b06de7d28590cde5599caa8937aeef792cb1cb53b29522ac9c7 -->

```csharp
InnoEngine.Audio.AudioDistanceModel.Exponential = 3
```

Uses exponential-distance attenuation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L148).

## `Inverse`

<a id="api-846d470f37f65eb6"></a>
<!-- api: F:InnoEngine.Audio.AudioDistanceModel.Inverse 6a19eee082f3276dd0194cc2abdf7c4d41155bc5109b3ec564177380b4af6abb -->

```csharp
InnoEngine.Audio.AudioDistanceModel.Inverse = 1
```

Uses inverse-distance attenuation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L138).

## `Linear`

<a id="api-0b452b03dd10acbe"></a>
<!-- api: F:InnoEngine.Audio.AudioDistanceModel.Linear 6eeae2a7f041c28e5e97a1fd785531a9b760f26f2c52747cbae2fcaddbaf886a -->

```csharp
InnoEngine.Audio.AudioDistanceModel.Linear = 2
```

Uses linear-distance attenuation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L143).

## `None`

<a id="api-dcfd22612c90352a"></a>
<!-- api: F:InnoEngine.Audio.AudioDistanceModel.None 19a674425ee42279a6539e5a4a2c2ea4a3f41e06dd0fe87db05af6fa09fe3d77 -->

```csharp
InnoEngine.Audio.AudioDistanceModel.None = 0
```

Disables distance attenuation while retaining spatial direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L133).
