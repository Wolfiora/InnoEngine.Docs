---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.82e512f7a4e024b1fb4173c682c09ad546a2b5bba4e5725fc07f06db88814080
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.CoordinatedFileLease.AcquireAsync(System.String,System.String,System.TimeSpan,System.Boolean,System.Threading.CancellationToken)
title: CoordinatedFileLease.AcquireAsync
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: fa061b118a419d41556f5a1cc0117888b99ae7604fcebaaa04de820dc4f43482
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `coordinationPath`:** The persistent owner gate, never removed by retirement.

**Parameter `leafPath`:** A distinct leaf path within the same owner boundary.

**Parameter `timeout`:** The complete wait budget, or infinite.

**Parameter `shared`:** Whether the leaf permits simultaneous readers.

**Parameter `cancellationToken`:** Cancellation while waiting for either gate.

## Returns

Ownership retaining both gates until disposal.

## Exceptions

**Exception `T:System.ArgumentException`:** A path is relative, the leaf escapes its owner, or the budget is invalid.

**Exception `T:System.TimeoutException`:** The complete wait budget expires.

**Exception `T:System.OperationCanceledException`:** The caller cancels before ownership is returned.
