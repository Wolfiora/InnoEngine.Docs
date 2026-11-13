---
title: Asset ownership and residency tests
description: Verify canonical ownership, retained resources and pending release.
uid: project.inno-assets-tests
kind: project
owners:
  - Inno.Assets.Tests
---
# Asset ownership and residency tests

`Inno.Assets.Tests` verifies the [Assets contracts](../../../architecture/projects/inno-assets.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The tests distinguish persistent identity from runtime ownership, reject calls without an execution scope and isolate nested or parallel contexts. Independent asset and artifact leases retain canonical values and release exactly once. Retirement cases retain pending work, preserve ordinary sibling failures, reject foreign-owner mutation and prevent a concurrent release from reporting completion while its provider still runs.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/Inno.Assets.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/assets/Inno.Assets.Tests/Inno.Assets.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Asset Core

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/AssetCoreTests.cs). Representative entry points:

- `ReferenceBridgeDoesNotConvertAnUnfinishedRetirementIntoMissing`
- `AssetDependency_UsesPersistentIdentityForEquality`
- `AssetObject_DefaultRuntimeState_IsDetachedAndEmpty`
- `AssetDependency_IsAnImmutableValueContract`

### Asset Execution Context

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/AssetExecutionContextTests.cs). Representative entry points:

- `Assets_WithoutAnExecutionScope_FailsExplicitly`
- `NestedScopes_RestoreThePreviousLookup`
- `Scopes_DisposedOutOfOrder_AreRejectedWithoutLosingTheActiveLookup`
- `ParallelAsyncFlows_ResolveTheirOwnLookups`

### Asset Residency

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/AssetResidencyTests.cs). Representative entry points:

- `AssetLeaseRetainsCanonicalAssetAndReleasesExactlyOnce`
- `RetentionScopeReleasesChildrenInReverseOrder`
- `ArtifactLeaseReadsProviderBytesAndInvalidatesAfterRelease`

### Asset Runtime Owner

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/AssetRuntimeOwnerTests.cs). Representative entry points:

- `ForeignOwnerCannotMutateOrReleaseCanonicalAsset`
- `FailedPayloadHookDoesNotPublishCandidateState`
- `ArtifactRetentionCountsIndependentIdempotentLeases`

### Asset Types

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/AssetTypesTests.cs). Representative entry points:

- `TextAsset_Ctor_AssignsValues`
- `BinaryAsset_Ctor_AssignsValues`

### Residency Retirement

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Tests/ResidencyRetirementTests.cs). Representative entry points:

- `PendingLeaseRetainsItsValueAndCallbackUntilReleaseCompletes`
- `OrdinaryReleaseFailureIsTerminalAndNeverInvokesTheCallbackTwice`
- `WrappedPendingRetainsTheLeaseAndReportsOrdinarySiblingsAfterCompletion`
- `ConcurrentReleaseCannotReportCompletionWhileTheProviderIsStillExecuting`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
