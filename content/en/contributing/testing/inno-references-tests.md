---
title: Reference intent and recovery tests
description: Verify generation capture, Missing intent and compensating recovery.
uid: project.inno-references-tests
kind: project
owners:
  - Inno.References.Tests
---
# Reference intent and recovery tests

`Inno.References.Tests` verifies the [References contracts](../../api/projects/inno-references.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

Read scopes resolve only their captured generation, freeze identities and revoke on disposal without owning the root or allocator. Catalog tests preserve unassigned and Missing intent and reject duplicate reference kinds. Recovery resolves after objects exist, compensates attempted owners around publication and rolls back applied participants in reverse order. Pending retirement keeps owners protected; ordinary cleanup failure cannot pretend that an irreversible publication was rolled back.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/references/Inno.References.Tests/Inno.References.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/references/Inno.References.Tests/Inno.References.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Content Read Scope

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/references/Inno.References.Tests/ContentReadScopeTests.cs). Representative entry points:

- `ScopeResolvesOnlyCapturedGenerationAndRevokesOnDispose`
- `ScopeDoesNotOwnRootOrAllocatorAndFreezesIdentities`
- `DetachedDuplicateAndUnknownActiveRootsAreRejected`

### Reference Catalog

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/references/Inno.References.Tests/ReferenceCatalogTests.cs). Representative entry points:

- `Resolve_PreservesUnassignedAndMissingIntent`
- `Create_RejectsDuplicateReferenceKinds`
- `RecoveryTransaction_RollsBackAppliedParticipantsInReverseOrder`
- `RecoveryResolvesOnlyAfterObjectsExistAndRetainsNeutralResultsAfterCommit`

### Reference Recovery

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/references/Inno.References.Tests/ReferenceRecoveryTests.cs). Representative entry points:

- `CandidateFailureCompensatesAttemptedOwnersAroundPublication`
- `PendingRetirementKeepsOwnersAndFaultsTheSharedGate`
- `OrdinaryCleanupFailureStillRetiresOtherOwnersAndCannotPretendToRollback`
- `EarlierParticipantFailureIsRetainedAlongsidePendingOwnership`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
