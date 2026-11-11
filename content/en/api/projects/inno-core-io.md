---
title: Inno.Core.IO
description: Explicit filesystem boundaries, atomic publication, shared leases, byte documents and process-owned output.
uid: project.inno-core-io
kind: project
owners:
  - Inno.Core.IO
---
# Inno.Core.IO

Core IO supplies reusable filesystem and lifetime mechanisms without depending on a build product, backend or game-domain catalog. Hosts choose physical paths; domain services consume narrow document or content contracts. Start with [persisting a host document](../../extending/persist-host-documents.md) or [managing process output](../../extending/manage-process-output.md).

## Publication and ownership contract

Ownership, publication and observation are separate. `PathBoundary` checks a normalized path against an explicitly selected root. `FileLease` coordinates cooperating processes. `AtomicFile` and `AtomicDirectory` publish complete candidates. None of them independently grants permission to replace an arbitrary directory or defeats a noncooperating process changing a parent path.

Construct child paths from the root's original normalized spelling. Containment uses ordinal spelling on every volume. `RequireUnlinkedPath` rejects observed links and reparse points; `EnumerateFiles` does not follow them. Repeat validation at the required phase boundary while holding the appropriate owner protection. `PhysicalPathResolver` caches observed link relationships only within one explicitly scoped observation phase.

Lease acquisition supports cancellation and a caller-selected timeout. Shared leases pin initialized generations against exclusive retirement. Keep persistent lock files after release; deleting them can split participants across different filesystem objects. `CoordinatedFileLease` acquires owner reading protection before waiting for its leaf and releases the leaf first.

## Documents and streams

`IByteDocumentStore` represents a small complete document. Null means absent; an empty array means present but empty. Writable file documents publish complete bytes atomically. Read-only documents own a copy and reject writes. Serialization and validation remain with the domain service that interprets the bytes.

`OwnedReadStream` owns its input stream and a separate lifetime pin. Disposal closes input before releasing the pin and retains unfinished responsibility after failure. Its read operations inherit the underlying stream's behavior; the wrapper does not promise general concurrent I/O or marshal callbacks.

## Commit and recovery

File publication requires a complete same-directory candidate. Create-only mode must reject collisions atomically, including empty existing targets; its Unix primitive requires hard-link support. No fallback exposes partly copied destination bytes. Candidate-name recognition exists for source discovery and confers no deletion authority.

Directory replacement needs caller-held reader/writer coordination. A failed cleanup after a committed install differs from an installation failure. Preserve `DirectoryCleanupException`'s new/backup paths and both failures when restoration also fails. Do not claim that a failed backup deletion means the new tree was never installed.

Process-owned directories publish explicit PID/start-time claims before payload use and register child participation before consumption. Unknown identity protects the directory. Failure to retire leaves a claim for later maintenance; it is not resolved by deleting the lock. Build caches layer their own artifact registration and dependency protection over these mechanisms.

## Availability and boundaries

These APIs are host CLR contracts, not game-script exports. Operating-system process claims require actual process-lifetime support. Atomic create-only file publication requires a compatible host primitive and filesystem; unsupported capabilities fail explicitly. Selecting a host filesystem primitive does not select an engine platform, target or backend.

The owning project's tests cover publication, lease coordination, path spelling, process identity, byte-document reads and independent stream pins. Successful unit tests on one host do not certify every volume's case/link semantics.

## Reference

[Browse atomic publishers, leases, documents, streams and process claims](../types/core-io/index.md).
