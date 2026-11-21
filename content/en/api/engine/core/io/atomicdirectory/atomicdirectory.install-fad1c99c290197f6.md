---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fad1c99c290197f67ec1e9608ad04358141d207dfaab825241921881686a6865
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.AtomicDirectory.Install(System.String,System.String,System.Threading.CancellationToken)
title: AtomicDirectory.Install
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: bd12a74b54662e5179ab1fbdcc2f9d7c22227c65f8bbb3d2ecbeda0dbc50d2a4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The complete candidate directory.

**Parameter `destination`:** The destination directory.

**Parameter `cancellationToken`:** Cancels preparation or bounded rename waits before the candidate commits.

## Remarks

The caller must serialize readers and writers while the two directory moves run. Cancellation before commit restores the previous destination without canceling rollback. Cancellation observed after a blocked rename takes precedence over its timeout error. A committed candidate is not canceled afterward. Backup cleanup runs after commit; its failure preserves the installed candidate and remaining backup.

## Exceptions

**Exception `T:System.ArgumentException`:** Either path is blank, or the candidate and destination trees overlap.

**Exception `T:System.IO.DirectoryNotFoundException`:** The candidate directory does not exist.

**Exception `T:System.IO.IOException`:** Installation fails before the candidate becomes authoritative.

**Exception `T:Inno.Core.IO.DirectoryCleanupException`:** Installation committed, but the old backup could not be removed. The installed tree remains complete.

**Exception `T:System.UnauthorizedAccessException`:** The operating system denies access before the candidate can be installed.

**Exception `T:System.AggregateException`:** Installation and restoration both fail; neither tree is deleted to force a rollback.

**Exception `T:System.OperationCanceledException`:** Cancellation is observed before the candidate commits, including while handling a failed rename. Any moved previous tree is restored.
