---
title: "AudioVoiceCompletedEvent"
description: "Reference for AudioVoiceCompletedEvent in Inno.Audio."
uid: api.inno.audio.runtime-script.550ad820be42a2fe
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioVoiceCompletedEvent`

This reference describes `AudioVoiceCompletedEvent` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4ec836659f85b360) | Method |
| [`reason`](#api-b813c04cc7644df0) | Property |
| [`voice`](#api-0aba333b815b461e) | Property |

## Type declaration

<a id="api-550ad820be42a2fe"></a>
<!-- api: T:InnoEngine.Audio.AudioVoiceCompletedEvent 6e178c4aac951cbb81ce79080ac959e4f8373f27647947c2d2f580e99c60e659 -->

```csharp
public sealed class InnoEngine.Audio.AudioVoiceCompletedEvent : InnoEngine.Events.Event
```

Reports one voice terminal transition on the owning runtime's main-thread event dispatcher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L9).

## `#ctor`

<a id="api-4ec836659f85b360"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceCompletedEvent.#ctor(InnoEngine.Audio.AudioVoiceHandle,InnoEngine.Audio.AudioCompletionReason) 57e1a3a1613eca5ca1ff93615cef0625710300193b3c5df0cd42fc78c22fd6b1 -->

```csharp
public InnoEngine.Audio.AudioVoiceCompletedEvent.AudioVoiceCompletedEvent(InnoEngine.Audio.AudioVoiceHandle voice, InnoEngine.Audio.AudioCompletionReason reason)
```

Creates a voice completion event.

**Parameter `voice`:** Voice that reached a terminal state.

**Parameter `reason`:** Reason playback ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L20).

## `reason`

<a id="api-b813c04cc7644df0"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceCompletedEvent.reason 2eacecce37ac306c9a2b830c2dfc89485d60912cd2971928430b9f95f07f7735 -->

```csharp
public InnoEngine.Audio.AudioCompletionReason InnoEngine.Audio.AudioVoiceCompletedEvent.reason { get; }
```

Gets the terminal playback reason.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L38).

## `voice`

<a id="api-0aba333b815b461e"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceCompletedEvent.voice 5d4b02a5ae4b9b2546342b50454c070abc5de413b7968185672665e8d4b31c84 -->

```csharp
public InnoEngine.Audio.AudioVoiceHandle InnoEngine.Audio.AudioVoiceCompletedEvent.voice { get; }
```

Gets the completed voice handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioVoiceCompletedEvent.cs#L33).
