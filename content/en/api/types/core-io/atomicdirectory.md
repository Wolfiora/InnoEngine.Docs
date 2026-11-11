---
title: "AtomicDirectory"
description: "Reference for AtomicDirectory in Inno.Core.IO."
uid: api.inno.core.io.caf46c1a57af110f
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `AtomicDirectory`

This reference describes `AtomicDirectory` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Install`](#api-e8520896cd5e8aa6) | Method |
| [`Publish`](#api-6fa5437f2e3ec329) | Method |

## Type declaration

<a id="api-caf46c1a57af110f"></a>
<!-- api: T:Inno.Core.IO.AtomicDirectory 7665e379a901034bd0daa47622182e4bdef12df933a075b61a39ffab6fa3484c -->

```csharp
public static class Inno.Core.IO.AtomicDirectory
```

Provides rollback-safe installation of complete directory trees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicDirectory.cs#L10).

## `Install`

<a id="api-e8520896cd5e8aa6"></a>
<!-- api: M:Inno.Core.IO.AtomicDirectory.Install(System.String,System.String,System.Threading.CancellationToken) 1b59670c85281f646e71f44a0e6acfd018ded5f3ba3a7d7faa1cd1335f97a24d -->

```csharp
public static void Inno.Core.IO.AtomicDirectory.Install(string source, string destination, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Installs a disjoint candidate tree and restores the previous destination if installation fails.

**Parameter `source`:** The complete candidate directory.

**Parameter `destination`:** The destination directory.

**Parameter `cancellationToken`:** Cancels preparation or bounded rename waits before the candidate commits.

**Constraints:** The caller must serialize readers and writers while the two directory moves run.
Cancellation before commit restores the previous destination without canceling rollback.
A committed candidate is not canceled afterward.
Backup cleanup runs after commit; its failure preserves the installed candidate and remaining backup.

**Throws `System.ArgumentException`:** Either path is blank, or the candidate and destination trees overlap.

**Throws `System.IO.DirectoryNotFoundException`:** The candidate directory does not exist.

**Throws `System.IO.IOException`:** Installation fails before the candidate becomes authoritative.

**Throws `Inno.Core.IO.DirectoryCleanupException`:** Installation committed, but the old backup could not be removed. The installed tree remains complete.

**Throws `System.UnauthorizedAccessException`:** The operating system denies access before the candidate can be installed.

**Throws `System.AggregateException`:** Installation and restoration both fail; neither tree is deleted to force a rollback.

**Throws `System.OperationCanceledException`:** Cancellation is requested before the candidate commits; any moved previous tree is restored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicDirectory.cs#L104).

## `Publish`

<a id="api-6fa5437f2e3ec329"></a>
<!-- api: M:Inno.Core.IO.AtomicDirectory.Publish(System.String,System.String,System.Threading.CancellationToken) 73c0b6ee2f22ce61e25218bad0f3e9829c53b955308d787c1d61baf7f4b5bcbc -->

```csharp
public static void Inno.Core.IO.AtomicDirectory.Publish(string source, string destination, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Publishes a complete directory at an unoccupied path without replacing an existing destination.

**Parameter `source`:** The complete candidate directory, disjoint from the destination.

**Parameter `destination`:** The unoccupied publication path on the same filesystem.

**Parameter `cancellationToken`:** Cancels preparation or bounded waits before the rename commits.

**Constraints:** Windows access and sharing failures are retried for at most two seconds to tolerate temporary readers.
Failure preserves the candidate and any existing destination. A committed rename is not canceled afterward.

**Throws `System.ArgumentException`:** A path is blank or the two directory trees overlap.

**Throws `System.IO.DirectoryNotFoundException`:** The source directory does not exist.

**Throws `System.IO.IOException`:** The destination exists, the filesystem cannot rename the tree, or a transient block persists.

**Throws `System.UnauthorizedAccessException`:** The operating system continues denying access after the bounded retry window.

**Throws `System.OperationCanceledException`:** Cancellation is requested before the directory is published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/AtomicDirectory.cs#L43).
