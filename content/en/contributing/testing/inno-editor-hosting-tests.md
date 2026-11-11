---
title: "Editor startup and script projection tests"
description: "Verify early host rejection and the complete product's real script surfaces."
uid: project.inno-editor-hosting-tests
kind: project
owners:
  - Inno.Editor.Hosting.Tests
---
# Editor startup and script projection tests

`Inno.Editor.Hosting.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Startup rejects prior cancellation, missing backend selection, an unregistered default target and invalid frame limits before project IO or product ownership begins.

Script projection consumes the actual EditorProduct.props discovery closure and the public Build script entry. Runtime Animation/UI/Rendering and Editor Settings/Shader types must remain exported. This obligation belongs with the Editor product host; it must not select the entire Build integration suite solely because a Panel changes.

Projection fixtures create their own empty projects, compile through ScriptCompiler and inspect actual assembly metadata. They preserve the original exact type assertions without rerunning the full documentation audit.

## Environment and execution

The project declares the `contract` layer. Inspect the product prerequisites derived from the real Editor composition before execution. The Editor script projection collection disables parallelism so another authoring context cannot interfere; drain compilation and release each temporary project afterward.

Generate and inspect [one validation plan](../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Hosting.Tests/Inno.Editor.Hosting.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Editor Application

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Hosting.Tests/EditorApplicationTests.cs). Representative entry points:

- `CancellationBeforeStartupDoesNotCreateProjectOrAcquireProductResources`
- `MissingBackendSelectionFailsBeforeProjectIoOrNativeInitialization`
- `UnregisteredDefaultTargetIsRejectedBeforeProductOwnershipBegins`
- `InvalidFrameLimitDoesNotCreateProject`

### Repository Wiki

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Hosting.Tests/RepositoryWikiTests.cs). Representative entry points:

- `CliLogicalRuntimeReferencesIncludeAnimation`
- `LogicalEditorReferencesIncludeTheSharedProductFeatures`

## Extend safely

Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
