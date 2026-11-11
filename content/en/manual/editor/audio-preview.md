---
title: Preview audio without sharing a Play generation
description: Keep Editor previews, Play voices and completion events in their owning runtime sessions.
uid: manual.editor.audio-preview
kind: how-to
owners: [Inno.Editor.Audio]
contracts: [project.inno-editor-audio]
---
# Preview audio without sharing a Play generation

Editor audio manages Edit/Play device generations, preview playback and diagnostics. It does not implement a mixer window, waveform editor or new scene audio component. An extension uses `IEditorAudioHost` with an already composed Edit session.

## Own the preview in the Edit session

Call `PlayPreview` with that session and clip, retain the returned voice only within the same ownership boundary, then call `StopPreview` through the same owner. Do not transfer a voice or completion event into another session.

The Edit session has its own resident generation. Entering Play creates an independent audio generation and pauses the Edit master bus. On exit, Play audio retires before the Play scene/session; only then does the Edit bus resume.

## Respect session execution and failure

The Session Subsystem Pipeline owns audio scope entry, update and reverse-order release. `EnterExecutionScope` is for Editor-frame preview presentation outside a session tick, not a replacement subsystem lifecycle.

The host requires an explicit backend-neutral device factory. If creation fails, it establishes a muted generation and publishes `AUDIO_DEVICE_INIT_FAILED` through the current diagnostic reporter. The factory is a composition boundary for platform hosts and headless tests, not an implicit MiniAudio selection or permission to pretend an unavailable device passed acoustic acceptance.

Audio extension reload follows the Runtime type-catalog generation and refreshes atomically at a frame-safe update. A failed candidate retains the last good generation. See [audio playback](../audio/play-audio.md) for neutral operations and the [Editor audio reference](../../api/projects/inno-editor-audio.md) for the preview example.
