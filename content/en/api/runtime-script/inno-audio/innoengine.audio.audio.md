---
title: "Audio"
description: "Reference for Audio in Inno.Audio."
uid: api.inno.audio.runtime-script.9af537c58975135b
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `Audio`

This reference describes `Audio` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Pause`](#api-1b2e1aa208c26e99) | Method |
| [`Play`](#api-35c568fe2bf4e4b6) | Method |
| [`Play`](#api-64c75260b5de3b9f) | Method |
| [`PlayScheduled`](#api-bb2704ea745ade21) | Method |
| [`PreloadAsync`](#api-0dc26012e54a4bd9) | Method |
| [`ReleasePreload`](#api-f15fec1c7ca2a188) | Method |
| [`Resume`](#api-ff2407fa025d1d9c) | Method |
| [`Seek`](#api-bc6c95cf0eb968a3) | Method |
| [`SetBusMuted`](#api-b380793fe7d78ec4) | Method |
| [`SetBusPaused`](#api-05888abc0e48cb59) | Method |
| [`SetBusVolume`](#api-d55aba6212d2139b) | Method |
| [`SetVoiceParameters`](#api-cb675454a4b8e9f1) | Method |
| [`Stop`](#api-0b0dc8fba52601fc) | Method |
| [`TryGetVoiceState`](#api-4ec20f37ecd413d3) | Method |
| [`capabilities`](#api-e36a277621b86a31) | Property |
| [`deviceState`](#api-433fa1cbcd7d34a9) | Property |
| [`dspTime`](#api-35230e4c5edaafc7) | Property |
| [`statistics`](#api-ea650ee0defb40fb) | Property |

## Type declaration

<a id="api-9af537c58975135b"></a>
<!-- api: T:InnoEngine.Audio.Audio 55d5f26de6c5b1efa0ab4f8ace0fae845f9f3eaadf8c97efbf4d16ec3d994168 -->

```csharp
public static class InnoEngine.Audio.Audio
```

Provides script-friendly access to the audio service in the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L46).

## `Pause`

<a id="api-1b2e1aa208c26e99"></a>
<!-- api: M:InnoEngine.Audio.Audio.Pause(InnoEngine.Audio.AudioVoiceHandle) c79b0cba8eb6365689247f15378e22e84db18b912975ec0308d9f7f4f01e8490 -->

```csharp
public static bool InnoEngine.Audio.Audio.Pause(InnoEngine.Audio.AudioVoiceHandle voice)
```

Pauses a live voice.

**Parameter `voice`:** Voice handle to pause.

**Returns:** `true` when the voice entered the paused state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L138).

## `Play`

<a id="api-35c568fe2bf4e4b6"></a>
<!-- api: M:InnoEngine.Audio.Audio.Play(InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioPlayOptions) 14b0438a3f4667348e0c3d378b26729e883e42c70aa3c078afb757a40f863fa6 -->

```csharp
public static InnoEngine.Audio.AudioVoiceHandle InnoEngine.Audio.Audio.Play(InnoEngine.Audio.AudioClipAsset clip, InnoEngine.Audio.AudioPlayOptions options)
```

Starts one clip using explicit playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle that may initially be preparing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L91).

## `Play`

<a id="api-64c75260b5de3b9f"></a>
<!-- api: M:InnoEngine.Audio.Audio.Play(InnoEngine.Audio.AudioClipAsset) fae60cba25d6f10cc38ee1371c5d05fee4562c9e610854e9e5edff807ccdc8f2 -->

```csharp
public static InnoEngine.Audio.AudioVoiceHandle InnoEngine.Audio.Audio.Play(InnoEngine.Audio.AudioClipAsset clip)
```

Starts one clip using default playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Returns:** A voice handle that may initially be preparing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L77).

## `PlayScheduled`

<a id="api-bb2704ea745ade21"></a>
<!-- api: M:InnoEngine.Audio.Audio.PlayScheduled(InnoEngine.Audio.AudioClipAsset,System.Double,InnoEngine.Audio.AudioPlayOptions) caab764b43435d9071ed3442727f6f48ccc9119242b4e99ee55601f2389c7efd -->

```csharp
public static InnoEngine.Audio.AudioVoiceHandle InnoEngine.Audio.Audio.PlayScheduled(InnoEngine.Audio.AudioClipAsset clip, double scheduledDspTime, InnoEngine.Audio.AudioPlayOptions options)
```

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle in preparing or scheduled state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L111).

## `PreloadAsync`

<a id="api-0dc26012e54a4bd9"></a>
<!-- api: M:InnoEngine.Audio.Audio.PreloadAsync(InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioClipLoadMode,System.Threading.CancellationToken) db35fd4ea8ee02c1cde3584079c721f285d263126f09bbba14948a0a74e6581b -->

```csharp
public static System.Threading.Tasks.ValueTask InnoEngine.Audio.Audio.PreloadAsync(InnoEngine.Audio.AudioClipAsset clip, InnoEngine.Audio.AudioClipLoadMode loadMode = InnoEngine.Audio.AudioClipLoadMode.Automatic, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares a clip and retains it in the runtime cache.

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An asynchronous operation that completes after the cache entry is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L270).

