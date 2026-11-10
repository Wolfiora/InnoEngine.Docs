---
title: "Audio"
description: "Reference for Audio in Inno.Audio."
uid: api.inno.audio.227246b73d70109e
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `Audio`

This reference describes `Audio` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Pause`](#api-a1953e05a726da46) | Method |
| [`Play`](#api-be7ea9dc799afc17) | Method |
| [`Play`](#api-c30e305dbfb82a5d) | Method |
| [`PlayScheduled`](#api-cf91ced0cadcf072) | Method |
| [`PreloadAsync`](#api-0ae0e4245e8944c2) | Method |
| [`ReleasePreload`](#api-7ed816073ecb34f0) | Method |
| [`Resume`](#api-eac1cd12f01aeaee) | Method |
| [`Seek`](#api-9c184cf205745db9) | Method |
| [`SetBusMuted`](#api-f2fc286045b8c5c5) | Method |
| [`SetBusPaused`](#api-6ead29d906369138) | Method |
| [`SetBusVolume`](#api-07e2f2c382250ef2) | Method |
| [`SetVoiceParameters`](#api-259c049a7e81bbeb) | Method |
| [`Stop`](#api-d3bde52a72e872b0) | Method |
| [`TryGetVoiceState`](#api-5bc4e94efef646d8) | Method |
| [`capabilities`](#api-b8118eacb3112df4) | Property |
| [`deviceState`](#api-1124133414b050b5) | Property |
| [`dspTime`](#api-acb54bdedf7f4376) | Property |
| [`statistics`](#api-32d39eab6df57929) | Property |

## Type declaration

<a id="api-227246b73d70109e"></a>
<!-- api: T:Inno.Audio.Audio 36740e557e2870204313a1aca872b5689a0583ce473c6cb0f42a1ed2f0544d39 -->

```csharp
public static class Inno.Audio.Audio
```

Provides script-friendly access to the audio service in the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L46).

## `Pause`

<a id="api-a1953e05a726da46"></a>
<!-- api: M:Inno.Audio.Audio.Pause(Inno.Audio.AudioVoiceHandle) 7a376f5ef69cded8c426c8be15532ac9ef390ff3079dd59bce1b540c47473669 -->

```csharp
public static bool Inno.Audio.Audio.Pause(Inno.Audio.AudioVoiceHandle voice)
```

Pauses a live voice.

**Parameter `voice`:** Voice handle to pause.

**Returns:** `true` when the voice entered the paused state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L138).

## `Play`

<a id="api-be7ea9dc799afc17"></a>
<!-- api: M:Inno.Audio.Audio.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions) b30a1d32dcaad376bded303eb46ac9ecffad04d4b4a738e840ac137072c578af -->

```csharp
public static Inno.Audio.AudioVoiceHandle Inno.Audio.Audio.Play(Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioPlayOptions options)
```

Starts one clip using explicit playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle that may initially be preparing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L91).

## `Play`

<a id="api-c30e305dbfb82a5d"></a>
<!-- api: M:Inno.Audio.Audio.Play(Inno.Audio.AudioClipAsset) 17096736c9cbdea66658c1e9b7be532851d1cf0d7680d747b2fd137d6fadb106 -->

```csharp
public static Inno.Audio.AudioVoiceHandle Inno.Audio.Audio.Play(Inno.Audio.AudioClipAsset clip)
```

Starts one clip using default playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Returns:** A voice handle that may initially be preparing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L77).

## `PlayScheduled`

<a id="api-cf91ced0cadcf072"></a>
<!-- api: M:Inno.Audio.Audio.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions) 50b2883fc0a364cb86b91adf083fef1d45fb743c49e3e0c335a94ed4a6f5950e -->

```csharp
public static Inno.Audio.AudioVoiceHandle Inno.Audio.Audio.PlayScheduled(Inno.Audio.AudioClipAsset clip, double scheduledDspTime, Inno.Audio.AudioPlayOptions options)
```

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle in preparing or scheduled state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L111).

## `PreloadAsync`

<a id="api-0ae0e4245e8944c2"></a>
<!-- api: M:Inno.Audio.Audio.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken) c886126816657cf6d9195dca7353e86c79e9bdfbd34eeac6b9f86454e608255f -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.Audio.Audio.PreloadAsync(Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioClipLoadMode loadMode = Inno.Audio.AudioClipLoadMode.Automatic, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares a clip and retains it in the runtime cache.

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An asynchronous operation that completes after the cache entry is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L270).

## `ReleasePreload`

<a id="api-7ed816073ecb34f0"></a>
<!-- api: M:Inno.Audio.Audio.ReleasePreload(Inno.Audio.AudioClipAsset) 74d052829351f42f1426c25dcf72ed57385018a979203ce9e4e2fa0b5d91740b -->

```csharp
public static void Inno.Audio.Audio.ReleasePreload(Inno.Audio.AudioClipAsset clip)
```

Releases one explicit preload retention without interrupting active voices.

**Parameter `clip`:** Imported clip whose preload retention should be released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L283).

## `Resume`

<a id="api-eac1cd12f01aeaee"></a>
<!-- api: M:Inno.Audio.Audio.Resume(Inno.Audio.AudioVoiceHandle) b0972ea38c7ede3f4f61fb164226065849af8ee8af8f1faad66a076b73b661a0 -->

```csharp
public static bool Inno.Audio.Audio.Resume(Inno.Audio.AudioVoiceHandle voice)
```

Resumes a paused voice.

**Parameter `voice`:** Voice handle to resume.

**Returns:** `true` when the voice resumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L149).

## `Seek`

<a id="api-9c184cf205745db9"></a>
<!-- api: M:Inno.Audio.Audio.Seek(Inno.Audio.AudioVoiceHandle,System.TimeSpan) cb51abe67ebd31cf65207b15899fb1e704923420a2413f957137663196857026 -->

```csharp
public static bool Inno.Audio.Audio.Seek(Inno.Audio.AudioVoiceHandle voice, System.TimeSpan position)
```

Moves a live voice cursor to a clip-relative position.

**Parameter `voice`:** Voice handle to seek.

**Parameter `position`:** Non-negative clip-relative position.

**Returns:** `true` when the cursor was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L163).

## `SetBusMuted`

<a id="api-f2fc286045b8c5c5"></a>
<!-- api: M:Inno.Audio.Audio.SetBusMuted(Inno.Audio.AudioBusId,System.Boolean) ba5253ce5b28591750215760c596a7bb9bd390f6c0b52e36362178e3cc0ae814 -->

```csharp
public static bool Inno.Audio.Audio.SetBusMuted(Inno.Audio.AudioBusId bus, bool muted)
```

Updates mute state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `muted`:** Whether output from the bus is silenced.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L233).

## `SetBusPaused`

<a id="api-6ead29d906369138"></a>
<!-- api: M:Inno.Audio.Audio.SetBusPaused(Inno.Audio.AudioBusId,System.Boolean) c09a7bf75d74098f0b5626c5b350de0ad0a53bb91f40d460415433751cb174ca -->

```csharp
public static bool Inno.Audio.Audio.SetBusPaused(Inno.Audio.AudioBusId bus, bool paused)
```

Updates pause state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `paused`:** Whether routed voices should pause.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L250).

## `SetBusVolume`

<a id="api-07e2f2c382250ef2"></a>
<!-- api: M:Inno.Audio.Audio.SetBusVolume(Inno.Audio.AudioBusId,System.Single) 09b7affaf51081851f54c74c314077e0e8244f1dd54184401870d5406cbcb19e -->

```csharp
public static bool Inno.Audio.Audio.SetBusVolume(Inno.Audio.AudioBusId bus, float volume)
```

Updates linear gain for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `volume`:** Non-negative linear gain.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L216).

## `SetVoiceParameters`

<a id="api-259c049a7e81bbeb"></a>
<!-- api: M:Inno.Audio.Audio.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters) f9494607520fbf0be70a686e0daf0aac6dbaef8a0c330e0718a84c5403049eea -->

```csharp
public static bool Inno.Audio.Audio.SetVoiceParameters(Inno.Audio.AudioVoiceHandle voice, Inno.Audio.AudioVoiceParameters parameters)
```

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when the voice was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L180).

## `Stop`

<a id="api-d3bde52a72e872b0"></a>
<!-- api: M:Inno.Audio.Audio.Stop(Inno.Audio.AudioVoiceHandle) bba6be5b585b336a62cc98dc19eb3a7a79ead7d2b31d03418f126194e84928da -->

```csharp
public static bool Inno.Audio.Audio.Stop(Inno.Audio.AudioVoiceHandle voice)
```

Stops a live voice.

**Parameter `voice`:** Voice handle to stop.

**Returns:** `true` when a live voice was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L127).

## `TryGetVoiceState`

<a id="api-5bc4e94efef646d8"></a>
<!-- api: M:Inno.Audio.Audio.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@) 0cc79ef809c38846fee8fd082b4202fc25248497282176bdccd25fe62aa94f8a -->

```csharp
public static bool Inno.Audio.Audio.TryGetVoiceState(Inno.Audio.AudioVoiceHandle voice, out Inno.Audio.AudioPlaybackState playbackState)
```

Queries the current state of a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L198).

## `capabilities`

<a id="api-b8118eacb3112df4"></a>
<!-- api: P:Inno.Audio.Audio.capabilities c1f19adb08159ca24e92e870ab7b40d6c1259e7c6eac432c8a0c6620934e9751 -->

```csharp
public static Inno.Audio.AudioCapabilities Inno.Audio.Audio.capabilities { get; }
```

Gets immutable capabilities for the current audio device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L51).

## `deviceState`

<a id="api-1124133414b050b5"></a>
<!-- api: P:Inno.Audio.Audio.deviceState 0339e8547f0fbc8838c2faa11141aa9f0e73547f9ad5ade329404ca3c541433a -->

```csharp
public static Inno.Audio.AudioDeviceState Inno.Audio.Audio.deviceState { get; }
```

Gets the current output availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L56).

## `dspTime`

<a id="api-acb54bdedf7f4376"></a>
<!-- api: P:Inno.Audio.Audio.dspTime bf3624cde29eb04f9e4df42060972e5b9b9c7f5f489c17b98004ce2b4f586596 -->

```csharp
public static double Inno.Audio.Audio.dspTime { get; }
```

Gets the monotonic audio clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L61).

## `statistics`

<a id="api-32d39eab6df57929"></a>
<!-- api: P:Inno.Audio.Audio.statistics 2a2ea4cf7dd225adc0fe081bcf8885a2fa6961093e46c0de9d89cb56c228a00e -->

```csharp
public static Inno.Audio.AudioStatistics Inno.Audio.Audio.statistics { get; }
```

Gets current audio resource statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L66).
