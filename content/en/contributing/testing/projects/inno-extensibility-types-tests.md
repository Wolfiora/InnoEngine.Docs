---
title: Type discovery and registry retirement tests
description: Verify classification, candidate rollback and generation-bound resources.
uid: project.inno-extensibility-types-tests
kind: project
owners:
  - Inno.Extensibility.Types.Tests
---
# Type discovery and registry retirement tests

`Inno.Extensibility.Types.Tests` verifies the [Extensibility.Types contracts](../../../architecture/projects/inno-extensibility-types.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite checks both assembly classification dimensions and rejects missing metadata. Type queries return concrete matching declarations while preserving stable and runtime identities through ordinary rebuilds. Failed candidate construction releases new resources and preserves the last-good state. Pending retirement does not repeat completed resources or release lower dependencies early; deadline failure retains dependencies and rejects further retirement.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Types.Tests/Inno.Extensibility.Types.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/extensibility/Inno.Extensibility.Types.Tests/Inno.Extensibility.Types.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Assembly Extensions

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Types.Tests/AssemblyExtensionsTests.cs). Representative entry points:

- `AssemblyClassificationReadsBothMetadataDimensions`
- `MissingClassificationIsRejected`

### Registry Retirement

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Types.Tests/RegistryRetirementTests.cs). Representative entry points:

- `PendingBatchDoesNotRepeatCompletedResourcesOrReleaseLowerDependenciesEarly`
- `DeadlineFailureRetainsDependenciesAndPermanentlyRejectsFurtherRetirement`

### Type Cache

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Types.Tests/TypeCacheTests.cs). Representative entry points:

- `CandidateConstructionRollbackReleasesAllNewResourcesAndKeepsLastGood`
- `CandidateRollbackCleanupFailureFaultsGateAfterEveryResourceIsAttempted`
- `QueriesReturnOnlyConcreteMatchingTypes`
- `StableAndRuntimeIdentitySurviveOrdinaryRebuild`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
