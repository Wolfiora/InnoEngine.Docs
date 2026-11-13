---
title: Asset import and settings tests
description: Verify source changes, importer discovery, sidecars and last-good artifacts.
uid: project.inno-assets-pipeline-tests
kind: project
owners:
  - Inno.Assets.Pipeline.Tests
---
# Asset import and settings tests

`Inno.Assets.Pipeline.Tests` verifies the [Assets.Pipeline contracts](../../../architecture/projects/inno-assets-pipeline.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The pipeline tests cover owner-polled filesystem changes, rename paths, path boundaries and metadata filtering. Import cases preserve read-only sidecars when reporting failures, retry unavailable extensions, recover failed runtime dependencies and round-trip built-in assets. Settings cases reject stale snapshots, retain last-good artifacts after invalid settings, preserve Missing references and compensate effective-state changes without rewriting the document.

## Environment and execution

The project declares the `contract` validation layer. Use [the shared validation workflow](../../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/Inno.Assets.Pipeline.Tests.csproj) for package and project references.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/assets/Inno.Assets.Pipeline.Tests/Inno.Assets.Pipeline.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Asset File System Change

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/AssetFileSystemChangeTests.cs). Representative entry points:

- `Watcher_CoalescesCreateChangeAndDeleteThroughPublicCoordinator`
- `Watcher_RenamePreservesOldAndNewRelativePaths`
- `WatcherPublishesSettingsSidecarChangesWithoutExposingMetadataAsAssets`

### Asset File System

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/AssetFileSystemTests.cs). Representative entry points:

- `Queries_RejectRootedAndTraversalPaths`
- `Refresh_IndexesDirectoriesAndFiles`
- `Watcher_PublishesChangesOnlyWhenOwnerPolls`
- `Entries_ExposeLastExtensionDisplayNameAndFilterDatabaseNoise`

### Asset Loader

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/AssetLoaderTests.cs). Representative entry points:

- `ReadOnlyImportFailureDoesNotRewriteMetadataOrThrowAgainWhileRecordingFailure`
- `FailedRuntimeDependencyRecoversAfterPublicationOrLoaderRestart`
- `ExtensionDiscoveryDefersOnlyMissingExtensionsAndRetriesOnceWhenCompleted`
- `ReadOnlyExtensionWaitPreservesSidecarAndBecomesStrictAfterDiscovery`

### Importer Integration

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/ImporterIntegrationTests.cs). Representative entry points:

- `TextExtensions_AreAutomaticallyDiscovered`
- `BinaryImporter_CreatesRuntimeDescriptor`
- `ExportableBuiltInAsset_RoundTripsThroughPublicLoaderContract`

### Import Settings

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/ImportSettingsTests.cs). Representative entry points:

- `SettingsRoundTripReimportAndResetWithoutChangingSourceOrIdentity`
- `SettingsSurviveColdLoaderAndLibraryRecreation`
- `StaleSettingsSnapshotCannotOverwriteNewerSidecar`
- `InvalidSettingsPersistWhilePreviousArtifactRemainsLastGood`

### Settings Reference

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/assets/Inno.Assets.Pipeline.Tests/SettingsReferenceTests.cs). Representative entry points:

- `SettingsResolveTheCurrentAssetGenerationAndPreserveMissingIntent`
- `RuntimeSettingsLoadTheirColdReferencesThroughTheSessionAssetOwner`
- `FivePhaseSettingsRollbackRestoresExactEffectiveStateWithoutWritingDocument`
- `ContributorPublicationFreezesNestedPayloadsAndKeepsLastGoodOnFailure`

## Extend safely

Follow [the shared suite-maintenance guidance](../../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
