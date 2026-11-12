---
title: "AudioDeviceState"
description: "Reference for AudioDeviceState in Inno.Audio."
uid: api.inno.audio.runtime-script.0f121b3d56850f22
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioDeviceState`

This reference describes `AudioDeviceState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Disposed`](#api-1a4b94df2f3560f5) | Field |
| [`Initializing`](#api-a241ca37b2f57ace) | Field |
| [`Lost`](#api-54a2a40829a9b51f) | Field |
| [`Muted`](#api-144b275fc9afae15) | Field |
| [`Ready`](#api-cf65590701693b89) | Field |

## Type declaration

<a id="api-0f121b3d56850f22"></a>
<!-- api: T:InnoEngine.Audio.AudioDeviceState 86be6c527806d07636e630f6ff81e6f17d7ad9cece871594cc3dbda8cbc8ad35 -->

```csharp
public enum InnoEngine.Audio.AudioDeviceState : int
```

Describes the availability of the active audio output generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L30).

## `Disposed`

<a id="api-1a4b94df2f3560f5"></a>
<!-- api: F:InnoEngine.Audio.AudioDeviceState.Disposed 7f5928184932ad39fe9397aac9610842e113b6ad90fa964df65d88ee179134c9 -->

```csharp
InnoEngine.Audio.AudioDeviceState.Disposed = 4
```

The device has been released and cannot accept work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L55).

## `Initializing`

<a id="api-a241ca37b2f57ace"></a>
<!-- api: F:InnoEngine.Audio.AudioDeviceState.Initializing 49fb7920a3e72b731edb75e57330f27acba823ad893f6c23a739124b6d61feec -->

```csharp
InnoEngine.Audio.AudioDeviceState.Initializing = 0
```

The device has not completed initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L35).

## `Lost`

<a id="api-54a2a40829a9b51f"></a>
<!-- api: F:InnoEngine.Audio.AudioDeviceState.Lost 2571de9eeb093bec971f67c512f1802d6e42acca6a4f704f2f67e4122250c501 -->

```csharp
InnoEngine.Audio.AudioDeviceState.Lost = 3
```

The active output device was lost and recovery is pending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L50).

## `Muted`

<a id="api-144b275fc9afae15"></a>
<!-- api: F:InnoEngine.Audio.AudioDeviceState.Muted c8c9e14dd5ce73c487b99c193d30ff71e1a2fcd876a3a9fb47c0f885408c57b9 -->

```csharp
InnoEngine.Audio.AudioDeviceState.Muted = 2
```

Playback is advancing without an output device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L45).

## `Ready`

<a id="api-cf65590701693b89"></a>
<!-- api: F:InnoEngine.Audio.AudioDeviceState.Ready 505b1d57d612c2ffdcba2e777b0a49bed6073bfe26b5c64539952f663728b399 -->

```csharp
InnoEngine.Audio.AudioDeviceState.Ready = 1
```

The device is available for audible playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L40).
