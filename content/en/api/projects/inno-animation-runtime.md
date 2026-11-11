---
title: Inno.Animation.Runtime
description: Session playback, deterministic target-local blending, marker dispatch and binding generations.
uid: project.inno-animation-runtime
kind: project
owners:
  - Inno.Animation.Runtime
contracts:
  - manual.animation.play-clips#target-and-playback-lifetime
---
# Inno.Animation.Runtime

`AnimationRuntime` owns playback, sampling, blending and marker dispatch for one session. The runtime factory declares its Scene-subsystem dependency and advances playback during session updates. Begin/end frame integration owns the active animation execution scope.

## Compose the output boundary

Construction requires a session `EventDispatcher` and an `IAnimationBindingSink`. Sampling-only playback still supplies an explicit sink and target policy; a null sink is not a request to silently discard output.

Standard composition uses `AnimationBindingRuntime(types, diagnostics)`. The shared type catalog owns provider generations. Candidate construction validates concrete public parameterless providers and rejects duplicate extension IDs or binding/value-kind protocols before publication. The binding owner borrows its diagnostic reporter and does not dispose it.

## Playback and update contract

The runtime validates the clip, explicit target and play options before accepting a playback. Its default capacity is 16,384 active playbacks and must be positive. Capacity exhaustion is an explicit failure before snapshot allocation; failed snapshot capture does not consume a slot. `playbackCount` and `rejectedPlaybacks` are host observations, not editable admission policy.

Playback freezes independent tracks, keyframes, markers and marker payloads. Stop or natural completion retires the slot. Reuse increments its generation, preventing an old handle from controlling the next occupant.

An update accepts finite non-negative scaled and unscaled delta times. Each playing clip advances on its selected clock. Paused clips retain their sampled contribution. For each target/binding pair, positive-weight samples from the highest contributing layer blend together; lower layers do not affect that pair. Quaternion output is normalized. The final sample batch is ordered deterministically by target persistent identity and binding before application.

Markers crossed by forward playback are enqueued on the session event dispatcher. They are control-thread events, not calls into a native real-time audio path. See [clip playback](../../manual/animation/play-clips.md) for boundary timing and loops.

## Binding lifetime and diagnostics

`AnimationBindingRuntime.Apply` runs on its creating thread. Missing providers, missing/incompatible destinations and provider exceptions produce scoped `animation.binding.unavailable` diagnostics. Each batch replaces the current diagnostic set, so a later successful batch clears resolved issues. Sampling-only targets intentionally skip object application.

Disposal unregisters the binding registry, attempts to dispose its providers and clears its owned diagnostic set without owning the reporter. Current provider disposal is synchronous: the binding snapshot aggregates failures and clears its provider map. It is not an asynchronous retirement scheduler; providers must not assume that throwing a pending signal establishes deferred ownership here.

## API reference

[Add an animation binding](../../extending/animation-bindings.md) describes the supported extension shape. Concrete Transform, Sprite, skeleton and gameplay bindings remain explicit extensions rather than central runtime switches.

[Browse animation runtime types](../types/animation-runtime/index.md).
