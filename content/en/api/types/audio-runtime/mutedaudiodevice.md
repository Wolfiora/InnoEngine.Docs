---
title: "MutedAudioDevice"
description: "Reference for MutedAudioDevice in Inno.Audio.Runtime."
uid: api.inno.audio.runtime.a63dcfeede6e3455
kind: api
owners:
  - Inno.Audio.Runtime
apiSurface: source-clr
contracts:
  - project.inno-audio-runtime#composition-and-lifetime-contract
---
# `MutedAudioDevice`

This reference describes `MutedAudioDevice` in `Inno.Audio.Runtime`. Read the [shared contract](../../projects/inno-audio-runtime.md#composition-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Audio.AudioDevice`.

**Direct interfaces:** `Inno.Audio.IAudioDevice`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d4c7a91ab74556b7) | Method |
| [`Dispose`](#api-305d87584eb0f187) | Method |
| [`capabilities`](#api-04c4b00038c17499) | Property |
| [`dspTime`](#api-6836db18b8c8033a) | Property |
| [`generation`](#api-448c7fc06499fbf9) | Property |
| [`state`](#api-a5ae22d8516a0473) | Property |
| [`statistics`](#api-36e45379dcaa4d8e) | Property |

## Type declaration

<a id="api-a63dcfeede6e3455"></a>
<!-- api: T:Inno.Audio.Runtime.MutedAudioDevice d4de906339df4ad567d497d9cec5d0490e8e3001f798b3731d2b9c666f32e154 -->

```csharp
public sealed class Inno.Audio.Runtime.MutedAudioDevice : Inno.Audio.AudioDevice, Inno.Audio.IAudioDevice
```

Advances deterministic audio state without opening an operating-system output device.

**Constraints:** This device is used for headless tests and explicit no-device recovery. It never claims audible output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L12).

## `#ctor`

<a id="api-d4c7a91ab74556b7"></a>
<!-- api: M:Inno.Audio.Runtime.MutedAudioDevice.#ctor(System.Int32,Inno.Audio.AudioDeviceLimits) 9436211956436d0d3aea2e7e10013aea974c8714e6d3583948bdead493e9faf6 -->

```csharp
public Inno.Audio.Runtime.MutedAudioDevice.MutedAudioDevice(int sampleRate = 48000, Inno.Audio.AudioDeviceLimits? limits = null)
```

Creates a muted device with deterministic clock and lifecycle behavior.

**Parameter `sampleRate`:** Positive logical output sample rate used for capability reporting.

**Parameter `limits`:** Optional finite device resource capacities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L35).

## `Dispose`

<a id="api-305d87584eb0f187"></a>
<!-- api: M:Inno.Audio.Runtime.MutedAudioDevice.Dispose 69f2d90ed497b01bac220a325203ab4572d66010c13e618ffcc966ce2489a5da -->

```csharp
public void Inno.Audio.Runtime.MutedAudioDevice.Dispose()
```

Releases all logical clips, voices, buses, and listeners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L327).

## `capabilities`

<a id="api-04c4b00038c17499"></a>
<!-- api: P:Inno.Audio.Runtime.MutedAudioDevice.capabilities f558bfa4bb88639def36c0919b55c806aed05eaf066d53e58604664a4d576663 -->

```csharp
public Inno.Audio.AudioCapabilities Inno.Audio.Runtime.MutedAudioDevice.capabilities { get; }
```

Gets logical capabilities available while output is muted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L50).

## `dspTime`

<a id="api-6836db18b8c8033a"></a>
<!-- api: P:Inno.Audio.Runtime.MutedAudioDevice.dspTime 94180a106b1624a67e2ac9b3b61f8493dd938daccb68ae08d32f543c18e332b0 -->

```csharp
public double Inno.Audio.Runtime.MutedAudioDevice.dspTime { get; }
```

Gets the deterministic logical audio clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L65).

## `generation`

<a id="api-448c7fc06499fbf9"></a>
<!-- api: P:Inno.Audio.Runtime.MutedAudioDevice.generation 3d413f134ad76c111badd700a3d3a28987a81b70c4d3f87e864456803ba44589 -->

```csharp
public uint Inno.Audio.Runtime.MutedAudioDevice.generation { get; }
```

Gets the non-zero logical device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L55).

## `state`

<a id="api-a5ae22d8516a0473"></a>
<!-- api: P:Inno.Audio.Runtime.MutedAudioDevice.state a81b1da46406e5c5df0d9e8c97928f74e62697758dbd3b52f1c75a7c4417fd88 -->

```csharp
public Inno.Audio.AudioDeviceState Inno.Audio.Runtime.MutedAudioDevice.state { get; }
```

Gets `Inno.Audio.AudioDeviceState.Muted` until this device is disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L60).

## `statistics`

<a id="api-36e45379dcaa4d8e"></a>
<!-- api: P:Inno.Audio.Runtime.MutedAudioDevice.statistics 7ae2bcf1c2185280c2e90d651e0a0e1fe069b70991612d95c7ab615007db5545 -->

```csharp
public Inno.Audio.AudioStatistics Inno.Audio.Runtime.MutedAudioDevice.statistics { get; }
```

Gets current logical resource statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/MutedAudioDevice.cs#L70).
