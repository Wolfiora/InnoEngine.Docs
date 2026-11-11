---
title: Content-pack admission and reader tests
description: Verify portable keys, immutable indexes and independently retained readers.
uid: project.inno-content-tests
kind: project
owners:
  - Inno.Content.Tests
---
# Content-pack admission and reader tests

`Inno.Content.Tests` verifies the [Content contracts](../../api/projects/inno-content.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite rejects nonportable keys while preserving exact case and source names. Index construction copies and sorts entries, rejecting collisions and file/directory conflicts. Pack readers remain valid after their originating store and lease close; malformed inputs are disposed, and budget or cancellation failures prevent publication.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/content/Inno.Content.Tests/Inno.Content.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/content/Inno.Content.Tests/Inno.Content.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Content Key

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/content/Inno.Content.Tests/ContentKeyTests.cs). Representative entry points:

- `NonportableKeysAreRejected`
- `ExactCaseAndSourceNamesRemainSignificant`

### Content Pack Index

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/content/Inno.Content.Tests/ContentPackIndexTests.cs). Representative entry points:

- `IndexCopiesSortsAndRejectsCollisionsAndFileDirectoryConflicts`

### Pack Content Store

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/content/Inno.Content.Tests/PackContentStoreTests.cs). Representative entry points:

- `IndependentReadersRetainPackAfterStoreAndLeaseClose`
- `MalformedPacksAreRejectedAndTheirInputIsDisposed`
- `BudgetsAndCancellationPrecedeStorePublication`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
