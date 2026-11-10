---
title: "IAudioService"
description: "Reference for IAudioService in Inno.Audio."
uid: api.inno.audio.ed709029e1422031
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `IAudioService`

This reference describes `IAudioService` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Pause`](#api-e323347ceb7cbfec) | Method |
| [`Play`](#api-fe7be6809f7f363b) | Method |
| [`Play`](#api-8e05e8c639651ad9) | Method |
| [`PlayScheduled`](#api-fc9f6ae536180ebb) | Method |
| [`PreloadAsync`](#api-356cd1a46009f6eb) | Method |
| [`ReleasePreload`](#api-f2d0369641916dd9) | Method |
| [`Resume`](#api-db6324c53b1fad72) | Method |
| [`Seek`](#api-a8612f57c497150c) | Method |
| [`SetBusMuted`](#api-49463fc7f7f7801a) | Method |
| [`SetBusPaused`](#api-f50e357d3f534faf) | Method |
| [`SetBusVolume`](#api-5811571adaa7841b) | Method |
| [`SetVoiceParameters`](#api-2a546ee2e71d417e) | Method |
| [`Stop`](#api-280c2bdef3e6ace0) | Method |
| [`TryGetVoiceState`](#api-92073b2bb880f0b2) | Method |
| [`capabilities`](#api-0bac2f2d8924f93c) | Property |
| [`deviceState`](#api-f744db1f569a3bee) | Property |
| [`dspTime`](#api-475a0b558f446b49) | Property |
| [`statistics`](#api-b2930276a37036bc) | Property |

## Type declaration

<a id="api-ed709029e1422031"></a>
<!-- api: T:Inno.Audio.IAudioService 84838042c871d3fb99f4a8a89a09d2b1f97d0fb15d74e1cb7284f575339def0e -->

```csharp
public interface Inno.Audio.IAudioService
```

Provides backend-neutral audio playback, caching, mixer, and device-state services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L10).

## `Pause`

<a id="api-e323347ceb7cbfec"></a>
<!-- api: M:Inno.Audio.IAudioService.Pause(Inno.Audio.AudioVoiceHandle) b65fb2bd63e4bd9a41c093011281c9d43acfdd64ba0035d64667490efdb50809 -->

```csharp
bool Inno.Audio.IAudioService.Pause(Inno.Audio.AudioVoiceHandle voice)
```

Pauses a live voice.

**Parameter `voice`:** Voice handle to pause.

**Returns:** `true` when the voice entered the paused state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L104).

## `Play`

<a id="api-fe7be6809f7f363b"></a>
<!-- api: M:Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions) a1690b9936af71534d47b49bbd6097da6ed3601f02b4a4c99be82832838212ff -->

```csharp
Inno.Audio.AudioVoiceHandle Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioPlayOptions options)
```

Starts one clip using explicit playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle that may initially be in the preparing state.

**Throws `System.ArgumentException`:** Playback options are uninitialized; construct options instead of passing a default struct.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L58).

## `Play`

<a id="api-8e05e8c639651ad9"></a>
<!-- api: M:Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset) 1ce8ccf6a2d52ae6fb2eb398913f53be7374478121b009c9fc30bfc678732692 -->

```csharp
Inno.Audio.AudioVoiceHandle Inno.Audio.IAudioService.Play(Inno.Audio.AudioClipAsset clip)
```

Starts one clip using default playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Returns:** A voice handle that may initially be in the preparing state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L41).

## `PlayScheduled`

<a id="api-fc9f6ae536180ebb"></a>
<!-- api: M:Inno.Audio.IAudioService.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions) fe496f9f9ef304e271fe00cf4c68e5b56cefa1ec71dd2a5a36659800076025f2 -->

```csharp
Inno.Audio.AudioVoiceHandle Inno.Audio.IAudioService.PlayScheduled(Inno.Audio.AudioClipAsset clip, double scheduledDspTime, Inno.Audio.AudioPlayOptions options)
```

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A voice handle in preparing or scheduled state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L78).

## `PreloadAsync`

<a id="api-356cd1a46009f6eb"></a>
<!-- api: M:Inno.Audio.IAudioService.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken) cac01da8986195a3e3ea4378814e9b7bac392e0c08121d96eea7176df28855ee -->

```csharp
System.Threading.Tasks.ValueTask Inno.Audio.IAudioService.PreloadAsync(Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioClipLoadMode loadMode = Inno.Audio.AudioClipLoadMode.Automatic, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares a clip and retains it in the decoded or streamed cache.

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An asynchronous operation that completes after the cache entry is ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L234).

## `ReleasePreload`

<a id="api-f2d0369641916dd9"></a>
<!-- api: M:Inno.Audio.IAudioService.ReleasePreload(Inno.Audio.AudioClipAsset) 5a91a566d8d239cf612557f1107ef851ba6a3153df64179a3d880673c7a207d5 -->

```csharp
void Inno.Audio.IAudioService.ReleasePreload(Inno.Audio.AudioClipAsset clip)
```

Releases one explicit preload retention without interrupting active voices.

**Parameter `clip`:** Imported clip whose preload retention should be released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L246).

## `Resume`

<a id="api-db6324c53b1fad72"></a>
<!-- api: M:Inno.Audio.IAudioService.Resume(Inno.Audio.AudioVoiceHandle) ecc3f427bc0bd0baa03e6590f5340a1f18195df2189b9ca24a81b9e2cdaafa90 -->

```csharp
bool Inno.Audio.IAudioService.Resume(Inno.Audio.AudioVoiceHandle voice)
```

Resumes a paused voice.

**Parameter `voice`:** Voice handle to resume.

