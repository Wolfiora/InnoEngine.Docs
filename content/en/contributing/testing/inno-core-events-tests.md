---
title: Event routing and observation tests
description: Verify consumption scopes, delivery order and observation boundaries.
uid: project.inno-core-events-tests
kind: project
owners:
  - Inno.Core.Events.Tests
---
# Event routing and observation tests

`Inno.Core.Events.Tests` verifies the [Events contracts](../../api/projects/inno-core-events.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The tests distinguish global consumption from local hub consumption across routed representations. Observers run after priority consumers, unsubscription stops observation, recursively queued work waits for the next flush, and failed consumers do not report successful dispatch.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Events.Tests/Inno.Core.Events.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Events.Tests/Inno.Core.Events.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Event Dispatcher Behavior

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Events.Tests/EventDispatcherBehaviorTests.cs). Representative entry points:

- `RoutedMovementSharesGlobalConsumptionAcrossDispatchers`
- `RoutedMovementKeepsHubConsumptionLocalToEachRepresentation`
- `CreateHub_ProducesValidHub`
- `DisposeHub_MakesHubInvalidAndPreventsFurtherListen`

### Event Dispatch Observation

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Events.Tests/EventDispatchObservationTests.cs). Representative entry points:

- `ObservationRunsAfterPriorityConsumersIncludingGlobalConsumption`
- `AlreadyConsumedEventsAreObservedAndUnsubscriptionStopsObservation`
- `RecursivelyQueuedObservationWaitsForTheNextFlush`
- `FailedConsumerDoesNotReportSuccessfulDispatch`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
