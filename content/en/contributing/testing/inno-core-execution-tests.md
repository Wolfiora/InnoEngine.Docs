---
title: Execution and retirement tests
description: Verify owner-thread contexts, admission and retryable resource retirement.
uid: project.inno-core-execution-tests
kind: project
owners:
  - Inno.Core.Execution.Tests
---
# Execution and retirement tests

`Inno.Core.Execution.Tests` verifies the [Execution contracts](../../api/projects/inno-core-execution.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite checks LIFO binding retirement, inherited-context revocation, suspension, thread affinity, bounded admission and retention of pending work. Retirement tests preserve earlier failures through retries, classify nested terminal timeouts, attempt independent resources in reverse order and keep pending dependencies protected. Owner-thread tests verify continuation dispatch and restoration of the previous synchronization context.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Execution.Tests/Inno.Core.Execution.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Execution.Tests/Inno.Core.Execution.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Execution Slot

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Execution.Tests/ExecutionSlotTests.cs). Representative entry points:

- `RetirementIsLifoAndRestoresParent`
- `RetiredBindingIsRevokedInInheritedAsyncContext`
- `SuspensionMasksAndRestoresParent`
- `ThreadAffineBindingCannotBeReadOnWorker`

### Lifetime Admission

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Execution.Tests/LifetimeAdmissionTests.cs). Representative entry points:

- `CapacityRejectsBeforeUserCodeAndCompletedWorkReleasesAdmission`
- `IdleLifetimeDoesNotRetainSuccessfulOperationResults`

### Lifetime Scope

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Execution.Tests/LifetimeScopeTests.cs). Representative entry points:

- `FailureBeforePendingRemainsObservableAfterRetry`
- `RetirementDeadlineRemainsFaultedAndDoesNotReleasePendingDependencies`
- `RetirementBarrierRetriesOnOwnerThreadAndDoesNotRetainCompletedCallback`
- `RetirementAttemptsEveryResourceInReverseOrder`

### Owner Thread Execution

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Execution.Tests/OwnerThreadExecutionTests.cs). Representative entry points:

- `AsynchronousContinuationsAndSendReturnToTheCallingThread`
- `CompletedOperationsFailuresAndCancellationRestoreThePreviousContext`

### Retirement Failure

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Execution.Tests/RetirementFailureTests.cs). Representative entry points:

- `ClassificationFindsNestedTimeoutWithoutReplacingTheOriginalTree`
- `LifetimeRetainsPendingResourceAndEarlierErrorsAcrossWrappedRetries`
- `BarrierRetainsOrdinarySiblingsUntilThePendingWorkCompletes`
- `NestedTimeoutRemainsTerminalAndPreservesEveryFailure`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
