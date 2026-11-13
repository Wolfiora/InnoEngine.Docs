---
uid: api.2a8345711e04276432d3b66c8cef2e36169c22ceaf3d1269beae88e3505e1ef4
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.FileLease.AcquireSharedAsync(System.String,System.TimeSpan,System.Threading.CancellationToken)"
source: xml
reviewed: e2a0b54acb9d6a6cac4751000e28b8cd940248f6c6cbd2a0c065e3fd0cf1ac1e
title: "FileLease.AcquireSharedAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Pins an existing generation against exclusive retirement while permitting other readers.

**Parameter `path`:** The absolute persistent lease path previously initialized by an exclusive owner.

**Parameter `timeout`:** The maximum wait, or `F:System.Threading.Timeout.InfiniteTimeSpan` for no time limit.

**Parameter `cancellationToken`:** Cancels waiting before ownership is returned.

**Returns:** A shared lease; an exclusive lease cannot be acquired until every reader releases ownership.

**Exception `T:System.IO.FileNotFoundException`:** The owner has not initialized the persistent lease file.

**Exception `T:System.TimeoutException`:** An exclusive owner retains the file beyond the permitted wait.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled; no lease is returned.
