---
title: "IAudioDevice"
description: "Reference for IAudioDevice in Inno.Audio."
uid: api.inno.audio.d66f1600c83594c4
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `IAudioDevice`

This reference describes `IAudioDevice` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`AddBusProcessor`](#api-de207b6f6aaa73a5) | Method |
| [`CreateBus`](#api-db8104b8f6cca90e) | Method |
| [`CreateClip`](#api-264763428a857b97) | Method |
| [`CreateListener`](#api-4993c8336acb6085) | Method |
| [`DestroyBus`](#api-3e90348ff0709e63) | Method |
| [`DestroyClip`](#api-c855e51cc7dd1c52) | Method |
| [`DestroyListener`](#api-c15cac8ae6971ab9) | Method |
| [`GetClipState`](#api-0fd2b32f4bdac529) | Method |
| [`Pause`](#api-87d3387a4b2a01ba) | Method |
| [`Play`](#api-e8cb461a32a82a11) | Method |
| [`Resume`](#api-a2d493f1ac8f159a) | Method |
| [`Seek`](#api-fec65760f357bf44) | Method |
| [`SetBusMuted`](#api-9589095c90fa8106) | Method |
| [`SetBusPaused`](#api-0f6beb45b82d9bd1) | Method |
| [`SetBusVolume`](#api-a9472afeeb7a6f00) | Method |
| [`SetListener`](#api-087c67dbe3c42998) | Method |
| [`SetVoiceParameters`](#api-ca9dd2dff86551c7) | Method |
| [`Stop`](#api-37ed69d7dbf72224) | Method |
| [`TryDequeueCompletion`](#api-6f23bbc5a2cf6a2a) | Method |
| [`TryGetVoiceState`](#api-7da80970a6fde54d) | Method |
| [`Update`](#api-35c3df76f77d1a86) | Method |
| [`capabilities`](#api-1eba2aae80746e76) | Property |
| [`dspTime`](#api-97d620cab1b7e4c2) | Property |
| [`generation`](#api-6de8b73ac0ddc674) | Property |
| [`state`](#api-1891987944833e98) | Property |
| [`statistics`](#api-071736b8bb68ec8f) | Property |

## Type declaration

<a id="api-d66f1600c83594c4"></a>
<!-- api: T:Inno.Audio.IAudioDevice 2b5b130a5c72713eb0e3d1b44561cee35455314ae38883dbf48ddc76872b315a -->

```csharp
public interface Inno.Audio.IAudioDevice : System.IDisposable
```

Owns one replaceable audio backend generation and all device-side audio objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L43).

## `AddBusProcessor`

<a id="api-de207b6f6aaa73a5"></a>
<!-- api: M:Inno.Audio.IAudioDevice.AddBusProcessor(Inno.Audio.AudioBusHandle,Inno.Audio.AudioProcessorConfiguration) b6d487b59c72702141a3df523e5017363f4b41859daa2411d75fd5719ede77ba -->

```csharp
bool Inno.Audio.IAudioDevice.AddBusProcessor(Inno.Audio.AudioBusHandle bus, Inno.Audio.AudioProcessorConfiguration processor)
```

Appends one backend-neutral processor configuration to a bus chain.

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `processor`:** Open processor protocol and neutral parameter values.

**Returns:** `true` when the backend recognized and attached the processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L310).

## `CreateBus`

<a id="api-db8104b8f6cca90e"></a>
<!-- api: M:Inno.Audio.IAudioDevice.CreateBus(Inno.Audio.AudioBusId,Inno.Audio.AudioBusHandle) 1d8887484694af7dc08793fad6eead87021a3ff6391f18d1de39545a7e47cff6 -->

```csharp
Inno.Audio.AudioBusHandle Inno.Audio.IAudioDevice.CreateBus(Inno.Audio.AudioBusId id, Inno.Audio.AudioBusHandle parent = default(Inno.Audio.AudioBusHandle))
```

Creates one bus routed to a parent bus.

**Parameter `id`:** Stable semantic bus identifier.

**Parameter `parent`:** Parent bus, or an invalid handle when creating the master bus.

**Returns:** A bus handle owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L231).

## `CreateClip`

<a id="api-264763428a857b97"></a>
<!-- api: M:Inno.Audio.IAudioDevice.CreateClip(Inno.Audio.AudioClipDescriptor,Inno.Audio.IAudioClipSource) 513efefa5c27f9abd17c4958d756d4083e2dc345c6083851282d23c899dff434 -->

```csharp
Inno.Audio.AudioClipHandle Inno.Audio.IAudioDevice.CreateClip(Inno.Audio.AudioClipDescriptor descriptor, Inno.Audio.IAudioClipSource source)
```

Starts preparation of one decoded or streamed clip from immutable encoded content.

**Parameter `descriptor`:** Encoded artifact and preparation requirements.

**Parameter `source`:** The immutable encoded source, borrowed until successful clip retirement.
Opening a stream must independently pin its content; the caller retains source ownership.

**Returns:** A handle owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L94).

## `CreateListener`

<a id="api-4993c8336acb6085"></a>
<!-- api: M:Inno.Audio.IAudioDevice.CreateListener(Inno.Audio.AudioListenerState) e2f6c0fd28a17831f8f852d94e9f66481886b25beb1c83a8f4f78356813d8365 -->

```csharp
Inno.Audio.AudioListenerHandle Inno.Audio.IAudioDevice.CreateListener(Inno.Audio.AudioListenerState state)
```

Creates one backend spatial listener.

**Parameter `state`:** Initial listener transform.

**Returns:** A listener handle owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L324).

## `DestroyBus`

<a id="api-3e90348ff0709e63"></a>
<!-- api: M:Inno.Audio.IAudioDevice.DestroyBus(Inno.Audio.AudioBusHandle) 60dcece58a8d32b18a04d1347abc018d8fd51c33539f8ccb6e02ee731666f9ef -->

```csharp
bool Inno.Audio.IAudioDevice.DestroyBus(Inno.Audio.AudioBusHandle bus)
```

Releases one graph-generation bus after dependent objects have been removed.

**Parameter `bus`:** Bus owned by the current device generation.

**Returns:** `true` when a live bus was released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L245).

## `DestroyClip`

<a id="api-c855e51cc7dd1c52"></a>
<!-- api: M:Inno.Audio.IAudioDevice.DestroyClip(Inno.Audio.AudioClipHandle) df965404958e504320057e64dc932205cc1dd75ad6eadf789f0a23e05d699fc0 -->

```csharp
bool Inno.Audio.IAudioDevice.DestroyClip(Inno.Audio.AudioClipHandle clip)
```

Releases one clip after all voices using it have ended.

**Parameter `clip`:** Clip owned by the current device generation.

**Returns:** `true` when a live clip was released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L108).

## `DestroyListener`

<a id="api-c15cac8ae6971ab9"></a>
<!-- api: M:Inno.Audio.IAudioDevice.DestroyListener(Inno.Audio.AudioListenerHandle) 3428d7d5ae535f57c8df72ba9ded9af497db85f95f78c1f90529435f1d756e75 -->

```csharp
bool Inno.Audio.IAudioDevice.DestroyListener(Inno.Audio.AudioListenerHandle listener)
```

Releases one backend spatial listener.

**Parameter `listener`:** Listener owned by the current device generation.

**Returns:** `true` when a live listener was released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L352).

## `GetClipState`

<a id="api-0fd2b32f4bdac529"></a>
<!-- api: M:Inno.Audio.IAudioDevice.GetClipState(Inno.Audio.AudioClipHandle) 90d0f2656eb70b625bba5942043366357b702dd17620b4bb3d81d37c9cd9722b -->

```csharp
Inno.Audio.AudioClipState Inno.Audio.IAudioDevice.GetClipState(Inno.Audio.AudioClipHandle clip)
```

Queries asynchronous clip preparation without blocking the owner thread.

**Parameter `clip`:** A handle created by this device generation.

**Returns:** The preparation state, or Failed for a retired or invalid handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L54).

## `Pause`

<a id="api-87d3387a4b2a01ba"></a>
<!-- api: M:Inno.Audio.IAudioDevice.Pause(Inno.Audio.AudioDeviceVoiceHandle) 56bf94b429a9864b453d55a950bdbc17545c061213cac9828f73b863ec392334 -->

```csharp
bool Inno.Audio.IAudioDevice.Pause(Inno.Audio.AudioDeviceVoiceHandle voice)
```

Pauses a live voice.

**Parameter `voice`:** Voice owned by the current device generation.

**Returns:** `true` when the voice entered the paused state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L155).

## `Play`

<a id="api-e8cb461a32a82a11"></a>
<!-- api: M:Inno.Audio.IAudioDevice.Play(Inno.Audio.AudioClipHandle,Inno.Audio.AudioBusHandle,Inno.Audio.AudioPlayOptions,System.Nullable{System.Double}) 1cae89d50cc5011a77512c5a2c8ffeaaeda2a9c7779bd36bab922947cc90a40d -->

```csharp
Inno.Audio.AudioDeviceVoiceHandle Inno.Audio.IAudioDevice.Play(Inno.Audio.AudioClipHandle clip, Inno.Audio.AudioBusHandle bus, Inno.Audio.AudioPlayOptions options, double? scheduledDspTime = null)
```

Creates and starts or schedules one playback voice.

**Parameter `clip`:** Prepared clip owned by this device generation.

**Parameter `bus`:** Destination bus owned by this device generation.

**Parameter `options`:** Immutable playback parameters.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time, or `null` for immediate playback.

**Returns:** A new voice handle, or an invalid handle when options are uninitialized, scheduling is invalid, or backend preparation fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L128).

## `Resume`

<a id="api-a2d493f1ac8f159a"></a>
<!-- api: M:Inno.Audio.IAudioDevice.Resume(Inno.Audio.AudioDeviceVoiceHandle) ddb9c453f686a25aa53000d76784a6ec862bd794abcd2b2933064001f22c101a -->

```csharp
bool Inno.Audio.IAudioDevice.Resume(Inno.Audio.AudioDeviceVoiceHandle voice)
```

Resumes a paused voice.

**Parameter `voice`:** Voice owned by the current device generation.

**Returns:** `true` when the voice resumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L166).

## `Seek`

<a id="api-fec65760f357bf44"></a>
<!-- api: M:Inno.Audio.IAudioDevice.Seek(Inno.Audio.AudioDeviceVoiceHandle,System.TimeSpan) e4790027bfd351bc99f1b464b05eb385a236dfc10a5692252abc15e782b8d019 -->

```csharp
bool Inno.Audio.IAudioDevice.Seek(Inno.Audio.AudioDeviceVoiceHandle voice, System.TimeSpan position)
```

Moves a live voice cursor to a clip-relative position.

**Parameter `voice`:** Voice owned by the current device generation.

**Parameter `position`:** Non-negative clip-relative position.

**Returns:** `true` when the cursor was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L180).

## `SetBusMuted`

<a id="api-9589095c90fa8106"></a>
<!-- api: M:Inno.Audio.IAudioDevice.SetBusMuted(Inno.Audio.AudioBusHandle,System.Boolean) 2d6b8665e1abb5597ffec3337a1a8ce0eb6cb5843961d329fa9fd424041629f4 -->

```csharp
bool Inno.Audio.IAudioDevice.SetBusMuted(Inno.Audio.AudioBusHandle bus, bool muted)
```

Updates mute state for one bus.

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `muted`:** Whether output from the bus is silenced.

**Returns:** `true` when the bus was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L276).

## `SetBusPaused`

<a id="api-0f6beb45b82d9bd1"></a>
<!-- api: M:Inno.Audio.IAudioDevice.SetBusPaused(Inno.Audio.AudioBusHandle,System.Boolean) 6dc286ed674bd92b84e12c77569e2d3c112472843389bfe7ab2027c1dfa079bd -->

```csharp
bool Inno.Audio.IAudioDevice.SetBusPaused(Inno.Audio.AudioBusHandle bus, bool paused)
```

Updates pause state for one bus and its routed voices.

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `paused`:** Whether routed voices should pause.

**Returns:** `true` when the bus was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L293).

## `SetBusVolume`

<a id="api-a9472afeeb7a6f00"></a>
<!-- api: M:Inno.Audio.IAudioDevice.SetBusVolume(Inno.Audio.AudioBusHandle,System.Single) cde5fd723f1ab9b1d812b16bc53226154ae3f8182c07e15d93572dc0609458c8 -->

```csharp
bool Inno.Audio.IAudioDevice.SetBusVolume(Inno.Audio.AudioBusHandle bus, float volume)
```

Updates linear gain for one bus.

**Parameter `bus`:** Bus owned by the current device generation.

**Parameter `volume`:** Non-negative linear gain.

**Returns:** `true` when the bus was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L259).

## `SetListener`

<a id="api-087c67dbe3c42998"></a>
<!-- api: M:Inno.Audio.IAudioDevice.SetListener(Inno.Audio.AudioListenerHandle,Inno.Audio.AudioListenerState) f86b7a6dd70c8c0dd9d014bd378a60eeadab5a79f20a8b2a0905666ed7347852 -->

```csharp
bool Inno.Audio.IAudioDevice.SetListener(Inno.Audio.AudioListenerHandle listener, Inno.Audio.AudioListenerState state)
```

Updates one backend spatial listener.

**Parameter `listener`:** Listener owned by the current device generation.

**Parameter `state`:** Current listener transform.

**Returns:** `true` when the listener was updated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L338).

## `SetVoiceParameters`

<a id="api-ca9dd2dff86551c7"></a>
<!-- api: M:Inno.Audio.IAudioDevice.SetVoiceParameters(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioVoiceParameters) b1052ce4a0c45bacedf36a55d7c07e7bc86e3946909c2bdf378a1fe7c54b691b -->

```csharp
bool Inno.Audio.IAudioDevice.SetVoiceParameters(Inno.Audio.AudioDeviceVoiceHandle voice, Inno.Audio.AudioVoiceParameters parameters)
```

Replaces mutable parameters for a live voice.

**Parameter `voice`:** Voice owned by the current device generation.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when a live voice was updated; false for stale handles or uninitialized parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L197).

## `Stop`

<a id="api-37ed69d7dbf72224"></a>
<!-- api: M:Inno.Audio.IAudioDevice.Stop(Inno.Audio.AudioDeviceVoiceHandle) 50a2e293f196b19f3e3d4796139457e3d8fdce321f3ee1bb1d9841941dd097b4 -->

```csharp
bool Inno.Audio.IAudioDevice.Stop(Inno.Audio.AudioDeviceVoiceHandle voice)
```

Stops a voice and makes its handle terminal.

**Parameter `voice`:** Voice owned by the current device generation.

**Returns:** `true` when a live voice was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L144).

## `TryDequeueCompletion`

<a id="api-6f23bbc5a2cf6a2a"></a>
<!-- api: M:Inno.Audio.IAudioDevice.TryDequeueCompletion(Inno.Audio.AudioDeviceCompletion@) 125a3a853a0fed1aa6ab9b0a376a40a2232ca0ba0935c58affb6b94a2ede4e4b -->

```csharp
bool Inno.Audio.IAudioDevice.TryDequeueCompletion(out Inno.Audio.AudioDeviceCompletion completion)
```

Tries to consume one terminal voice transition recorded by the backend.

**Parameter `completion`:** Receives one terminal transition when available.

**Returns:** `true` when a completion was dequeued.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L371).

## `TryGetVoiceState`

<a id="api-7da80970a6fde54d"></a>
<!-- api: M:Inno.Audio.IAudioDevice.TryGetVoiceState(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioPlaybackState@) 1afdd303ceac6942b3119caa997bd7f0fb23d66c9dc59c8f73c7725be0c3b4b1 -->

```csharp
bool Inno.Audio.IAudioDevice.TryGetVoiceState(Inno.Audio.AudioDeviceVoiceHandle voice, out Inno.Audio.AudioPlaybackState playbackState)
```

Queries the current playback state for a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L214).

## `Update`

<a id="api-35c3df76f77d1a86"></a>
<!-- api: M:Inno.Audio.IAudioDevice.Update(System.Single) bceec086f5e46e31eb4c657f794e0d0dd6ad5b118c170df986d44d87279d77d2 -->

```csharp
void Inno.Audio.IAudioDevice.Update(float deltaTime)
```

Advances backend maintenance at a main-thread safety point.

**Parameter `deltaTime`:** Non-negative elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L360).

## `capabilities`

<a id="api-1eba2aae80746e76"></a>
<!-- api: P:Inno.Audio.IAudioDevice.capabilities 3ca74bda59303c47e74868a8aa90f01f81a07cc3777b6f0297132329862e0821 -->

```csharp
Inno.Audio.AudioCapabilities Inno.Audio.IAudioDevice.capabilities { get; }
```

Gets immutable capabilities for the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L59).

## `dspTime`

<a id="api-97d620cab1b7e4c2"></a>
<!-- api: P:Inno.Audio.IAudioDevice.dspTime 0272247e57f03a0ce9563ef0259dbe188ea706714209f5baf937cd3352c22249 -->

```csharp
double Inno.Audio.IAudioDevice.dspTime { get; }
```

Gets the monotonic backend audio clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L74).

## `generation`

<a id="api-6de8b73ac0ddc674"></a>
<!-- api: P:Inno.Audio.IAudioDevice.generation a451f29876ab86c07c565aeeadcde62eb25c5ed314adceef4a503a5c26ab6556 -->

```csharp
uint Inno.Audio.IAudioDevice.generation { get; }
```

Gets the non-zero generation used to reject stale handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L64).

## `state`

<a id="api-1891987944833e98"></a>
<!-- api: P:Inno.Audio.IAudioDevice.state bd8c0ac0f7c8ac63ed7a8567d0108398435132f135049700ecfe870221b58e51 -->

```csharp
Inno.Audio.AudioDeviceState Inno.Audio.IAudioDevice.state { get; }
```

Gets the current output availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L69).

## `statistics`

<a id="api-071736b8bb68ec8f"></a>
<!-- api: P:Inno.Audio.IAudioDevice.statistics a783841fba78a32e6b5fe622fccbe83c885d685751c752a63063ab0baa40dd89 -->

```csharp
Inno.Audio.AudioStatistics Inno.Audio.IAudioDevice.statistics { get; }
```

Gets current backend resource statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L79).
