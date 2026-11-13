---
uid: api.a1ec232cd2ce7e6a5ac2a977927a772bfb9b7a5b2aecd04a1819447d32354d2e
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.Read(System.Byte[],System.Int32,System.Int32)"
source: xml
reviewed: 1a315f4e03b3b530450b4f0ff185000cc04c130048b72190724b6f59dfc79d88
title: "OwnedReadStream.Read"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

When overridden in a derived class, reads a sequence of bytes from the current stream and advances the position within the stream by the number of bytes read.

**Parameter `buffer`:** An array of bytes. When this method returns, the buffer contains the specified byte array with the values between `offset` and (`offset` + `count` - 1) replaced by the bytes read from the current source.

**Parameter `offset`:** The zero-based byte offset in `buffer` at which to begin storing the data read from the current stream.

**Parameter `count`:** The maximum number of bytes to be read from the current stream.

**Exception `T:System.ArgumentException`:** The sum of `offset` and `count` is larger than the buffer length.

**Exception `T:System.ArgumentNullException`:** `buffer` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** `offset` or `count` is negative.

**Exception `T:System.IO.IOException`:** An I/O error occurs.

**Exception `T:System.NotSupportedException`:** The stream does not support reading.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The total number of bytes read into the buffer. This can be less than the number of bytes requested if that many bytes are not currently available, or zero (0) if `count` is 0 or the end of the stream has been reached.
