---
title: "Runtime and serialization generator tests"
description: "Verify compiled catalogs, factory boundaries and generated accessors."
uid: project.inno-runtime-generators-tests
kind: project
owners:
  - Inno.Runtime.Generators.Tests
---
# Runtime and serialization generator tests

`Inno.Runtime.Generators.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Module-catalog generation emits compilable metadata and factories, while a converter without a construction entry fails compilation. Subsystem generation updates a strongly typed catalog from local declarations, rejects duplicate stable IDs and invalid factory boundaries, and preserves caller parameter names.

Serialization generation rejects invalid declarations, keeps external base accessors in their owning assembly and round-trips private members, hooks, structs and closed collections. Private declarations remain inside their partial owners. These tests compile generated output; a text comparison alone would not establish those contracts.

## Environment and execution

The project declares the `contract` layer. Use the actual Roslyn and runtime project references. Fixture declarations remain test-owned; do not widen production visibility to make generated-access tests convenient.

Generate and inspect [one validation plan](../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Generators.Tests/Inno.Runtime.Generators.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Runtime Module Catalog Generator

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Generators.Tests/RuntimeModuleCatalogGeneratorTests.cs). Representative entry points:

- `AConverterWithoutAConstructionEntryFailsDuringCompilation`
- `GeneratedCatalogCompilesAndPublishesExactMetadataAndFactories`

### Runtime Subsystem Generator

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Generators.Tests/RuntimeSubsystemGeneratorTests.cs). Representative entry points:

- `AddingLocalDeclarationUpdatesStronglyTypedCatalogWithoutEditingHost`
- `DuplicateStableIdsFailDuringCompilation`
- `InvalidFactoryBoundaryFailsInsteadOfBeingSilentlyDiscovered`
- `CatalogPreservesCallerParameterNames`

### Serialization Metadata Generator

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Generators.Tests/SerializationMetadataGeneratorTests.cs). Representative entry points:

- `InvalidDeclarationsFailDuringGeneration`
- `ExternalBaseMembersAndHooksUseTheirOwningAssemblyAccessors`
- `GeneratedAccessorsRoundTripPrivateMembersHooksStructsAndClosedCollections`
- `PrivateDeclarationsRemainInsidePartialOwners`

## Extend safely

Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
