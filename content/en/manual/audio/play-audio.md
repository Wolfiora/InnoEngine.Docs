---
title: Play and control audio
description: Play an imported clip, observe preparation and completion, and release preload ownership.
uid: manual.audio.play-audio
kind: how-to
owners:
  - Inno.Audio
  - Inno.Audio.Runtime
contracts:
  - project.inno-audio#playback-and-device-contract
  - architecture.audio-lifetime#ownership-and-generation-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Audio
---
# Play and control audio

Start playback from an imported `AudioClipAsset`, retain its voice handle while controlling it, and treat preparation and completion as observable states. A valid voice handle is not a guarantee that sound has already reached an output device.

## Prerequisites

The host must compose an audio runtime, select a device/backend and bind the service to the current execution scope. Its update loop must continue advancing audio. Obtain a valid imported clip through the project's asset/reference boundary. The standard importer supports WAV, FLAC and MP3; see [audio importing](../../api/projects/inno-audio-assets.md).

The following helper uses the **Runtime script projection**, compiled against the project's generated script references. It does not instantiate a host device or load an arbitrary physical file.

## Play and retain a voice

```csharp
using InnoEngine.Audio;

public sealed class ClipPlayback
{
    private AudioVoiceHandle m_voice;

    public void Start(AudioClipAsset clip)
    {
        Stop();
        m_voice = Audio.Play(clip, AudioPlayOptions.defaultValue);
    }

    public bool TryGetState(out AudioPlaybackState state)
    {
        return Audio.TryGetVoiceState(m_voice, out state);
    }

    public void Stop()
    {
        Audio.Stop(m_voice);
        m_voice = default;
    }
}
```

Call this helper only inside the active audio scope. Its explicit replacement policy stops the previous voice first. The host owns the service; this helper owns only its playback intent. Call `Stop` when that intent ends while the session is still active.

Use `Pause`, `Resume`, `Seek` and `SetVoiceParameters` for a live voice. Query results distinguish preparing, scheduled, playing, paused, completed and invalid/stale state. A control returning false does not revive an old generation's handle.

## Choose valid options and timing

Use `AudioPlayOptions.defaultValue` or a constructor that validates bus, load mode and playback parameters. A zero-initialized options struct is not a valid default configuration. Pitch must be positive, numeric settings must be finite and enum values must be supported. Failed parameter updates leave the previous valid state intact.

For scheduled playback, pass a finite non-negative absolute audio-clock time to `PlayScheduled`; read the clock through `Audio.dspTime`. It is not a wall-clock timestamp. Scheduling and streaming depend on active device capabilities. A clip may remain in preparation before it can start.

## Preload without blocking the update loop

`PreloadAsync` waits for actual device preparation. Continue running owner-thread updates while awaiting it; synchronously blocking that thread can prevent the operation from completing. Pass cancellation from the operation that owns the preload.

A successful preload retains a cache reference. Call `ReleasePreload` when that ownership ends. Releasing a preload does not stop voices that still reference the clip. Cancellation and failed preparation may need retirement work before their resources can be released; do not dispose the backend yourself to force an immediate result.

Automatic loading selects full decoding or streaming from encoded size and decoded-memory budget. Explicit decoding can fail when its memory budget is exceeded. The runtime's playback and pending-preload limits are separate from device capacity; [resource policies](../../api/projects/inno-audio-runtime.md#resource-policies) lists the defaults.

## Observe completion and diagnose silence

Completions distinguish natural end, stop, stealing, decode failure and device loss. Host event dispatch must continue draining them. A missing output device can use an explicitly muted generation; `deviceState` identifies it and diagnostics explain the limitation. Muted playback is not a successful hardware test.

- **No active scope:** call from the composed session rather than creating an implicit global device.
- **Voice remains preparing:** verify that audio updates continue and inspect import/decode diagnostics.
- **Voice ends unexpectedly:** inspect completion reason, priority budget and device state.
- **Old handle stops working after recovery:** reacquire playback in the new generation; handles are not persistent identities.
- **No audible output:** inspect device state, bus mute/gain, suspension and actual backend capabilities before changing asset data.

Continue with [mixer routing](mix-audio.md). Host authors should also read [retirement and device recovery](../../architecture/audio-lifetime.md).
