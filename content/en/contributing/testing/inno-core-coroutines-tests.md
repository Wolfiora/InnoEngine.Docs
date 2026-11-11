---
title: Coroutine scheduling tests
description: Verify tick-based waits, predicates and explicit cancellation.
uid: project.inno-core-coroutines-tests
kind: project
owners:
  - Inno.Core.Coroutines.Tests
---
# Coroutine scheduling tests

`Inno.Core.Coroutines.Tests` verifies the [Coroutines contracts](../../api/projects/inno-core-coroutines.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The scheduler tests distinguish the next tick from elapsed-time waits, evaluate wait predicates, and stop only the selected coroutine. These cases exercise the managed scheduler rather than a product frame loop.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Coroutines.Tests/Inno.Core.Coroutines.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Coroutines.Tests/Inno.Core.Coroutines.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Coroutine Scheduler

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Coroutines.Tests/CoroutineSchedulerTests.cs). Representative entry points:

- `StartCoroutine_NullYield_RunsOnNextTick`
- `WaitForSeconds_WaitsByTime`
- `WaitUntil_And_WaitWhile_Work`
- `StopCoroutine_StopsTarget`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
