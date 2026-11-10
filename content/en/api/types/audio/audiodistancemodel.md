---
title: "AudioDistanceModel"
description: "Reference for AudioDistanceModel in Inno.Audio."
uid: api.inno.audio.fc72d5615a3debf5
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDistanceModel`

This reference describes `AudioDistanceModel` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Exponential`](#api-7ac2cc77fe444d0c) | Field |
| [`Inverse`](#api-cc000fe26e21afbe) | Field |
| [`Linear`](#api-c9003ff4f8c169f6) | Field |
| [`None`](#api-2b8f9cc507dc94f2) | Field |

## Type declaration

<a id="api-fc72d5615a3debf5"></a>
<!-- api: T:Inno.Audio.AudioDistanceModel 25f67b45512d7cd3cff07f6b70d6e8925bdf5ad37557051d60ef09ef300dc6fe -->

```csharp
public enum Inno.Audio.AudioDistanceModel : int
```

Selects the distance attenuation model for one spatial voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L128).

## `Exponential`

<a id="api-7ac2cc77fe444d0c"></a>
<!-- api: F:Inno.Audio.AudioDistanceModel.Exponential a06ab3ce1702cafc7433724a36014c81cc687ee86a84beb74f03483737a8c99b -->

```csharp
Inno.Audio.AudioDistanceModel.Exponential = 3
```

Uses exponential-distance attenuation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L148).

## `Inverse`

<a id="api-cc000fe26e21afbe"></a>
<!-- api: F:Inno.Audio.AudioDistanceModel.Inverse e903b2d194aa3279483ffaf7113326d7844dde6019805b4cb8b0bf8c28c0945f -->

```csharp
Inno.Audio.AudioDistanceModel.Inverse = 1
```

Uses inverse-distance attenuation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L138).

## `Linear`

<a id="api-c9003ff4f8c169f6"></a>
<!-- api: F:Inno.Audio.AudioDistanceModel.Linear ebbadbb9ed208f80f02dc3dd9c1c87b1a9806f39a752cbdec531f24b7dca1c54 -->

```csharp
Inno.Audio.AudioDistanceModel.Linear = 2
```

Uses linear-distance attenuation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L143).

## `None`

<a id="api-2b8f9cc507dc94f2"></a>
<!-- api: F:Inno.Audio.AudioDistanceModel.None ccb5c97190dbc8d4ac629c72e42b6272cadd435fd07bd1f2401979c19171d90d -->

```csharp
Inno.Audio.AudioDistanceModel.None = 0
```

Disables distance attenuation while retaining spatial direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L133).
