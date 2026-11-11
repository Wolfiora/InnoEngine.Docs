---
title: Module generation and unload tests
description: Verify collectible generations, rollback and retained dependencies.
uid: project.inno-extensibility-modules-tests
kind: project
owners:
  - Inno.Extensibility.Modules.Tests
---
# Module generation and unload tests

`Inno.Extensibility.Modules.Tests` verifies the [Extensibility.Modules contracts](../../api/projects/inno-extensibility-modules.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Real versioned module fixtures exercise load, reload and rollback through the active type and registry snapshots. Unload barriers detect retained generation roots. Pending participants keep both live collectible generations protected, including wrapped pending failures and rejected activation whose compensation is not finished. An isolated host must discover its own types and release its own context.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Modules.Tests/Inno.Extensibility.Modules.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/extensibility/Inno.Extensibility.Modules.Tests/Inno.Extensibility.Modules.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Assembly Manager

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Modules.Tests/AssemblyManagerTests.cs). Representative entry points:

- `RepeatedReloadCollectsEveryRetiredContextBeforeNextGeneration`
- `RetainedGenerationRootsCannotPassTheUnloadBarrier`
- `LoadAndReloadPublishOnlyTheActiveGeneration`
- `RollbackRestoresThePreviousTypeAndRegistrySnapshot`

### Host Load Context

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Modules.Tests/HostLoadContextTests.cs). Representative entry points:

- `IsolatedHostDiscoversItsOwnTypesAndReleasesItsContext`

### Module Retirement

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Modules.Tests/ModuleRetirementTests.cs). Representative entry points:

- `PendingParticipantDoesNotBeginUnloadingEitherLiveGeneration`
- `WrappedPendingKeepsBothCollectibleContextsAndPreservesTheOriginalFailure`
- `CatalogParticipantErrorsBeforePendingDoNotDisappearOrUnloadEitherContext`
- `RejectedCatalogActivationRemainsVisibleWhenItsRollbackIsPending`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
