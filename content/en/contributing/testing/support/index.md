---
title: Reusable test support and fixtures
description: Choose explicit content, process, source and generation owners for real contract tests.
uid: contributing.testing.support
kind: landing
---
# Reusable test support and fixtures

Use a shared public testing boundary when a scenario needs controlled content, a real process, a native Editor session or a collectible generation. These libraries are not independently passing test suites. Their consumers own execution and evidence.

## Build a real fixture

| Need | Support contract |
| --- | --- |
| Frozen content with deliberate payload corruption | [In-memory content store](inno-content-testing.md) |
| Prepared contract execution with complete process diagnostics | [Isolated process host](inno-testing-processes.md) |
| The calling test's explicit source and SDK output owner | [Repository input resolution](inno-testing-source.md) |
| Actual panels, native input and an authoring project | [Native Editor fixtures](inno-testing-editor-native.md) |

The returned services and streams retain their documented ownership; a public support library is not exempt from API contracts because its source lives under `tests/`.

## Exercise failed admission and generation changes

- [Duplicate importers](inno-assets-pipeline-duplicateimporterfixture.md) intentionally conflict despite different extensions.
- [The content-cache probe](inno-content-cacheprobe.md) coordinates real cross-process readers.
- [The private module dependency](inno-extensibility-modules-testdependency.md) distinguishes dependency resolution from module replacement.
- [First](inno-extensibility-modules-testmodule-v1.md) and [replacement](inno-extensibility-modules-testmodule-v2.md) module generations share a stable identity but expose different behavior.
- [The invalid module candidate](inno-extensibility-modules-testmodule-invalid.md) must remain rejected.
- [Discovery source A](inno-extensibility-types-testassemblya.md) and [source B](inno-extensibility-types-testassemblyb.md) exercise explicit source filtering and removal.
- [Collectible rendering contributors](inno-rendering-runtime-reload-testmodule.md) expose failed-graph callback retention.
- [Collectible scene types](inno-scene-reload-testmodule.md) exercise Missing recovery and rollback after a rejected restore.

Do not correct deliberate invalid data into a valid product, hold fixture instances in static engine state or count an empty `dotnet test` invocation on a fixture as coverage. Use [the consuming test owner](../index.md) and [its selected plan](../../validate-change.md).
