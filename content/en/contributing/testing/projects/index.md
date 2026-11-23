---
uid: contributing.testing.projects
title: Test and fixture guides
kind: landing
---

# Test and fixture guides

Find verification owners, fixture lifetimes and prerequisites. These are contributor guides, not product API references. Select checks through the engine validation planner.

## Animation

- [Animation playback and binding tests](inno-animation-tests.md)

## Assets

- [Conflicting asset importer fixture](inno-assets-pipeline-duplicateimporterfixture.md)
- [Asset import and settings tests](inno-assets-pipeline-tests.md)
- [Asset ownership and residency tests](inno-assets-tests.md)

## Audio

- [Audio runtime lifecycle tests](inno-audio-runtime-tests.md)
- [Audio contracts and script API tests](inno-audio-tests.md)

## Backends

- [MiniAudio adapter tests](inno-adapter-audio-miniaudio-native-tests.md)
- [SDL window and surface tests](inno-adapter-platform-sdl3-native-tests.md)
- [Rendering backend, surface and deployment smoke tests](inno-adapter-rendering-bgfx-native-tests.md)
- [RmlUi document and native lifecycle tests](inno-adapter-ui-rmlui-native-tests.md)

## Build

- [Binding generation integration tests](inno-build-bindings-integration-tests.md)
- [Build command boundary tests](inno-build-cli-integration-tests.md)
- [Product build and publication tests](inno-build-tests.md)
- [Build input and cache protocol tests](inno-build-toolchains-integration-tests.md)
- [SDK build integration tests](inno-build-integration-tests.md)
- [Product composition tests](inno-build-products-tests.md)
- [Product profile integration tests](inno-build-productprofiles-integration-tests.md)
- [Support pack workflow tests](inno-build-supportpacks-tests.md)
- [Build pipeline fixture](inno-testing-build.md)
- [Player support pack fixture](inno-testing-supportpacks.md)
- [Browser dependency consumption tests](inno-build-browserwasm32-product-tests.md)
- [Browser toolchain and support pack tests](inno-build-browserwasm32-integration-tests.md)
- [macOS Arm64 support pack tests](inno-build-macosarm64-tests.md)
- [Windows x64 build integration tests](inno-build-windowsx64-integration-tests.md)
- [Windows x64 toolchain tests](inno-build-windowsx64-tests.md)
- [Inno.Build.NativeProducer.Integration.Tests](inno-build-nativeproducer-integration-tests.md)

## Content

- [Content-cache process probe](inno-content-cacheprobe.md)
- [Controlled in-memory content store](inno-testing-content.md)
- [Content-pack admission and reader tests](inno-content-tests.md)

## Core

- [Collection indexes and dependency tests](inno-core-collections-tests.md)
- [Coroutine scheduling tests](inno-core-coroutines-tests.md)
- [Diagnostic ownership tests](inno-core-diagnostics-tests.md)
- [Event routing and observation tests](inno-core-events-tests.md)
- [Execution and retirement tests](inno-core-execution-tests.md)
- [Graph document and validation tests](inno-core-graphs-tests.md)
- [Persistent and runtime identity tests](inno-core-identity-tests.md)
- [File ownership and publication tests](inno-core-io-tests.md)
- [Job admission and scheduling tests](inno-core-jobs-tests.md)
- [Layer ordering and rollback tests](inno-core-layers-tests.md)
- [Log delivery and file sink tests](inno-core-logging-tests.md)
- [Vector and matrix tests](inno-core-mathematics-tests.md)
- [Serialization and generation tests](inno-core-serialization-tests.md)

## Editor

