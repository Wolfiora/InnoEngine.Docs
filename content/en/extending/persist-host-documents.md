---
title: Persist a host-owned document
description: Select an explicit document medium, publish complete bytes, and coordinate readers without leaking paths into domain models.
uid: extending.persist-host-documents
kind: how-to
owners:
  - Inno.Core.IO
contracts:
  - project.inno-core-io#publication-and-ownership-contract
exampleMode: host
exampleProjects:
  - Inno.Core.IO
---
# Persist a host-owned document

Use `IByteDocumentStore` for a small, complete document whose physical source belongs to the host. Pass the document boundary into the domain service instead of making that service search the filesystem. Asset catalogs and application storage have their own higher-level protocols; this interface does not replace them.

## Choose the medium

The host chooses one absolute file path for writable authoring, or captures owned bytes for read-only runtime consumption. This host example constructs the boundaries; it does not read or write either document.

```csharp
using System;
using Inno.Core.IO;

public static class DocumentSources
{
    public static IByteDocumentStore Authoring(string absolutePath)
        => new FileByteDocumentStore(absolutePath);

    public static IByteDocumentStore Runtime(ReadOnlySpan<byte> bytes)
        => new ReadOnlyByteDocumentStore("project-settings", bytes);
}
```

`ReadOnlyByteDocumentStore` copies constructor input and returns a new copy on each read. It always represents a present document, including when the byte array is empty. `Write` throws `NotSupportedException`. When bytes originate from a content lease, capture them while that lease remains valid; the document source then owns its independent byte snapshot.

## Distinguish absence from corruption

`FileByteDocumentStore.Read` returns null when the file or its parent is missing. Empty files return an empty array. Access failures, incomplete reads and documents larger than the supported byte-array size fail explicitly. The serialization layer decides whether present bytes represent a valid document.

The read opens one rename-compatible handle and holds it until the complete byte array has been read. A concurrent atomic replacement does not change which publication that handle reads. All writers must replace the file atomically; modifying its bytes in place violates this protocol. The handle permits sharing for reading and deletion/rename, not in-place writing.

Use the returned data as one snapshot. An earlier `exists` observation is not a lock or a guarantee about a later operation.

## Publish a complete file

`FileByteDocumentStore.Write` uses `AtomicFile.WriteAllBytes`. The publisher creates a same-directory candidate, writes and flushes the complete bytes, then installs it. It owns and cleans its own staging file.

Use `AtomicFile.Install` when you already own a complete candidate beside the destination. The candidate and destination must have exactly the same normalized parent spelling and different names; even names differing only by case are rejected. Installation failure preserves a caller-owned candidate. Successful publication consumes it, except that a later retirement error can leave both the complete target and the candidate visible.

For create-only publication, pass `overwrite: false`. Existence checking and publication are one filesystem operation, so an empty existing file still counts as a collision. On Unix, this mode requires the host's same-directory hard-link primitive. An unsupported primitive or filesystem fails; there is no partial-copy fallback. Ordinary replacement follows its own rename operation.

## Coordinate ownership separately

Atomic publication does not grant permission to write a path or protect its parents from unrelated processes. Establish a trusted root, validate the contained unlinked path, and retain the appropriate owner lease while using it. Construct child paths from the same root spelling: path ownership uses ordinal comparisons even on case-insensitive volumes.

`PhysicalPathResolver` can reuse observed link relationships within one validation phase. Start a new resolver for a fresh phase. A resolved path is an observation, not authority to overwrite or delete it.

Persistent lease files remain after release. Deleting a lock file is not unlocking it: on Unix, another process could then lock a different inode at the same pathname. Use `FileLease` for shared readers or an exclusive writer, and `CoordinatedFileLease` when a retireable leaf also needs its persistent owner gate protected throughout acquisition and use.

## Keep streams and pins together

For streamed content, transfer both the readable stream and an independent lifetime pin into `OwnedReadStream`. The wrapper closes the stream before releasing its pin. Every open stream needs its own pin; disposing an outer lease must not invalidate a still-open stream.

The pin must support safely retrying unfinished disposal. If stream closure or pin retirement fails, the wrapper retains the remaining responsibility for a later disposal attempt. It does not make the underlying stream concurrently readable or allow writes.

## Continue

- [Manage temporary process output](manage-process-output.md) without deleting another participant's work.
- [Read project settings](../manual/projects/read-settings.md) for a document-backed domain protocol.
- [Core IO reference](../api/projects/inno-core-io.md) for exact paths, timeout and failure contracts.
