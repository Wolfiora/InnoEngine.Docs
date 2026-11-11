---
title: Shared native Editor test fixtures
description: Exercise real panels, input and authoring composition without copying lifecycle code.
uid: project.inno-testing-editor-native
kind: project
owners: [Inno.Testing.Editor.Native]
---
# Shared native Editor test fixtures

`Inno.Testing.Editor.Native` owns the shared implementation of real ImGui contexts, input injection and temporary authoring projects used by contract and scale suites. Consumers use project references; they do not copy source, reference another test assembly or expose production internals.

## Choose a fixture

`NativePanelHost` prepares the declared panel composition. `NativeProjectPanelHost` adds the real project, workspace, assets, scenes and editing services. Pass the calling test type's Assembly as the explicit discovery root, and declare all dynamically loaded panel and serialized-type dependencies in the consumer project.

The lifecycle is: prepare the matching native deployment, construct the fixture, obtain a panel or create a scene, exercise public operations/input, assert, then dispose on the same thread. The fixture does not generate bindings or prepare the native product itself.

## Frames and input

`GetPanel` opens and borrows the unique matching panel; no match or duplicate matches throw `InvalidOperationException`. `Frame` runs the draw callback inside a real native frame, advances by its explicit delta time and validates draw data and clipboard callback errors. `DrawPanel` draws within a bounded window, supports an optional callback and reports actual panel quarantine failures.

Display metrics explicitly select logical size, framebuffer scaling and UI zoom. Constructor overloads select vertex-offset support and keyboard policy; the default does not enable vertex offsets. Real draw-data validation remains active when that capability is enabled.

`NativePanelInput.Focus` draws and focuses an actual active native window, failing if its name fragment cannot be found. `Key` sends complete press/release frames; its primary-modifier option uses the fixture's explicit Control convention.

## Project composition and ownership

Project fixtures optionally enable actual settings and accept the public byte-document store boundary. They compose real modules, reflected types and serialization providers. `NativeProjectPanelProbe` receives workspace, graph and scene-edit services through normal module construction rather than private reflection.

All returned services are borrowed. Do not dispose them separately or retain them after the fixture. `CreateScene` creates and loads an additive scene owned by the Edit session. `RefreshTypes` rebuilds the explicitly selected type catalog.

Retirement preserves the established order for interaction, native UI, Console, plugins, assets, settings, execution, session and engine, then removes only the fixture's temporary project. Consumers must disable overlapping parallel use of ImGui global context and preserve owner-thread construction, drawing and disposal. Missing native inputs or discovery and failed real service operations remain errors, never fake usable hosts.

## Infrastructure boundary

This library declares `IsTestProject=false` and uses `xunit.assert` without the `xunit.core` build configuration. It has no independently discovered cases or execution layer. [Play Mode](../inno-editor-playmode-tests.md), [Editor scale](../inno-editor-performance-tests.md) and other actual consumers declare their own execution and native prerequisites.

Its public support API remains documented, including overloads and ownership. Being under `tests/` does not exempt it from signature coverage; test discovery classes and reusable infrastructure have different responsibilities.

## API reference

[Types and exact member contracts](../../../api/types/test-support/inno-testing-editor-native/index.md). These declarations describe this support library, not a product or script API surface.
