---
title: Graph document and validation tests
description: Verify graph lookup, connection compatibility and recoverable missing definitions.
uid: project.inno-core-graphs-tests
kind: project
owners:
  - Inno.Core.Graphs.Tests
---
# Graph document and validation tests

`Inno.Core.Graphs.Tests` verifies the [Graphs contracts](../../api/projects/inno-core-graphs.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Document tests preserve node order across lookup, addition, removal and replacement, and measure allocation-free repeated access. Validation checks compatible edges, directed conversion, incompatible types and missing node definitions retained as warnings. Actual references include managed type discovery and serialization; these are part of this suite’s contract.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Graphs.Tests/Inno.Core.Graphs.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Graphs.Tests/Inno.Core.Graphs.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Graph Document

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Graphs.Tests/GraphDocumentTests.cs). Representative entry points:

- `NodeLookupTracksAddRemoveAndReplacementWithoutChangingDocumentOrder`
- `RepeatedLookupAndCollectionAccessDoNotAllocate`

### Graph Validator

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Graphs.Tests/GraphValidatorTests.cs). Representative entry points:

- `Validate_WithCompatibleConnection_IsValid`
- `Validate_WithDirectedConversion_IsValid`
- `Validate_WithIncompatibleTypes_ReportsError`
- `Validate_WithMissingNodeDefinition_PreservesDocumentAsWarning`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
