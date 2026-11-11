---
title: Log delivery and file sink tests
description: Verify delivery ordering, fault quarantine, flush barriers and file rotation.
uid: project.inno-core-logging-tests
kind: project
owners:
  - Inno.Core.Logging.Tests
---
# Log delivery and file sink tests

`Inno.Core.Logging.Tests` verifies the [Logging contracts](../../api/projects/inno-core-logging.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite tests nested entries in queue order without recursive delivery, flush waiting for in-flight receive, serialized sink access under concurrent producers, and quarantine of a failing sink. File tests preserve complete oversized entries, distinct sink-owned files, completed-write visibility and rotation byte limits. Compiler categories remain independent of runtime path separators.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Logging.Tests/Inno.Core.Logging.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Logging.Tests/Inno.Core.Logging.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### File Log Sink

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Logging.Tests/FileLogSinkTests.cs). Representative entry points:

- `RouterFlushMakesCompletedFileWritesObservable`
- `RapidRotationRetainsTheCurrentEntryAndHonorsTheByteLimit`
- `OversizedEntriesRemainCompleteAndRotateBeforeTheNextEntry`
- `MultipleSinksOwnDistinctFilesInTheSameDirectory`

### Inline Log Delivery

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Logging.Tests/InlineLogDeliveryTests.cs). Representative entry points:

- `NestedEntriesReachEverySinkInQueueOrder`
- `LongNestedChainsDoNotReenterDelivery`
- `FlushWaitsForAnEntryAlreadyInsideReceive`
- `ConcurrentProducersNeverInvokeASinkConcurrently`

### Logging Behavior

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Logging.Tests/LoggingBehaviorTests.cs). Representative entry points:

- `InlineDeliveryIsImmediateAndQuarantinesAFailingSink`
- `UnknownDeliveryPoliciesFailAtConstruction`
- `CompilerSourceCategoriesAreIndependentOfRuntimePathSeparators`
- `BrokenFailureReportingCannotStopHealthySinkDelivery`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
