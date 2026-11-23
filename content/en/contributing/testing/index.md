---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: contributing.testing.suites
kind: landing

# Authoring metadata. Edit these fields and the text below.
title: Test-suite reference
description: Locate domain, contract and native test owners by the behavior you are changing.
---
# Test-suite reference

Choose the behavior under test, then inspect the relevant suite's environment and source assertions. [Validate an engine change](../validate-change.md) explains the shared planning and execution workflow. The validation planner uses actual project relationships; this navigation is not an executable selection table.

When writing a new case, start with [reusable test support and fixtures](support/index.md) for content, process, source-input and native Editor ownership.

## Foundation contracts

- [Collection indexes and dependency tests](projects/inno-core-collections-tests.md): Verify mutable indexes and deterministic dependency snapshots.
- [Coroutine scheduling tests](projects/inno-core-coroutines-tests.md): Verify tick-based waits, predicates and explicit cancellation.
- [Diagnostic ownership tests](projects/inno-core-diagnostics-tests.md): Verify replacement, clearing, severity and independent report owners.
- [Event routing and observation tests](projects/inno-core-events-tests.md): Verify consumption scopes, delivery order and observation boundaries.
- [Execution and retirement tests](projects/inno-core-execution-tests.md): Verify owner-thread contexts, admission and retryable resource retirement.
- [Graph document and validation tests](projects/inno-core-graphs-tests.md): Verify graph lookup, connection compatibility and recoverable missing definitions.
- [Persistent and runtime identity tests](projects/inno-core-identity-tests.md): Verify detached identities, explicit registration and runtime domain isolation.
- [File ownership and publication tests](projects/inno-core-io-tests.md): Verify protected readers, atomic replacement, path boundaries and rollback.
- [Job admission and scheduling tests](projects/inno-core-jobs-tests.md): Verify bounded scheduling, callbacks, determinism and measured worker behavior.
- [Layer ordering and rollback tests](projects/inno-core-layers-tests.md): Verify stack ordering, event precedence and reverse-order frame cleanup.
- [Log delivery and file sink tests](projects/inno-core-logging-tests.md): Verify delivery ordering, fault quarantine, flush barriers and file rotation.
- [Vector and matrix tests](projects/inno-core-mathematics-tests.md): Verify geometric identities and compound rotation conventions.
- [Serialization and generation tests](projects/inno-core-serialization-tests.md): Verify identity rewriting, registry lifetime and retained generation snapshots.

## Asset, scene and generation contracts

- [Asset import and settings tests](projects/inno-assets-pipeline-tests.md): Verify source changes, importer discovery, sidecars and last-good artifacts.
- [Asset ownership and residency tests](projects/inno-assets-tests.md): Verify canonical ownership, retained resources and pending release.
- [Content-pack admission and reader tests](projects/inno-content-tests.md): Verify portable keys, immutable indexes and independently retained readers.
- [Module generation and unload tests](projects/inno-extensibility-modules-tests.md): Verify collectible generations, rollback and retained dependencies.
- [Generation admission and retirement tests](projects/inno-extensibility-reload-tests.md): Verify publication ordering, read protection and terminal unload failures.
- [Type discovery and registry retirement tests](projects/inno-extensibility-types-tests.md): Verify classification, candidate rollback and generation-bound resources.
- [Plugin source and snapshot tests](projects/inno-plugins-tests.md): Verify immutable plugin publication, cache validation and activation.
- [Reference intent and recovery tests](projects/inno-references-tests.md): Verify generation capture, Missing intent and compensating recovery.
- [Scene, prefab and transform tests](projects/inno-scene-tests.md): Verify scene identity, deterministic ordering and recoverable plugin state.
- [Filesystem content cache](../../backends/projects/inno-adapter-content-filesystem-tests.md): cross-process generation publication, repair and stream protection.

## Editor workflows

- [Graph transactions](projects/inno-editor-graph-tests.md): managed document history and Missing recovery.
- [History and navigation](projects/inno-editor-interactions-tests.md): managed undo/redo and pointer capture.
- [Conditional inspection](projects/inno-editor-inspection-native-tests.md): predicate selection and ambiguity.
- [Editor runtime](projects/inno-editor-core-tests.md): Workbench lifecycle, commands, selection and panel retirement.
- [Graph canvas](projects/inno-editor-graph-imgui-tests.md): projection, hit testing, selection and port geometry.
- [Editor settings](projects/inno-editor-settings-tests.md): Console discovery, persistent settings and shared history.
- [Viewport and native context](projects/inno-editor-imgui-native-tests.md): window metrics, fonts and acknowledged retirement.
- [Play Mode](projects/inno-editor-playmode-native-tests.md): compilation transitions, game input and retained diagnostics.
- [Native panels](projects/inno-editor-panels-native-tests.md): Console card layout and popup placement.
- [Asset history and audio preview](projects/inno-editor-features-tests.md): file undo/redo and independent Edit/Play lifetimes.
- [Startup and script projection](projects/inno-editor-hosting-tests.md): early rejection and the actual product API surfaces.
- [Scripting and authoring](projects/inno-editor-scripting-tests.md): Inspector, viewport and Shader Editor workflows.

