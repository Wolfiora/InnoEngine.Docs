---
title: Test-suite reference
description: Locate domain, contract and native test owners by the behavior you are changing.
uid: contributing.testing.suites
kind: landing
---
# Test-suite reference

Choose the behavior under test, then inspect the relevant suite's environment and source assertions. [Validate an engine change](../validate-change.md) explains the shared planning and execution workflow. The validation planner uses actual project relationships; this navigation is not an executable selection table.

When writing a new case, start with [reusable test support and fixtures](support/index.md) for content, process, source-input and native Editor ownership.

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

## Asset, scene and generation contracts

- [Asset import and settings tests](inno-assets-pipeline-tests.md): Verify source changes, importer discovery, sidecars and last-good artifacts.
- [Asset ownership and residency tests](inno-assets-tests.md): Verify canonical ownership, retained resources and pending release.
- [Content-pack admission and reader tests](inno-content-tests.md): Verify portable keys, immutable indexes and independently retained readers.
- [Module generation and unload tests](inno-extensibility-modules-tests.md): Verify collectible generations, rollback and retained dependencies.
- [Generation admission and retirement tests](inno-extensibility-reload-tests.md): Verify publication ordering, read protection and terminal unload failures.
- [Type discovery and registry retirement tests](inno-extensibility-types-tests.md): Verify classification, candidate rollback and generation-bound resources.
- [Plugin source and snapshot tests](inno-plugins-tests.md): Verify immutable plugin publication, cache validation and activation.
- [Reference intent and recovery tests](inno-references-tests.md): Verify generation capture, Missing intent and compensating recovery.
- [Scene, prefab and transform tests](inno-scene-tests.md): Verify scene identity, deterministic ordering and recoverable plugin state.
- [Filesystem content cache](inno-adapter-content-filesystem-tests.md): cross-process generation publication, repair and stream protection.

## Editor workflows

- [Graph transactions](inno-editor-graph-tests.md): managed document history and Missing recovery.
- [History and navigation](inno-editor-interactions-tests.md): managed undo/redo and pointer capture.
- [Conditional inspection](inno-editor-inspection-tests.md): predicate selection and ambiguity.
- [Panel and presentation](inno-editor-presentation-tests.md): canvas geometry, Workbench lifecycle, asset history and Console discovery.
- [Viewport and native context](inno-editor-imgui-tests.md): window metrics, fonts and acknowledged retirement.
- [Play Mode and Console](inno-editor-playmode-tests.md): compilation transitions, game input, retained diagnostics and native layout.
- [Audio preview](inno-editor-audio-tests.md): independent Edit/Play lifetimes.
- [Startup and script projection](inno-editor-hosting-tests.md): early rejection and the actual product API surfaces.
- [Scripting and authoring](inno-editor-scripting-tests.md): Inspector, viewport and Shader Editor workflows.
- [Scale and interaction performance](inno-editor-performance-tests.md): large scene/asset workloads with real input and retained samples.

Managed domain success does not stand in for native presentation or scale evidence. Each page states the relevant distinction.

## Rendering and shaders

- [Render graph and portable artifacts](inno-rendering-tests.md): transactional edits, immutable values and scheduling.
- [Rendering asset contracts](inno-rendering-assets-tests.md): logical material values and persistent identities.
- [Import and shader authoring](inno-rendering-assets-authoring-tests.md): candidate includes and runtime export boundaries.
- [Rendering runtime publication](inno-rendering-runtime-tests.md): frame owners, artifact scopes and complete shader replacement.
- [Shader languages and native compiler](inno-rendering-shaders-tests.md): typed IR, lowering and actual offline Metal compilation.
- [BGFX backend and surfaces](inno-adapter-rendering-bgfx-tests.md): device commands, target shaders and real window lifetimes.
- [BGFX deployment smoke test](inno-native-bgfx-tests.md): deployed Noop initialization and shutdown.

## Input and UI boundaries

- [Input and shell lifecycle](inno-input-tests.md): managed routing, frame scheduling and suspension.
- [UI frame context](inno-ui-tests.md): backend-neutral input and script-facade binding.
- [SDL windows and native surfaces](inno-adapter-platform-sdl3-tests.md): real host integration and lifetime rules.
- [SDL loading and ABI](inno-native-sdl3-tests.md): generated import and library-owner behavior.
- [RmlUi documents and native lifecycle](inno-adapter-ui-rmlui-tests.md): actual imports, fonts, events and stale-handle rejection.
- [ImGui deployment and ABI](inno-native-imgui-tests.md): context lifetime, symbol loading and layouts.
- [ImGuizmo borrowed state](inno-native-imguizmo-tests.md): owned style retirement and parent-state restoration.

## Content and runtime services

- [Animation playback and binding](inno-animation-tests.md): admission, sampling, markers and Missing recovery.
- [Audio contracts and script API](inno-audio-tests.md): values, mixer topology and actual script compilation.
- [Audio runtime lifecycle](inno-audio-runtime-tests.md): suspension, rollback and retained resources.
- [Audio importing](inno-audio-assets-tests.md): encoded formats and failed publication.
- [Storage admission and persistence](inno-storage-tests.md): portable keys, writes and cancellation ownership.
- [Text importing and native shaping](inno-text-tests.md): font metadata, encoded artifacts and real glyph output.
- [Runtime startup and sessions](inno-runtime-tests.md): capability admission, memory content, static deployment and retirement.
- [Runtime and serialization generators](inno-runtime-generators-tests.md): compiled metadata, factories and accessors.
- [Script compiler and cache](inno-scripting-compiler-tests.md): language/IDE parity and protected publication.

## Native audio

See the [native and process requirements](../validate-change.md#native-and-process-requirements) before selecting a local diagnostic.

- [MiniAudio adapter behavior](inno-adapter-audio-miniaudio-tests.md): native graph execution, content preparation and voice completion.
- [MiniAudio loading and initialization](inno-native-miniaudio-tests.md): function-table loading and headless engine initialization.

Native preparation remains required even when a suite uses a headless backend. These pages describe specific tests; they do not claim hardware, platform or current-run certification.

## Development tools and execution protocols

- [Command boundaries](inno-build-cli-tests.md): early rejection and managed authoring without product preparation.
- [Build inputs and cache protocols](inno-build-toolchains-tests.md): neutral SDK graphs, exact identities and retirement.
- [Binding generation integration](inno-build-bindings-tests.md): real SDK generation with independent product requirements.
- [Product build and publication](inno-build-tests.md): actual composition, native deployment and support packs.
- [Native preparation costs](inno-build-nativeperformance-tests.md): Windows product measurements with cold/warm separation.
- [Validation planning and evidence](inno-tooling-validation-tests.md): scope, real builds, immutable inputs and explicit completion.
- [Architecture and API boundaries](inno-tooling-architecture-tests.md): source rules, compiled symbols, project references and examples.
- [Documentation snapshots and queries](inno-tooling-documentation-tests.md): publication, exact reads, ambiguity, freshness and concurrency.
- [Child-process execution](inno-testing-processes-tests.md): output draining, failure diagnostics and descendant termination.