**Returns:** `true` when the voice resumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L115).

## `Seek`

<a id="api-a8612f57c497150c"></a>
<!-- api: M:Inno.Audio.IAudioService.Seek(Inno.Audio.AudioVoiceHandle,System.TimeSpan) b4025258f7edc98c180d5622ebd5279570ab77e1c339989448e5c36b00420c20 -->

```csharp
bool Inno.Audio.IAudioService.Seek(Inno.Audio.AudioVoiceHandle voice, System.TimeSpan position)
```

Moves a live voice cursor to a clip-relative position.

**Parameter `voice`:** Voice handle to seek.

**Parameter `position`:** Non-negative clip-relative position.

**Returns:** `true` when the cursor was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L129).

## `SetBusMuted`

<a id="api-49463fc7f7f7801a"></a>
<!-- api: M:Inno.Audio.IAudioService.SetBusMuted(Inno.Audio.AudioBusId,System.Boolean) 83777d4ee495b6d0476c0649766810e7c8a3a877be4e8c7d248a4a854e0fd403 -->

```csharp
bool Inno.Audio.IAudioService.SetBusMuted(Inno.Audio.AudioBusId bus, bool muted)
```

Updates mute state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `muted`:** Whether output from the bus is silenced.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L197).

## `SetBusPaused`

<a id="api-f50e357d3f534faf"></a>
<!-- api: M:Inno.Audio.IAudioService.SetBusPaused(Inno.Audio.AudioBusId,System.Boolean) 91dc2b22c2edd0638fa1417599591d50a333f43e25fa21de80e9aaa05a4942d3 -->

```csharp
bool Inno.Audio.IAudioService.SetBusPaused(Inno.Audio.AudioBusId bus, bool paused)
```

Updates pause state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `paused`:** Whether routed voices should pause.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L214).

## `SetBusVolume`

<a id="api-5811571adaa7841b"></a>
<!-- api: M:Inno.Audio.IAudioService.SetBusVolume(Inno.Audio.AudioBusId,System.Single) 9fec083b972703b837ff5becc020bbe9412b7598d3aa16aece133c36b92e2b3e -->

```csharp
bool Inno.Audio.IAudioService.SetBusVolume(Inno.Audio.AudioBusId bus, float volume)
```

Updates linear gain for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `volume`:** Non-negative linear gain.

**Returns:** `true` when the bus exists and was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L180).

## `SetVoiceParameters`

<a id="api-2a546ee2e71d417e"></a>
<!-- api: M:Inno.Audio.IAudioService.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters) e02704888153032fe8ddd1f245116a11b5cfdaab696f7d0c5be637134ff13817 -->

```csharp
bool Inno.Audio.IAudioService.SetVoiceParameters(Inno.Audio.AudioVoiceHandle voice, Inno.Audio.AudioVoiceParameters parameters)
```

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when a live voice was updated; false for stale handles or uninitialized parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L146).

## `Stop`

<a id="api-280c2bdef3e6ace0"></a>
<!-- api: M:Inno.Audio.IAudioService.Stop(Inno.Audio.AudioVoiceHandle) 6dcd5ae0ddc6bd2f921c6e80a41d86bbe0f9190ffbaed5821985d128730982c5 -->

```csharp
bool Inno.Audio.IAudioService.Stop(Inno.Audio.AudioVoiceHandle voice)
```

Stops a live voice.

**Parameter `voice`:** Voice handle to stop.

**Returns:** `true` when a live voice was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L93).

## `TryGetVoiceState`

<a id="api-92073b2bb880f0b2"></a>
<!-- api: M:Inno.Audio.IAudioService.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@) cab08ec84112b008d0db671afa893aa9ad41c1aa17182fa4041b8c6a93de05a1 -->

```csharp
bool Inno.Audio.IAudioService.TryGetVoiceState(Inno.Audio.AudioVoiceHandle voice, out Inno.Audio.AudioPlaybackState playbackState)
```

Queries the current state of a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L163).

## `capabilities`

<a id="api-0bac2f2d8924f93c"></a>
<!-- api: P:Inno.Audio.IAudioService.capabilities 14e840bcae2be36d444bfeb0ffa0fc0c52f2d456690c0e72b8cb20d2540e6978 -->

```csharp
Inno.Audio.AudioCapabilities Inno.Audio.IAudioService.capabilities { get; }
```

Gets immutable capabilities for the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L15).

## `deviceState`

<a id="api-f744db1f569a3bee"></a>
<!-- api: P:Inno.Audio.IAudioService.deviceState 495bb02390c6d266e7e4ca077d8f5a1ab5318a411f1901c9a52465aaae476ad9 -->

```csharp
Inno.Audio.AudioDeviceState Inno.Audio.IAudioService.deviceState { get; }
```

Gets the current audio output state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L20).

## `dspTime`

<a id="api-475a0b558f446b49"></a>
<!-- api: P:Inno.Audio.IAudioService.dspTime 90cdb9c6efe2623ae6ff9b69b958e3c88fed500143d9ff6897e972378bc9d4a0 -->

```csharp
double Inno.Audio.IAudioService.dspTime { get; }
```

Gets the monotonic audio clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L25).

## `statistics`

<a id="api-b2930276a37036bc"></a>
<!-- api: P:Inno.Audio.IAudioService.statistics caba9861449e46a5ddfea6cf1f5bcfc43eeef64c6abc480d62c998d9a8fa58be -->

```csharp
Inno.Audio.AudioStatistics Inno.Audio.IAudioService.statistics { get; }
```

Gets current runtime and backend resource statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioService.cs#L30).
