---
uid: api.27ddc36036dd04ef8a064f4f10b85859c4f31a3eba9050f0b7cfd38f39ae4639
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.ReadAsync(System.Memory{System.Byte},System.Threading.CancellationToken)"
source: xml
reviewed: 874156f2c24d1bbc54b1e75e04977d8bcb0db99be08f48ea43f6eec7581801da
title: "ReadAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Asynchronously reads a sequence of bytes from the current stream, advances the position within the stream by the number of bytes read, and monitors cancellation requests.

**Parameter `buffer`:** The region of memory to write the data into.

**Parameter `cancellationToken`:** The token to monitor for cancellation requests. The default value is `P:System.Threading.CancellationToken.None`.

**Exception `T:System.OperationCanceledException`:** The cancellation token was canceled. This exception is stored into the returned task.

**Returns:** A task that represents the asynchronous read operation. The value of its ``P:System.Threading.Tasks.ValueTask`1.Result`` property contains the total number of bytes read into the buffer. The result value can be less than the length of the buffer if that many bytes are not currently available, or it can be 0 (zero) if the length of the buffer is 0 or if the end of the stream has been reached.
