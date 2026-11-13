---
uid: api.2a8345711e04276432d3b66c8cef2e36169c22ceaf3d1269beae88e3505e1ef4
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.FileLease.AcquireSharedAsync(System.String,System.TimeSpan,System.Threading.CancellationToken)"
source: xml
reviewed: 248197a58779ba19e11f2320efd5d632ba582bb0d9d2376d4ffe809eb5360ecd
title: "AcquireSharedAsync"
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