## `ReleasePreload`

<a id="api-f15fec1c7ca2a188"></a>
<!-- api: M:InnoEngine.Audio.Audio.ReleasePreload(InnoEngine.Audio.AudioClipAsset) 64c7312bc41ba78f03d213cc0356adc21ffd292cdcc65606dae64a3da1f827f8 -->

```csharp
public static void InnoEngine.Audio.Audio.ReleasePreload(InnoEngine.Audio.AudioClipAsset clip)
```

Releases one explicit preload retention without interrupting active voices.

**Parameter `clip`:** Imported clip whose preload retention should be released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L283).

## `Resume`

<a id="api-ff2407fa025d1d9c"></a>
<!-- api: M:InnoEngine.Audio.Audio.Resume(InnoEngine.Audio.AudioVoiceHandle) b2886a67127c882321392d6417905ae224b452436be54588b100935d65abd094 -->

```csharp
public static bool InnoEngine.Audio.Audio.Resume(InnoEngine.Audio.AudioVoiceHandle voice)
```

Resumes a paused voice.

**Parameter `voice`:** Voice handle to resume.

**Returns:** `true` when the voice resumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L149).

## `Seek`

<a id="api-bc6c95cf0eb968a3"></a>
<!-- api: M:InnoEngine.Audio.Audio.Seek(InnoEngine.Audio.AudioVoiceHandle,System.TimeSpan) 2e373a2e80d5250e710f33fc50509f57c21c1a7b52c0448305a94d6ed01b277e -->

```csharp
public static bool InnoEngine.Audio.Audio.Seek(InnoEngine.Audio.AudioVoiceHandle voice, System.TimeSpan position)
```

Moves a live voice cursor to a clip-relative position.

**Parameter `voice`:** Voice handle to seek.

**Parameter `position`:** Non-negative clip-relative position.

**Returns:** `true` when the cursor was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L163).

## `SetBusMuted`

<a id="api-b380793fe7d78ec4"></a>
<!-- api: M:InnoEngine.Audio.Audio.SetBusMuted(InnoEngine.Audio.AudioBusId,System.Boolean) 6dff340b76de28fcd6a7f4f1fe0dcd558dc551af53eaf7e4519b7102048d65b1 -->

```csharp
public static bool InnoEngine.Audio.Audio.SetBusMuted(InnoEngine.Audio.AudioBusId bus, bool muted)
```

Updates mute state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `muted`:** Whether output from the bus is silenced.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L233).

## `SetBusPaused`

<a id="api-05888abc0e48cb59"></a>
<!-- api: M:InnoEngine.Audio.Audio.SetBusPaused(InnoEngine.Audio.AudioBusId,System.Boolean) 4980340f45be1567deb3371a27f1bf057e7d56e8b19daa9cc12e1d3d67fd1d05 -->

```csharp
public static bool InnoEngine.Audio.Audio.SetBusPaused(InnoEngine.Audio.AudioBusId bus, bool paused)
```

Updates pause state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `paused`:** Whether routed voices should pause.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L250).

