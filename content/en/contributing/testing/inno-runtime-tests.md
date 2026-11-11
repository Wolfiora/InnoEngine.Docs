---
title: "Runtime startup and session ownership tests"
description: "Verify admission, content transfer, isolated sessions and static deployment."
uid: project.inno-runtime-tests
kind: project
owners:
  - Inno.Runtime.Tests
---
# Runtime startup and session ownership tests

`Inno.Runtime.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Adapter catalogs freeze registration snapshots, accept open identities without creating services and reject null or duplicate providers. Presentation settings verify centered 16:9 defaults, stretch behavior and invalid-resolution rejection.

Prepared content is checked and retired before platform adapters start. Metadata copies both documents before a borrowed source can reuse its buffers. Failed metadata retires transferred module ownership; prior cancellation does not acquire borrowed content or transfer modules. Complete Player fixtures run from owned memory content without requiring a filesystem. Session log sinks retire independently, and a failing host log factory compensates startup without poisoning the host.

Sessions isolate scene and scaled/unscaled/paused time state. Script facades reject calls outside an active session. Failed startup drains before releasing factory resources; pending stop preserves dependencies and does not repeat completed owners. Required capabilities fail before allocation, optional failures propagate, and a required consumer cannot run without its failed dependency.

Static deployment freezes manifests, checks linked code identity before activation and rejects ambiguous or incomplete module closure. Generic factories do not invent discovered constructions, retained registrars cannot mutate publication, and rejected contributors retire their registrar. Static settings use contributed metadata/factories, rejecting missing factories during candidate preparation.

## Environment and execution

The project declares the `contract` layer. Use actual module, content and session dependencies. Successful memory-backed startup is evidence for that declared fixture, not every platform, adapter or device. Keep failing-frame and pending-retirement cleanup intact.

Generate and inspect [one validation plan](../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/Inno.Runtime.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Adapter Catalog

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/AdapterCatalogTests.cs). Representative entry points:

- `PresentationRegistrationUsesAnImmutableOpenCatalog`
- `CustomIdentitiesAreAcceptedWithoutCreatingServices`
- `AllDomainsRejectDuplicateAndNullProviders`
- `CapturedRegistrationsCannotBeChangedByTheirSourceCollection`

### Game Presentation Settings

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/GamePresentationSettingsTests.cs). Representative entry points:

- `DefaultPresentationCentersCompleteSixteenByNineFrame`
- `StretchPresentationUsesCompleteAvailableSurface`
- `PresentationRejectsInvalidReferenceResolution`
- `RuntimeHostRegistersDefaultPresentationProjectSetting`

### Player Content Source

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/PlayerContentSourceTests.cs). Representative entry points:

- `PreparedContentIsCheckedAndRetiredBeforeAnyPlatformAdapterStarts`
- `MetadataCopiesBothDocumentsBeforeTheBorrowedSourceCanReuseItsBuffers`
- `MetadataFailureRetiresTheTransferredModuleOwnerBeforeAnyAdapterOrContentPreparation`
- `CancellationBeforeStartupDoesNotAcquireBorrowedContentOrTransferModuleOwnership`

### Player Without File System

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/PlayerWithoutFileSystemTests.cs). Representative entry points:

- `PlayerSessionsReadOwnedMemoryContentAndRetireOnlyTheirOwnLogSinks`
- `AFailingHostLogFactoryCompensatesStartupAndKeepsTheHostUsable`

### Player Without File System Tests.Startup.cs

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/PlayerWithoutFileSystemTests.Startup.cs). Representative entry points:

- `CompletePlayerStartsFromOwnedMemoryAndRetiresAfterSuccessfulOrFailingFrames`

### Runtime Retirement

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/RuntimeRetirementTests.cs). Representative entry points:

- `FailedStartupDrainsBeforeReleasingFactoryResources`
- `StopHookPendingRetainsDependenciesWithoutRepeatingCompletedOwners`
- `PendingSessionRetainsDependenciesAndCanBeRetriedThroughHost`

### Runtime Session

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/RuntimeSessionTests.cs). Representative entry points:

- `InlineHostDeliveryPersistsSessionLogsBeforeTheProducerReturns`
- `MultipleHostsAndSessionsKeepSceneAndTimeStateIsolated`
- `ScriptFacadesRejectCallsOutsideAnActiveSession`
- `TimeSeparatesScaledUnscaledAndPausedProgress`

### Runtime Subsystem Policy

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/RuntimeSubsystemPolicyTests.cs). Representative entry points:

- `MissingRequiredCapabilityRejectsBeforeFactoryAllocation`
- `SuppliedCapabilitiesAndDescriptorCollectionsAreImmutableSnapshots`
- `OptionalUnavailabilityPropagatesToOptionalConsumers`
- `RequiredConsumerCannotRunWithoutFailedOptionalDependency`

### Static Deployment

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/StaticDeploymentTests.cs). Representative entry points:

- `ManifestMutationCannotChangeFrozenDeployment`
- `LinkedIdentityRejectsDifferentCodeBeforeModuleActivation`
- `ClosureRejectsSharedAssemblyOwnersAndMissingUpstreamModules`
- `CodeInputIdentityRejectsMalformedManifestData`

### Static Generic Factory

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/StaticGenericFactoryTests.cs). Representative entry points:

- `FactoriesDoNotIntroduceClosedConstructionsIntoDiscovery`
- `AConstructionRequiresItsOwningDeclaration`
- `RetainedRegistrarCannotMutateThePublishedCatalog`
- `FailedContributorAlsoRetiresItsRegistrar`

### Static Project Settings

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/runtime/Inno.Runtime.Tests/StaticProjectSettingsTests.cs). Representative entry points:

- `SettingsUseContributedMetadataAndFactoryWithoutReflectiveDeclarations`
- `SettingsRejectMissingFactoriesDuringCandidatePreparation`

## Extend safely

Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
