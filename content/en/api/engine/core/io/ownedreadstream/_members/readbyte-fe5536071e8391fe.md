---
uid: api.fe5536071e8391fef55b8360c5fa8494e62d696df94bb9f01435c8cae5831aad
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.ReadByte"
source: xml
reviewed: 5ddfd8c630e7fa75b1977a2233b531128d44aedb3b55aa6fddbf958fa296eb44
title: "ReadByte"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Reads a byte from the stream and advances the position within the stream by one byte, or returns -1 if at the end of the stream.

**Exception `T:System.NotSupportedException`:** The stream does not support reading.

**Exception `T:System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The unsigned byte cast to an `T:System.Int32`, or -1 if at the end of the stream.
