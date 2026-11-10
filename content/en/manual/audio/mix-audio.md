---
title: Route audio through a mixer
description: Build a validated bus graph and configure backend-neutral processor chains.
uid: manual.audio.mix-audio
kind: how-to
owners:
  - Inno.Audio
  - Inno.Audio.Runtime
contracts:
  - project.inno-audio#mixer-and-extension-model
  - architecture.audio-lifetime#mixer-generations
exampleMode: runtime-script
exampleProjects:
  - Inno.Audio
---
# Route audio through a mixer

A mixer groups voices under semantic buses and routes them toward the mandatory master bus. Build a complete immutable graph, validate it, then hand it to the host or mixer-extension boundary that owns installation.

## Build a music bus

This Runtime-script helper produces configuration only. It does not mutate the active device, promise a built-in mixer editor, or install a graph implicitly.

```csharp
using InnoEngine.Audio;

public static class MusicMixer
{
    public static AudioMixer Create()
    {
        AudioMixerBuilder builder = new();
        AudioBusId music = new("music");
        builder.AddBus(music, AudioBusId.master, volume: 0.8f);
        builder.AddProcessor(music, new AudioProcessorConfiguration(
            AudioProcessorId.lowPass,
            new[] { new AudioProcessorParameter(AudioParameterId.frequency, 12000f) }));
        return builder.Build();
    }
}
```

Choose stable bus identities and use them in validated playback options. `AddBus` rejects duplicate or invalid identities. `Build` rejects missing parents and cycles, returning parent-before-child order. Processor chains preserve their declared order. Configuration uses finite values and the processor's applicable parameter contract.

## Install through the owning boundary

A host uses the runtime's mixer installation API; a reloadable mixer extension supplies configuration through its declared generation. A failed candidate must leave the last valid mixer usable when candidate cleanup succeeds. Installation is not an instruction to free buses that existing voices still use.

Bus volume, mute and pause are runtime controls. A replacement device reconstructs the current graph and its control state before publication. Application suspension pauses the relevant masters without erasing an explicit user pause. See [mixer generations and suspension](../../architecture/audio-lifetime.md#mixer-generations).

## Extend without retaining plugin code

Standard IDs cover common filters and delay. Plugin-specific processors use explicit IDs and a backend that implements them; an open ID is not a guarantee of support. Persist extension identity and neutral serialized configuration, never plugin types, delegates or live instances.

This boundary does not expose a managed real-time DSP callback. Advanced DSP, recording, VOIP, occlusion and gameplay music policy require separately implemented extensions; they are not implied by the mixer graph.