- [Editor asset history and audio preview tests](inno-editor-features-tests.md)
- [Editor graph transaction tests](inno-editor-graph-tests.md)
- [Editor startup and script projection tests](inno-editor-hosting-tests.md)
- [Editor viewport and native context tests](inno-editor-imgui-native-tests.md)
- [Conditional inspection selection tests](inno-editor-inspection-native-tests.md)
- [Editor history and navigation tests](inno-editor-interactions-tests.md)
- [Play Mode behavior tests](inno-editor-playmode-native-tests.md)
- [Native Editor panel tests](inno-editor-panels-native-tests.md)
- [Editor runtime tests](inno-editor-core-tests.md)
- [Graph canvas tests](inno-editor-graph-imgui-tests.md)
- [Editor settings tests](inno-editor-settings-tests.md)
- [Editor scripting and authoring workflow tests](inno-editor-scripting-tests.md)
- [Editor export workflow and presentation tests](inno-editor-exporting-native-tests.md)
- [Inno.Editor.Shaders.Native.Tests](inno-editor-shaders-native-tests.md)

## Extensibility

- [Private reload dependency fixture](inno-extensibility-modules-testdependency.md)
- [Rejected module candidate fixture](inno-extensibility-modules-testmodule-invalid.md)
- [First collectible module generation](inno-extensibility-modules-testmodule-v1.md)
- [Replacement collectible module generation](inno-extensibility-modules-testmodule-v2.md)
- [Module generation and unload tests](inno-extensibility-modules-tests.md)
- [Generation admission and retirement tests](inno-extensibility-reload-tests.md)
- [Type-discovery source A fixture](inno-extensibility-types-testassemblya.md)
- [Type-discovery source B fixture](inno-extensibility-types-testassemblyb.md)
- [Type discovery and registry retirement tests](inno-extensibility-types-tests.md)

## Input

- [Input runtime tests](inno-input-tests.md)
- [Shell lifecycle tests](inno-shell-tests.md)

## Plugins

- [Plugin source and snapshot tests](inno-plugins-tests.md)

## References

- [Reference intent and recovery tests](inno-references-tests.md)

## Rendering

- [Rendering asset contract, import and shader authoring tests](inno-rendering-assets-authoring-tests.md)
- [Collectible rendering contributor fixture](inno-rendering-runtime-reload-testmodule.md)
- [Rendering runtime publication tests](inno-rendering-runtime-tests.md)
- [Shader language and native compiler tests](inno-rendering-shaders-native-tests.md)
- [Render graph and portable artifact tests](inno-rendering-tests.md)
- [BGFX toolchain integration tests](inno-build-toolchains-bgfx-native-tests.md)
- [BGFX target and profile tests](inno-build-toolchains-bgfx-tests.md)
- [BGFX shader profile fixture](inno-testing-bgfx.md)

## Runtime

- [Runtime and serialization generator tests](inno-runtime-generators-tests.md)
- [Runtime startup and session ownership tests](inno-runtime-tests.md)

## Scene

- [Collectible scene restoration fixture](inno-scene-reload-testmodule.md)
- [Scene, prefab and transform tests](inno-scene-tests.md)

## Scripting

- [Script compiler and cache publication tests](inno-scripting-compiler-tests.md)

## Storage

- [Storage admission and persistence tests](inno-storage-tests.md)

## Testing

- [Shared native Editor test fixtures](inno-testing-editor-native.md)
- [Child-process execution tests](inno-testing-processes-tests.md)
- [Isolated contract process host](inno-testing-processes.md)
- [Explicit test source and output inputs](inno-testing-source.md)
- [Test discovery logger](inno-testing-discovery-testlogger.md)
- [Inno.Testing.Diagnostics](inno-testing-diagnostics.md)
- [Inno.Testing.Scripting](inno-testing-scripting.md)
- [Inno.Testing.Sdl3](inno-testing-sdl3.md)

## Text

- [Text import and native shaping tests](inno-text-native-tests.md)

## Tooling

- [Architecture and API boundary tests](inno-tooling-architecture-integration-tests.md)
- [Documentation snapshot and query tests](inno-tooling-documentation-integration-tests.md)
- [Validation planning and evidence tests](inno-tooling-validation-tests.md)
- [Validation tooling integration tests](inno-tooling-validation-integration-tests.md)
- [Validation repository fixture](inno-testing-validation.md)

## UI

- [UI frame-context tests](inno-ui-tests.md)
