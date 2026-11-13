---
title: Inno.Editor.Audio
description: "Session-owned Editor preview audio and isolated Edit/Play generations."
uid: project.inno-editor-audio
kind: project
owners: [Inno.Editor.Audio]
exampleMode: host
exampleProjects: [Inno.Editor.Audio]
---
# Inno.Editor.Audio

Session-owned Editor preview audio and isolated Edit/Play generations.

Read the linked task or ownership explanation before using the exact API below.

## Preview through the session owner

[Preview Editor audio](../../manual/editor/audio-preview.md) explains PlayPreview/StopPreview, the independent Play generation, Edit master-bus suspension and subsystem-owned scope/update/release. This service supplies no mixer window or waveform editor.

EditorAudioHost requires a backend-neutral device factory; it does not select MiniAudio itself. Device creation failure publishes AUDIO_DEVICE_INIT_FAILED and establishes an explicit muted generation. The public factory supports real composition and headless execution without relaxing acoustic acceptance.

## Preserve generation boundaries

Keep voices, handles and completion events in their owning session. EnterExecutionScope covers preview presentation outside the normal session tick, not another lifecycle loop. Type-catalog refresh occurs atomically at a frame-safe update and preserves last-good on candidate failure. Dispose the audio generation before the corresponding scene/session finishes retirement.

## Executable usage

Supply existing live dependencies on the declared API surface. Compiling the example does not initialize a product or certify a physical device.

```csharp
using Inno.Audio;
using Inno.Editor.Audio;
using Inno.Runtime;

static AudioVoiceHandle Preview(
    IEditorAudioHost audio,
    RuntimeSession activeEditSession,
    AudioClipAsset clip
) {
    return audio.PlayPreview(activeEditSession, clip);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/Inno.Editor.Audio.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/audio/index.md) preserve captured declarations and source XML.
