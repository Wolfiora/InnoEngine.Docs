---
title: Job admission and scheduling tests
description: Verify bounded scheduling, callbacks, determinism and measured worker behavior.
uid: project.inno-core-jobs-tests
kind: project
owners:
  - Inno.Core.Jobs.Tests
---
# Job admission and scheduling tests

`Inno.Core.Jobs.Tests` verifies the [Jobs contracts](../../../architecture/projects/inno-core-jobs.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Behavior tests preserve atomic frame admission under invalid or oversized requests, retain pending owner-thread callbacks until retry, and bound recursive callback draining.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Jobs.Tests/Inno.Core.Jobs.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/foundation/core/Inno.Core.Jobs.Tests/Inno.Core.Jobs.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Job System Behavior

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Jobs.Tests/JobSystemBehaviorTests.cs). Representative entry points:

- `FrameAdmissionRemainsAtomicUnderRepeatedInvalidAndOversizedRequests`
- `PendingMainThreadCallbackRemainsOwnedUntilRetry`
- `CallbackDrainIsBoundedAndDefersRecursivelyEnqueuedWork`
- `SingleThreadExecutesDeterministicallyOnMainThread`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
