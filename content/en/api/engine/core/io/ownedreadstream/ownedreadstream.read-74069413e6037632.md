---
uid: api.74069413e6037632beeef330f01c37c2ebce13811578da184109cf6492c7e13e
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.OwnedReadStream.Read(System.Span{System.Byte})"
source: xml
reviewed: 766e0bdd2588d605e24c19f83b6bcaddfab2efbfe951aa29410ffa1396cc8b87
title: "OwnedReadStream.Read"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

When overridden in a derived class, reads a sequence of bytes from the current stream and advances the position within the stream by the number of bytes read.

**Parameter `buffer`:** A region of memory. When this method returns, the contents of this region are replaced by the bytes read from the current source.

**Returns:** The total number of bytes read into the buffer. This can be less than the size of the buffer if that many bytes are not currently available, or zero (0) if the buffer's length is zero or the end of the stream has been reached.
