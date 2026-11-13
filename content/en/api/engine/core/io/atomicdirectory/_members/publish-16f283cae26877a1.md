---
uid: api.16f283cae26877a1f65d32c4873244823121236ca89de74e62623220ec61e78a
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.AtomicDirectory.Publish(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: d81397d5c7360af08f68530686cd62011be80c37c25a5e4ed84cfbf00ad69578
title: "Publish"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Publishes a complete directory at an unoccupied path without replacing an existing destination.

**Parameter `source`:** The complete candidate directory, disjoint from the destination.

**Parameter `destination`:** The unoccupied publication path on the same filesystem.

**Parameter `cancellationToken`:** Cancels preparation or bounded waits before the rename commits.

## Remarks

Windows access and sharing failures are retried for at most two seconds to tolerate temporary readers. Failure preserves the candidate and any existing destination. A committed rename is not canceled afterward.

**Exception `T:System.ArgumentException`:** A path is blank or the two directory trees overlap.

**Exception `T:System.IO.DirectoryNotFoundException`:** The source directory does not exist.

**Exception `T:System.IO.IOException`:** The destination exists, the filesystem cannot rename the tree, or a transient block persists.

**Exception `T:System.UnauthorizedAccessException`:** The operating system continues denying access after the bounded retry window.

**Exception `T:System.OperationCanceledException`:** Cancellation is requested before the directory is published.
