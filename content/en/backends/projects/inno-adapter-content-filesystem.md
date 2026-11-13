---
title: Inno.Adapter.Content.FileSystem
description: "Verified file-backed content generations with explicit cache roots and independent reader protection."
uid: project.inno-adapter-content-filesystem
kind: project
owners: [Inno.Adapter.Content.FileSystem]
exampleMode: host
exampleProjects: [Inno.Adapter.Content.FileSystem]
---
# Inno.Adapter.Content.FileSystem

Verified file-backed content generations with explicit cache roots and independent reader protection.

Read the linked task or ownership explanation before using the exact API below.

## Prepare and own a store

[Prepare a verified file cache](../file-content-cache.md) explains explicit deployment/cache roots, complete integrity verification, atomic pointer publication and reader-safe retirement. This adapter depends on Content, Storage and Core IO, not Build. Consumers continue to use logical keys and streams.

Keep the borrowed source alive throughout PrepareAsync, then own the returned store and release its readers before disposal. FileContentDeployment validates the pack and closes its temporary source; the returned cache store has its own protection. Metadata requests accept one filename and at most 16 MiB.

## Failure is phase-specific

Precommit failure retains the previous generation. A cancellation after commit does not revoke valid published content. Retirement diagnostics report postcommit cleanup separately; missing lease metadata cannot establish that old readers are gone. Full membership and SHA-256 validation reject extras, omissions and same-length/preserved-timestamp edits. Lock files are persistent protocol data, not cleanup markers.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Content;
using Inno.Adapter.Content.FileSystem;

static async Task<FileContentStore> PrepareAsync(
    IRuntimeContentStore borrowedSource,
    string hostCacheRoot,
    CancellationToken cancellationToken
) {
    return await FileContentPreparation.PrepareAsync(borrowedSource,
        new FileContentCacheOptions(hostCacheRoot), cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/Inno.Adapter.Content.FileSystem.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-adapter-content-filesystem.md) retain declarations and source XML from the recorded engine capture.
