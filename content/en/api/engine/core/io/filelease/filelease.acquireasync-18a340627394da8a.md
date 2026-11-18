---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.18a340627394da8a382e670fcd698ee695cd9e0d1a06759aa33371739f85e322
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.FileLease.AcquireAsync(System.String,System.TimeSpan,System.Threading.CancellationToken)
title: FileLease.AcquireAsync
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 47696951e46a1251acae2b5f91c1e96f4df4f84ea2d1c58fd00fd380cd0a317e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The absolute lease file path; all participants must use the same persistent path.

**Parameter `timeout`:** The maximum wait, or `F:System.Threading.Timeout.InfiniteTimeSpan` for no time limit.

**Parameter `cancellationToken`:** Cancels waiting before ownership is returned.

## Returns

The exclusive lease whose disposal permits the next participant to acquire ownership.

## Remarks

Lease files remain after disposal. Removing them would let Unix processes lock different inodes for the same path while an earlier participant still owns the original inode.

## Exceptions

**Exception `T:System.ArgumentException`:** The path is empty or relative, or the timeout is negative and not infinite.

**Exception `T:System.TimeoutException`:** Another participant retains ownership beyond the permitted wait.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled; no lease is returned.

**Exception `T:System.IO.IOException`:** The lease cannot be opened for a reason other than competing ownership.

**Exception `T:System.UnauthorizedAccessException`:** The operating system denies access to the lease path.
