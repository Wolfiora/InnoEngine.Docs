---
title: Test-suite reference
description: Locate domain, contract and native test owners by the behavior you are changing.
uid: contributing.testing.suites
kind: landing
---
# Test-suite reference

Choose the behavior under test, then inspect the relevant suite's environment and source assertions. [Validate an engine change](../validate-change.md) explains the shared planning and execution workflow. The validation planner uses actual project relationships; this navigation is not an executable selection table.

## Foundation contracts

- [Collection indexes and dependency tests](inno-core-collections-tests.md): Verify mutable indexes and deterministic dependency snapshots.
- [Coroutine scheduling tests](inno-core-coroutines-tests.md): Verify tick-based waits, predicates and explicit cancellation.
- [Diagnostic ownership tests](inno-core-diagnostics-tests.md): Verify replacement, clearing, severity and independent report owners.
- [Event routing and observation tests](inno-core-events-tests.md): Verify consumption scopes, delivery order and observation boundaries.
- [Execution and retirement tests](inno-core-execution-tests.md): Verify owner-thread contexts, admission and retryable resource retirement.
- [Graph document and validation tests](inno-core-graphs-tests.md): Verify graph lookup, connection compatibility and recoverable missing definitions.
- [Persistent and runtime identity tests](inno-core-identity-tests.md): Verify detached identities, explicit registration and runtime domain isolation.
- [File ownership and publication tests](inno-core-io-tests.md): Verify protected readers, atomic replacement, path boundaries and rollback.
- [Job admission and scheduling tests](inno-core-jobs-tests.md): Verify bounded scheduling, callbacks, determinism and measured worker behavior.
- [Layer ordering and rollback tests](inno-core-layers-tests.md): Verify stack ordering, event precedence and reverse-order frame cleanup.
- [Log delivery and file sink tests](inno-core-logging-tests.md): Verify delivery ordering, fault quarantine, flush barriers and file rotation.
- [Vector and matrix tests](inno-core-mathematics-tests.md): Verify geometric identities and compound rotation conventions.
- [Serialization and generation tests](inno-core-serialization-tests.md): Verify identity rewriting, registry lifetime and retained generation snapshots.

## Input and UI boundaries

- [Input and shell lifecycle](inno-input-tests.md): managed routing, frame scheduling and suspension.
- [UI frame context](inno-ui-tests.md): backend-neutral input and script-facade binding.
- [SDL windows and native surfaces](inno-adapter-platform-sdl3-tests.md): real host integration and lifetime rules.
- [SDL loading and ABI](inno-native-sdl3-tests.md): generated import and library-owner behavior.

## Content and runtime services

- [Animation playback and binding](inno-animation-tests.md): admission, sampling, markers and Missing recovery.
- [Audio contracts and script API](inno-audio-tests.md): values, mixer topology and actual script compilation.
- [Audio runtime lifecycle](inno-audio-runtime-tests.md): suspension, rollback and retained resources.
- [Audio importing](inno-audio-assets-tests.md): encoded formats and failed publication.
- [Storage admission and persistence](inno-storage-tests.md): portable keys, writes and cancellation ownership.
- [Text importing and native shaping](inno-text-tests.md): font metadata, encoded artifacts and real glyph output.

## Native audio

- [MiniAudio adapter behavior](inno-adapter-audio-miniaudio-tests.md): native graph execution, content preparation and voice completion.
- [MiniAudio loading and initialization](inno-native-miniaudio-tests.md): function-table loading and headless engine initialization.

Native preparation remains required even when a suite uses a headless backend. These pages describe specific tests; they do not claim hardware, platform or current-run certification.
