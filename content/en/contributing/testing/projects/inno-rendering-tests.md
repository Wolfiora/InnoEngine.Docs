---
title: "Render graph and portable artifact tests"
description: "Verify immutable declarations, transactional graph edits and deterministic scheduling."
uid: project.inno-rendering-tests
kind: project
owners:
  - Inno.Rendering.Tests
---
# Render graph and portable artifact tests

`Inno.Rendering.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Open backend identities flow through capabilities. Device-program artifacts round-trip binaries, bindings and raster state without authored assets, while invalid values, truncated or oversized payloads, bad headers and trailing bytes fail before publication. Pipeline bindings are immutable snapshots; vertex layouts preserve explicit offsets/padding and reject duplicate semantics.

Graph compilation isolates repeated producer names, schedules producers before consumers and culls unconsumed passes. Uncommitted or invalid scopes roll back resources, passes, outputs, phases and validation. Later scopes cannot mutate accepted declarations, rolled-back handles cannot alias new declarations, and nested commits remain owned by outer rollback.

Validation is frozen until declarations change. A later phase invalidates cached scheduling and can expose a cycle. Validation and compilation use the same view limit, and validation does not invoke command callbacks.

## Environment and execution

The project declares the `contract` layer. Keep the declared managed graph and artifact contracts separate from backend/device evidence. Diagnose failures through the unified plan without substituting a real renderer for a contract fixture or vice versa.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/Inno.Rendering.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Graphics Api

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/GraphicsApiTests.cs). Representative entry points:

- `CustomBackendIdentityCanFlowThroughDeviceCapabilities`

### Graphics Program Artifact

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/GraphicsProgramArtifactTests.cs). Representative entry points:

- `DeviceProgramRoundTripPreservesBinariesBindingsAndRasterWithoutAuthoredAssets`
- `InvalidBindingAndRasterValuesCannotBeEncodedAsValidArtifacts`
- `TruncationOversizedFieldsBadHeadersAndTrailingBytesFailBeforePublication`

### Pipeline Resource

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/PipelineResourceTests.cs). Representative entry points:

- `PipelineBindingSnapshotsRejectMutationOfPublishedStorage`
- `VertexLayoutAcceptsAllPortableSemanticChannels`
- `VertexLayout_RejectsDuplicateSemantic`
- `VertexLayout_PreservesExplicitOffsetsAndTrailingPadding`

### Render Graph Compiler

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/RenderGraphCompilerTests.cs). Representative entry points:

- `NameScopesIsolateRepeatedProducerNamesInsideOneFrameGraph`
- `MutationScope_Uncommitted_RollsBackPassesResourcesAndOutputs`
- `Compile_SchedulesProducerBeforeConsumer`
- `Compile_CullsUnconsumedPass`

### Render Graph Mutation

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/RenderGraphMutationTests.cs). Representative entry points:

- `LaterScopeCannotChangeAnyPreviouslyAcceptedPassDeclaration`
- `InvalidCommitRollsBackOutputsResourcesPhasesAndValidation`
- `RolledBackHandlesAndPassBuildersCannotAliasNewDeclarations`
- `NestedCommitRemainsOwnedByOuterRollbackAndScopesEnforceNesting`

### Render Graph Validation

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Tests/RenderGraphValidationTests.cs). Representative entry points:

- `ValidationIsFrozenAndReusedUntilAnyPassDeclarationChanges`
- `LaterPhaseDeclarationInvalidatesCachedScheduleAndDetectsCycle`
- `ValidationAndCompilationApplyTheSameViewLimit`
- `ValidationDoesNotInvokeCommandCallbacks`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
