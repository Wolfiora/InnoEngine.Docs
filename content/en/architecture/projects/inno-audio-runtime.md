---
title: Inno.Audio.Runtime
description: Session audio composition, bounded preparation, completion and device recovery.
uid: project.inno-audio-runtime
kind: project
owners:
  - Inno.Audio.Runtime
contracts:
  - architecture.audio-lifetime#ownership-and-generation-contract
  - architecture.audio-lifetime#retirement-and-failure-contract
---
# Inno.Audio.Runtime

`AudioRuntime` is a runtime subsystem and `IAudioService` that composes a device, artifact access, event delivery, extension discovery and host content. It does not inherit a native device or own a second plugin-generation system.

## Host integration

Compose the subsystem with an explicitly selected device, artifact service and diagnostic reporter. Runtime-session integration provides its execution scope and update calls. A standalone host must enter `EnterExecutionScope()` around scoped work and continue calling `Update(deltaTime)` at main-thread safety points. Negative or non-finite delta time is rejected before invoking providers.

Updates collect provider snapshots, advance clip preparation and device maintenance, complete preload waiters, deliver completions, refresh voice states and retire unused buses. Do not synchronously wait for a preload on the same owner thread while preventing these updates. Audio completion is asynchronous work, not proof that a file was merely queued.

Diagnostic reporting uses the shared scoped `IDiagnosticReporter`; session construction owns its registration. An initialization failure may explicitly compose a `MutedAudioDevice` with a diagnostic. Muted playback advances without audible output and retains finite resource/completion admission. It still needs updates and completion draining.

## Resource policies

Options are validated and copied at construction. Later mutation of the caller's options object does not reconfigure the runtime.

| Policy | Default | Meaning |
| --- | --- | --- |
| `maxVoices` | 128 | Preparing, scheduled, paused and playing voices |
| `maxPendingPreloads` | 256 | Unfinished preload waiters |
| `maxContentSnapshots` | 1,024 | Combined emitter and listener snapshots per update |
| `decodedCacheBudgetBytes` | 128 MiB | Decoded clip-cache budget |
| `automaticStreamingThresholdBytes` | 2 MiB | Encoded size used by automatic load selection |
| `deviceRecoveryIntervalSeconds` | 2 seconds | Positive retry interval for output recovery |

Automatic loading chooses streaming when encoded size or estimated decoded cost requires it. Explicit full decoding that exceeds its budget fails rather than silently ignoring the request. Voice stealing is deterministic from priority, creation order and stable handle identity. It is separate from backend admission capacity.

## Composition and lifetime contract

Internal owners separate clip/artifact/preload lifetime, voice mapping and completion, mixer generations, and content collection. An unpublished replacement device has its own candidate owner. These are implementation responsibilities; callers use the public subsystem contract rather than reaching into their state.

Providers belong exclusively to the existing type-catalog generation. Candidate construction that fails with successful cleanup leaves the last valid generation usable. Cleanup failure faults the shared generation gate. A second audio-specific generation manager would violate that ownership model.

`contentStatistics` exposes host-side snapshot capacity, accepted contributions and rejected providers without retaining plugin objects. It is distinct from `Audio.statistics` and the device ABI, and resets on device replacement.

The detailed [ownership, retirement and recovery contract](../audio-lifetime.md) covers pending resources, preload rollback, event backpressure, mixer replacement and suspended applications. It is required reading for standalone hosts and backend implementers.

## API reference

Use [Play and control audio](../../manual/audio/play-audio.md) for the projected gameplay surface. The reference below describes the host runtime, configuration, factories and muted device.

[Browse audio runtime types](../../api/engine/audio/runtime/index.md).