Managed domain success does not stand in for native presentation or scale evidence. Each page states the relevant distinction.

## Rendering and shaders

- [Render graph and portable artifacts](projects/inno-rendering-tests.md): transactional edits, immutable values and scheduling.
- [Rendering assets, import and shader authoring](projects/inno-rendering-assets-authoring-tests.md): logical material values, persistent identities, candidate includes and runtime export boundaries.
- [Rendering runtime publication](projects/inno-rendering-runtime-tests.md): frame owners, artifact scopes and complete shader replacement.
- [Shader languages and native compiler](projects/inno-rendering-shaders-native-tests.md): typed IR, lowering and actual offline Metal compilation.
- [BGFX backend and surfaces](projects/inno-adapter-rendering-bgfx-native-tests.md): device commands, target shaders, real window lifetimes and deployed Noop initialization.

## Input and UI boundaries

- [Input runtime](projects/inno-input-tests.md): managed routing, window isolation and suspension.
- [Shell lifecycle](projects/inno-shell-tests.md): frame scheduling, suspension reasons and native-surface identifiers.
- [UI frame context](projects/inno-ui-tests.md): backend-neutral input and script-facade binding.
- [SDL windows and native surfaces](projects/inno-adapter-platform-sdl3-native-tests.md): real host integration and lifetime rules.
- [SDL loading and ABI](../../backends/projects/inno-native-sdl3-tests.md): generated import and library-owner behavior.
- [RmlUi documents and native lifecycle](projects/inno-adapter-ui-rmlui-native-tests.md): actual imports, fonts, events and stale-handle rejection.
- [ImGui deployment and ABI](../../backends/projects/inno-native-imgui-tests.md): context lifetime, symbol loading and layouts.
- [ImGuizmo borrowed state](../../backends/projects/inno-native-imguizmo-tests.md): owned style retirement and parent-state restoration.

## Content and runtime services

- [Animation playback and binding](projects/inno-animation-tests.md): admission, sampling, markers and Missing recovery.
- [Audio contracts, importing and script API](projects/inno-audio-tests.md): values, mixer topology, encoded formats, failed publication and actual script compilation.
- [Audio runtime lifecycle](projects/inno-audio-runtime-tests.md): suspension, rollback and retained resources.
- [Storage admission and persistence](projects/inno-storage-tests.md): portable keys, writes and cancellation ownership.
- [Text importing and native shaping](projects/inno-text-native-tests.md): font metadata, encoded artifacts and real glyph output.
- [Runtime startup and sessions](projects/inno-runtime-tests.md): capability admission, memory content, static deployment and retirement.
- [Runtime and serialization generators](projects/inno-runtime-generators-tests.md): compiled metadata, factories and accessors.
- [Script compiler and cache](projects/inno-scripting-compiler-tests.md): language/IDE parity and protected publication.

## Native audio

See the [native and process requirements](../validate-change.md#native-and-process-requirements) before selecting a local diagnostic.

- [MiniAudio adapter behavior](projects/inno-adapter-audio-miniaudio-native-tests.md): native graph execution, content preparation and voice completion.
- [MiniAudio loading and initialization](../../backends/projects/inno-native-miniaudio-tests.md): function-table loading and headless engine initialization.

Native preparation remains required even when a suite uses a headless backend. These pages describe specific tests; they do not claim hardware, platform or current-run certification.

## Development tools and execution protocols

- [Command boundaries](projects/inno-build-cli-integration-tests.md): early rejection and managed authoring without product preparation.
- [Build inputs and cache protocols](projects/inno-build-toolchains-integration-tests.md): neutral SDK graphs, exact identities and retirement.
- [Binding generation integration](projects/inno-build-bindings-integration-tests.md): real SDK generation with independent product requirements.
- [Product build and publication](projects/inno-build-tests.md): actual composition, native deployment and support packs.
- [Validation planning and evidence](projects/inno-tooling-validation-tests.md): scope, real builds, immutable inputs and explicit completion.
- [Architecture and API boundaries](projects/inno-tooling-architecture-integration-tests.md): source rules, compiled symbols, project references and examples.
- [Documentation snapshots and queries](projects/inno-tooling-documentation-integration-tests.md): publication, exact reads, ambiguity, freshness and concurrency.
- [Child-process execution](projects/inno-testing-processes-tests.md): output draining, failure diagnostics and descendant termination.

## All test and fixture owners

[Test and fixture project guides](projects/index.md) provide the complete owner inventory beyond these common validation tasks.
