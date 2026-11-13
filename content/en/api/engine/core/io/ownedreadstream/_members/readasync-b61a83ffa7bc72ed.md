---
uid: api.b61a83ffa7bc72ed7580593b8c26b87c2c281ba7de65646e121d01f54d3c43cd
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.ReadAsync(System.Byte[],System.Int32,System.Int32,System.Threading.CancellationToken)"
source: xml
reviewed: d2f17e890241f22221b01fd16d1fa23cb2524775c6b18b9b3c1c375c73010d70
title: "ReadAsync"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Asynchronously reads a sequence of bytes from the current stream, advances the position within the stream by the number of bytes read, and monitors cancellation requests.

**Parameter `buffer`:** The buffer to write the data into.

**Parameter `offset`:** The byte offset in `buffer` at which to begin writing data from the stream.

**Parameter `count`:** The maximum number of bytes to read.

**Parameter `cancellationToken`:** The token to monitor for cancellation requests. The default value is `P:System.Threading.CancellationToken.None`.

**Exception `T:System.ArgumentNullException`:** `buffer` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** `offset` or `count` is negative.

**Exception `T:System.ArgumentException`:** The sum of `offset` and `count` is larger than the buffer length.

**Exception `T:System.NotSupportedException`:** The stream does not support reading.

**Exception `T:System.ObjectDisposedException`:** The stream has been disposed.

**Exception `T:System.InvalidOperationException`:** The stream is currently in use by a previous read operation.

**Exception `T:System.OperationCanceledException`:** The cancellation token was canceled. This exception is stored into the returned task.

**Returns:** A task that represents the asynchronous read operation. The value of the `TResult` parameter contains the total number of bytes read into the buffer. The result value can be less than the number of bytes requested if the number of bytes currently available is less than the requested number, or it can be 0 (zero) if `count` is 0 or if the end of the stream has been reached.
