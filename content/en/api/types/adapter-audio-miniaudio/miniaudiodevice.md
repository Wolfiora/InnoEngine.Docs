---
title: "MiniAudioDevice"
description: "Reference for MiniAudioDevice in Inno.Adapter.Audio.MiniAudio."
uid: api.inno.adapter.audio.miniaudio.511eb4602e961aa4
kind: api
owners:
  - Inno.Adapter.Audio.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio-miniaudio#preparation-and-ownership-contract
---
# `MiniAudioDevice`

This reference describes `MiniAudioDevice` in `Inno.Adapter.Audio.MiniAudio`. Read the [shared contract](../../projects/inno-adapter-audio-miniaudio.md#preparation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Audio.AudioDevice`.

**Direct interfaces:** `Inno.Audio.IAudioDevice`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4be80341694152c6) | Method |
| [`#ctor`](#api-301a06bc56226cee) | Method |
| [`Dispose`](#api-6b0a9d3548d57194) | Method |
| [`capabilities`](#api-5205f0346c2a6d04) | Property |
| [`dspTime`](#api-3099ed198c8fca24) | Property |
| [`generation`](#api-0d44d7b006e89977) | Property |
| [`state`](#api-8ee746a3b5f2a2e9) | Property |
| [`statistics`](#api-147a07d819d04afd) | Property |

## Type declaration

<a id="api-511eb4602e961aa4"></a>
<!-- api: T:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice dd1beabc48b2867fc76a71f32715e8b5f8d0095aa626776a6a89117d4dca0540 -->

```csharp
public sealed class Inno.Adapter.Audio.MiniAudio.MiniAudioDevice : Inno.Audio.AudioDevice, Inno.Audio.IAudioDevice
```

Implements the backend-neutral audio device contract with a private MiniAudio engine and node graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L17).

## `#ctor`

<a id="api-4be80341694152c6"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.#ctor 36afb38d543656eec144ade87bd432696cf2e73a66f70454c6b26b0bdae169a0 -->

```csharp
public Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.MiniAudioDevice()
```

Creates a MiniAudio device using the default operating-system output device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L44).

## `#ctor`

<a id="api-301a06bc56226cee"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.#ctor(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions) 607a2bb9e2cb19aa3e12dc93ce27fc6d536890cd23782ba5b199a98fb7a8ac83 -->

```csharp
public Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.MiniAudioDevice(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions options)
```

Creates one MiniAudio backend generation with explicit output and headless settings.

**Parameter `options`:** Device graph and operating-system output settings.

**Throws `System.InvalidOperationException`:** Thrown when the native engine cannot be initialized with the requested settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L58).

## `Dispose`

<a id="api-6b0a9d3548d57194"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.Dispose ca00cbf8b0599d17a77c7147a5ef9757f898c66cbd68919d0938a69b37059293 -->

```csharp
public void Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.Dispose()
```

Releases all sounds, buses, processor nodes, listeners, and the native engine in dependency order.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Canceled encoded preparation still owns a source reader. The owner must retain this device
and retry disposal at its retirement safe point until preparation drains.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L607).

## `capabilities`

<a id="api-5205f0346c2a6d04"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.capabilities a2432d67e847d9b3330edee976239414ad038e74e781585ecc837c7c2dd0171c -->

```csharp
public Inno.Audio.AudioCapabilities Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.capabilities { get; }
```

Gets MiniAudio capabilities for this immutable device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L102).

## `dspTime`

<a id="api-3099ed198c8fca24"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.dspTime e1c862bcefe0936d7937d80fda5b0ad5ccdd8e51c637cabed85b0f2593276c32 -->

```csharp
public double Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.dspTime { get; }
```

Gets the monotonic MiniAudio engine clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L117).

## `generation`

<a id="api-0d44d7b006e89977"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.generation 20869b637217658c1b2705cca851e24b2b93a33eb72beb2ee54b31e654cb5da5 -->

```csharp
public uint Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.generation { get; }
```

Gets the non-zero generation encoded into every handle created by this device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L107).

## `state`

<a id="api-8ee746a3b5f2a2e9"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.state 3264a2f35261bc6040daaa85ceb40781a9988809a5a2d80b718889abc5dae984 -->

```csharp
public Inno.Audio.AudioDeviceState Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.state { get; }
```

Gets current native output availability without exposing a MiniAudio device type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L112).

## `statistics`

<a id="api-147a07d819d04afd"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.statistics d18497c0cc181bf5014c911b94b455f79a4ca737c698acde2a47b800c58218b6 -->

```csharp
public Inno.Audio.AudioStatistics Inno.Adapter.Audio.MiniAudio.MiniAudioDevice.statistics { get; }
```

Gets current native resource counts and approximate decoded storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDevice.cs#L125).
