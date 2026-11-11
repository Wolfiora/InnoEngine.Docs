---
title: File ownership and publication tests
description: Verify protected readers, atomic replacement, path boundaries and rollback.
uid: project.inno-core-io-tests
kind: project
owners:
  - Inno.Core.IO.Tests
---
# File ownership and publication tests

`Inno.Core.IO.Tests` verifies the [IO contracts](../../api/projects/inno-core-io.md) through their public entry points. Use this page to locate relevant assertions; it is not a report that these tests passed for your current change.

## Behavior covered

The suite covers absent versus empty documents, immutable read-only bytes, independent reader protection, timeout/cancellation ownership, complete payload replacement, same-directory staging and path traversal rejection. Owned stream tests close the reader before its independent owner and preserve retryable release.

## Environment and execution

The project declares the `domain` validation layer. Use [the shared validation workflow](../validate-change.md) to select its actual dependencies and environment. Inspect the [pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.IO.Tests/Inno.Core.IO.Tests.csproj) for package and project references.

Windows directory-sharing, cancellation and rollback cases carry `SupportedOSPlatform("windows")`. An early return or skip on another host is not evidence that the Windows contract passed.

A focused diagnostic from the engine root is:

```powershell
dotnet test tests/core/Inno.Core.IO.Tests/Inno.Core.IO.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Use `--filter FullyQualifiedName~MethodName` to investigate one case. A filtered run does not replace the obligations in the validation plan. Restore the declared SDK, packages and any tool/process prerequisites before executing; preserve cancellation, thread and cleanup requirements.

## Scenario reference

These representative methods are preserved from the original reference and checked against the pinned source. The linked files contain all assertions and parameterized cases.

### Byte Document Store

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.IO.Tests/ByteDocumentStoreTests.cs). Representative entry points:

- `ReadOnlyDocumentsOwnBytesAndRejectReplacement`
- `FilesDistinguishAbsentAndEmptyAndReplaceCompleteDocuments`

### File Lease

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.IO.Tests/FileLeaseTests.cs). Representative entry points:

- `ReadersShareOwnershipAndExcludeWritersUntilEveryReaderCloses`
- `CompetingOwnershipWaitsForDisposalAndRetainsTheSameLeaseFile`
- `TimeoutAndCancellationDoNotReleaseAnotherOwner`
- `InvalidRequestsAndPriorCancellationHaveNoFilesystemEffects`

### File System Safety

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.IO.Tests/FileSystemSafetyTests.cs). Representative entry points:

- `WriteAllBytesReplacesTheCompletePayloadWithoutLeavingStagingFiles`
- `InstallRequiresASameDirectoryCandidateAndPreservesTheDestinationOnFailure`
- `InstallReplacesAnExistingFileWithTheCompleteCandidate`
- `PathBoundaryRejectsAbsoluteAndParentTraversalPaths`

### Owned Read Stream

[Read the assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/core/Inno.Core.IO.Tests/OwnedReadStreamTests.cs). Representative entry points:

- `ReaderClosesBeforeItsIndependentOwnerAndReleaseCanBeRetried`

## Extend safely

Follow [the shared suite-maintenance guidance](../validate-change.md#extend-a-suite-safely). Preserve this suite's owner-thread, resource-release and failure assertions when adding cases.
