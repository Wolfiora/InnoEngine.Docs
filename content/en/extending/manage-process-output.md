---
title: Manage temporary process output
description: Claim temporary directories, register subprocess consumers, and distinguish publication from cleanup.
uid: extending.manage-process-output
kind: how-to
owners:
  - Inno.Core.IO
contracts:
  - project.inno-core-io#publication-and-ownership-contract
exampleMode: host
exampleProjects:
  - Inno.Core.IO
---
# Manage temporary process output

Temporary output needs a declared owner and a retirement protocol. A recognizable directory name, old timestamp or dead-looking PID is insufficient. Use the process-owned directory boundary for transient build-host work and the build cache publisher for reusable immutable artifacts.

## Create and release one scope

The producer supplies an absolute owned root. The scope creates a new directory, acquires protection and publishes a process claim before exposing its payload path.

```csharp
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Inno.Core.IO;

public static class TemporaryRequest
{
    public static async Task WriteAsync(
        string producerRoot,
        CancellationToken cancellation
    ) {
        using ProcessOwnedDirectory work = await ProcessOwnedDirectory.CreateAsync(
            producerRoot, cancellation);
        await File.WriteAllTextAsync(
            Path.Combine(work.directory, "request.txt"), "owned", cancellation);
    }
}
```

This example has no child consumer, so disposal can retire its payload after writing. A real producer must wait for every child process and consumer before disposing the directory owner. Cancellation does not establish that a child has exited.

## Register every process lifetime

A subprocess calls `RegisterCurrentProcess` before consuming the claimed directory. The producer waits for its exit before retirement. Claims use both PID and UTC process start ticks, so PID reuse does not make an unrelated process the owner.

`ProcessOwnerStamp.Query` distinguishes Active, Exited and Unknown. An inaccessible process identity, unsupported inspection or an uninitialized stamp is Unknown. Preserve the corresponding payload and claim; do not reinterpret uncertainty as permission to delete.

`ReadClaims` reads explicit current records and validates their containment. It does not adopt arbitrary directories under the root. `CreateForProcessAsync` serves the special host boundary that can retain only neutral path/operation identity: it publishes or joins a valid active claim and transfers protection to process lifetime. Ordinary scoped callers should use `CreateAsync` and dispose their owner explicitly. Browser products do not fabricate process IDs to use this protocol.

## Retire conservatively

Registration and retirement share the persistent owner gate. Retirement releases the creator's reading protection, acquires exclusive leaf ownership and rechecks all recorded process lifetimes. Active or Unknown participants prevent removal. A lock wait or cleanup failure retains the claim for later owner-coordinated maintenance.

The current `ProcessOwnedDirectory.Dispose` releases its live lease before attempting retirement. If that attempt fails, subsequent disposal of the same instance does not retry it. The surviving explicit claim is the route for later maintenance. Keep the failure diagnostic instead of pretending the temporary directory was removed.

`RetireMetadataUnderOwnership` is for a caller already holding the root's exclusive persistent gate. It does not authorize an uncoordinated recursive cleanup. Never delete persistent gate files to get around a participant.

## Publish a directory before retiring the old one

`AtomicDirectory.Publish` moves a complete candidate to an unoccupied destination on the same filesystem. `Install` supports replacing an existing directory by moving the previous tree to a backup and then moving in the candidate. The caller must serialize readers and writers across both moves; the function does not acquire those leases itself.

Cancellation before commit can abort preparation or bounded rename waiting. If the previous directory has already moved, restoration uses the same filesystem protocol without the canceled token. Cancellation after a committed rename does not roll back a complete publication.

Treat the result according to its actual commit point:

| Result | Required interpretation |
| --- | --- |
| Installation succeeds | The new complete tree is authoritative. |
| `DirectoryCleanupException` | Installation committed; the old backup remains and needs separate cleanup. |
| Installation fails, restoration succeeds | The previous tree remains authoritative. Preserve the candidate/failure evidence. |
| `AggregateException` from installation and restoration | Both failures and the backup location remain significant; do not delete either tree to simulate recovery. |

Do not retry installation after a post-commit cleanup exception. Use `installedDirectory` and `backupDirectory` to report the already-installed result and retained backup separately.

## Related ownership

- [Persist a host document](persist-host-documents.md) for atomic file publication.
- [Build artifacts](../architecture/build-artifacts.md) for registered immutable generations and protected consumers.
- [Core IO reference](../api/projects/inno-core-io.md) for the exact process, lease and installation interfaces.
