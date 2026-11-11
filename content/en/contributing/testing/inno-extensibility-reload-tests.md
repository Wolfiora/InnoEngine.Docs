---
title: Generation admission and retirement tests
description: Verify publication ordering, read protection and terminal unload failures.
uid: project.inno-extensibility-reload-tests
kind: project
owners:
  - Inno.Extensibility.Reload.Tests
---
# Generation admission and retirement tests

`Inno.Extensibility.Reload.Tests` verifies the [Extensibility.Reload contracts](../../api/projects/inno-extensibility-reload.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Unload barriers complete only after every probe completes and retain terminal faults instead of allowing a later success. Generation commit does not reopen admission until retirements finish. Failed application restores structure before publication and then values; irreversible cleanup faults the owner while still attempting independent cleanup. A build read lease prevents generation mutation until it is released.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Reload.Tests/Inno.Extensibility.Reload.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/extensibility/Inno.Extensibility.Reload.Tests/Inno.Extensibility.Reload.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Assembly Unload Barrier

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Reload.Tests/AssemblyUnloadBarrierTests.cs). Representative entry points:

- `Advance_CompletesOnlyAfterEveryProbeCompletes`
- `Advance_RetainsFaultAndRejectsEveryLaterSuccessAttempt`

### Generation Coordinator

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/extensibility/Inno.Extensibility.Reload.Tests/GenerationCoordinatorTests.cs). Representative entry points:

- `CommitDoesNotReopenAdmissionUntilAllRetirementsComplete`
- `FailedApplyRollsBackStructureBeforePublicationAndThenRestoresValues`
- `IrreversibleCleanupFailureFaultsOwnerAndStillAttemptsAllCleanup`
- `BuildReadLeaseBlocksGenerationMutationUntilDisposed`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
