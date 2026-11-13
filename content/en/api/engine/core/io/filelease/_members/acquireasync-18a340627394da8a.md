---
uid: api.18a340627394da8a382e670fcd698ee695cd9e0d1a06759aa33371739f85e322
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.FileLease.AcquireAsync(System.String,System.TimeSpan,System.Threading.CancellationToken)"
source: xml
reviewed: 6d056e21f298fe445b1b12eb8728689a06611c7e83c72e75416bda6bfd171761
title: "AcquireAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Waits for exclusive ownership without blocking an owner thread or changing shared data.

**Parameter `path`:** The absolute lease file path; all participants must use the same persistent path.

**Parameter `timeout`:** The maximum wait, or `F:System.Threading.Timeout.InfiniteTimeSpan` for no time limit.

**Parameter `cancellationToken`:** Cancels waiting before ownership is returned.

**Returns:** The exclusive lease whose disposal permits the next participant to acquire ownership.

## Remarks

Lease files remain after disposal. Removing them would let Unix processes lock different inodes for the same path while an earlier participant still owns the original inode.

**Exception `T:System.ArgumentException`:** The path is empty or relative, or the timeout is negative and not infinite.

**Exception `T:System.TimeoutException`:** Another participant retains ownership beyond the permitted wait.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled; no lease is returned.

**Exception `T:System.IO.IOException`:** The lease cannot be opened for a reason other than competing ownership.

**Exception `T:System.UnauthorizedAccessException`:** The operating system denies access to the lease path.