## `SetBusVolume`

<a id="api-d55aba6212d2139b"></a>
<!-- api: M:InnoEngine.Audio.Audio.SetBusVolume(InnoEngine.Audio.AudioBusId,System.Single) cff13216d67a3bd97acdb155082df7a960bac2cd51efbb0385fb7dc18b7b1098 -->

```csharp
public static bool InnoEngine.Audio.Audio.SetBusVolume(InnoEngine.Audio.AudioBusId bus, float volume)
```

Updates linear gain for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `volume`:** Non-negative linear gain.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L216).

## `SetVoiceParameters`

<a id="api-cb675454a4b8e9f1"></a>
<!-- api: M:InnoEngine.Audio.Audio.SetVoiceParameters(InnoEngine.Audio.AudioVoiceHandle,InnoEngine.Audio.AudioVoiceParameters) e3c9f24bc5de175b712164a5193ccc09a9b073790707b150b6690021da3b1817 -->

```csharp
public static bool InnoEngine.Audio.Audio.SetVoiceParameters(InnoEngine.Audio.AudioVoiceHandle voice, InnoEngine.Audio.AudioVoiceParameters parameters)
```

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when the voice was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L180).

## `Stop`

<a id="api-0b0dc8fba52601fc"></a>
<!-- api: M:InnoEngine.Audio.Audio.Stop(InnoEngine.Audio.AudioVoiceHandle) eeb9f4b49cc72cced556599297faae8484863dcf1ee02a26a7e2b7fc128e0628 -->

```csharp
public static bool InnoEngine.Audio.Audio.Stop(InnoEngine.Audio.AudioVoiceHandle voice)
```

Stops a live voice.

**Parameter `voice`:** Voice handle to stop.

**Returns:** `true` when a live voice was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L127).

## `TryGetVoiceState`

<a id="api-4ec20f37ecd413d3"></a>
<!-- api: M:InnoEngine.Audio.Audio.TryGetVoiceState(InnoEngine.Audio.AudioVoiceHandle,InnoEngine.Audio.AudioPlaybackState@) 547b1e1564be2d68cbb7c218d8e311dfdbd17657114f1e01093d838b1645ba3f -->

```csharp
public static bool InnoEngine.Audio.Audio.TryGetVoiceState(InnoEngine.Audio.AudioVoiceHandle voice, out InnoEngine.Audio.AudioPlaybackState playbackState)
```

Queries the current state of a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L198).

## `capabilities`

<a id="api-e36a277621b86a31"></a>
<!-- api: P:InnoEngine.Audio.Audio.capabilities 9b2ea8b6469c6cf4a988a16c4d450427811e76ad4770d2f666e696dbd38829b4 -->

```csharp
public static InnoEngine.Audio.AudioCapabilities InnoEngine.Audio.Audio.capabilities { get; }
```

Gets immutable capabilities for the current audio device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L51).

## `deviceState`

<a id="api-433fa1cbcd7d34a9"></a>
<!-- api: P:InnoEngine.Audio.Audio.deviceState 6856e5e50ec0ba6c8e95451ffc51d659da535ae3a6f1cffb4c0b159b6a5a2194 -->

```csharp
public static InnoEngine.Audio.AudioDeviceState InnoEngine.Audio.Audio.deviceState { get; }
```

Gets the current output availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L56).

## `dspTime`

<a id="api-35230e4c5edaafc7"></a>
<!-- api: P:InnoEngine.Audio.Audio.dspTime 90e59c069d775501aac11f69172a3694cb07fbd6e168791b243a15b435924be1 -->

```csharp
public static double InnoEngine.Audio.Audio.dspTime { get; }
```

Gets the monotonic audio clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L61).

## `statistics`

<a id="api-ea650ee0defb40fb"></a>
<!-- api: P:InnoEngine.Audio.Audio.statistics aaf56624530137c5f6870122a81c50ca9e0c68338b3ca9470661a5c217f4b23c -->

```csharp
public static InnoEngine.Audio.AudioStatistics InnoEngine.Audio.Audio.statistics { get; }
```

Gets current audio resource statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/Audio.cs#L66).
