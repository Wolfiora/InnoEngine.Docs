---
uid: api.fad1c99c290197f67ec1e9608ad04358141d207dfaab825241921881686a6865
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.AtomicDirectory.Install(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 8f98cdd97c637c5c8068291de1898a58d35dc1198a4681f0415307e4e99465c7
title: "AtomicDirectory.Install"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Installs a disjoint candidate tree and restores the previous destination if installation fails.

## Parameters

**Parameter `source`:** The complete candidate directory.

**Parameter `destination`:** The destination directory.

**Parameter `cancellationToken`:** Cancels preparation or bounded rename waits before the candidate commits.

## Remarks

The caller must serialize readers and writers while the two directory moves run. Cancellation before commit restores the previous destination without canceling rollback. A committed candidate is not canceled afterward. Backup cleanup runs after commit; its failure preserves the installed candidate and remaining backup.

## Exceptions

**Exception `T:System.ArgumentException`:** Either path is blank, or the candidate and destination trees overlap.

**Exception `T:System.IO.DirectoryNotFoundException`:** The candidate directory does not exist.

**Exception `T:System.IO.IOException`:** Installation fails before the candidate becomes authoritative.

**Exception `T:Inno.Core.IO.DirectoryCleanupException`:** Installation committed, but the old backup could not be removed. The installed tree remains complete.

**Exception `T:System.UnauthorizedAccessException`:** The operating system denies access before the candidate can be installed.

**Exception `T:System.AggregateException`:** Installation and restoration both fail; neither tree is deleted to force a rollback.

**Exception `T:System.OperationCanceledException`:** Cancellation is requested before the candidate commits; any moved previous tree is restored.
