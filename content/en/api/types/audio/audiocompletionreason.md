---
title: "AudioCompletionReason"
description: "Reference for AudioCompletionReason in Inno.Audio."
uid: api.inno.audio.9931c8423d07ca64
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioCompletionReason`

This reference describes `AudioCompletionReason` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`DecodeFailed`](#api-25188d365abf4675) | Field |
| [`DeviceLost`](#api-41eb98a566bc1009) | Field |
| [`NaturalEnd`](#api-cc15da90d67cb2d5) | Field |
| [`Stolen`](#api-9ad5e073bbe74ec4) | Field |
| [`Stopped`](#api-17319fd8cc5f6031) | Field |

## Type declaration

<a id="api-9931c8423d07ca64"></a>
<!-- api: T:Inno.Audio.AudioCompletionReason d1c886e7e7fb14ad9a2e266ba14c492dad8b51d7a3b2c8bfa8198d852f991342 -->

```csharp
public enum Inno.Audio.AudioCompletionReason : int
```

Explains why a voice stopped accepting playback commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L97).

## `DecodeFailed`

<a id="api-25188d365abf4675"></a>
<!-- api: F:Inno.Audio.AudioCompletionReason.DecodeFailed aa6dc23af68916e36079031e769a5746908d971a40f0a6600fc3a6695d02b1b7 -->

```csharp
Inno.Audio.AudioCompletionReason.DecodeFailed = 3
```

Encoded data could not be prepared or decoded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L117).

## `DeviceLost`

<a id="api-41eb98a566bc1009"></a>
<!-- api: F:Inno.Audio.AudioCompletionReason.DeviceLost 21b2481800797e7fac6a5cb812a2df79fdf67ab129e767a6199e2d5c920300fb -->

```csharp
Inno.Audio.AudioCompletionReason.DeviceLost = 4
```

Playback ended because the owning device generation was lost.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L122).

## `NaturalEnd`

<a id="api-cc15da90d67cb2d5"></a>
<!-- api: F:Inno.Audio.AudioCompletionReason.NaturalEnd af9852fe7944576271f7ae0f8b994c8302afedf2e20e9b310dd3b2105f99b54d -->

```csharp
Inno.Audio.AudioCompletionReason.NaturalEnd = 0
```

The clip reached its natural end.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L102).

## `Stolen`

<a id="api-9ad5e073bbe74ec4"></a>
<!-- api: F:Inno.Audio.AudioCompletionReason.Stolen 666332a052a7143cd9dfbb8ec977da291701b96bfdc7296517e3121f417f8bb1 -->

```csharp
Inno.Audio.AudioCompletionReason.Stolen = 2
```

The runtime reclaimed the voice to satisfy its voice budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L112).

## `Stopped`

<a id="api-17319fd8cc5f6031"></a>
<!-- api: F:Inno.Audio.AudioCompletionReason.Stopped c0c7b0f7c4d725d0d675ebad67b639e6805ae298b9ed2d87594eefa4d7040e8d -->

```csharp
Inno.Audio.AudioCompletionReason.Stopped = 1
```

A caller explicitly stopped the voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L107).
