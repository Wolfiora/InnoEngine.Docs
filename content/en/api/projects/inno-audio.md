---
title: Inno.Audio
description: Backend-neutral playback, mixer, content-provider and device contracts.
uid: project.inno-audio
kind: project
owners:
  - Inno.Audio
contracts:
  - architecture.audio-lifetime#ownership-and-generation-contract
---
# Inno.Audio

This project defines playback, clips, mixers, content contributions and device interfaces without depending on a runtime, scene model, Editor, platform or native implementation. Use the script facade to control session audio; use the host interfaces when composing a runtime or implementing a backend.

## Start with a task

- [Play and control audio](../../manual/audio/play-audio.md) covers preparation, completion and preload release.
- [Route audio through a mixer](../../manual/audio/mix-audio.md) explains buses and processor configuration.
- [Provide audio from host content](../../extending/audio-content.md) describes the bounded extension boundary.

## Playback and device contract

The static `Audio` facade resolves a host-owned `IAudioService` from the current strict last-in-first-out execution scope. It has no independent device or fallback service. Host composition owns the service; facade callers borrow it. Script-facing types use the `InnoEngine.Audio` projection. Low-level `IAudioDevice`, clip preparation, device completions and device limits remain host contracts.

Runtime `AudioVoiceHandle` values identify playback in one runtime generation. Backend clip, bus, listener and `AudioDeviceVoiceHandle` values belong to a device generation. These are different identities, not interchangeable native pointers. A returned runtime voice may still be preparing. Replacement invalidates handles from the old generation.

`AudioClipDescriptor` contains format, length, codec and load policy. Its independent `IAudioClipSource` supplies encoded-data access under a lease; it does not disclose an artifact path. The device owns preparation and decoding. `AudioDevice` exposes opaque handle encoding only through its protected backend implementation surface.

Use `AudioPlayOptions.defaultValue` or a validated constructor. A zero-initialized `default(AudioPlayOptions)` has an invalid bus. Default voice parameters have invalid zero pitch. Invalid updates return failure without changing a live voice; invalid new-play options are rejected before stealing a voice or acquiring clip work. Floating-point settings and every vector component must be finite, and enum choices must be defined. Finite zero vectors are not rejected merely for lacking unit length.

Scheduling accepts a finite, non-negative absolute `dspTime`. Direct device calls must also reject invalid options, invalid scheduling and non-finite bus gains. The neutral boundary does not promise that every backend implements every capability; inspect the active device's capability snapshot.

## Mixer and extension model

Bus, processor, parameter and codec IDs are open stable identities. The mandatory master bus anchors a validated acyclic routing graph. Standard processors include low-pass, high-pass, band-pass, notch, peaking, low/high shelf and delay. Additional processor IDs do not require editing a central enum.

Mixer extensions and features persist stable identities and neutral serialized bytes. They must not retain plugin `Type` objects, delegates or live extension instances in persisted configuration. Content providers submit immutable control-thread snapshots; they are not managed real-time DSP callbacks. Their complete invocation contract is in [Provide audio from host content](../../extending/audio-content.md).

## Device admission and completion

`AudioDeviceLimits` defaults to 16,384 clips, 65,536 voices and 4,096 buses. Voice capacity includes undelivered completions, so a consumer must drain completions. These are backend resource limits, separate from the runtime's smaller priority-based playback budget. Exhaustion returns an invalid admission handle without partially creating native resources or discarding old completions.

Runtime completion events distinguish natural end, explicit stop, stealing, decode failure and device loss. They travel through Core Events at a control-thread update point. See [audio ownership and retirement](../../architecture/audio-lifetime.md) before implementing a service or device.

## API reference

The reference contains selected host CLR declarations and source XML. Script projection availability is a separate contract; source presence alone does not certify a script surface.

[Browse audio types](../types/audio/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-audio/index.md)
