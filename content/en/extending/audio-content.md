---
title: Provide audio from host content
description: Submit bounded emitter and listener snapshots without leaking
  content or plugin lifetimes.
uid: extending.audio-content
kind: how-to
owners:
  - Inno.Audio
  - Inno.Audio.Runtime
contracts:
  - architecture.audio-lifetime#retirement-and-failure-contract
---
# Provide audio from host content

An audio content provider converts a host's scene or other content model into neutral emitter and listener snapshots. This keeps audio independent of a particular scene-component implementation and keeps plugin objects off the real-time audio thread.

## Declare and collect a contribution

Implement `AudioContentProvider`, mark it with `AudioContentProviderExtensionAttribute`, and choose a globally stable provider ID. Lower invocation priorities run first; a stable provider identity resolves ordering within a priority. The existing type-catalog generation creates and owns providers.

During `Submit`, resolve content through the invocation's borrowed `ContentReadScope` and submit `AudioEmitterSnapshot` and `AudioListenerSnapshot` values. Give each emitter/listener a stable non-empty ID. An emitter supplies a clip, validated playback options, play intent and a source-owned playback revision. Changing the revision requests a fresh voice for that emitter.

## Invocation and batch contract

The context is bound to its creating control thread and expires when the invocation returns. Do not retain the context, resolved content objects or its snapshot copies for later work. Do not start asynchronous submission or submit from another thread. The host owns and closes the shared content read scope at the end of the update; a provider does not dispose that borrowed scope.

Emitter and listener submissions share one capacity. A default/uninitialized value, duplicate ID, invalid options or exceeded capacity invalidates the **entire provider contribution**, even if provider code catches the submission exception. Frozen collection properties do not turn borrowed clip references into durable ownership.

The runtime validates cross-provider uniqueness before accepting a batch. Earlier valid contributions remain accepted. A failed provider consumes neither accepted capacity nor IDs and publishes `AUDIO_CONTENT_PROVIDER_FAILED`; a later successful contribution clears that diagnostic. Emitters absent from the accepted current snapshot stop through normal voice lifetime handling.

The default whole-update budget is 1,024 combined snapshots. Host-side `contentStatistics` reports capacity, accepted snapshots and rejected providers. It does not retain plugin objects or expand the device ABI.

## Release generation resources

The host revokes the invocation context on return, clearing collected references without disposing the borrowed content scope. Tools or tests that create a context directly must dispose it on its owner thread.

Release provider-owned generation resources during provider disposal. `RetirementPendingException` means the provider is still live: the generation owner retains it and retries unfinished retirement. It must propagate through provider isolation rather than becoming an ordinary rejected contribution. Other cleanup failures fault the shared type-registry gate; do not pretend to roll back a generation whose retirement has started.

## Keep the real-time boundary narrow

Providers run at control-thread update points. The native audio callback must not refresh the type catalog, resolve content, reflect over plugin types, read asset files, emit managed logs, acquire managed locks or invoke managed DSP extensions. Submit the neutral control state beforehand and let the backend consume its own prepared state.

See [audio lifetime](../architecture/audio-lifetime.md) for clip leases and device retirement, and [Inno.Audio](../architecture/projects/inno-audio.md) for exact provider and snapshot declarations.
