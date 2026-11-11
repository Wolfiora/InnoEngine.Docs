---
title: Inno.Adapter.Audio.MiniAudio
description: Native audio devices behind neutral managed contracts, with explicit preparation and release ownership.
uid: project.inno-adapter-audio-miniaudio
kind: project
owners:
  - Inno.Adapter.Audio.MiniAudio
contracts:
  - architecture.audio-lifetime#ownership-and-generation-contract
  - architecture.audio-lifetime#retirement-and-failure-contract
exampleMode: host
exampleProjects:
  - Inno.Adapter.Audio.MiniAudio
---
# Inno.Adapter.Audio.MiniAudio

This adapter implements `IAudioDevice` while keeping miniaudio types private. It is the runtime boundary that references the generated MiniAudio ABI; scene, asset and script consumers use neutral audio contracts.

## Create a hardwareless device

This host example returns a caller-owned device. The matching native deployment must already exist. Compiling the example does not open a device or verify that deployment.

```csharp
using Inno.Adapter.Audio.MiniAudio;
using Inno.Audio;

public static class AudioDeviceCreation
{
    public static IAudioDevice OpenHeadless()
    {
        return new MiniAudioDevice(new MiniAudioDeviceOptions
        {
            noDevice = true,
            sampleRate = 48000,
            channels = 2
        });
    }
}
```

Transfer the result to the runtime that owns it, or dispose it after all dependent work has drained. The default constructor requests an operating-system output device. The standard desktop integrations use the relevant platform output backend, including CoreAudio on macOS and WASAPI on Windows; do not infer hardware success from registration alone.

`MiniAudioDeviceOptions` defaults to two channels, 48 kHz, four listeners and finite `AudioDeviceLimits`. Channels and sample rate must be positive; listener count is 1–4 and limits must be non-null. Options define one generation rather than a live device reconfiguration interface.

## Preparation and ownership contract

`CreateClip` admits an encoded source and descriptor. Background materialization belongs exclusively to this adapter and checks declared content hash and length before installing the encoded file. Materialized encoded content is reused by content identity rather than copied for every voice. Streaming remains incremental native decoding; it does not silently become a fully resident PCM buffer.

Native clip preparation retains resource-manager data sources. `GetClipState` observes Preparing, Ready or Failed without blocking for decode completion. Voices have independent cursors while native decoded data can be shared. Preparation/decode failure completes the affected playback as `DecodeFailed`.

The source lease remains protected through preparation and native use. Release cancels or drains preparation, releases native clips and then releases source ownership. Device disposal stops voices and releases clips, processors, buses, listeners and the native engine in dependency order. Pending work must retain its owner rather than being dropped to force completion.

Initialization failure rolls back allocations according to which native initialization steps actually succeeded. During operation the control thread checks output-device state; a generation that cannot restart becomes Lost and the runtime owns candidate recovery. Native code and generated bindings must use the same pinned ABI.

## Admission and processing

Clip, bus and voice budgets are checked before native allocation. Undelivered completions occupy voice capacity until drained. Capacity rejection returns an invalid handle without creating a partial native resource. Invalid playback options or negative/non-finite scheduled times are rejected before allocating a voice. Invalid pitch or non-finite bus gain does not corrupt an existing voice.

In `noDevice` mode, updates actively pull PCM frames so the native graph, DSP clock, scheduling and natural completion advance. The real-time callback stays native. Host content, reflection, asset IO and managed extension callbacks remain outside that callback.

`MiniAudioBackendProvider` creates only a registration when constructed. Its inherited device-creation boundary returns caller-owned devices; one composition-owned provider may create independent generations. See [provider catalog ownership](inno-adapter-audio.md#provider-ownership-contract).

## API reference

The adapter reference describes host types and neutral interfaces. [MiniAudio backend modes](../../backends/miniaudio.md) explains the distinction between native hardwareless and managed muted execution.

[Browse MiniAudio adapter types](../types/adapter-audio-miniaudio/index.md).
