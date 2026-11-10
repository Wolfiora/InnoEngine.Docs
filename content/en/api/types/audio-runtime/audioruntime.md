---
title: "AudioRuntime"
description: "Reference for AudioRuntime in Inno.Audio.Runtime."
uid: api.inno.audio.runtime.fc17f0a21c22f20a
kind: api
owners:
  - Inno.Audio.Runtime
apiSurface: source-clr
contracts:
  - project.inno-audio-runtime#composition-and-lifetime-contract
---
# `AudioRuntime`

This reference describes `AudioRuntime` in `Inno.Audio.Runtime`. Read the [shared contract](../../projects/inno-audio-runtime.md#composition-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.Audio.IAudioService`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a62df8b8f0045cc5) | Method |
| [`ApplyMixer`](#api-abf5b4d5e73c37fa) | Method |
| [`EnterExecutionScope`](#api-322e89e01c8fffa2) | Method |
| [`OnBeginFrame`](#api-0367b85500513492) | Method |
| [`OnStart`](#api-fc62888ecfc2fff6) | Method |
| [`OnStop`](#api-80ecf30ccf0c1fab) | Method |
| [`OnUpdate`](#api-5805be4a9933b10e) | Method |
| [`Pause`](#api-b5094e6c333bb0d7) | Method |
| [`Play`](#api-f310d8e3960c795a) | Method |
| [`Play`](#api-5c6a28a7d440b072) | Method |
| [`PlayScheduled`](#api-932866468aba7368) | Method |
| [`PreloadAsync`](#api-b908eae9c021c0e8) | Method |
| [`ReleasePreload`](#api-56ec85e7ace701c1) | Method |
| [`ReplaceDevice`](#api-e98c8c8cb9dacc02) | Method |
| [`Resume`](#api-12f4e76ea6892478) | Method |
| [`Seek`](#api-452dddf0d7efae14) | Method |
| [`SetBusMuted`](#api-1dbbbfd553de2433) | Method |
| [`SetBusPaused`](#api-c42e3b3304818efa) | Method |
| [`SetBusVolume`](#api-9fd38b5f5abb3219) | Method |
| [`SetVoiceParameters`](#api-e90f04f17c0e4229) | Method |
| [`Stop`](#api-2c24964424cb669c) | Method |
| [`TryGetVoiceState`](#api-4be96d5f81ae35ec) | Method |
| [`TryRecoverDevice`](#api-6cc2b881a9f1698d) | Method |
| [`Update`](#api-bff47068c54035e9) | Method |
| [`capabilities`](#api-5158187c329a9da8) | Property |
| [`contentStatistics`](#api-f9aadf9289af075b) | Property |
| [`deviceState`](#api-34e784df21599043) | Property |
| [`dspTime`](#api-7c29dd59f4eb23f6) | Property |
| [`statistics`](#api-7da56903c3092e1e) | Property |

## Type declaration

<a id="api-fc17f0a21c22f20a"></a>
<!-- api: T:Inno.Audio.Runtime.AudioRuntime 3d0ed881446d02f01f7635ad44cfe6154287ce83ddd9355cba36b35b0e929d52 -->

```csharp
public sealed class Inno.Audio.Runtime.AudioRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.Audio.IAudioService
```

Owns playback scheduling, clip retention, mixer generations, and content synchronization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L19).

## `#ctor`

<a id="api-a62df8b8f0045cc5"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Audio.IAudioDevice,Inno.Assets.IAssetArtifactLookup,Inno.Core.Events.EventDispatcher,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Audio.Runtime.AudioRuntimeOptions,System.Func{Inno.References.ContentReadScope},System.Func{Inno.Audio.IAudioDevice}) 6bf56cf8031d8ed7538b21499b6757835dfee275b0cded264f4b047fab871ba0 -->

```csharp
public Inno.Audio.Runtime.AudioRuntime.AudioRuntime(Inno.Extensibility.Types.TypeCatalog types, Inno.Audio.IAudioDevice device, Inno.Assets.IAssetArtifactLookup artifacts, Inno.Core.Events.EventDispatcher events, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics, Inno.Audio.Runtime.AudioRuntimeOptions? options = null, System.Func<Inno.References.ContentReadScope>? contentScopeProvider = null, System.Func<Inno.Audio.IAudioDevice>? deviceRecoveryFactory = null)
```

Creates an audio runtime over one backend device generation.

**Parameter `types`:** Type catalog used for mixer and content-provider discovery.

**Parameter `device`:** Backend device whose ownership transfers to this runtime.

**Parameter `artifacts`:** Lookup for verified immutable `audio-data` artifacts.

**Parameter `events`:** Main-thread event dispatcher that receives voice completion events.

**Parameter `diagnostics`:** Required owner-bound diagnostic producer.

**Parameter `options`:** Optional bounded runtime resource policies.

**Parameter `contentScopeProvider`:** Optional callback that supplies update-scoped host content without coupling Runtime to Scene.

**Parameter `deviceRecoveryFactory`:** Optional host factory used to retry a real output device at main-thread update safety points.

**Throws `System.ArgumentNullException`:** A required device, catalog, artifact lookup, event dispatcher, or diagnostic reporter is null.

**Throws `System.ArgumentOutOfRangeException`:** A voice, preload, or content limit is not positive, a byte budget is negative, or the recovery delay is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L78).

## `ApplyMixer`

<a id="api-abf5b4d5e73c37fa"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.ApplyMixer(Inno.Audio.AudioMixerAsset) 81438857f740f87f9837fb2f6d7b8d2bdb2dc7283e514e5959d7eff4b6d46bfb -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.ApplyMixer(Inno.Audio.AudioMixerAsset asset)
```

Builds and atomically installs a mixer graph from reloadable extensions.

**Parameter `asset`:** Mixer asset containing stable extension identifiers and neutral state.

**Returns:** `true` when every extension resolved and the candidate became active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L458).

## `EnterExecutionScope`

<a id="api-322e89e01c8fffa2"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.EnterExecutionScope d28d6c4bc252b38a92aeb7c5dcfdc2c459707cff27eeda97ee1762c4d651ce84 -->

```csharp
public System.IDisposable Inno.Audio.Runtime.AudioRuntime.EnterExecutionScope()
```

Binds this runtime to script-facing audio APIs for the current asynchronous flow.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Throws `System.ObjectDisposedException`:** Thrown when this runtime has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L182).

## `OnBeginFrame`

<a id="api-0367b85500513492"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) b4d3b076449d8ba7a0edc7bb58bfd4a547f9933b4708831a2766e84a60a2b3a9 -->

```csharp
protected override void Inno.Audio.Runtime.AudioRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Captures snapshots and binds service façades.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L149).

## `OnStart`

<a id="api-fc62888ecfc2fff6"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.OnStart d355e59dd11daeb7847ac4d9b85110398978bb74c59118c318ff03d3cb572dd9 -->

```csharp
protected override void Inno.Audio.Runtime.AudioRuntime.OnStart()
```

Acquires resources after dependencies have started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L139).

## `OnStop`

<a id="api-80ecf30ccf0c1fab"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.OnStop 96faddfd336798992155302acc38566b6463a163413d2634522f8e6b008ecdd6 -->

```csharp
protected override void Inno.Audio.Runtime.AudioRuntime.OnStop()
```

Stops voices and releases providers, cache entries, mixer generations, and the owned backend device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L703).

## `OnUpdate`

<a id="api-5805be4a9933b10e"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.OnUpdate(Inno.Runtime.Contracts.RuntimeFrame) 75b5a6ee73ffd47301bed38e7dcb0e01b82b6d164c391fb7d0a7d1db4664a897 -->

```csharp
protected override void Inno.Audio.Runtime.AudioRuntime.OnUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances domain state on the variable clock.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L156).

## `Pause`

<a id="api-b5094e6c333bb0d7"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Pause(Inno.Audio.AudioVoiceHandle) b3fa58e413efcdbb9ec048413ca936faaf188e6586962e18f1b8a1e99694d868 -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.Pause(Inno.Audio.AudioVoiceHandle voice)
```

Pauses a live or preparing voice.

**Parameter `voice`:** Runtime voice handle to pause.

**Returns:** `true` when the voice entered the paused state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L272).

## `Play`

<a id="api-f310d8e3960c795a"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Play(Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions) 14c497ed6306a71b1e00512349b120db0ff45f1ca6009bb47a3b812fa40b836b -->

```csharp
public Inno.Audio.AudioVoiceHandle Inno.Audio.Runtime.AudioRuntime.Play(Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioPlayOptions options)
```

Starts one clip using explicit playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A preparing voice handle owned by the current device generation.

**Throws `System.ArgumentException`:** Playback options are uninitialized. The request is rejected before asset acquisition or voice stealing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L214).

## `Play`

<a id="api-5c6a28a7d440b072"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Play(Inno.Audio.AudioClipAsset) b6a4ac4e6ba6bde5acede193dddd8dab930fd667a55322d4130f248eb3d74870 -->

```csharp
public Inno.Audio.AudioVoiceHandle Inno.Audio.Runtime.AudioRuntime.Play(Inno.Audio.AudioClipAsset clip)
```

Starts one clip using default playback parameters.

**Parameter `clip`:** Imported clip to prepare and play.

**Returns:** A preparing voice handle owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L197).

## `PlayScheduled`

<a id="api-932866468aba7368"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.PlayScheduled(Inno.Audio.AudioClipAsset,System.Double,Inno.Audio.AudioPlayOptions) a52cdecce286cf9f01fd5358906870ca4d3f221bed9387abd35d36754134f9f4 -->

```csharp
public Inno.Audio.AudioVoiceHandle Inno.Audio.Runtime.AudioRuntime.PlayScheduled(Inno.Audio.AudioClipAsset clip, double scheduledDspTime, Inno.Audio.AudioPlayOptions options)
```

Schedules one clip against the monotonic audio clock.

**Parameter `clip`:** Imported clip to prepare and play.

**Parameter `scheduledDspTime`:** Absolute audio-clock start time in seconds.

**Parameter `options`:** Immutable playback parameters.

**Returns:** A preparing voice handle owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L237).

## `PreloadAsync`

<a id="api-b908eae9c021c0e8"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken) a356d0f90c4d221c1b5b44d4b70a83e033ea41d97f8615da6c28af981a52b2ca -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Audio.Runtime.AudioRuntime.PreloadAsync(Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioClipLoadMode loadMode = Inno.Audio.AudioClipLoadMode.Automatic, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Prepares and explicitly retains a clip cache entry.

**Parameter `clip`:** Imported clip to retain.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An operation completed at an update safety point after native preparation succeeds or fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L428).

## `ReleasePreload`

<a id="api-56ec85e7ace701c1"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.ReleasePreload(Inno.Audio.AudioClipAsset) 21cd682fcc1265fa52e8cf7b32c0996224837358f39fcbdd3b4b3d3fb53562fc -->

```csharp
public void Inno.Audio.Runtime.AudioRuntime.ReleasePreload(Inno.Audio.AudioClipAsset clip)
```

Releases one explicit preload retention without interrupting voices.

**Parameter `clip`:** Imported clip whose preload retention should be released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L443).

## `ReplaceDevice`

<a id="api-e98c8c8cb9dacc02"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.ReplaceDevice(Inno.Audio.IAudioDevice) b2555fe7bdb91fd62d696485d9c7355d216aa8e4bd72acd83ee1586d8f86b05b -->

```csharp
public void Inno.Audio.Runtime.AudioRuntime.ReplaceDevice(Inno.Audio.IAudioDevice replacement)
```

Replaces a lost or muted backend at a main-thread safety point.

**Parameter `replacement`:** Initialized replacement device, consumed on success and disposed if preparation fails.

**Throws `System.AggregateException`:** Retirement failed after publication preparation; the generation gate is Faulted and the host must restart.

**Throws `Inno.Core.Execution.RetirementTimeoutException`:** Old or candidate work did not drain before its deadline. Both owners remain retained and the host must restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L506).

## `Resume`

<a id="api-12f4e76ea6892478"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Resume(Inno.Audio.AudioVoiceHandle) d8f121b2e1ef706584c999010953e28c07c2df015cdd2ddcc1e4054504e592cd -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.Resume(Inno.Audio.AudioVoiceHandle voice)
```

Resumes a paused voice.

**Parameter `voice`:** Runtime voice handle to resume.

**Returns:** `true` when the voice resumed or returned to preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L287).

## `Seek`

<a id="api-452dddf0d7efae14"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Seek(Inno.Audio.AudioVoiceHandle,System.TimeSpan) 360e8d599bd85db56dd8ba682fba5aeb4bde33e268c614e4536fc300820ae6fd -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.Seek(Inno.Audio.AudioVoiceHandle voice, System.TimeSpan position)
```

Moves a live or preparing voice cursor to a clip-relative position.

**Parameter `voice`:** Runtime voice handle to seek.

**Parameter `position`:** Non-negative clip-relative position.

**Returns:** `true` when the cursor request was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L305).

## `SetBusMuted`

<a id="api-1dbbbfd553de2433"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.SetBusMuted(Inno.Audio.AudioBusId,System.Boolean) 00652d16f3409e5a3a3fd2dd559880267659c7434931efaef1ffb029898012a4 -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.SetBusMuted(Inno.Audio.AudioBusId bus, bool muted)
```

Updates mute state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `muted`:** Whether output from the bus is silenced.

**Returns:** `true` when the active mixer contains the bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L385).

## `SetBusPaused`

<a id="api-c42e3b3304818efa"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.SetBusPaused(Inno.Audio.AudioBusId,System.Boolean) e95d82a6c312d9cc6ab90e3af3a17ad3e7c16142580a9692af615e5bd3078ef8 -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.SetBusPaused(Inno.Audio.AudioBusId bus, bool paused)
```

Updates pause state for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `paused`:** Whether routed voices should pause.

**Returns:** `true` when the active mixer contains the bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L405).

## `SetBusVolume`

<a id="api-9fd38b5f5abb3219"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.SetBusVolume(Inno.Audio.AudioBusId,System.Single) 9387b1bc889cb7910859cc5ad44217014c88b2c409eabb59f13bce59c42fcb0e -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.SetBusVolume(Inno.Audio.AudioBusId bus, float volume)
```

Updates linear gain for a semantic mixer bus.

**Parameter `bus`:** Stable bus identifier.

**Parameter `volume`:** Non-negative linear gain.

**Returns:** `true` when the active mixer contains the bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L365).

## `SetVoiceParameters`

<a id="api-e90f04f17c0e4229"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.SetVoiceParameters(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceParameters) 6ceddf38160ede907569bedc5e3bbfec5e84d78c90ffffbb5ea75781b8bacdb9 -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.SetVoiceParameters(Inno.Audio.AudioVoiceHandle voice, Inno.Audio.AudioVoiceParameters parameters)
```

Replaces mutable parameters for a live or preparing voice.

**Parameter `voice`:** Runtime voice handle to update.

**Parameter `parameters`:** Current voice parameter snapshot.

**Returns:** `true` when the parameter request was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L325).

## `Stop`

<a id="api-2c24964424cb669c"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Stop(Inno.Audio.AudioVoiceHandle) abd50c4d86f7db4a5fb4eaea64125685103bd8e954041dfd5284f38846b15aac -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.Stop(Inno.Audio.AudioVoiceHandle voice)
```

Stops a live or preparing voice.

**Parameter `voice`:** Runtime voice handle to stop.

**Returns:** `true` when a live voice was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L257).

## `TryGetVoiceState`

<a id="api-4be96d5f81ae35ec"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.TryGetVoiceState(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioPlaybackState@) e400d146bbe59c7a79ac68cbd82ad5b582fbb3b7687584aab5fcfb8404a58e7e -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.TryGetVoiceState(Inno.Audio.AudioVoiceHandle voice, out Inno.Audio.AudioPlaybackState playbackState)
```

Queries the current state of a runtime voice.

**Parameter `voice`:** Runtime voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` for active and terminal handles from this runtime generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L345).

## `TryRecoverDevice`

<a id="api-6cc2b881a9f1698d"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.TryRecoverDevice(System.Func{Inno.Audio.IAudioDevice}) 86cf68ae4f59e55426cad3dab10fc05510d7517477007dae994723db32079e0f -->

```csharp
public bool Inno.Audio.Runtime.AudioRuntime.TryRecoverDevice(System.Func<Inno.Audio.IAudioDevice> deviceFactory)
```

Attempts to replace a muted or lost output generation while preserving the active mixer graph.

**Parameter `deviceFactory`:** Host-owned factory that creates a fresh initialized device candidate.

**Returns:** `true` when output is already ready or a ready candidate was installed;
    otherwise `false` and the current muted or lost generation remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L588).

## `Update`

<a id="api-bff47068c54035e9"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntime.Update(System.Single) 893005f4087e2ec4c2fd4f306634707cea5f5a6ab5dc389850579f0710cc36a0 -->

```csharp
public void Inno.Audio.Runtime.AudioRuntime.Update(float deltaTime)
```

Advances providers, pending preparation, backend maintenance, and completion dispatch at a main-thread safety point.

**Parameter `deltaTime`:** Non-negative elapsed frame time in seconds.

**Throws `System.ArgumentOutOfRangeException`:** The elapsed time is negative or non-finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L670).

## `capabilities`

<a id="api-5158187c329a9da8"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntime.capabilities c77d6558b0bf615afd30a111e157c8d32d7c778f3656dbb5fca63495caad143a -->

```csharp
public Inno.Audio.AudioCapabilities Inno.Audio.Runtime.AudioRuntime.capabilities { get; }
```

Gets immutable capabilities for the current backend generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L126).

## `contentStatistics`

<a id="api-f9aadf9289af075b"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntime.contentStatistics 96857cdf262c75e7fab798f8dcf3ff1e1c953c26e20172114eab7b3d29976d5b -->

```csharp
public Inno.Audio.Runtime.AudioContentStatistics Inno.Audio.Runtime.AudioRuntime.contentStatistics { get; }
```

Gets bounded provider admission counts from the most recent content collection on this device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L171).

## `deviceState`

<a id="api-34e784df21599043"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntime.deviceState d70ab9d3bcdbcf1516729b8af1f7a44ee0552e7127585d9d41f67db27bb9d48e -->

```csharp
public Inno.Audio.AudioDeviceState Inno.Audio.Runtime.AudioRuntime.deviceState { get; }
```

Gets the current output availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L131).

## `dspTime`

<a id="api-7c29dd59f4eb23f6"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntime.dspTime c248d5089c6a686a6c2436d24a46c35f951c4072834e43d46e5d581a39d24318 -->

```csharp
public double Inno.Audio.Runtime.AudioRuntime.dspTime { get; }
```

Gets the monotonic backend audio clock in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L136).

## `statistics`

<a id="api-7da56903c3092e1e"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntime.statistics bff3858a68e163f92451c79ff4c0f161a5db15e0c7f3cfcfab8538d41b95d3a2 -->

```csharp
public Inno.Audio.AudioStatistics Inno.Audio.Runtime.AudioRuntime.statistics { get; }
```

Gets current runtime resource statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntime.cs#L161).
