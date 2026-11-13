---
title: "Rendering import and shader authoring tests"
description: "Verify material contracts, candidate includes and runtime export boundaries."
uid: project.inno-rendering-assets-authoring-tests
kind: project
owners:
  - Inno.Rendering.Assets.Authoring.Tests
---
# Rendering import and shader authoring tests

`Inno.Rendering.Assets.Authoring.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Material and raster state round-trip through asset serialization without replacing provider-owned roles, capabilities or choices. Metadata remains an open provider protocol. Import tests use one compilation model across graph shaders, materials and pipeline assets. Includes resolve from the candidate mount snapshot and declared plugin dependencies; a source library exports explicit graph functions.

Runtime export strips authoring graph/function artifacts while preserving shader identity and definition. Compiler failures cannot carry successful binary bytes; successful results copy adapter-owned bytes, bindings and diagnostics instead of retaining mutable producer storage.

## Environment and execution

The project declares the `contract` layer. Inspect the authoring tool and native requirements selected by the actual plan. Preserve real importer, source discovery and tool-result assertions; a runtime serialization pass does not replace shader authoring integration.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Authoring.Tests/Inno.Rendering.Assets.Authoring.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Mesh And State

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Authoring.Tests/MeshAndStateTests.cs). Representative entry points:

- `MaterialAndPipelineState_RoundTripsThroughAssetSerialization`
- `MaterialResolver_UsesProviderOwnedContractsRolesAndCapabilities`
- `ShaderRasterState_RoundTripsWithoutLosingProviderChoices`
- `MaterialMetadataRemainsAnOpenProviderProtocol`

### Rendering Importer Integration

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Authoring.Tests/RenderingImporterIntegrationTests.cs). Representative entry points:

- `LoaderUsesGraphShaderMaterialAndPipelineAssetsWithOneCompilationModel`
- `ShaderIncludesUseTheCandidateMountSnapshotAndDeclaredPluginDependencies`
- `RuntimeExportStripsGraphAndFunctionArtifactsAndPreservesShaderIdentityAndDefinition`
- `OneShaderSourceLibraryExportsMultipleExplicitGraphFunctions`

### Shader Compiler

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Authoring.Tests/ShaderCompilerTests.cs). Representative entry points:

- `FailedToolResultsCannotCarrySuccessfulBinaryBytes`
- `ToolResultsCopyAdapterOwnedBytesBindingsAndDiagnostics`
- `CompileAsyncUsesGraphLoweringAndTypedStages`
- `AdapterFailureRetainsOriginalSourceLocationAndNoPartialProgram`

### Shader Graph Artifact

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Authoring.Tests/ShaderGraphArtifactTests.cs). Representative entry points:

- `FrozenArtifactRecordsKeepTheirPersistentIdentitiesAfterOwnershipMoves`
- `SemanticFingerprintIgnoresLayoutButIncludesPropertiesAndFrozenDependencies`
- `ExpandedProgramCompilesWhileAuthoringExportRetainsTheSmallSourceGraph`
- `TemporarilyEmptyInputNameRetainsItsMaterialDefaultWhileTyping`

### Shader Publication

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Authoring.Tests/ShaderPublicationTests.cs). Representative entry points:

- `ShaderCommitDetachesEveryNestedDeclarationOnInputAndOutput`
- `FailedShaderCommitPreservesThePreviousDefinitionAndSerializedState`
- `ShaderGraphRetainsCanonicalInputWhenTheAuthoringDefinitionIsEdited`
- `MaterialSelectionAndResolvedPassDoNotPublishTheirMetadataArrays`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
