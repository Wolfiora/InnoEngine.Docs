---
title: Collection indexes and dependency tests
description: Verify mutable indexes and deterministic dependency snapshots.
uid: project.inno-core-collections-tests
kind: project
owners:
  - Inno.Core.Collections.Tests
---
# Collection indexes and dependency tests

`Inno.Core.Collections.Tests` verifies the [Collections contracts](../../../architecture/projects/inno-core-collections.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite checks idempotent graph mutations, forward/reverse edge replacement, removal of incoming and outgoing edges, and deterministic transitive queries. Indexed stores cover insertion, deletion, named keys and rejection of duplicate unique values.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Collections.Tests/Inno.Core.Collections.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.Collections.Tests/Inno.Core.Collections.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Dependency Graph

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Collections.Tests/DependencyGraphTests.cs). Representative entry points:

- `NodesAndEdges_AreIdempotentAndVersionOnlyTracksChanges`
- `ReplaceDependencies_UpdatesForwardAndReverseEdgesAtomically`
- `RemoveNode_RemovesAllIncomingAndOutgoingEdges`
- `RecursiveQueries_ReturnDeterministicTransitiveSnapshots`

### Indexed Object Store

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.Collections.Tests/IndexedObjectStoreTests.cs). Representative entry points:

- `Add_Remove_Count_Clear`
- `DefineKey_UniqueAndLookup`
- `DefineKey_Unique_ThrowsOnDuplicateValueFromDifferentItems`
- `DefineKey_Unique_AllowsResettingSameValueOnSameItem`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
