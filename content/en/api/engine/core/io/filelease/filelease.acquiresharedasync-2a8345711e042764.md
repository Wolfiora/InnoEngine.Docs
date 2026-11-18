---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2a8345711e04276432d3b66c8cef2e36169c22ceaf3d1269beae88e3505e1ef4
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.FileLease.AcquireSharedAsync(System.String,System.TimeSpan,System.Threading.CancellationToken)
title: FileLease.AcquireSharedAsync
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: da80b3b48ce52cbcbdba360ac75039d1180f3bb36564feaba9f07c32dbe9cd7d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The absolute persistent lease path previously initialized by an exclusive owner.

**Parameter `timeout`:** The maximum wait, or `F:System.Threading.Timeout.InfiniteTimeSpan` for no time limit.

**Parameter `cancellationToken`:** Cancels waiting before ownership is returned.

## Returns

A shared lease; an exclusive lease cannot be acquired until every reader releases ownership.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** The owner has not initialized the persistent lease file.

**Exception `T:System.TimeoutException`:** An exclusive owner retains the file beyond the permitted wait.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled; no lease is returned.
