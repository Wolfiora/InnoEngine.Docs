---
title: "AudioVoiceCompletedEvent"
description: "Reference for AudioVoiceCompletedEvent in Inno.Audio."
uid: api.inno.audio.583a199059ba976b
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioVoiceCompletedEvent`

This reference describes `AudioVoiceCompletedEvent` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-30e849588c7477ae) | Method |
| [`reason`](#api-918955e06bbb9f8f) | Property |
| [`voice`](#api-0a5b4f31ebdef231) | Property |

## Type declaration

<a id="api-583a199059ba976b"></a>
<!-- api: T:Inno.Audio.AudioVoiceCompletedEvent cf0b8426921f0127dc2215b14a4ae54f13ed98586b129194eb181ae4cf747b1f -->

```csharp
public sealed class Inno.Audio.AudioVoiceCompletedEvent : Inno.Core.Events.Event
```

Reports one voice terminal transition on the owning runtime's main-thread event dispatcher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L9).

## `#ctor`

<a id="api-30e849588c7477ae"></a>
<!-- api: M:Inno.Audio.AudioVoiceCompletedEvent.#ctor(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioCompletionReason) 84ada2c5265f5956ab330780666779e51394fbe36d88c3b5f7caa6773856cd83 -->

```csharp
public Inno.Audio.AudioVoiceCompletedEvent.AudioVoiceCompletedEvent(Inno.Audio.AudioVoiceHandle voice, Inno.Audio.AudioCompletionReason reason)
```

Creates a voice completion event.

**Parameter `voice`:** Voice that reached a terminal state.

**Parameter `reason`:** Reason playback ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L20).

## `reason`

<a id="api-918955e06bbb9f8f"></a>
<!-- api: P:Inno.Audio.AudioVoiceCompletedEvent.reason 8b222bac01b06eb254556582b2e1cf7f622546014929f3861638448209428f98 -->

```csharp
public Inno.Audio.AudioCompletionReason Inno.Audio.AudioVoiceCompletedEvent.reason { get; }
```

Gets the terminal playback reason.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L38).

## `voice`

<a id="api-0a5b4f31ebdef231"></a>
<!-- api: P:Inno.Audio.AudioVoiceCompletedEvent.voice 05aa91f7ad5ea6f0d9eb8d5a77afb132cef8db440720a3cfda0363d4f29c5181 -->

```csharp
public Inno.Audio.AudioVoiceHandle Inno.Audio.AudioVoiceCompletedEvent.voice { get; }
```

Gets the completed voice handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L33).
