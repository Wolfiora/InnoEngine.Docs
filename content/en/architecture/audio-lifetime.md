---
title: Audio ownership, retirement and recovery
description: How clips, voices, mixer generations and device candidates retain resources until safe release.
uid: architecture.audio-lifetime
kind: explanation
owners:
  - Inno.Audio
  - Inno.Audio.Runtime
  - Inno.Audio.Assets
---
# Audio ownership, retirement and recovery

Audio preparation, playback and completion finish at different times. The runtime therefore keeps explicit owners for encoded artifacts, device clips, voices, mixers and replacement candidates. A request returning or being cancelled does not necessarily mean its resources are safe to release.

## Ownership and generation contract

The session owns the runtime; the runtime composes the device and its resource owners. Script facades borrow the service within a strict execution scope. Plugin providers belong to the existing type-catalog generation. There is no independent audio plugin-generation authority.

Persistent clip identity selects content. A runtime voice identifies one playback lifetime; device handles identify resources in one device generation. Never persist or reinterpret a runtime/device handle as an asset identity or a native pointer. Replacement creates a new generation and invalidates old handles.

Host updates run at main-thread safety points. They collect content, advance device/preload work and dispatch completions. The native callback uses backend-owned prepared state, not live host objects. The [provider invocation contract](../extending/audio-content.md#invocation-and-batch-contract) governs the short borrowing interval for content.

## Clips and preloads

Playback captures clip metadata, content revision and an `audio-data` artifact lease. It does not retain a mutable `AssetObject` across frames. Cache identity includes persistent asset identity, content revision, artifact key and load mode. Emitter replay compares stable identity and source playback revision, not a mutated object reference.

A clip-cache entry owns native preparation and encoded-data access under a shared lifetime scope. Retirement first drains/releases the native clip and then its artifact lease. If release is pending, the entry preserves its phase and cannot be reused as an active cache entry. Completed release steps run once. A redundant artifact lease acquired on a cache hit still passes through the retirement barrier.

Preload ownership is added after the first successful non-failed device-state query. Preparation failure or a query exception retires the newly unreferenced entry without removing an existing voice or preload's ownership. Pending rollback retains the entry for retry. A normal rollback failure together with the original failure faults the shared gate rather than hiding a leaked owner.

`ReleasePreload` decrements its reference once; later updates perform safe retirement. Cancelled or failed waiters remain accounted for while resources drain. Pending retirement is not relabeled as a decode failure. Stop and device replacement cancel waiters but still preserve their release obligations. Device preparation consumes encoded data through a source lease, never an artifact cache path.

## Voices, admission and backpressure

New playback validates options and acquires its artifact boundary before stealing an old voice. Invalid options or an immediate pending-retirement failure do not replace existing playback. Ordinary missing-content, metadata or decode failures can occur after a valid request enters Preparing and may complete as `DecodeFailed` while consuming the voice budget.

When completion dispatch is full, a finalizing voice stays owned and retries on a later update. Its clip reference is released once and its completion event is delivered once. The host must drain Core Events; increasing playback requests does not resolve event backpressure.

If stealing cannot finalize immediately, the new request's artifact goes through the retirement barrier. Retrying the old completion must not stop the same device voice twice or count the same steal twice. Backend voice capacity also includes undelivered device completions and must not drop them to admit more playback.

## Mixer generations

Build a complete candidate graph before installing it. Invalid configuration or a failed candidate with successful cleanup leaves the last valid graph active. A successful recovery clears obsolete Missing/candidate-failure diagnostics.

Retired buses remain alive only while voices routed to them require them. They do not wait for all audio in the engine to become silent. Installation and subsequent updates collect unreferenced mixer generations. Bus controls must not reach an already released device.

Application suspension pauses the active master and retired masters still used by voices. User pause remains independent. A replacement inherits the correct suspended/control state. If pausing a set of masters fails, changed masters roll back; a rollback failure faults the shared generation gate.

## Device replacement and suspension

`ReplaceDevice` accepts a distinct initialized replacement at a main-thread safety point. After argument validation, candidate ownership consumes the replacement: preparation failure cleans it up while retaining the old generation when cleanup succeeds. Prepare the replacement mixer and control state before beginning retirement of the old backend.

Once old-backend retirement starts, failure cannot restore the old generation as though it had never retired. Cleanup attempts cover retained old resources and the candidate; ordinary failures fault the gate and require host recovery/restart. `TryRecoverDevice` may return false for a rejected candidate that leaves a healthy old generation, but must not convert pending retirement or a faulted retirement into that benign result.

Successful replacement installs new clip, voice and content owners, invalidates old handles, and clears no-device, device-lost and recovery-failed diagnostics. Automatic retry occurs through host updates at the configured interval. Muted/lost generations remain explicit while a healthy replacement is unavailable.

The runtime observes `ApplicationSuspensionChangedEvent` through `EventDispatcher.dispatched`, even when another handler consumes the event. Stop unsubscribes before retiring audio resources. Suspension is therefore host lifecycle state, not a gameplay input event that can be hidden from audio by consumption.

## Retirement and failure contract

Retirement attempts every applicable owner when ordinary release failures occur and aggregates those failures. A `RetirementPendingException` is different: retain the current phase, provider, clip/artifact, bus and device protections, then retry only unfinished work. Do not resume playback through a half-retired generation.

Shared Core retirement deadlines bound retained work. Timeout faults the shared type-registry generation gate and retains the protected owners for host restart; it is not reported as an ordinary recoverable device miss. Candidate construction with clean rollback can preserve the last valid generation, but candidate cleanup failure also faults the gate.

These obligations apply equally to audible devices, muted devices and test hosts. Bypassing release protection to make shutdown appear faster changes correctness, not merely performance.
