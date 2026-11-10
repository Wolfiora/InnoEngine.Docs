---
title: "AudioDeviceState"
description: "Reference for AudioDeviceState in Inno.Audio."
uid: api.inno.audio.2800c2fa99609ce2
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDeviceState`

This reference describes `AudioDeviceState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Disposed`](#api-a2b470f488e84e42) | Field |
| [`Initializing`](#api-cd1c7b7c5c73f108) | Field |
| [`Lost`](#api-826bfc61301eba77) | Field |
| [`Muted`](#api-734f41e394746051) | Field |
| [`Ready`](#api-52c1b1d7f570c05b) | Field |

## Type declaration

<a id="api-2800c2fa99609ce2"></a>
<!-- api: T:Inno.Audio.AudioDeviceState ffe5570dfcafed55b8a7b5232d8bb082b560a3a0c92c67204b30d44b6aecd87b -->

```csharp
public enum Inno.Audio.AudioDeviceState : int
```

Describes the availability of the active audio output generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L30).

## `Disposed`

<a id="api-a2b470f488e84e42"></a>
<!-- api: F:Inno.Audio.AudioDeviceState.Disposed bb85f8abab195df2331bb45bce3910b3552eace2cf2b527a31d29f4a40cd6bc9 -->

```csharp
Inno.Audio.AudioDeviceState.Disposed = 4
```

The device has been released and cannot accept work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L55).

## `Initializing`

<a id="api-cd1c7b7c5c73f108"></a>
<!-- api: F:Inno.Audio.AudioDeviceState.Initializing f0970fe18065404b12ae5c435aa40715f118b5ffba01c37c169a668c39abbb3b -->

```csharp
Inno.Audio.AudioDeviceState.Initializing = 0
```

The device has not completed initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L35).

## `Lost`

<a id="api-826bfc61301eba77"></a>
<!-- api: F:Inno.Audio.AudioDeviceState.Lost 8e73d9f351e9992b9cc882b5e45591d3f09b96e999a99583a3e9891c6aa339e0 -->

```csharp
Inno.Audio.AudioDeviceState.Lost = 3
```

The active output device was lost and recovery is pending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L50).

## `Muted`

<a id="api-734f41e394746051"></a>
<!-- api: F:Inno.Audio.AudioDeviceState.Muted f3ba0f23e804c6e734a4050facce78ee4cfba93481fec69cb826e2cc212da068 -->

```csharp
Inno.Audio.AudioDeviceState.Muted = 2
```

Playback is advancing without an output device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L45).

## `Ready`

<a id="api-52c1b1d7f570c05b"></a>
<!-- api: F:Inno.Audio.AudioDeviceState.Ready cd25e042631224974a369ed5f1ef4552f8885d3514920cceea1c20acf347d7a4 -->

```csharp
Inno.Audio.AudioDeviceState.Ready = 1
```

The device is available for audible playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L40).
