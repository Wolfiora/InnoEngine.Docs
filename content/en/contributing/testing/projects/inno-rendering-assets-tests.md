---
title: "Rendering asset contract tests"
description: "Verify portable material values, persistent identities and serialized declarations."
uid: project.inno-rendering-assets-tests
kind: project
owners:
  - Inno.Rendering.Assets.Tests
---
# Rendering asset contract tests

`Inno.Rendering.Assets.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Material frame overrides contain logical values and can be cleared. Runtime asset serialization preserves recorded persistent identities when types move and round-trips shader declarations through the common serialization contract. The tests do not require embedding authored source graphs in runtime artifacts.

## Environment and execution

The project declares the `contract` layer. Keep the suite's real serialization and material dependencies. This reference describes value and persistence assertions, not a GPU or backend execution result.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Tests/Inno.Rendering.Assets.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Geometry Artifact

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Tests/GeometryArtifactTests.cs). Representative entry points:

- `RuntimeGeometryDecodesWithoutAnImporterOrRenderDevice`

### Material Contract

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Tests/MaterialContractTests.cs). Representative entry points:

- `FrameOverridesContainOnlyLogicalValuesAndCanBeCleared`

### Runtime Asset Serialization

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/rendering/Inno.Rendering.Assets.Tests/RuntimeAssetSerializationTests.cs). Representative entry points:

- `MovedPersistentTypesKeepTheirRecordedIdentity`
- `ShaderDeclarationsRoundTripThroughTheCommonSerializationContract`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
