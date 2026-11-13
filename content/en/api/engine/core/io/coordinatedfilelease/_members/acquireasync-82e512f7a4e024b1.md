---
uid: api.82e512f7a4e024b1fb4173c682c09ad546a2b5bba4e5725fc07f06db88814080
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.CoordinatedFileLease.AcquireAsync(System.String,System.String,System.TimeSpan,System.Boolean,System.Threading.CancellationToken)"
source: xml
reviewed: 99ff0fd43f0e9f267767e6b5cb56820828f2b4844fa874cf13299d7e34b34197
title: "AcquireAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Acquires owner reading rights before opening or waiting for a leaf lease.

**Parameter `coordinationPath`:** The persistent owner gate, never removed by retirement.

**Parameter `leafPath`:** A distinct leaf path within the same owner boundary.

**Parameter `timeout`:** The complete wait budget, or infinite.

**Parameter `shared`:** Whether the leaf permits simultaneous readers.

**Parameter `cancellationToken`:** Cancellation while waiting for either gate.

**Returns:** Ownership retaining both gates until disposal.

**Exception `T:System.ArgumentException`:** A path is relative, the leaf escapes its owner, or the budget is invalid.

**Exception `T:System.TimeoutException`:** The complete wait budget expires.

**Exception `T:System.OperationCanceledException`:** The caller cancels before ownership is returned.
