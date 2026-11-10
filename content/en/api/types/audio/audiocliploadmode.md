---
title: "AudioClipLoadMode"
description: "Reference for AudioClipLoadMode in Inno.Audio."
uid: api.inno.audio.e540725f779f1b86
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipLoadMode`

This reference describes `AudioClipLoadMode` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Automatic`](#api-f85262dccc1317ed) | Field |
| [`Decode`](#api-292da860eff8ccd4) | Field |
| [`Stream`](#api-0f5d7f179a52a8fe) | Field |

## Type declaration

<a id="api-e540725f779f1b86"></a>
<!-- api: T:Inno.Audio.AudioClipLoadMode 2410024c187f29fad103945645c26b8f4e12c4111d10408e8ec033f3d7d0b32e -->

```csharp
public enum Inno.Audio.AudioClipLoadMode : int
```

Selects how encoded clip data is prepared for playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L9).

## `Automatic`

<a id="api-f85262dccc1317ed"></a>
<!-- api: F:Inno.Audio.AudioClipLoadMode.Automatic 0aa9970c87cf4361d490b19357fca0253c03d8da1f3e7c530178b6652ea01223 -->

```csharp
Inno.Audio.AudioClipLoadMode.Automatic = 0
```

Lets the runtime choose between decoded and streamed storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L14).

## `Decode`

<a id="api-292da860eff8ccd4"></a>
<!-- api: F:Inno.Audio.AudioClipLoadMode.Decode 15a195ee13b67e92275e44060c773f9974d20b64463f1a613e3981d2da75cd90 -->

```csharp
Inno.Audio.AudioClipLoadMode.Decode = 1
```

Decodes the complete clip before playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L19).

## `Stream`

<a id="api-0f5d7f179a52a8fe"></a>
<!-- api: F:Inno.Audio.AudioClipLoadMode.Stream dcf6912616484c5d9c35c7bfe00948af8e941aecf6e39c690d06115bbd31082a -->

```csharp
Inno.Audio.AudioClipLoadMode.Stream = 2
```

Decodes encoded data incrementally while playback advances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L24).
